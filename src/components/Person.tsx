import { pipe } from "fp-ts/lib/function";
import { ReactNode } from "react";
import { Card, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Person as PersonModel } from "../decoders/person";
import { withError, withFetching, withNoData } from "../enhancers";

export type PersonProps = {
  person: PersonModel;
  children?: ReactNode;
};

export const Person: React.FC<PersonProps> = ({ person }) => {
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

export const EnhPerson = pipe(
  Person,
  withNoData<PersonProps, "person">((p) => p.person),
  withFetching,
  withError
);
