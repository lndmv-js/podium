<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <div @click="goBack">
						<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21.24 11.1304L2.865 11.1304L10.74 19.0054L9.75 20.1304L-4.26186e-07 10.3804L9.75 0.630371L10.74 1.75537L2.865 9.63037L21.24 9.63037L21.24 11.1304Z" fill="#BEA68A"/>
						</svg>
					</div>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
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
  IonBackButton,
  IonContent
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonContent
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
ion-toolbar {
  --background: #fff;
}
ion-content {
	--padding-top: 30px; 
	--padding-bottom: 30px; 
  --padding-start: 18px;
  --padding-end: 18px;
}
</style>