<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <slot />
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
} from "@ionic/vue";

export default {
  props: ["pageTitle"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
  },
};
</script>

<style scoped>
ion-toolbar {
  --background: #fff;
  --padding-start: 0px;
  --padding-end: 0px;
  --padding-bottom: 0px;
}
ion-title {
  padding: 30px 0px 24px;
  background: #fff;
}
</style>