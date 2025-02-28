import axios from 'axios';

const state = {
	purchases: []
};

const getters = {
	purchases: (state) => state.purchases
};

const mutations = {
	SET_PURCHASES(state, payload) {
		state.purchases = payload;
	}
};

const actions = {
	async fetchPurchases({ commit }, { username, password, phone }) {
		try {
			const response = await axios.post('/get-client-oper',
				{ phone },
				{
					auth: {
						username,
						password,
					}
				}
			);
			commit('SET_PURCHASES', response.data);
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