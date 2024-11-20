<template>
	<base-layout :page-title="title">
		<div class="notifications__item" v-for="notification in notifications" :key="notification.id">
			<div class="notifications__item-content">
				<div class="notifications__item-date">{{ notification.date }}</div>
				<div class="notifications__item-title" v-html="notification.title"></div>
			</div>
			<div class="notifications__item-close" @click="removeNotification(notification.id)"></div>
		</div>
	</base-layout>
</template>

<script>
export default {
	data() {
		return {
			title: 'уведомления'
		}
	},
	computed: {
		notifications() {
			return this.$store.getters.notifications;
		}
	},
	methods: {
		removeNotification(id) {
			this.$store.dispatch('removeNotificationAction', id);
			// this.notifications = this.notifications.filter(item => item.id !== id);
		}
	}
}
</script>