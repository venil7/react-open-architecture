import React from "react";
import { Alert, Spinner } from "reactstrap";
import { AppError } from "../domain/error";
import { Identity, Nullable } from "../domain/util";

export type Props = {};

export type WithFetching<TProps extends Props> = Identity<
  TProps & {
    fetching: boolean;
  }
>;

export function withFetching<P extends Props>(
  Component: React.FC<P>
): React.FC<WithFetching<P>> {
  return ({ fetching, ...rest }: WithFetching<P>) =>
    fetching ? <Spinner /> : <Component {...(rest as unknown as P)} />;
}

export type WithNoData<TProps extends Props, K extends keyof TProps> = Identity<
  {
    [k in K]: Nullable<TProps[K]>;
  } & Omit<TProps, K>
>;

export function withNoData<P extends Props, K extends keyof P>(
  getter: (p: WithNoData<P, K>) => Nullable<P[K]>
) {
  return function (Component: React.FC<P>): React.FC<WithNoData<P, K>> {
    return (props: WithNoData<P, K>) =>
      getter(props) === null ? null : (
        <Component {...(props as unknown as P)} />
      );
  };
}

export type WithError<TProps extends Props> = Identity<
  TProps & {
    error: Nullable<AppError>;
  }
>;
export function withError<P extends Props>(
  Component: React.FC<P>
): React.FC<WithError<P>> {
  return ({ error, ...rest }: WithError<P>) =>
    error ? (
      <Alert color="danger">
        <h4 className="alert-heading">Error</h4>
        <p>{error.type}</p>
        <hr />
        <p className="mb-0">{error.message}</p>
      </Alert>
    ) : (
      <Component {...(rest as unknown as P)} />
    );
}
