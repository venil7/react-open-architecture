import { signal } from "@preact/signals-react";
import { EnrichedCharacter } from "../domain/character";
import { Identity, Nullable } from "../domain/util";
import { creategetGetEnrichedCharacter } from "../service/character";
import { StoreBase, createStoreBase } from "./base";

export type CharacterStore = Identity<
  StoreBase<Nullable<EnrichedCharacter>> & {
    load: (id: number) => Promise<unknown>;
  }
>;

export const createCharacterStore = (): CharacterStore => {
  const data = signal<Nullable<EnrichedCharacter>>(null);
  const storeBase = createStoreBase(data);

  return {
    ...storeBase,
    load: (id: number) => storeBase.update(creategetGetEnrichedCharacter(id)),
  };
};
