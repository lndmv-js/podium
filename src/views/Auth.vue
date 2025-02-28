<template>
  <auth-layout :page-title="title">
    <ion-content>
      <div class="form-control">
        <div class="form-control__label">Номер телефона</div>
        <input
          type="tel"
          autocapitalize="off"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          class="form-control__input"
          v-model="form.phone"
          placeholder="+998 __-___-____"
          v-mask="'+998 ## ### ####'"
        />
      </div>
      <div class="form-control__error--large" v-if="phoneError">
        {{ phoneError }}
      </div>

      <div class="form-control" v-if="showSMS">
        <div class="form-control__label">Проверочный код</div>
        <input
          type="tel"
          autocapitalize="off"
          autocomplete="off"
          autocorrect="off"
          spellcheck="false"
          class="form-control__input"
          v-model="form.smsCode"
        />
      </div>
      <div class="form-control__error" v-if="smsError">{{ smsError }}</div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <!-- <button class="btn btn--primary" :disabled="isButtonDisabled" @click="getClientData">Войти</button> -->
        <button class="btn btn--primary" @click="getClientData">Войти</button>
      </ion-toolbar>
    </ion-footer>
  </auth-layout>
</template>

<script>
import { IonPage, IonToolbar, IonContent, IonFooter } from "@ionic/vue";
import axios from "axios";

export default {
  components: {
    IonPage,
    IonToolbar,
    IonContent,
    IonFooter,
  },
  data() {
    return {
      title: "Добро пожаловать!",
      form: {
        phone: "",
        smsCode: "",
      },
      clientData: null,
      phoneError: null,
      showSMS: false,
      smsError: null,
    };
  },
  computed: {
    isButtonDisabled() {
      const regex = /^\+998 \d{2} \d{3} \d{4}$/; // Регулярка для +998 ## ### ####
      return !regex.test(this.form.phone); // Если номер не валиден, кнопка будет отключена
    },
  },
  methods: {
    async getClientData() {
      const url = "/get-client-data";
      const body = {
        // phone: this.form.phone.replace(/\s/g, "")
        phone: '+998507729309'
      };

      try {
        const response = await axios.post(url, body, {
          auth: {
            username: this.$config.username,
            password: this.$config.password,
          },
        });
        console.log(response)
        this.clientData = response.data[0]; // Сохраняем данные в состояние
        this.sendSMS();
      } catch (error) {
        this.phoneError = "Ошибка при получении данных клиента";
        console.log(error);
      }
    },
    sendSMS() {
      if (this.clientData.phone) {
        this.showSMS = true;
      } else {
        this.phoneError = "Мы не нашли пользователя с таким номером телефона.";
      }
    },
  },
};
</script>

<style scoped>
ion-toolbar {
  --background: #fff;
  --padding-start: 18px;
  --padding-end: 18px;
  --padding-bottom: 30px;
}
ion-content {
  --padding-start: 18px;
  --padding-end: 18px;
}
</style>