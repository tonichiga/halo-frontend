const items = (state) => state.stock.items;
const loading = (state) => state.stock.loading;

const stockSelectors = {
  items,
  loading,
};

export default stockSelectors;
