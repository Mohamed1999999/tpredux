import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

const rootReducer = combineReducers({
  tasks: TasksReducer, // "tasks" correspond à la clé de notre reducer
});

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
