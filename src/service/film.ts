import { Do, bind, chain, map, traverseArray } from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/function";
import { liftDecoder } from "../decoders/decoder";
import { FilmDecoder } from "../decoders/film";
import { EnrichedFilm, Film } from "../domain/film";
import { Action } from "../domain/util";
import { createGetCharacter } from "./character";
import { createGet } from "./fetch";

export const createGetFilm = (id: number): Action<Film> =>
  pipe(
    createGet(`https://swapi.dev/api/films/${id}`),
    chain(liftDecoder(FilmDecoder))
  );

export const creategetGetEnrichedFilm = (id: number): Action<EnrichedFilm> =>
  pipe(
    Do,
    bind("film", () => createGetFilm(id)),
    bind("characters", ({ film }) =>
      traverseArray((char: string) => {
        const [, id] = char.match(/\/people\/(\d+)/)!;
        return createGetCharacter(+id);
      })(film.characters)
    ),
    map(({ film, characters }) => ({ ...film, characters }))
  );
