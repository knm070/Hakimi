<template>
  <div class="main-page">
    <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
    <main class="container">
      <div class="header">
        <div class="inner">
          <div class="text">
            <h4>{{ $t("main_page") }}</h4>
          </div>
          <div class="language-switcher">
            <select v-model="currentLanguage" @change="changeLanguage">
              <option v-for="(label, lang) in languages" :key="lang" :value="lang">
                {{ label }}
              </option>
            </select>
          </div>
        </div>
        <div class="divider"></div>
      </div>
    </main>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import TableContainer from "../components/TableContainer.vue";
import MainSidebar from "../components/MainSidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "MainPage",
  components: { MainSidebar, TableContainer, apexchart: VueApexCharts },

  data() {
    return {
      languages: {
        en: "English",
        uz: "Uzbek",
        ru: "Russian",
        fa: "Persian",
      },
      currentLanguage: "en",
    };
  },
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
  methods: {
    changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
 
  },
  mounted() {
  },
});
</script>

<style scoped>
.main-page {
  display: flex;
  background-color: var(--background-background-gray);
  height: 100%;
  color: inherit;
}
.container {
  margin: auto;
  width: 100%;
}
.header {
  background-color: white;
  border-radius: 20px;
  margin: 1rem;
  padding: 1.2rem;
  width: auto;
  height: 100%;
}
.inner {
  display: flex;
}
.header .account-btn {
  color: #72908d;
  border: 2px solid #72908d;
  background-color: #b9c7c6;
  padding: 1rem;
  border-radius: 50%;
  font-weight: bold;
}
.header .text {
  width: 100%;
}

.language-switcher button {
  margin: 0 5px;
}
</style>
