import { pipe } from "fp-ts/lib/function";
import { chain } from "fp-ts/lib/TaskEither";
import { makeObservable, action } from "mobx";
import { liftDecoder } from "../schema/decoder";
import { Person, PersonDecoder } from "../schema/person";
import { createDelay, createFetch } from "../service/fetch";
import { StoreBase } from "./store";

export class PersonStore extends StoreBase<Person> {
  constructor() {
    super();
    makeObservable(this, {
      getPerson: action,
    });
  }

  getPerson() {
    const personUpdateAction = pipe(
      createFetch("https://swapi.dev/api/people/1/"),
      chain(liftDecoder(PersonDecoder))
    );

    this.update(personUpdateAction);
  }
}
