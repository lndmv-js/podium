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
      <div class="form-control__error" v-if="phoneError">
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
          maxlength="4"
          class="form-control__input"
          v-model="form.smsCode"
        />
      </div>
      <div class="form-control__error" v-if="smsError">{{ smsError }}</div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <button class="btn btn--primary" v-if="!showSMS" :disabled="isButtonDisabled" @click="getClientData">Отправить код</button>
        <button class="btn btn--primary" v-if="showSMS" :disabled="isButtonDisabled" @click="login">Войти</button>
      </ion-toolbar>
    </ion-footer>
  </auth-layout>
</template>

<script>
import { IonPage, IonToolbar, IonContent, IonFooter } from "@ionic/vue";
import axios from "axios";

export default {
  components: { IonPage, IonToolbar, IonContent, IonFooter },
  data() {
    return {
      title: "Добро пожаловать!",
      form: { phone: "", smsCode: "" },
      clientData: null,
      phoneError: null,
      showSMS: false,
      smsError: null,
      smsCode: null,
    };
  },
  computed: {
    isButtonDisabled() {
      return !this.isPhoneValid || (this.showSMS && !this.isSMSValid);
    },
    isPhoneValid() {
      return /^\+998 \d{2} \d{3} \d{4}$/.test(this.form.phone);
    },
    isSMSValid() {
      return /^\d{4}$/.test(this.form.smsCode);
    },
  },
  methods: {
    generateRandomNumber() {
      this.smsCode = Math.floor(1000 + Math.random() * 9000);
    },
    async getClientData() {
      this.phoneError = null;
      try {
        const { data } = await axios.post("/get-client-data", { 
          phone: this.form.phone.replace(/\s/g, "") 
        }, {
          auth: { username: this.$config.username, password: this.$config.password }
        });
        
        this.clientData = data[0];
        this.sendSMS();
      } catch {
        this.phoneError = "Ошибка при получении данных клиента";
      }
    },
    sendSMS() {
      if (this.clientData?.phone) {
        this.generateRandomNumber();
        this.showSMS = true;
        this.smsError = `Мы выслали вам 4-х значный код (${this.smsCode})`;
      } else {
        this.phoneError = "Мы не нашли пользователя с таким номером телефона.";
      }
    },
    login() {
      this.smsError = '';
      if(this.form.smsCode == this.smsCode) {
        console.log('login');
        this.$router.push("/tabs");
      } else {
        this.smsError = `Неверный код (${this.smsCode})`;
      }
    }
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