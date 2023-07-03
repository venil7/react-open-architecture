import * as t from "io-ts";

export const PersonDecoder = t.type({
  mass: t.string,
  name: t.string,
  gender: t.string,
});
