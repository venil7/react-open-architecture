import { makeObservable, action } from "mobx";
import { Person, personDecoder } from "../schema/person";
import { createFetch } from "./fetch";
import { StoreBase } from "./store";

export class PersonStore extends StoreBase<Person> {
  constructor() {
    super();
    makeObservable(this, {
      getPerson: action,
    });
  }

  getPerson() {
    const personUpdateAction = createFetch<Person>(
      "/hello/world",
      personDecoder
    );

    this.update(personUpdateAction);
  }
}
