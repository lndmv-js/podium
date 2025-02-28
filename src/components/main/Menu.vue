<template>
  <ion-menu content-id="main-content">
    <ion-content class="ion-content-menu">
      <ion-menu-toggle>
        <div class="close-menu-btn"></div>
      </ion-menu-toggle>
      <div class="menu-content">
        <ion-menu-toggle>
					<div class="menu-content__user" @click="() => router.push('/userpage')">
						<div class="menu-content__user-icon"></div>
						<div class="menu-content__user-title">Константин</div>
					</div>
        </ion-menu-toggle>
				
        <div class="menu-content__container">
					<ion-menu-toggle>
          	<div class="menu-content__link" @click="() => router.push('/shoplist')">Адреса магазинов</div>
					</ion-menu-toggle>
					<ion-menu-toggle>
          	<div class="menu-content__link" @click="() => router.push('/program')">Программа лояльности</div>
					</ion-menu-toggle>
					<ion-menu-toggle>
          	<div class="menu-content__link" @click="() => router.push('/politics')">Политика конфиденциальности</div>
					</ion-menu-toggle>
        </div>
      </div>
    </ion-content>
  </ion-menu>
</template>

<script>
import {
  IonMenu,
  IonContent,
  IonMenuToggle
} from "@ionic/vue";

import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    IonMenu,
    IonContent,
    IonMenuToggle
  },
  setup() {
    const router = useRouter();
    return { router };
  }
});
</script>