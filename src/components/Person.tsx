import { pipe } from "fp-ts/lib/function";
import { Card, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Person as PersonModel } from "../domain/person";
import { withError, withFetching, withNoData } from "../enhancers";

export type PersonProps = {
  person: PersonModel;
};

const RawPerson: React.FC<PersonProps> = ({ person }) => {
  return (
    <Card>
      <CardTitle tag="h5">{person.name}</CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        gender {person.gender}
      </CardSubtitle>
      <CardText>mass: {person.mass}</CardText>
    </Card>
  );
};

export const Person = pipe(
  RawPerson,
  withNoData<PersonProps, "person">((p) => p.person),
  withFetching,
  withError
);
