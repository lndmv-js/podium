<template>
  <ion-page>
    <ion-content>
      <div class="startpage">
        <div class="startpage__bg">
          <img src="../theme/img/start-page-bg.jpg" />
        </div>
        <div class="startpage__bottom">
          <div class="startpage__title">Добро пожаловать <br />в PODIUM!</div>
          <div class="startpage__buttons">
            <!-- Кнопка с кастомной анимацией -->
            <div class="startpage__login" @click="navigateWithCustomAnimation">
              Войти
            </div>
          </div>
          <div class="startpage__caption">
            Продолжая использовать приложение, вы даёте согласие <br />
            с <a @click="navigateToPolitics">Политикой конфиденциальности</a>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent } from "@ionic/vue";
import { useRouter } from "vue-router";
import { inject } from "vue";

export default {
  components: {
    IonPage,
    IonContent,
  },
  setup() {
    const router = useRouter();
    const isCustomAnimation = inject("isCustomAnimation");

    const navigateWithCustomAnimation = () => {
      isCustomAnimation.value = true; // Включаем кастомную анимацию
      router.push("/auth");
    };

    const navigateToPolitics = () => {
      isCustomAnimation.value = true; // Используем стандартную анимацию
      router.push("/politics");
    };

    return { navigateWithCustomAnimation, navigateToPolitics };
  },
};
</script>