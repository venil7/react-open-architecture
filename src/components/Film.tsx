import { pipe } from "fp-ts/lib/function";
import { Card } from "reactstrap";
import { EnrichedFilm as FilmModel } from "../domain/film";
import { withError, withFetching, withNoData } from "../enhancers";

export type FilmProps = {
  film: FilmModel;
};

const RawFilm: React.FC<FilmProps> = ({ film }) => {
  return (
    <Card>
      {JSON.stringify(film)}
      {/* <CardTitle tag="h5">{film.name}</CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        gender {film.gender}
      </CardSubtitle>
      <CardText>mass: {film.mass}</CardText> */}
    </Card>
  );
};

export const Film = pipe(
  RawFilm,
  withNoData<FilmProps, "film">((p) => p.film),
  withFetching,
  withError
);
