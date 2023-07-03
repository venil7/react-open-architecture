import { useCallback } from "react";
import { Person } from "../components/Person";
import { CharacterStore } from "../stores/character";

export type FirstScreenProps = {
  store: CharacterStore;
};

export const FirstScreen = ({ store }: FirstScreenProps) => {
  const clickHandler = useCallback(() => store.load(), [store]);

  return (
    <>
      <button onClick={clickHandler}>load</button>
      <Person
        person={store.data.value}
        fetching={store.fetching.value}
        error={store.error.value}
      />
    </>
  );
};
