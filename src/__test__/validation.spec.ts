import { isLeft, isRight } from "fp-ts/lib/Either";
import { numOrAlpha, User, UserDecoder } from "../validation/validation";

describe("testing some validation", () => {
  test("validation works for nums", () => {
    let str = "123";
    let result = numOrAlpha.validate(str, []);
    expect(isRight(result)).toBe(true);
  });
  test("validation works for alphas", () => {
    let str = "abc";
    let result = numOrAlpha.validate(str, []);
    expect(isRight(result)).toBe(true);
  });

  test("validation works for User", () => {
    let user: User = { age: 21, name: "Art" };
    let result = UserDecoder.validate(user, []);
    expect(isRight(result)).toBe(true);
  });
});
