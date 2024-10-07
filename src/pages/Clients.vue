<template>
  <div class="main-page">
    <MainSidebar
      image="../image@2x.png"
      home="../home.svg"
      accountBalanceWallet="../account-balance-wallet1.svg"
      creditCardClock="../credit-card-clock.svg"
      locationCity="../location-city.svg"
      contractEdit="../contract-edit.svg"
      homeLinksTextDecoration="unset"
    />
    <main class="container">
      <div class="header">
        <div class="inner">
          <div class="text">
            <h4>{{ $t("Clients") }}</h4>
          </div>
          <div class="language-switcher">
            <select v-model="currentLanguage" @change="changeLanguage">
              <option
                v-for="(label, lang) in languages"
                :key="lang"
                :value="lang"
              >
                {{ label }}
              </option>
            </select>
          </div>
        </div>
        <div class="divider"></div>
        <div class="">
        </div>
        <InventoryTable />

      </div>
    </main>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import MainSidebar from "../components/MainSidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
import { useI18n } from "vue-i18n";
// import the styles
import InventoryTable from "../components/InventoryTable.vue";
import "../style.css";

export default defineComponent({
  name: "MainPage",
  components: { MainSidebar, apexchart: VueApexCharts,InventoryTable },

  data() {
    return {
      languages: {
        en: "English",
        uz: "Uzbek",
        ru: "Russian",
        fa: "Persian",
      },
      currentLanguage: "en",
      columns: [
        {
          field: "id",
          title: "ID",
          width: "90px",
          filter: false,
        },
        { field: "name", title: "Name" },
        { field: "username", title: "Username" },
        { field: "email", title: "Email" },
        { field: "phone", title: "Phone" },
        { field: "date", title: "Date", type: "date" },
        { field: "active", title: "Active", type: "bool" },
        { field: "age", title: "Age", type: "number" },
        {
          field: "address.city",
          title: "Address",
          search: true,
          cellRenderer: (item) => {
            return (
              item &&
              item.address?.street +
                ", " +
                item.address?.suite +
                "<br/><strong>" +
                item.address?.city +
                "</strong>" +
                "<br/><strong>" +
                "lat: " +
                item.address?.geo?.lat +
                "&nbsp;&nbsp; lng: " +
                item.address?.geo?.lng +
                "</strong>"
            );
          },
        },
        { field: "company.name", title: "Company" },
      ],
      rows: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
              lat: "-37.3159",
              lng: "81.1496",
            },
          },
          phone: "1-770-736-8031 x56442",
          website: "hildegard.org",
          company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets",
          },
          date: "Tue Sep 27 2022 22:19:57",
          active: true,
          age: 10,
        },
      ],
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
  mounted() {},
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
