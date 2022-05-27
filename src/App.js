import "./assets/styles/styles.scss";
import "modern-normalize";
import { Cards } from "./Views";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Cards />
      </div>
    </Provider>
  );
}

export default App;
