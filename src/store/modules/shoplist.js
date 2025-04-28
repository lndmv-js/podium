import axios from 'axios';

const state = {
	shoplist: []
};

const getters = {
	shoplist: (state) => state.shoplist,
	shopById: (state) => (id) => state.shoplist.find(shop => shop.id === id),
};

const mutations = {
	SET_SHOPLIST(state, payload) {
		state.shoplist = payload;
	},
};

const actions = {
	async fetchShoplist({ commit }, { username, password }) {
		try {
			const response = await axios.get('https://luxuryshopping.uz:222/get-shoplist', {
				auth: {
					username,
					password,
				},
			});
			commit('SET_SHOPLIST', response.data);
		} catch (error) {
			console.error('Ошибка при загрузке списка магазинов:', error);
		}
	}
};

export default {
	state,
	getters,
	mutations,
	actions,
};