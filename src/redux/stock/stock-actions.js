import { createAction } from "@reduxjs/toolkit";

const getItems = createAction("stock/getItems");
const getItemsRequest = createAction("stock/getItemsRequest");

const stockActions = {
  getItems,
  getItemsRequest,
};
export default stockActions;
