<template>
  <ion-app>
    <Menu />
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script>
import {
  IonApp,
  IonRouterOutlet,
  IonMenu,
  IonMenuToggle,
  IonContent,
} from "@ionic/vue";
import Menu from '@/components/main/Menu.vue'

export default {
  components: {
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonMenuToggle,
    IonContent,
    Menu
  },
};
</script>
