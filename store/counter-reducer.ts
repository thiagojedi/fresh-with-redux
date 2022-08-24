import { createReducer } from "@reduxjs/toolkit";

const initialState = { quantity: 0 };

const countReducer = createReducer(initialState, {
  increment: (state, action) => ({
    quantity: state.quantity + (action.payload ?? 1),
  }),
  decrement: (state, action) => ({
    quantity: state.quantity - (action.payload ?? 1),
  }),
  reset: () => initialState,
});

export default countReducer;
