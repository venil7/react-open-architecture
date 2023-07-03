import * as t from "io-ts";
import { FilmDecoder } from "../decoders/film";

export type Film = t.TypeOf<typeof FilmDecoder>;
