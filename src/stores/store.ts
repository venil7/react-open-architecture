import { isLeft } from "fp-ts/lib/Either";
import { makeObservable, observable, action } from "mobx";
import { AppError, genericError } from "../types/error";
import { ActionResult, Nullable } from "../types/types";

export abstract class StoreBase<T> {
  data: Nullable<T>;
  fetching: boolean = false;
  error: Nullable<AppError> = null;

  constructor(init: () => Nullable<T> = () => null) {
    makeObservable(this, {
      data: observable,
      fetching: observable,
      error: observable,
      update: action,
    });
    this.data = init();
  }

  async update(func: ActionResult<T>) {
    try {
      this.error = null;
      this.fetching = true;
      let result = await func();
      if (isLeft(result)) {
        this.error = result.left;
      } else {
        this.data = result.right;
      }
    } catch (err) {
      this.error = genericError((err as Error).message);
    } finally {
      this.fetching = false;
    }
  }
}
