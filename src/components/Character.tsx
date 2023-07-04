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
import { EnrichedCharacter as CharacterModel } from "../domain/character";
import { extractId } from "../domain/film";
import { withError, withFetching, withNoData } from "../enhancers";

export type CharacterProps = {
  character: CharacterModel;
};

const RawCharacter: React.FC<CharacterProps> = ({ character }) => {
  return (
    <Form>
      <FormGroup row>
        <Label for="title" sm={2}>
          Name
        </Label>
        <Col sm={10}>
          <Input value={character.name} readOnly />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="director" sm={2}>
          Gender
        </Label>
        <Col sm={10}>
          <Input value={character.gender} readOnly />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="release_date" sm={2}>
          Height
        </Label>
        <Col sm={10}>
          <Input value={character.height} readOnly />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="episode_id" sm={2}>
          Mass
        </Label>
        <Col sm={10}>
          <Input value={character.mass} readOnly />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="exampleSelect" sm={2}>
          Films
        </Label>
        <Col sm={10}>
          <ListGroup>
            {character.films.map((film) => (
              <Link to={`/film/${extractId(film)}`} key={film.title}>
                <ListGroupItem>
                  <ListGroupItemHeading>{film.title}</ListGroupItemHeading>
                  <ListGroupItemText>
                    Director: {film.director}, Episode: {film.episode_id},
                    Producer: {film.producer}, characters:{" "}
                    {film.characters.length}
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

export const Character = pipe(
  RawCharacter,
  withNoData<CharacterProps, "character">((p) => p.character),
  withFetching,
  withError
);
