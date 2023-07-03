import { chain } from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/function";
import { liftDecoder } from "../decoders/decoder";
import { PersonDecoder } from "../decoders/person";
import { Person } from "../domain/person";
import { Action } from "../domain/util";
import { createGet } from "./fetch";

export const createGetPerson = (id: number): Action<Person> =>
  pipe(
    createGet(`https://swapi.dev/api/people/${id}`),
    chain(liftDecoder(PersonDecoder))
  );
