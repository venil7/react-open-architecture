import { Errors as ValidationErrors, ValidationError } from "io-ts";

export enum AppErrorType {
  General,
  Validation,
}
export type AppError = { type: AppErrorType; message: string };

export const genericError = (message: string): AppError => ({
  message,
  type: AppErrorType.General,
});

export const validationError = (
  val: ValidationError,
  fallbackMessage = "validation error"
): AppError => {
  return {
    type: AppErrorType.Validation,
    message: val.message ?? fallbackMessage,
  };
};

export const validationErrors = (vals: ValidationErrors): AppError =>
  validationError(vals[0]);
