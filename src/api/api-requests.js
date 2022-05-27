import axios from "axios";

const getStockItems = async () => {
  const { data } = await axios.get("https://halo-test-work.herokuapp.com/");

  return data.data;
};

const sendItem = async (item) => {
  const { data } = await axios.post(
    "https://halo-test-work.herokuapp.com/",
    item
  );

  return data.data;
};

const apiRequest = {
  getStockItems,
  sendItem,
};
export default apiRequest;
