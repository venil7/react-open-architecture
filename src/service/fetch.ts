import { chain } from "fp-ts/lib/Task";
import { tryCatch } from "fp-ts/lib/TaskEither";
import { pipe } from "fp-ts/lib/function";
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
    const fetchTask = pipe(
      () => fetch(url, { method, body }),
      chain((resp) => () => resp.json())
    );
    return tryCatch<AppError, unknown>(fetchTask, (e) =>
      genericError((e as Error).message)
    );
  };

export const createGet = (url: string) => createFetch(HttpMethod.Get)(url);
export const createPost = <T extends BodyInit>(url: string, body: T) =>
  createFetch(HttpMethod.Post)(url, body);
