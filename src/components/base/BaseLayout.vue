<template>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-menu-toggle slot="start">
          <div class="menu-btn"></div>
        </ion-menu-toggle>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <div class="header-border-radius"></div>
    <ion-content>
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonMenuToggle,
  IonTitle,
  IonContent,
} from "@ionic/vue";

export default {
  props: ["pageTitle"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonMenuToggle,
    IonTitle,
    IonContent,
  },
};
</script>

<style scoped>
.ion-page {
  background-color: var(--ion-color-primary);
}

ion-toolbar {
  --background: var(--ion-color-primary);
  --color: var(--ion-background-color);
}

ion-content {
  --padding-bottom: 30px;
  --padding-start: 18px;
  --padding-end: 18px;
  overflow: hidden;
}

.header-border-radius {
  display: block;
  width: 100%;
  height: 30px;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
}
</style>