import ReactDOM from "react-dom/client";
import "./index.css";
import ToDoList from "./pages/ToDoList.jsx";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducer from "./redux/reducer";

const store = legacy_createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToDoList />
  </Provider>
);
