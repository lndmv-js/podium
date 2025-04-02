<template>
  <second-layout v-if="!loading">
    <div class="form-control">
			<div class="form-control__label">Имя</div>
			<input
				type="text"
				autocapitalize="off"
				autocomplete="off"
				autocorrect="off"
				spellcheck="false"
				class="form-control__input"
				v-model="clientdata.firstname"
				readonly
			/>
		</div>
		
    <div class="form-control">
			<div class="form-control__label">Фамилия</div>
			<input
				type="text"
				autocapitalize="off"
				autocomplete="off"
				autocorrect="off"
				spellcheck="false"
				class="form-control__input"
				v-model="clientdata.lastname"
				readonly
			/>
		</div>

    <div class="form-control">
			<div class="form-control__label">Отчество</div>
			<input
				type="text"
				autocapitalize="off"
				autocomplete="off"
				autocorrect="off"
				spellcheck="false"
				class="form-control__input"
				v-model="clientdata.middlename"
				readonly
			/>
		</div>

    <!-- <div class="form-control">
			<div class="form-control__label">E-mail</div>
			<input
				type="email"
				autocapitalize="off"
				autocomplete="off"
				autocorrect="off"
				spellcheck="false"
				class="form-control__input"
				v-model="clientdata.email"
				readonly
			/>
		</div> -->

    <div class="form-control">
			<div class="form-control__label">Телефон</div>
			<input
				type="tel"
				autocapitalize="off"
				autocomplete="off"
				autocorrect="off"
				spellcheck="false"
				class="form-control__input"
				v-model="clientdata.phone"
				readonly
			/>
		</div>
  </second-layout>
</template>

<script>
export default {
	data() {
		return {
			loading: true
		}
	},
	computed: {
		clientdata() {
      return this.$store.getters.clientdata?.[0] || null;
    }
  },
	mounted() {
		this.$store.dispatch('fetchClientData', {
			username: this.$config.username,
			password: this.$config.password,
			phone: this.$config.phone
		}).then(() => {
			this.loading = false;
		});
	},
}
</script>