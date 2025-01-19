<template>
  <base-layout :page-title="title">
    <div class="purchases__item" v-for="(item, index) in clientData" :key="index">
      <div class="purchases__item-content">
        <div class="purchases__item-date">{{ item.date }}</div>
        <div class="purchases__item-title">{{getOperationTitle(item.opertype)}}</div>
      </div>
      <div class="purchases__item-grade">
        <div class="purchases__item-grade-value">{{ item.amnt }}</div>
        <div class="purchases__item-grade-title">баллов</div>
      </div>
    </div>
  </base-layout>
</template>

<script>
import axios from 'axios';

export default {
  name: "newpage",
  data() {
    return {
      title: "ваши покупки",
      clientData: null,
    };
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
  async mounted() {
    const url = "/get-client-oper";
    const body = {
      phone: "+998901879309",
    };

    try {
      const response = await axios.post(url, body, {
        auth: {
          username: this.$config.username,
          password: this.$config.password,
        },
      });
      this.clientData = response.data; // Сохраняем данные в состояние
      console.log(this.clientData)
    } catch (error) {
      this.phoneError = "Ошибка при получении данных клиента";
      console.log(error);
    }
  },
};
</script>
