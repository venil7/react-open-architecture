import { pipe } from "fp-ts/lib/function";
import { ReactNode } from "react";
import { Card, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Person as PersonModel } from "../schema/person";
import { withError, withFetching, withNoData } from "./enhance";

export type PersonProps = {
  person: PersonModel;
  children?: ReactNode;
};

export const Person: React.FC<PersonProps> = ({ person }) => {
  return (
    <Card>
      <CardTitle tag="h5">{person.name}</CardTitle>
      <CardSubtitle className="mb-2 text-muted" tag="h6">
        {person.id}
      </CardSubtitle>
      <CardText>{person.age}</CardText>
    </Card>
  );
};

export const EnhPerson = pipe(
  Person,
  withNoData<PersonProps, "person">((p) => p.person),
  withFetching,
  withError
);
