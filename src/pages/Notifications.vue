<template>
	<base-layout :page-title="title">
		<div class="notifications__item" v-for="notification in notifications" :key="notification.id">
			<div class="notifications__item-content">
				<div class="notifications__item-date">{{ notification.date }}</div>
				<div class="notifications__item-title" v-html="notification.title"></div>
			</div>
			<div class="notifications__item-close" @click="deleteNotification(notification.id)"></div>
		</div>
	</base-layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'уведомления',
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

	methods: {
		deleteNotification(id) {
			this.notifications = this.notifications.filter(item => item.id !== id);
		}
	}
}
</script>