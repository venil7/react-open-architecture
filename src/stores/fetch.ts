import { mapLeft, left } from "fp-ts/lib/Either";
import { Decoder } from "io-ts";
import { genericError, AppError, validationErrors } from "../types/error";
import { ActionResult } from "../types/types";

export const createFetch = <T>(
  url: string,
  decoder: Decoder<any, T>
): ActionResult<T> => {
  const prefetch: ActionResult<T> = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      const validation = decoder.decode(json);
      const mappedValidation = mapLeft(validationErrors)(validation);
      return mappedValidation;
    } catch (e) {
      return left<AppError, T>(genericError((e as Error).message));
    }
  };

  return prefetch;
};
