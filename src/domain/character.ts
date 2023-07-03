import * as t from "io-ts";
import { CharacterDecoder } from "../decoders/character";

export type Character = t.TypeOf<typeof CharacterDecoder>;
