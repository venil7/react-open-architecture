import { altW } from "fp-ts/Either";
import { pipe } from "fp-ts/lib/function";
import { Predicate } from "fp-ts/lib/Predicate";
import * as t from "io-ts";

const predicateValidation = <A>(
  predicate: Predicate<A>,
  message: string = `does not pass predicate`
): t.Type<A, A, A> =>
  new t.Type<A, A, A>(
    `predicate`,
    predicate as t.Is<A>,
    (u, c) => (predicate(u) ? t.success(u) : t.failure(u, c, message)),
    (x) => x
  );

const regexValidation = (regex: RegExp, message = `Fails ${regex}`) =>
  predicateValidation<string>((s) => regex.test(s), message);

const alternatives = <A, O, I>(
  first: t.Type<A, O, I>,
  second: t.Type<A, O, I>
): t.Type<A, O, I> => {
  return new t.Type<A, O, I>(
    `alt(${first}, ${second})`,
    ((u) => first.is(u) || second.is(u)) as t.Is<A>,
    (u, c) =>
      pipe(
        first.validate(u, c),
        altW(() => second.validate(u, c))
      ),
    first.encode
  );
};

const numValidation = regexValidation(/^[1-9]+$/);
const alphaValidation = regexValidation(/^[a-zA-Z]{3}$/);

export const numOrAlpha = alternatives(numValidation, alphaValidation);

export const UserDecoder = t.type({
  name: t.string.pipe(
    regexValidation(/[A-Za-z]{3,}/, "Name has to be longer that 3 chars")
  ),
  age: t.number.pipe(
    predicateValidation((x) => x >= 18, "age should be 18 or above")
  ),
});
export type User = t.TypeOf<typeof UserDecoder>;
