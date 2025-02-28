<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-toggle>
            <div class="menu-btn"></div>
          </ion-menu-toggle>
        </ion-buttons>
        <ion-title>
          <span class="header-title">{{ pageTitle }}</span>
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <div class="content-border-radius"></div>
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
  IonButtons,
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
    IonButtons,
    IonMenuToggle,
    IonTitle,
    IonContent,
  },
};
</script>

<style scoped>
/* .ion-page {
  background-color: var(--ion-color-primary);
} */

/* ion-toolbar {
  --background: var(--ion-color-primary);
  --color: var(--ion-background-color);
} */

ion-header {
	background: var(--ion-color-primary) !important;
}

ion-toolbar {
  --background: transparent;
  --color: var(--ion-background-color);
}

ion-content {
  --padding-bottom: 122px;
  --padding-start: 18px;
  --padding-end: 18px;
}

/* .content-border-radius {
  display: block;
  width: 100%;
  height: 30px;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
} */

 .content-border-radius {
  display: block;
  width: 100%;
  height: 30px;
  background: var(--ion-color-primary);
	position: relative;
}

.content-border-radius:after {
	content: '';
	display: block;
  width: 100%;
  height: 30px;
  background: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
}
</style>