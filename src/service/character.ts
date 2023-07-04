import { Do, bind, chain, map, traverseArray } from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/function";
import { CharacterDecoder } from "../decoders/character";
import { liftDecoder } from "../decoders/decoder";
import { Character, EnrichedCharacter } from "../domain/character";
import { extractId } from "../domain/film";
import { Action } from "../domain/util";
import { createGet } from "./fetch";
import { createGetFilm } from "./film";

export const createGetCharacter = (id: number): Action<Character> =>
  pipe(
    createGet(`https://swapi.dev/api/people/${id}`),
    chain(liftDecoder(CharacterDecoder))
  );

export const creategetGetEnrichedCharacter = (
  id: number
): Action<EnrichedCharacter> =>
  pipe(
    Do,
    bind("char", () => createGetCharacter(id)),
    bind("films", ({ char }) =>
      traverseArray((url: string) => createGetFilm(extractId({ url })))(
        char.films
      )
    ),
    map(({ char, films }) => ({ ...char, films }))
  );
