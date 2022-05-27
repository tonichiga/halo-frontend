import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { stockActions } from ".";

const items = createReducer([], {
  [stockActions.getItems]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [stockActions.getItemsRequest]: () => true,
  [stockActions.getItems]: () => false,
});

export default combineReducers({
  items,
  loading,
});
