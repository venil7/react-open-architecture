import { Either } from "fp-ts/lib/Either";
import { TaskEither } from "fp-ts/lib/TaskEither";
import { AppError, AppErrorType } from "./error";

export type Nullable<T> = T | null;
export type Optional<T> = Nullable<T> | undefined;

export type Result<T> = Either<AppErrorType, T>;
export type ActionResult<T> = TaskEither<AppError, T>;
