<template>
  <second-layout v-if="!loading">
		<div class="text-page">
			<!-- <div class="text-page__title">{{ textPage.pagetitle }}</div> -->
			<div class="text-page__content" v-html="textPage"></div>
		</div>
	</second-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	props: {
    name: String
  },
	data() {
		return {
			loading: true
		}
	},
  computed: {
    ...mapGetters(['getTextPageByUrl']),
    textPage() {
      return this.getTextPageByUrl(this.name);
    }
  },
	mounted() {
		this.$store.dispatch('fetchTextpage', {
			username: this.$config.username,
			password: this.$config.password
		}).then(() => {
			this.loading = false;
		});
	},
};
</script>