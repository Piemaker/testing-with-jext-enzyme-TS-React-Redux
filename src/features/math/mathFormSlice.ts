import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState, } from "../../app/store";

export interface PayloadState {
  in1: number;
  in2: number;
}

export interface MathFormState {
  value: number;
  message: string;
}

const initialState: MathFormState = {
  value: 0,
  message: "",
};

const mathFormSlice = createSlice({
  name: "math",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<PayloadState>) => {
      const { in1, in2 } = action.payload;
      state.value = in1 + in2;
      state.message = `${in1} + ${in2} = ` + (in1 + in2);
    },
    sub: (state, action: PayloadAction<PayloadState>) => {
      const { in1, in2 } = action.payload;
      state.value = in1 - in2;
      state.message = `${in1} - ${in2} = ` + (in1 - in2);
    },
    mul: (state, action: PayloadAction<PayloadState>) => {
      const { in1, in2 } = action.payload;
      state.value = in1 * in2;
      state.message = `${in1} * ${in2} = ` + in1 * in2;
    },
    div: (state, action: PayloadAction<PayloadState>) => {
      const { in1, in2 } = action.payload;
      if (in2 === 0) {
        state.value = 0;
        state.message = "Can't divide by zero!";
      } else {
        state.value = in1 / in2;
        state.message = `${in1} / ${in2} = ` + in1 / in2;
      }
    },
  },
});

export const { add, sub, mul, div } = mathFormSlice.actions;
export const getValue = (state: RootState) => state.math.value;
export const getMessage = (state: RootState) => state.math.message;
export default mathFormSlice.reducer;
