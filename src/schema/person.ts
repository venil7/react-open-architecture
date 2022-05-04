import * as t from "io-ts";

export const PersonDecoder = t.type({
  id: t.number,
  name: t.string,
  age: t.number,
});

export type Person = t.TypeOf<typeof PersonDecoder>;
