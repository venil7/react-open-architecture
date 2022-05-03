import React, { PropsWithChildren, ReactNode } from "react";
import { pipe } from "fp-ts/lib/function";
import { AppError } from "../types/error";
import { Nullable } from "../types/types";

export type Props = PropsWithChildren<{}>;

export type WithNoData<TProps extends Props, K extends keyof TProps> = {
  [k in K]: Nullable<TProps[K]>;
} & Omit<TProps, K>;

export type WithFetching<TProps extends Props> = TProps & {
  fetching: boolean;
};

export type WithError<TProps extends Props> = TProps & {
  error: Nullable<AppError>;
};

export function withFetching<P extends Props>(
  Component: React.FC<P>
): React.FC<WithFetching<P>> {
  return ({ fetching, ...rest }: WithFetching<P>) =>
    fetching ? <>fetching</> : <Component {...(rest as unknown as P)} />;
}

export function withNoData<P extends Props, K extends keyof P>(
  getter: (p: WithNoData<P, K>) => Nullable<P[K]>
) {
  return function (Component: React.FC<P>): React.FC<WithNoData<P, K>> {
    return (props: WithNoData<P, K>) =>
      getter(props) === null ? (
        <>no data</>
      ) : (
        <Component {...(props as unknown as P)} />
      );
  };
}

export function withError<P extends Props>(
  Component: React.FC<P>
): React.FC<WithError<P>> {
  return ({ error, ...rest }: WithError<P>) =>
    error ? (
      <>{JSON.stringify(error)}</>
    ) : (
      <Component {...(rest as unknown as P)} />
    );
}
