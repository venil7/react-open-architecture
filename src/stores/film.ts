import { signal } from "@preact/signals-react";
import { EnrichedFilm } from "../domain/film";
import { Identity, Nullable } from "../domain/util";
import { creategetGetEnrichedFilm } from "../service/film";
import { StoreBase, createStoreBase } from "./base";

export type FilmStore = Identity<
  StoreBase<Nullable<EnrichedFilm>> & {
    load: (id: number) => Promise<unknown>;
  }
>;

export const createFilmStore = (): FilmStore => {
  const data = signal<Nullable<EnrichedFilm>>(null);
  const storeBase = createStoreBase(data);

  return {
    ...storeBase,
    load: (id: number) => storeBase.update(creategetGetEnrichedFilm(id)),
  };
};
