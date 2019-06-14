import { createStore } from "redux";

const reducer = (state, action) => {
  if (state === undefined) {
    return { color: "red" };
  } else {
    if (action.type === "change") {
      return state.color === "red" ? { color: "green" } : { color: "red" };
    }
  }
};

let store = createStore(reducer);

export default store;
