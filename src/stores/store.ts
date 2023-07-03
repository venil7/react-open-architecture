import { CharacterStore, createCharacterStore } from "./character";
import { FilmStore, createFilmStore } from "./film";

export type Store = {
  character: CharacterStore;
  film: FilmStore;
};

export const createStore = (): Store => ({
  character: createCharacterStore(),
  film: createFilmStore(),
});
