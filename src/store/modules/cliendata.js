import axios from 'axios';

const state = {
	clientdata: []
};

const getters = {
	clientdata: (state) => state.clientdata
};

const mutations = {
	SET_CLIENTDATA(state, payload) {
		state.clientdata = payload;
	}
};

const actions = {
	async fetchClientData({ commit }, { username, password, phone }) {
		try {
			const response = await axios.post('/get-client-data',
				{ phone },
				{
					auth: {
						username,
						password,
					}
				}
			);
			commit('SET_CLIENTDATA', response.data);
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