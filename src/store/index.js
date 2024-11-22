import { createStore } from "vuex";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const response = await axios.get("/user/profile");
        commit("setUser", response.data);
      } catch (error) {
        console.error("Erro ao buscar perfil:", error);
      }
    },
  },
});
