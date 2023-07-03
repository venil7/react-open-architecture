import { chain } from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/function";
import { CharacterDecoder } from "../decoders/character";
import { liftDecoder } from "../decoders/decoder";
import { Character } from "../domain/character";
import { Action } from "../domain/util";
import { createGet } from "./fetch";

export const createGetCharacter = (id: number): Action<Character> =>
  pipe(
    createGet(`https://swapi.dev/api/people/${id}`),
    chain(liftDecoder(CharacterDecoder))
  );
