<template>
	<ion-page v-if="!loading">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <div @click="goBack">
						<svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21.24 11.1304L2.865 11.1304L10.74 19.0054L9.75 20.1304L-4.26186e-07 10.3804L9.75 0.630371L10.74 1.75537L2.865 9.63037L21.24 9.63037L21.24 11.1304Z" fill="#fff"/>
						</svg>
					</div>
        </ion-buttons>
				<ion-title>
          <span class="header-title">{{ bonuscard.name }}</span>
        </ion-title>
      </ion-toolbar>
    </ion-header>
		<div class="content-border-radius"></div>
    <ion-content>
			<div class="card-page">
				<div class="card-page__header">
					<div class="card-page__header-top">
						<div class="card-page__header-logo">
							<img :src="logo">
						</div>
						<div class="card-page__header-count">{{ bonuscard.shop_balance }}</div>
					</div>

					<div class="card-page__header-qr">
						<qrcode-vue v-if="qrCode" :value="qrCode" :size="140" level="H" />
					</div>
				</div>
				<div class="card-page__body">
					<div class="card-page__body-info">
						<div class="card-page__body-balance card-page__body-fh">
							<div class="card-page__body-title">Баланс счета:</div>
							<div class="card-page__body-value">{{ bonuscard.shop_balance }} сум</div>
						</div>

						<div 
							class="card-page__body-balance card-page__body-fv"
							v-if="bonuscard.shop_deposit_brands"
						>
							<div class="card-page__body-title">PODIUM BONUS:</div>
							<div 
								class="card-page__body-value"
								v-for="item in bonuscard.shop_deposit_brands"
								:key="item"
							>
								{{ item.amount }} сум 
								<span>( {{ item.date_end }} )</span>
							</div>
						</div>

						<div 
							class="card-page__body-balance card-page__body-fv"
							v-if="bonuscard.shop_deposit_multi"
						>
							<div class="card-page__body-title">PODIUM MULTI BONUS:</div>

							<div 
								class="card-page__body-value"
								v-for="item in bonuscard.shop_deposit_multi"
								:key="item"
							>
								<span class="card-page__body-value-btn" @click="openModal(item.shops)">
									<svg width="18" height="17" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z" stroke="#BEA68A" stroke-width="0.833333"/>
										<path d="M8.00016 13.4168C8.23028 13.4168 8.41683 13.2303 8.41683 13.0002C8.41683 12.77 8.23028 12.5835 8.00016 12.5835C7.77004 12.5835 7.5835 12.77 7.5835 13.0002C7.5835 13.2303 7.77004 13.4168 8.00016 13.4168Z" fill="#BEA68A"/>
										<path d="M8 11.3335V10.6193C8 10.0243 8.2975 9.4685 8.7925 9.1385L9.29167 8.80516C9.66324 8.55711 9.96791 8.22125 10.1787 7.82733C10.3894 7.43341 10.4998 6.99359 10.5 6.54683V6.3335C10.5 5.67045 10.2366 5.03457 9.76777 4.56573C9.29893 4.09689 8.66304 3.8335 8 3.8335C7.33696 3.8335 6.70107 4.09689 6.23223 4.56573C5.76339 5.03457 5.5 5.67045 5.5 6.3335" stroke="#BEA68A" stroke-width="0.833333"/>
									</svg>
								</span>
								{{ item.amount }} сум 
								<span>( {{ item.date_end }} )</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ion-modal :is-open="isModalOpen" @ionModalDidDismiss="resetModal">
				<ion-header>
					<ion-toolbar>
						<ion-title>мульти депозит</ion-title>
						<ion-buttons slot="end">
							<ion-button @click="closeModal()">
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M17 17L1 1M17 1L1 17" stroke="#1A1A1A" stroke-width="2" stroke-linecap="round"/>
								</svg>
							</ion-button>
						</ion-buttons>
					</ion-toolbar>
				</ion-header>
				<ion-content class="ion-padding">
					<div class="modal-content">
						<div class="modal-text">
							Данный депозит может быть использован в магазинах: 
							<b v-for="(item, index) in shops" :key="item.id">
								<span @click="modalLink(item.shop_id)">
									{{ item.shop_name }}
								</span>
								<template v-if="index !== shops.length - 1">, </template>
							</b>
						</div>
						<div class="modal-text">
							С правилами использования депозитов можете ознакомиться 
							<span @click="programLink()">здесь.</span>
						</div>
					</div>
				</ion-content>
			</ion-modal>

		</ion-content>
	</ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
	IonButton,
  IonBackButton,
	IonTitle,
  IonContent,
	IonModal
} from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";
import QrcodeVue from "qrcode.vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
		IonButton,
    IonBackButton,
		IonTitle,
    IonContent,
		IonModal,
		QrcodeVue
  },
	data() {
		return {
			isModalOpen: false,
			shops: null,
			loading: true,
			qrCode: '',
		}
	},
	computed: {
		bonuscard() {
      return this.$store.getters.bonuscard?.[0] || null;
    },
		logo() {
			return `https://luxuryshopping.uz:7557/img/shop${this.bonuscard.id}.svg`;
		}
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
		openModal(shops) {
      this.isModalOpen = true;
			this.shops = shops;
    },
    closeModal() {
      this.isModalOpen = false;
    },
		resetModal() {
			this.isModalOpen = false;
		},
		modalLink(id) {
			this.closeModal(),
			this.router.push({ path: `/cardpage/${id}` })
		},
		programLink() {
			this.closeModal(),
			this.router.push('/program')
		},

		getCurrentDateNumber() {
      const baseDate = new Date(1899, 11, 30);
      const today = new Date();
      return Math.floor((today - baseDate) / (1000 * 60 * 60 * 24));
    },

    generateQRCode() {
      const phone = this.$config.phone.replace('+', '');
      const currentDate = this.getCurrentDateNumber();
      const phonePart1 = phone.slice(-6);
      const phonePart2 = phone.slice(0, phone.length - 6);
      
      const part1Multiplied = (parseInt(phonePart1) * currentDate).toString().padStart(11, '0');
      const part2Multiplied = (parseInt(phonePart2) * currentDate).toString().padStart(11, '0');
      
      let result = part1Multiplied + part2Multiplied + currentDate.toString().padStart(5, '0');

      const charSet = "OdhelasELbsdfNpWJmnzxU7R9SHosQq";
      const sumCheck = (str1, str2) => {
        const sum = parseInt(str1) + parseInt(str2);
        return charSet[sum % charSet.length];
      };
      
      const checks = [
        sumCheck(result[18], result[6]),
        sumCheck(result[2], result[5]),
        sumCheck(result[10], result[1]),
        sumCheck(result[16], result[19]),
      ];

      this.qrCode = result + checks.join('');
    },

    formatNumber(num) {
      return num.toString().padStart(11, "0");
    },
  },
  mounted() {
		this.$store.dispatch('fetchBonusCard', {
			username: this.$config.username,
			password: this.$config.password,
			phone: this.$config.phone,
			shop_id: this.$route.params.id
		}).then(() => {
			this.loading = false;
			this.generateQRCode();
		});
	},
	setup() {
		const router = useRouter();
		const route = useRoute();
		return {
			router,
			route
		};
	},
};
</script>

<style scoped>
ion-header {
	background: var(--ion-color-primary) !important;
}

ion-toolbar {
  --background: transparent;
  --color: var(--ion-background-color);
}

ion-content {
  --padding-bottom: 18px;
  --padding-start: 18px;
  --padding-end: 18px;
}

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


ion-modal {
	--max-height: 50%;
	--max-width: 94%;
	--border-radius: 30px;
}

ion-modal ion-toolbar {
	--background: #fff
}

ion-modal ion-title {
	color: #0D0C0C;
	font-family: 'TT Travels Next', sans-serif;
	font-weight: 600;
	font-size: 14px;
	line-height: 30px;
	text-transform: uppercase;
	text-align: center;
}

.modal-content {
	display: flex;
	flex-direction: column;
	gap: 24px;
}
.modal-text {
	font-size: 16px;
	line-height: 21px;
	font-weight: 300;
}
.modal-text span {
	font-weight: 500;
	color: #BEA68A;
}
.modal-text a {
	text-decoration: none;
}
</style>