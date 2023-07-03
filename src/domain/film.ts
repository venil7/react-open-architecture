import * as t from "io-ts";
import { FilmDecoder } from "../decoders/film";
import { Character } from "./character";
import { Replace } from "./util";

export type Film = t.TypeOf<typeof FilmDecoder>;

export type EnrichedFilm = Replace<Film, "characters", readonly Character[]>;
