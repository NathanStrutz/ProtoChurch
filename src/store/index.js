import { createStore } from "vuex";
import { FeedStore } from "./feed";
import { GroupsStore } from "./groups";

const rootStore = {
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    logIn(state, user) {
      state.user = user;
    },
    logOut(state) {
      state.user = null;
    },
  },
  actions: {},
  modules: {
    feed: FeedStore,
    groups: GroupsStore,
  },
};

const store = createStore(rootStore);
export { store };
