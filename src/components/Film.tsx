import { format } from "date-fns";
import { pipe } from "fp-ts/lib/function";
import { Link } from "react-router-dom";
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import { EnrichedFilm as FilmModel, extractId } from "../domain/film";
import { withError, withFetching, withNoData } from "../enhancers";

export type FilmProps = {
  film: FilmModel;
};

const RawFilm: React.FC<FilmProps> = ({ film }) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="title" sm={2}>
          Title
        </Label>
        <Col sm={10}>
          <Input value={film.title} readOnly />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="director" sm={2}>
          Director
        </Label>
        <Col sm={10}>
          <Input value={film.director} readOnly />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="release_date" sm={2}>
          Release Date
        </Label>
        <Col sm={10}>
          <Input value={format(film.release_date, "dd-MMM-yyyy")} readOnly />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="episode_id" sm={2}>
          Episode
        </Label>
        <Col sm={10}>
          <Input value={film.episode_id} readOnly />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="producer" sm={2}>
          Producer
        </Label>
        <Col sm={10}>
          <Input value={film.producer} readOnly />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="opening_crawl" sm={2}>
          Opening crawl
        </Label>
        <Col sm={10}>
          <Input type="textarea" value={film.opening_crawl} readOnly />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Characters
        </Label>
        <Col sm={10}>
          <ListGroup>
            {film.characters.map((char) => (
              <Link to={`/character/${extractId(char)}`} key={char.name}>
                <ListGroupItem>
                  <ListGroupItemHeading>{char.name}</ListGroupItemHeading>
                  <ListGroupItemText>
                    Height: {char.height}, Mass: {char.mass}, Gender:{" "}
                    {char.gender}, Films: {char.films.length}
                  </ListGroupItemText>
                </ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </Col>
      </FormGroup>
    </Form>
  );
};

export const Film = pipe(
  RawFilm,
  withNoData<FilmProps, "film">((p) => p.film),
  withFetching,
  withError
);
