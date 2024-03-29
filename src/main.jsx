import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import ToDoList from "./pages/ToDoList.jsx";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToDoList />
  </Provider>
);
