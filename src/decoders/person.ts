import * as t from "io-ts";

export const PersonDecoder = t.type({
  mass: t.string,
  name: t.string,
  gender: t.string,
});

export type Person = t.TypeOf<typeof PersonDecoder>;
