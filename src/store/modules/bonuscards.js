import axios from 'axios';

const state = {
	bonuscards: [],
	bonuscard: []
};

const getters = {
	bonuscards: (state) => state.bonuscards,
	bonuscard: (state) => state.bonuscard,
};

const mutations = {
	SET_BONUSCARDS(state, payload) {
		state.bonuscards = payload;
	},
	SET_BONUSCARD(state, payload) {
		state.bonuscard = payload;
	}
};

const actions = {
	async fetchBonusCards({ commit }, { username, password, phone }) {
		try {
			const response = await axios.post('https://luxuryshopping.uz:222/get-client-bonus-cards',
				{ phone },
				{
					auth: {
						username,
						password,
					}
				}
			);
			console.log(response.headers);
			commit('SET_BONUSCARDS', response.data);
		} catch (error) {
			console.error('Ошибка при загрузке списка магазинов:', error);
		}
	},
	async fetchBonusCard({ commit }, { username, password, phone, shop_id }) {
		try {
			const response = await axios.post('https://luxuryshopping.uz:222/get-client-bonus-cards',
				{ phone, shop_id },
				{
					auth: {
						username,
						password,
					}
				}
			);
			commit('SET_BONUSCARD', response.data);
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