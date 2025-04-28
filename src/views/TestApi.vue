<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Тест API</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-button @click="testApi">Проверить API</ion-button>
      <pre v-if="result">{{ result }}</pre>
      <p v-if="error" style="color: red">{{ error }}</p>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import axios from 'axios';

const result = ref('');
const error = ref('');

const testApi = async () => {
  result.value = '';
  error.value = '';
  try {
    const response = await axios.get('https://httpbin.org/basic-auth/user/pass', {
      auth: {
        username: 'user',
        password: 'pass'
      }
    });
    result.value = JSON.stringify(response.data, null, 2);
  } catch (err) {
    error.value = `Ошибка: ${err.message}`;
    console.error(err);
  }
};
</script>
