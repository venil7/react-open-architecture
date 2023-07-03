import { chain } from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/function";
import { action, makeObservable } from "mobx";
import { liftDecoder } from "../decoders/decoder";
import { Person, PersonDecoder } from "../decoders/person";
import { createGet } from "../service/fetch";
import { StoreBase } from "./store";

export class PersonStore extends StoreBase<Person> {
  constructor() {
    super();
    makeObservable(this, {
      getPerson: action,
    });
  }

  getPerson() {
    const id = Math.floor(Math.random() * 10);

    const personUpdateAction = pipe(
      createGet(`https://swapi.dev/api/people/${id}`),
      chain(liftDecoder(PersonDecoder))
    );

    this.update(personUpdateAction);
  }
}
