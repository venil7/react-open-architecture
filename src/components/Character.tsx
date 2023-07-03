import { pipe } from "fp-ts/lib/function";
import { Card, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { EnrichedCharacter as CharacterModel } from "../domain/character";
import { withError, withFetching, withNoData } from "../enhancers";

export type CharacterProps = {
  character: CharacterModel;
};

const RawCharacter: React.FC<CharacterProps> = ({ character }) => {
  return (
    <Card>
      <CardTitle tag="h5">{character.name}</CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        gender {character.gender}
      </CardSubtitle>
      <CardText>mass: {character.mass}</CardText>
    </Card>
  );
};

export const Character = pipe(
  RawCharacter,
  withNoData<CharacterProps, "character">((p) => p.character),
  withFetching,
  withError
);
