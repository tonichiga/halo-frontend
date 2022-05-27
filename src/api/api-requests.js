import axios from "axios";

const getStockItems = async () => {
  const { data } = await axios.get("https://halo-test-work.herokuapp.com/");

  return data.data;
};

const apiRequest = {
  getStockItems,
};
export default apiRequest;
