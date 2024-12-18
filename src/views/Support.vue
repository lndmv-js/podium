<template>
  <base-layout :page-title="title">
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
      <div class="form-control">
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
      </div>

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
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      title: "поддержка",
      formData: {
        subject: "",
        type: "",
        message: "",
      }
    };
  },
  computed: {
    isButtonDisabled() {
      return (
        !this.formData.subject || !this.formData.type || !this.formData.message
      );
    }
  },
  methods: {
    submitForm() {
      const formArray = [
        this.formData.subject,
        this.formData.type,
        this.formData.message,
      ];
      console.log("Данные формы:", formArray);
      this.cleanForm();
    },
    cleanForm() {
      this.formData.subject = "";
      this.formData.type = "";
      this.formData.message = "";
    },
  },
};
</script>