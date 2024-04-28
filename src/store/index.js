import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    title: "",
    url: "",
    metaKeywords: "",
    content: "",
    pages: [],
  }, 
  mutations: {
    updateInputValues(state, payload) {
      state.title = payload.title;
      state.url = payload.url;
      state.metaKeywords = payload.metaKeywords;
      state.content = payload.content;
    },
    setPages(state, pages) {
      state.pages = pages;
    },
    updatePage(state, updatedPage) {
      const index = state.pages.findIndex((page) => page.id === updatedPage.id);
      if (index !== -1) {
        state.pages[index] = updatedPage;
      }
    },
  },
  actions: {
    async submit({ commit }, payload) {
      commit("updateInputValues", payload);
      try {
        const res = await axios.post("/pages", payload);
        commit("setPages", payload);
      } catch (e) {
        console.log(e);
        throw e;
      }
    },
    async fetchPages({ commit }) {
      try {
        const res = await axios.get("/pages");
        commit("setPages", res.data);
      } catch (e) {
        console.log(e);
      }
    },
    async editPage({ commit }, page) {
      try {
        const res = await axios.put(`/pages/${page.id}`, page);
        commit("updatePage", page);
      } catch (error) {
        console.error(error);
      }
    },
    async deletePage({ dispatch }, page) {
      try {
        await axios.delete(`/pages/${page.id}`, page);
        dispatch("fetchPages", page)
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export default store;
