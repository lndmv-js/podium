<template>
  <auth-layout :page-title="title">
    <ion-content>
      <form @submit.prevent="submitForm">
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
            @blur="validatePhone"
          />
        </div>
      </form>

      <div class="form-control__error--large">Мы не нашли пользователя с таким номером телефона.</div>
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <button class="btn btn--primary" :disabled="isButtonDisabled">Войти</button>
      </ion-toolbar>
    </ion-footer>
  </auth-layout>
</template>

<script>
import { IonPage, IonToolbar, IonContent, IonFooter } from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonToolbar,
    IonContent,
    IonFooter,
  },
  data() {
    return {
      title: "с возвращением!",
      form: {
        phone: "",
      },
    };
  },
  computed: {
    isButtonDisabled() {
      const regex = /^\+998 \d{2} \d{3} \d{4}$/; // Регулярка для +998 ## ### ####
      return !regex.test(this.form.phone); // Если номер не валиден, кнопка будет отключена
    }
  }
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