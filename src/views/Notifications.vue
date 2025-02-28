<template>
	
  <tab-layout :page-title="title">
    <div
      class="notifications__item"
      v-for="notification in purchases"
      :key="notification.id"
    >
      <div class="notifications__item-content">
        <div class="notifications__item-date">{{ notification.date }}</div>
        <div
          class="notifications__item-title"
          v-html="getOperationTitle(notification)"
        ></div>
      </div>
      <div
        class="notifications__item-close"
        @click="removeNotification(notification.id)"
      ></div>
    </div>
  </tab-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "уведомления",
			loading: true
    };
  },
  computed: {
    purchases() {
      return this.$store.getters.purchases;
    }
  },
  methods: {
		getOperationTitle(item) {
			if(item.opertype == 0) {
				return `Вы потратили <b>${item.amnt}</b> на покупку в магазине <b>${this.$store.getters.shopById(item.shop).name}</b>`;
			}
			if(item.opertype == 1) {
				return `У Вас списали сертификат <b>${item.amnt}</b> в магазине <b>${this.$store.getters.shopById(item.shop).name}</b>`;
			}
			if(item.opertype == 2) {
				return `У Вас списали кешбек <b>${item.amnt}</b> в магазине <b>${this.$store.getters.shopById(item.shop).name}</b>`;
			}
			if(item.opertype == 3) {
				return `Вам начислен сертификат <b>${item.amnt}</b> в магазине <b>${this.$store.getters.shopById(item.shop).name}</b>`;
			}
			if(item.opertype == 4) {
				return `Вам начислен кешбек <b>${item.amnt}</b> в магазине <b>${this.$store.getters.shopById(item.shop).name}</b>`;
			}
    },
    removeNotification(id) {
      this.$store.dispatch("removeNotificationAction", id);
    },
  },
	mounted() {
		this.$store.dispatch('fetchPurchases', {
			username: this.$config.username,
			password: this.$config.password,
			phone: this.$config.phone
		}).then(() => {
			this.loading = false;
		});
	}
};
</script>