import { left, right } from "fp-ts/lib/Either";
import { genericError, AppError } from "../types/error";
import { ActionResult } from "../types/types";

export const createFetch = (url: string): ActionResult<unknown> => {
  const prefetch: ActionResult<unknown> = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      return right<AppError, unknown>(json);
    } catch (e) {
      return left<AppError, unknown>(genericError((e as Error).message));
    }
  };

  return prefetch;
};

export const createDelay = (n: number): ActionResult<void> => {
  return () => new Promise((resolve) => setTimeout(resolve, n));
};
