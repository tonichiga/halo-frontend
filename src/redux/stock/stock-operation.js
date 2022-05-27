import apiRequest from "../../api/api-requests";
import { stockActions } from ".";

const getItemHandler = () => async (dispatch) => {
  dispatch(stockActions.getItemsRequest());
  const items = await apiRequest.getStockItems();
  dispatch(stockActions.getItems(items));
};

const sendItemHandler = (data) => async () => {
  const result = await apiRequest.sendItem(data);
  console.log("Ответ :", result);
};

const stockOperations = {
  getItemHandler,
  sendItemHandler,
};

export default stockOperations;
