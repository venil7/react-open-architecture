import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../App";
import { Character } from "../components/Character";

export const CharacterScreen: React.FC = () => {
  const { character } = useContext(StoreContext);
  const { id = 1 } = useParams();
  useEffect(() => {
    character.load(+id);
  }, [character, id]);

  return (
    <Character
      character={character.data.value}
      fetching={character.fetching.value}
      error={character.error.value}
    />
  );
};
