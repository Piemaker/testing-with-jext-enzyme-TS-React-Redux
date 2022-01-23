import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import mathFormReducer from "../features/math/mathFormSlice"
import personReducer from '../features/person/personReducer';
export const store = configureStore({
  reducer: {
    math: mathFormReducer,
    person: personReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


