<template>
  <auth-layout :page-title="title">
    <ion-content>
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <div class="form-control__label">Номер телефона</div>
          <vue-tel-input
            type="tel"
            autocapitalize="off"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            class="form-control__input"
            v-model="form.phone"
            @input="restoreCountryCode"
            @country-changed="updateCountryCode"
            placeholder="Номер телефона"
            :default-country="'ru'"
            :only-countries="['uz', 'ru', 'kz', 'kg']"
            :input-options="{ showDialCode: true, type: 'tel', minLength: selectedCountryCode.length }"
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
      selectedCountryCode: '+7', // Код страны по умолчанию
      phoneLength: 10, // Стандартная длина номера для России
    };
  },
  computed: {
    isButtonDisabled() {
      let digitsOnly = this.form.phone.replace(/\D+/g, ''); // Оставляем только цифры
      return digitsOnly.length < this.phoneLength; // Проверяем, хватает ли цифр
    },
  },
  methods: {
    restoreCountryCode() {
      // Проверяем, начинается ли введенный номер с кода страны
      if (!this.form.phone.startsWith(this.selectedCountryCode)) {
        this.form.phone = this.selectedCountryCode;
      }
    },
    updateCountryCode(newCountry) {
      // Обновляем selectedCountryCode при смене страны
      this.selectedCountryCode = `+${newCountry.dialCode}`;
      
      // Присваиваем правильную длину номера для выбранной страны
      switch (newCountry.iso2) {
        case 'ru':
          this.phoneLength = 10; // Длина номера для России
          break;
        case 'uz':
          this.phoneLength = 9;  // Длина номера для Узбекистана
          break;
        case 'kz':
          this.phoneLength = 10; // Длина номера для Казахстана
          break;
        case 'kg':
          this.phoneLength = 9;  // Длина номера для Кыргызстана
          break;
        default:
          this.phoneLength = 10; // Стандартное значение
          break;
      }
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
  text-align: center;
}
ion-content {
  --padding-start: 18px;
  --padding-end: 18px;
}
ion-footer {
  box-shadow: none;
}
</style>
