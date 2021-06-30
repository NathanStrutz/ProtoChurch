import { createStore } from "vuex";
import { FeedStore } from "./feed";

const rootStore = {
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    logIn(state, user) {
      state.user = user;
    },
  },
  actions: {},
  modules: {
    feed: FeedStore,
  },
};

const store = createStore(rootStore);
export { store };
