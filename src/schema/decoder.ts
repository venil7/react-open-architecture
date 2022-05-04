import { Decoder } from "io-ts";
import { ActionResult } from "../types/types";
import { mapLeft } from "fp-ts/lib/Either";
import { validationErrors } from "../types/error";

export const liftDecoder = <T>(
  decoder: Decoder<unknown, T>
): ((json: unknown) => ActionResult<T>) => {
  const decode: (json: unknown) => ActionResult<T> =
    (json: unknown) => async () => {
      const validation = decoder.decode(json);
      const mappedValidation = mapLeft(validationErrors)(validation);
      return mappedValidation;
    };

  return decode;
};
