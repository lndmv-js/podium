import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            notifications: [
				{
					'id': 1,
					'date': '05.08.2024',
					'title': 'Вам начислено 120 баллов за покупку 01.08.2024 в магазине Podium'
				},
				{
					'id': 2,
					'date': '22.06.2024',
					'title': 'Вы <b>потратили 1000 баллов</b> на покупку 22.06.2024 в магазине Podium'
				},
				{
					'id': 3,
					'date': '17.06.2024',
					'title': 'Вам <b>начислено 150 баллов</b> по случаю дня рождения! Используйте их в течение 2-х недель, ждем Вас в наших магазинах!'
				},
				{
					'id': 4,
					'date': '06.05.2024',
					'title': '<b>Скоро сгорят 500 бонусов!</b> Чтобы не потерять свою выгоду, потратьте их в течение 2-х недель в наших магазинах'
				},
			]
        }
    },
    getters: {
        notifications(state) {
            return state.notifications;
        }
    },
    mutations: {
        removeNotification(state, id) {
            state.notifications = state.notifications.filter(n => n.id !== id);
        }
    },
    actions: {
        removeNotificationAction({ commit }, id) {
            commit('removeNotification', id);
        }
    }
});

export default store;