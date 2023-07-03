import { mapLeft } from "fp-ts/lib/Either";
import { pipe } from "fp-ts/lib/function";
import { Decoder } from "io-ts";
import { validationErrors } from "../domain/error";
import { Action } from "../domain/util";

export const liftDecoder =
  <T>(decoder: Decoder<unknown, T>): ((json: unknown) => Action<T>) =>
  (json: unknown) =>
  async () =>
    pipe(json, decoder.decode, mapLeft(validationErrors));
