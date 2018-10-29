/**
 * The Result type, modeled after Rust's Result, Scala/Haskell/Arrow's Either
 * is a helper for type-safe handling of operations that can fail.
 *
 * Example usage:
 * ```
 * function safeDivide(a: number, d: number): Result<number, string> {
 *     if (d === 0) {
 *         return Result.err("Can't divide by zero");
 *     }
 *     return Result.ok(a / d);
 * }
 *
 * const res = safeDivide(15, 3);
 * if (res.isOk()) {
 *     sum += res.value;
 * } else {
 *     alert(res.error);
 * }
 * ```
 *
 * Implementation note: The code emulates an enumerated type (or "sealed class"
 * in Kotlin terms) with an internal abstract class with only two subtypes.
 *
 */
export type Result<T, E> = Ok<T, E> | Err<T, E>;

abstract class ResultImpl<T, E> {
  static ok<T, E>(t: T): Result<T, E> {
    return new Ok(t);
  }

  static err<T, E>(e: E): Result<T, E> {
    return new Err(e);
  }

  // Note: This is a function. Use `if (res.isOk())`, not `if (res.isOk)`
  isOk(): this is Ok<T, E> {
    return this instanceof Ok;
  }

  // Note: This is a function. Use `if (res.isErr())`, not `if (res.isErr)`
  isErr(): this is Err<T, E> {
    return this instanceof Err;
  }

  orElse(defaultValue: T): T {
    return this.isOk() ? this.value : defaultValue;
  }

  andThen<V>(onSuccess: (value: T) => V, onFailure: (error: E) => V): V {
    const self = this.asResult();
    return self.isOk() ? onSuccess(self.value) : onFailure(self.error);
  }

  getOrThrow(): T {
    const self = this.asResult();
    if (self.isErr()) {
      throw self.error;
    }
    return self.value;
  }

  private asResult(): Result<T, E> {
    // Necessary internally to tell TS that it only needs to consider Ok and Err
    return this as any;
  }
}

export const Result = ResultImpl;

class Ok<T, E> extends ResultImpl<T, E> {
  constructor(readonly value: T) {
    super();
  }
}

class Err<T, E> extends ResultImpl<T, E> {
  constructor(readonly error: E) {
    super();
  }
}
