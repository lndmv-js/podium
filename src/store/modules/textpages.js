import axios from 'axios';

const state = {
  textpages: []
};

const getters = {
  getTextPageByUrl: (state) => (url) => {
    return state.textpages[url] || {};
  }
};

const mutations = {
  SET_TEXTPAGE(state, payload) {
    state.textpages = payload;
  }
};

const actions = {
  async fetchTextpage({ commit }, { username, password }) {
    try {
      const response = await axios.get('https://luxuryshopping.uz:222/get_terms', {
        auth: {
          username,
          password,
        },
      });
      commit('SET_TEXTPAGE', response.data);
    } catch (error) {
      console.error('Ошибка при загрузке списка магазинов:', error);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
