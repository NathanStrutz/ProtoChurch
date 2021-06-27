import Vuex from "vuex";

const store = {
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
};

const vxStore = new Vuex.Store(store);

export { vxStore as store };
