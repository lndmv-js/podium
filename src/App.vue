<template>
  <ion-app>
    <Menu />
    <ion-router-outlet
      id="main-content"
      animated="true"
      :animation="isCustomAnimation ? customAnimation : undefined"
    />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { createAnimation } from "@ionic/vue";
import { ref, provide } from "vue";
import Menu from "@/components/main/Menu.vue";

export default {
  components: {
    IonApp,
    IonRouterOutlet,
    Menu,
  },
  created() {
    this.$store.dispatch('fetchShoplist', {
      username: this.$config.username,
      password: this.$config.password
    });
  },
  setup() {
    // Флаг для кастомной анимации
    const isCustomAnimation = ref(false);

    // Кастомная анимация
    const customAnimation = (baseEl, opts) => {
      const enteringEl = opts.enteringEl;
      const leavingEl = opts.leavingEl;
      const direction = opts.direction; // Направление перехода (forward или back)

      const rootAnimation = createAnimation();

      // Для входящей анимации (новый экран)
      const enteringAnimation = createAnimation()
        .addElement(enteringEl)
        .duration(300)
        .easing("ease-in-out")
        .keyframes([
          { offset: 0, transform: direction === 'forward' ? "translateY(100%)" : "translateY(-100%)", opacity: 0 },
          { offset: 1, transform: "translateY(0)", opacity: 1 },
        ]);

      // Для исходящей анимации (предыдущий экран)
      const leavingAnimation = createAnimation()
        .addElement(leavingEl)
        .duration(300)
        .easing("ease-in-out")
        .keyframes([
          { offset: 0, transform: "translateY(0)", opacity: 1 },
          { offset: 1, transform: direction === 'forward' ? "translateY(-100%)" : "translateY(100%)", opacity: 0 },
        ]);

      rootAnimation.addAnimation([enteringAnimation, leavingAnimation]);

      return rootAnimation;
    };

    // Предоставляем `isCustomAnimation` дочерним компонентам
    provide("isCustomAnimation", isCustomAnimation);

    return {
      isCustomAnimation,
      customAnimation,
    };
  },
};
</script>
