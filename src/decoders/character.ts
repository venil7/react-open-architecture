import * as t from "io-ts";

export const CharacterDecoder = t.type({
  name: t.string,
  height: t.string,
  mass: t.string,
  gender: t.string,
  films: t.array(t.string),
  url: t.string,
});
