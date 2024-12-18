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
ion-title {
  padding: 30px 20px 24px 20px;
  background: #fff;
}
</style>