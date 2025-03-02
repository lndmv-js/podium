<template>
  <tab-layout :page-title="title">
    <div v-if="!isSuccess">
      <form @submit.prevent="submitForm">
        <div class="form-control">
          <div class="form-control__label">Тема обращения</div>
          <input
            type="text"
            autocapitalize="off"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            placeholder="Введите тему"
            class="form-control__input"
            v-model="formData.subject"
          />
        </div>
        <!-- <div class="form-control">
          <div class="form-control__label">Тип обращения</div>
          <input
            type="text"
            autocapitalize="off"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            placeholder="Выберите из списка"
            class="form-control__input"
            v-model="formData.type"
          />
        </div> -->

        <div class="form-control">
          <div class="form-control__label">Текст обращения</div>
          <textarea
            type="text"
            autocapitalize="off"
            autocomplete="off"
            autocorrect="off"
            spellcheck="false"
            placeholder="Опишите Вашу проблему или вопрос"
            class="form-control__textarea"
            :class="{'form-control__textarea--active': formData.message !== ''}"
            v-model="formData.message"
          />
        </div>
        <button class="btn btn--outline" :disabled="isButtonDisabled">
          Отправить
        </button>
      </form>
    </div>

    <div class="message-success" v-else>
      <div class="message-success__text">
          <div class="message-success__title">Ваше обращение зарегистрировано.</div>
          <div class="message-success__desc">
              Мы ознакомимся с ним и отправим вам Email с ответом в течение <br>72 часов.
          </div>
          <div class="message-success__icon">
              <img src="../theme/img/message-success-icon.svg" alt="">
          </div>
      </div>
      <div class="message-success__caption">
          Также вы можете связаться с нами по электронной почте:
          <a href="mailto:support@podium.com" class="message-success__email">support@podium.com</a>
      </div>
    </div>

  </tab-layout>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "поддержка",
      formData: {
        subject: "",
        type: "",
        message: "",
      },
      isSuccess: false
    };
  },
  computed: {
    isButtonDisabled() {
      return (
        !this.formData.subject || !this.formData.message
      );
    }
  },
  methods: {
    async submitForm() {
      const url = "/post-message";
      const now = new Date()

      const body = {
        date: now.toLocaleDateString('ru-RU'),
        time: now.toLocaleTimeString('ru-RU'),
        phone: "998901889900",
        subject: this.formData.subject,
        message: this.formData.message,
        shop: 3
      };
      
      try {
        const response = await axios.post(url, body, {
          auth: {
            username: this.$config.username,
            password: this.$config.password,
          },
        });
        this.cleanForm();
        this.isSuccess = true;
      } catch (error) {
        console.log(error);
      }
    },
    cleanForm() {
      this.formData.subject = "";
      this.formData.message = "";
    },
  },
};
</script>