<template>
  <ion-page v-if="!loading">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <div @click="goBack">
            <svg
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.24 11.1304L2.865 11.1304L10.74 19.0054L9.75 20.1304L-4.26186e-07 10.3804L9.75 0.630371L10.74 1.75537L2.865 9.63037L21.24 9.63037L21.24 11.1304Z"
                fill="#fff"
              />
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
              <img :src="logo" />
            </div>
            <div class="card-page__header-count">
              {{ bonuscard.shop_balance }}
            </div>
          </div>

          <div class="card-page__header-qr">
            <qrcode-vue
              v-if="qrCode"
              :value="qrCode"
              :size="140"
              level="H"
            />
          </div>
        </div>
        <div class="card-page__body">
          <div class="card-page__body-info">
            <div class="card-page__body-balance card-page__body-fh">
              <div class="card-page__body-title">Баланс счета:</div>
              <div class="card-page__body-value">
                {{ bonuscard.shop_balance }} сум
              </div>
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
                <span
                  class="card-page__body-value-btn"
                  @click="openModal(item)"
                >
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z"
                      stroke="#BEA68A"
                      stroke-width="0.833333"
                    />
                    <path
                      d="M8.00016 13.4168C8.23028 13.4168 8.41683 13.2303 8.41683 13.0002C8.41683 12.77 8.23028 12.5835 8.00016 12.5835C7.77004 12.5835 7.5835 12.77 7.5835 13.0002C7.5835 13.2303 7.77004 13.4168 8.00016 13.4168Z"
                      fill="#BEA68A"
                    />
                    <path
                      d="M8 11.3335V10.6193C8 10.0243 8.2975 9.4685 8.7925 9.1385L9.29167 8.80516C9.66324 8.55711 9.96791 8.22125 10.1787 7.82733C10.3894 7.43341 10.4998 6.99359 10.5 6.54683V6.3335C10.5 5.67045 10.2366 5.03457 9.76777 4.56573C9.29893 4.09689 8.66304 3.8335 8 3.8335C7.33696 3.8335 6.70107 4.09689 6.23223 4.56573C5.76339 5.03457 5.5 5.67045 5.5 6.3335"
                      stroke="#BEA68A"
                      stroke-width="0.833333"
                    />
                  </svg>
                </span>
                {{ item.amount }} сум
                <span>( {{ item.date_end }} )</span>
              </div>
            </div>

            <div
              class="card-page__body-balance card-page__body-fv"
              v-if="bonuscard.shop_present"
            >
              <div class="card-page__body-title-container">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                >
                  <mask
                    id="mask0_5351_516"
                    style="mask-type: alpha"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="16"
                    height="16"
                  >
                    <rect
                      width="16"
                      height="16"
                      fill="url(#pattern0_5351_516)"
                    />
                  </mask>
                  <g mask="url(#mask0_5351_516)">
                    <rect
                      y="-2.05176"
                      width="20.1026"
                      height="20.1026"
                      fill="url(#paint0_linear_5351_516)"
                    />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0_5351_516"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_5351_516"
                        transform="scale(0.00195312)"
                      />
                    </pattern>
                    <linearGradient
                      id="paint0_linear_5351_516"
                      x1="10.0513"
                      y1="-2.05176"
                      x2="10.0513"
                      y2="18.0508"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#BEA68A" />
                    </linearGradient>
                    <image
                      id="image0_5351_516"
                      width="512"
                      height="512"
                      preserveAspectRatio="none"
                      xlink:href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              	<div class="card-page__body-title">PODIUM GIFT BONUS:</div>
							</div>

              <div
                class="card-page__body-value"
                v-for="item in bonuscard.shop_present"
                :key="item"
              >
                <span
                  class="card-page__body-value-btn"
                  @click="openModal(item)"
                >
                  <svg
                    width="18"
                    height="17"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z"
                      stroke="#BEA68A"
                      stroke-width="0.833333"
                    />
                    <path
                      d="M8.00016 13.4168C8.23028 13.4168 8.41683 13.2303 8.41683 13.0002C8.41683 12.77 8.23028 12.5835 8.00016 12.5835C7.77004 12.5835 7.5835 12.77 7.5835 13.0002C7.5835 13.2303 7.77004 13.4168 8.00016 13.4168Z"
                      fill="#BEA68A"
                    />
                    <path
                      d="M8 11.3335V10.6193C8 10.0243 8.2975 9.4685 8.7925 9.1385L9.29167 8.80516C9.66324 8.55711 9.96791 8.22125 10.1787 7.82733C10.3894 7.43341 10.4998 6.99359 10.5 6.54683V6.3335C10.5 5.67045 10.2366 5.03457 9.76777 4.56573C9.29893 4.09689 8.66304 3.8335 8 3.8335C7.33696 3.8335 6.70107 4.09689 6.23223 4.56573C5.76339 5.03457 5.5 5.67045 5.5 6.3335"
                      stroke="#BEA68A"
                      stroke-width="0.833333"
                    />
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
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 17L1 1M17 1L1 17"
                    stroke="#1A1A1A"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <div class="modal-content">
            <div class="modal-text" v-if="item.note">
              {{ item.note }}
            </div>
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
  IonModal,
} from "@ionic/vue";
import { useRouter, useRoute } from "vue-router";
import QrcodeVue from "qrcode.vue";
import axios from 'axios';

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
    QrcodeVue,
  },
  data() {
    return {
      isModalOpen: false,
			item: null,
      shops: null,
      loading: true,
      qrCode: "",
    };
  },
  computed: {
    bonuscard() {
      return this.$store.getters.bonuscard?.[0] || null;
    },
    logo() {
      return `https://luxuryshopping.uz:7557/img/shop${this.bonuscard.id}.svg`;
    },
  },
  methods: {
    goBack() {
      this.$router.push('/tabs');
    },
    openModal(item) {
      this.isModalOpen = true;
      this.item = item;
      this.shops = item.shops;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    resetModal() {
      this.isModalOpen = false;
    },
    modalLink(id) {
      this.closeModal(), this.router.push({ path: `/cardpage/${id}` });
    },
    programLink() {
      this.closeModal(), this.router.push("/program");
    },

    async getQrCode() {
      const url = "/get-qr";

      const body = {
        phone: "+998901879309",
        shop: this.bonuscard.id
      };
      
      try {
        const response = await axios.post(url, body, {
          auth: {
            username: this.$config.username,
            password: this.$config.password,
          },
        });
        this.qrCode = response.data.qr;
        console.log(response.data.qr)
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.$store
      .dispatch("fetchBonusCard", {
        username: this.$config.username,
        password: this.$config.password,
        phone: this.$config.phone,
        shop_id: this.$route.params.id,
      })
      .then(() => {
        this.loading = false;
        this.getQrCode();
      });
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    return {
      router,
      route,
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
  content: "";
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
  --max-height: 60%;
  --max-width: 94%;
  --border-radius: 30px;
  --background: #fff !important;
}

ion-modal ion-toolbar {
  --background: #fff;
}

ion-modal ion-title {
  color: #0d0c0c;
  font-family: "TT Travels Next", sans-serif;
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
  background: #fff !important;
}

.modal-text {
  font-size: 16px;
  line-height: 21px;
  font-weight: 300;
}
.modal-text span {
  font-weight: 500;
  color: #bea68a;
}
.modal-text a {
  text-decoration: none;
}
</style>