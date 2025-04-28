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
			const response = await axios.post('https://luxuryshopping.uz:222/get-client-data',
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
			console.error('Ошибка при загрузке данных о клиенте:', error);
		}
	}
};

export default {
	state,
	getters,
	mutations,
	actions,
};