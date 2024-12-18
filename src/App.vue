<template>
  <ion-app>
    <!-- <ion-menu content-id="main-content">
      <ion-content class="ion-content-menu">
        <ion-menu-toggle>
          <div class="close-menu-btn"></div>
        </ion-menu-toggle>
      </ion-content>
    </ion-menu> -->
    <ion-router-outlet />
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

export default {
  components: {
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonMenuToggle,
    IonContent,
  },
};
</script>
