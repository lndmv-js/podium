<template>
	<tab-layout :page-title="title" v-if="!loading">
		<div class="bonus-cards">
			<swiper
				:effect="'cards'"
				:grab-cursor="true"
				direction="vertical"
				:modules="modules"
				:cards-effect="cardsEffect"
				:initial-slide="initialSlide"
				@swiper="onSwiper"
			>
				<swiper-slide
					v-for="(card, index) in bonuscards"
					:key="card.id"
				>
					<div
						class="bonus-card"
						:style="{ background: calculateGradient(index, bonuscards.length) }"
						@click="() => router.push({ path: `/cardpage/${card.id}` })"
					>

						<div class="bonus-card__logo">
							<img :src="`https://luxuryshopping.uz:7557/img/shop${card.id}.svg`">
						</div>
						<div class="bonus-card__amount">{{ card.shop_balance }}</div>
						<div class="bonus-card__adress">{{ card.address }}</div>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</tab-layout>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { useRouter } from "vue-router";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
			title: 'Бонусные карты',
			loading: true,
			slider: null,
			cardsEffect: {
        rotate: 0, // Убираем наклон карточек
        perSlideOffset: 22, // Смещение карточек
				slideShadows: false
      }
    };
  },
	computed: {
		bonuscards() {
      return this.$store.getters.bonuscards;
    },
    initialSlide() {
			// return this.bonuscards.length - 1; // Индекс последнего слайда
    },
  },
  methods: {
		onSwiper(swiper) {
			this.slider = swiper;
		},
    calculateGradient(index, totalCards) {
      const lightGradient = [
        { r: 156, g: 156, b: 156 },
        { r: 214, g: 214, b: 214 },
        { r: 156, g: 156, b: 156 },
      ];
      const darkGradient = [
        { r: 26, g: 26, b: 26 },
        { r: 107, g: 107, b: 107 },
        { r: 26, g: 26, b: 26 },
      ];
      const gradientAngle = 100;

      function interpolateColor(color1, color2, factor) {
        return {
          r: Math.round(color1.r + (color2.r - color1.r) * factor),
          g: Math.round(color1.g + (color2.g - color1.g) * factor),
          b: Math.round(color1.b + (color2.b - color1.b) * factor),
        };
      }

      function generateGradient(lightGradient, darkGradient, factor) {
        return lightGradient.map((lightColor, index) => {
          const darkColor = darkGradient[index];
          const interpolated = interpolateColor(lightColor, darkColor, factor);
          return `rgba(${interpolated.r}, ${interpolated.g}, ${interpolated.b}, 1)`;
        });
      }

      const factor = index / (totalCards - 1);
      const gradientColors = generateGradient(lightGradient, darkGradient, factor);
      const startMidPoint = 30 + 40 * factor;

      return `linear-gradient(${gradientAngle}deg, ${gradientColors[0]} 0%, ${gradientColors[1]} ${startMidPoint}%, ${gradientColors[2]} 100%)`;
    },
  },
	setup() {
		const router = useRouter();
		return {
			modules: [EffectCards],
			router
		};
	},
  mounted() {
		this.$store.dispatch('fetchBonusCards', {
			username: this.$config.username,
			password: this.$config.password,
			phone: this.$config.phone
		}).then(() => {
			this.loading = false;
			setTimeout(() => {
				this.$nextTick(() => {
					if (this.slider) {
						this.slider.update();
					}
				});
			}, 50);
		});
	}
};
</script>