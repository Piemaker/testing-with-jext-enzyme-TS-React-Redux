import mathFormReducer, {MathFormState,add, sub, div, mul} from "./mathFormSlice"

describe("mathForm reducer", () => {
  const initialState: MathFormState = {
    value: 0,
    message: "",
  };
  it("should handle initial state", () => {
    expect(mathFormReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      message: "",
    });
  });

  it("should handle addition", () => {
    const actual = mathFormReducer(initialState, add({in1 : 1, in2: 2}));
    expect(actual).toEqual({
        value: 3,
        message: "1 + 2 = 3"
    })
  });

  it("should handle subtraction", () => {
    const actual = mathFormReducer(
      initialState,
      sub({ in1: 1, in2: 2 })
    );
    expect(actual).toEqual({
      value: -1,
      message: "1 - 2 = -1",
    });
  });

  it("should handle multiplication", () => {
    const actual = mathFormReducer(
      initialState,
      mul({ in1: 1, in2: 2 })
    );
    expect(actual).toEqual({
      value: 2,
      message: "1 * 2 = 2",
    });
  });
  it("should handle division", () => {
    const actual = mathFormReducer(initialState, div({ in1: 1, in2: 2 }));
    expect(actual).toEqual({
      value: 0.5,
      message: "1 / 2 = 0.5",
    });
  });
  it("should handle dividing by zero", () => {
    const actual = mathFormReducer(initialState, div({ in1: 1, in2: 0 }));
    expect(actual).toEqual({
      value: 0,
      message: "Can't divide by zero!",
    });
  });
});
