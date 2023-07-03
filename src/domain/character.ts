import * as t from "io-ts";
import { CharacterDecoder } from "../decoders/character";
import { Film } from "./film";
import { Replace } from "./util";

export type Character = t.TypeOf<typeof CharacterDecoder>;

export type EnrichedCharacter = Replace<Character, "films", readonly Film[]>;
