import { createStore } from "vuex";
import stack from "./modules/stack";

export const store = createStore({
  modules: {
    stack,
  },
});
