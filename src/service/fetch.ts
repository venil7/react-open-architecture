import { ap } from "fp-ts/lib/Identity";
import { chain } from "fp-ts/lib/Task";
import { tryCatch } from "fp-ts/lib/TaskEither";
import { pipe, tupled } from "fp-ts/lib/function";
import { AppError, genericError } from "../domain/error";
import { Action, Nullable } from "../domain/util";

export enum HttpMethod {
  Get = "GET",
  Post = "POST",
  Put = "PUT",
  Patch = "PATCH",
  Delete = "DELETE",
}

export const createFetch =
  (method: HttpMethod) =>
  <T extends BodyInit>(
    url: string,
    body: Nullable<T> = null
  ): Action<unknown> => {
    return tryCatch<AppError, unknown>(
      pipe(
        () =>
          fetch(url, { method, body: body ? JSON.stringify(body) : undefined }),
        chain((resp) => () => resp.json())
      ),
      (e) => genericError((e as Error).message)
    );
  };

export const createGet = (url: string) =>
  pipe(HttpMethod.Get, createFetch, ap(url));

export const createPost = <T extends BodyInit>(url: string, body: T) =>
  pipe(
    HttpMethod.Post,
    createFetch,
    tupled,
    ap<[string, Nullable<T>]>([url, body])
  );
