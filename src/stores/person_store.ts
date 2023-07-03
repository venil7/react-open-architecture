// import { StoreBase } from "./mobx_store";

import { signal } from "@preact/signals-react";
import { Person } from "../domain/person";
import { Identity, Nullable } from "../domain/util";
import { createGetPerson } from "../service/person";
import { StoreBase, createStoreBase } from "./signal_store";

// export class PersonStore extends StoreBase<Person> {
//   constructor() {
//     super();
//     makeObservable(this, {
//       getPerson: action,
//     });
//   }

//   getPerson() {
//     const id = Math.floor(Math.random() * 10);
//     const getPersonAction = createGetPerson(id);
//     this.update(getPersonAction);
//   }
// }

export type PersonStore = Identity<
  StoreBase<Nullable<Person>> & {
    load: () => Promise<unknown>;
  }
>;

export const createPersonsStore = (): PersonStore => {
  const data = signal<Nullable<Person>>(null);
  const storeBase = createStoreBase(data);

  return {
    ...storeBase,

    load: () => {
      const id = Math.floor(Math.random() * 10);
      const getPersonAction = createGetPerson(id);
      return storeBase.update(getPersonAction);
    },

    // addPerson: (p: Person) => (data.value = [...data.peek(), p]),
    // removePerson: (i: number) =>
    // (data.value = data.value.filter((_, idx) => idx !== i)),
  };
};
