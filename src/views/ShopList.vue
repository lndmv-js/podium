<template>
  <second-layout v-if="!loading">
		<div class="text-page__title">{{ pagetitle }}</div>
		<div class="shoplist">
			<div 
				class="shoplist__item"
				v-for="shop in shoplist"
				:key="shop.id"
			>
				<div class="shoplist__title">{{ shop.name }}</div>
				<div class="shoplist__adress">{{ shop.address }}</div>
			</div>
		</div>
	</second-layout>
</template>

<script>
export default {
	data() {
		return {
			pagetitle: 'Адреса магазинов',
			loading: true
		}
	},
	computed: {
    shoplist() {
      return this.$store.getters.shoplist;
    }
  },
  mounted() {
    this.$store.dispatch('fetchShoplist', {
			username: this.$config.username,
			password: this.$config.password,
		}).then(() => {
			this.loading = false;
		});
  }
};
</script>