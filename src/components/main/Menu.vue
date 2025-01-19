<template>
  <ion-menu content-id="main-content">
    <ion-content class="ion-content-menu">
      <ion-menu-toggle>
        <div class="close-menu-btn"></div>
      </ion-menu-toggle>
      <div class="menu-content">
        <a href="/userpage" class="menu-content__user">
          <div class="menu-content__user-icon"></div>
          <div class="menu-content__user-title">Константин</div>
        </a>

        <div class="menu-content__container">
          <a href="#" class="menu-content__link">Адреса магазинов</a>
          <a href="#" class="menu-content__link">Программа лояльности</a>
          <a href="#" class="menu-content__link">Политика конфиденциальности</a>
        </div>
        
      </div>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  IonMenu,
  IonContent,
  IonMenuToggle,
  IonNavLink,
  IonButton
} from "@ionic/vue";

import UserPage from '@/views/UserPage.vue';

export default {
  components: {
    IonMenu,
    IonContent,
    IonMenuToggle,
    IonNavLink,
    IonButton
  },
  data() {
    return {
      component: UserPage,
    };
  },
};
</script>