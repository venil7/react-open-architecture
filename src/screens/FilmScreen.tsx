import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../App";
import { Film } from "../components/Film";

export const FilmScreen: React.FC = () => {
  const { film } = useContext(StoreContext);

  const { id = 1 } = useParams();
  useEffect(() => {
    film.load(+id);
  }, [film, id]);

  return (
    <Film
      film={film.data.value}
      error={film.error.value}
      fetching={film.fetching.value}
    />
  );
};
