import { signal } from "@preact/signals-react";
import { Character } from "../domain/character";
import { Identity, Nullable } from "../domain/util";
import { createGetCharacter } from "../service/character";
import { StoreBase, createStoreBase } from "./base";

export type CharacterStore = Identity<
  StoreBase<Nullable<Character>> & {
    load: () => Promise<unknown>;
  }
>;

export const createCharacterStore = (): CharacterStore => {
  const data = signal<Nullable<Character>>(null);
  const storeBase = createStoreBase(data);

  return {
    ...storeBase,

    load: () => {
      const id = Math.floor(Math.random() * 100) + 1;
      const getCharacterAction = createGetCharacter(id);
      return storeBase.update(getCharacterAction);
    },
  };
};
