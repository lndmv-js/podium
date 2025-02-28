<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
					<span class="header-title">{{ pageTitle }}</span>
				</ion-title>
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
  IonTitle
} from "@ionic/vue";

export default {
  props: ["pageTitle"],
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle
  },
};
</script>