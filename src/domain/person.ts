import * as t from "io-ts";
import { PersonDecoder } from "../decoders/person";

export type Person = t.TypeOf<typeof PersonDecoder>;
