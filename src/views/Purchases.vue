<template>
  <tab-layout :page-title="title">
    <div class="purchases__item" v-for="(item, index) in purchases" :key="index">
      <div class="purchases__item-content">
        <div class="purchases__item-date">{{ item.date }}</div>
        <div class="purchases__item-title">{{getOperationTitle(item.opertype)}}</div>
      </div>
      <div class="purchases__item-grade">
        <div class="purchases__item-grade-value">{{ item.amnt }}</div>
        <div class="purchases__item-grade-title">баллов</div>
      </div>
    </div>
  </tab-layout>
</template>

<script>
import axios from 'axios';

export default {
  name: "newpage",
  data() {
    return {
      title: "ваши покупки",
			loading: true
    };
  },
	computed: {
		purchases() {
      return this.$store.getters.purchases;
    }
  },
  methods: {
    getOperationTitle(opertype) {
      const titles = {
        0: "Покупка",
        1: "Списание сертификата",
        2: "Списание кешбека",
        3: "Начисление сертификата",
        4: "Начисление кешбека",
      };
      return titles[opertype] || "Неизвестная операция";
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
