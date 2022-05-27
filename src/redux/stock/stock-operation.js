import apiRequest from "../../api/api-requests";
import { stockActions } from ".";

const getItemHandler = () => async (dispatch) => {
  dispatch(stockActions.getItemsRequest());
  const items = await apiRequest.getStockItems();
  dispatch(stockActions.getItems(items));
};

const stockOperations = {
  getItemHandler,
};

export default stockOperations;
