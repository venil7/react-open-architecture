import { Decoder } from "io-ts";
import { ActionResult } from "../types/types";
import { mapLeft } from "fp-ts/lib/Either";
import { validationErrors } from "../types/error";
import { pipe } from "fp-ts/lib/function";

export const liftDecoder =
  <T>(decoder: Decoder<unknown, T>): ((json: unknown) => ActionResult<T>) =>
  (json: unknown) =>
  async () =>
    pipe(json, decoder.decode, mapLeft(validationErrors));
