<template>
  <div class="main-page">
    <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
    <main class="container">
      <div class="header">
        <div class="inner">
          <div class="text">
            <h4>{{ $t('main_page') }}</h4>
            <p>{{ $t('monitor_projects') }}</p>
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
        <div class="statistics">
          <div class="row cards">
          <div class="col-2 text-center">
          <h4 class="mt-3">Good day,</h4>
          <h4>Xusnora Odilova</h4>
          </div>
            <div class="col-3 card orange">
              <p>{{ $t('monthly_arrears') }}</p>
              <div class="amount">{{ this.monthly_debt }} UZS</div>
            </div>
            <div class="col-3 card rad">
              <p>{{ $t('total_arrears') }} (UZS)</p>
              <div class="amount">{{ this.total_debt }} UZS</div>
            </div>

            <div class="col-3 card green">
              <p>{{ $t('client_balance') }}(UZS)</p>
              <div class="amount">{{ this.balance }} UZS</div>
            </div>
          </div>
          <div class="row">
            <div class="col-6">
              <div class="payments mt-3">
                <h3>{{ $t('payments') }}</h3>
                <div class="divider mt-3 mb-3"></div>
                <div class="details">
                  <div class="text-green mb-2"><h5>{{ $t('today_situation') }}</h5></div>
                  <h3>{{ total_payment }}</h3>
                </div>
                <div id="chart">
                  <apexchart type="donut" :options="pie_Options" :series="pie_series" height="400" :legend="pie_Options.legend"></apexchart>
                  <!-- Table Below the Chart -->
                  <div class="chart-legend">
                    <ul>
                      <li v-for="(value, index) in pie_series" :key="index">
                        <span :style="{ backgroundColor: pie_Options.pie_colors[index] }" class="color-box"></span>
                        <span class="label">{{ pie_Options.labels[index] }}:</span>
                        <span class="value">{{ value }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="payment_details mt-3">
                <h6>{{ $t('on_sale')}}</h6>
                <div class="divider"></div>
                <ul>
                  <li>
                    <span class="w-100">{{ $t('house')}}:</span>
                    <span>{{ apartments_data.on_sale.House }}</span>
                  </li>
                  <li>
                    <span class="w-100">{{ $t('basement')}}:</span>
                    <span>{{ apartments_data.on_sale.Basement }}</span>
                  </li>
                  <li>
                    <span class="w-100">{{ $t('shop')}}:</span>
                    <span>{{ apartments_data.on_sale.Shop }}</span>
                  </li>
                  <li>
                    <span class="w-100">{{ $t('parking')}}:</span>
                    <span>{{ apartments_data.on_sale.Parking }}</span>
                  </li>
                </ul>
              </div>
              <div class="payment_details mt-3">
                <h6>{{ $t('sold_out')}} </h6>
                <div class="divider"></div>
                <ul>
                  <li>
                    <span class="w-100">{{ $t('house')}}:</span>
                    <span>{{ apartments_data.sold_out.House }}</span>
                  </li>
                  <li>
                    <span class="w-100">{{ $t('basement')}}:</span>
                    <span>{{ apartments_data.sold_out.Basement }}</span>
                  </li>
                  <li>
                    <span class="w-100">{{ $t('shop')}}:</span>
                    <span>{{ apartments_data.sold_out.Shop }}</span>
                  </li>
                  <li>
                    <span class="w-100">{{ $t('parking')}}:</span>
                    <span>{{ apartments_data.sold_out.Parking }}</span>
                  </li>
                </ul>
              </div>
              <div class="payment_details mt-3">
                <h6>{{ $t('ordered')}}</h6>
                <div class="divider"></div>
                <ul>
                  <li>
                    <span class="w-100">{{ $t('house')}}:</span>
                    <span>{{ apartments_data.ordered.House }}</span>
                  </li>
                  <li>
                    <span class="w-100">{{ $t('basement')}}:</span>
                    <span>{{ apartments_data.ordered.Basement }}</span>
                  </li>
                  <li>
                    <span class="w-100">{{ $t('shop')}}:</span>
                    <span>{{ apartments_data.ordered.Shop }}</span>
                  </li>
                  <li>
                    <span class="w-100">{{ $t('parking')}}:</span>
                    <span>{{ apartments_data.ordered.Parking }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import TableContainer from "../components/TableContainer.vue";
import Sidebar from "../components/Sidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "MainPage",
  components: { Sidebar, TableContainer, apexchart: VueApexCharts },

  data() {
    return {
      languages: {
        en: "English",
        uz: "Uzbek",
        ru: "Russian",
        fa: "Persian",
      },
      currentLanguage: "en",
      total_payment: 0,
      balance: 0,
      total_debt: 0,
      monthly_debt: 0,
      apartments_data: {
        on_sale: {
          House: 0,
          Basement: 0,
          Shop: 0,
          Parking: 0,
        },
        sold_out: {
          House: 0,
          Basement: 0,
          Shop: 0,
          Parking: 0,
        },
        ordered: {
          House: 0,
          Basement: 0,
          Shop: 0,
          Parking: 0,
        },
      },
      payment_stats: [],
      pie_series: [],
      // pie_series: [44, 55, 41, 17, 15],
      // pie_labels:  ["Payment", "Terminal", "Cash", "P2P", "Bank", "Other"],
      dataLabels: {
        enabled: false,
      },
      pie_Options: {
        chart: {
          type: "donut",
        },
        pie_colors: ["#00E396", "#FF4560", "#FEB019", "#775DD0", "#008FFB"],

        // labels: ["Payment", "Terminal", "Cash", "P2P", "Bank", "Other"],
        labels: [],
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100%", // Adjust the width of the chart
                height: "300px", // Adjust the height of the chart
              },
              legend: {
                show: true,
              },
              dataLabels: {
                enabled: false,
              },
            },
          },
        ],
      },
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
    async fetchPaymentStats() {
      try {
        const response = await axios.get("/statistics/payment/today", {
        });
        const data = response.data;
        this.pie_series = [data.terminal, data.cash, data.p2p, data.bank, data.other]; // Remove zero values
        this.pie_labels = ["Terminal", "Cash", "P2P", "Bank", "Other"]; // Filter labels corresponding to non-zero values
        this.total_payment = data.total_payment.toLocaleString();
        this.pie_Options.labels = this.pie_labels; // Update the chart options with new labels
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {
    this.fetchPaymentStats();
    axios
      .get("/projects/apartment/condition", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        this.apartments_data = res.data;
      }),
    axios
      .get("/accounts/balance", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        this.balance = res.data.balance_of_client.toLocaleString();
      }),
    axios
      .get("/statistics/debts/total", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then((res) => {
        this.monthly_debt = res.data.monthly_debt.toLocaleString();
        this.total_debt = res.data.total_debts.toLocaleString();
      });
     
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
.statistics .card {
  border-radius: 20px;
  padding: 1rem;
  /* height: 120px; */
  margin: auto;
  border: 0;
  color: white;
}
.card .amount {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 8px;
  padding: 1rem;
  font-weight: bold;

  margin-bottom: 0.5rem;
}
.cards {
  margin-top: 1rem;
}
.cards .orange {
  background-color: #fb923c;
}
.cards .rad {
  background-color: #f87171;
}
.cards .green {
  background-color: #4ade80;
}
.statistics .payments,
.payment_details {
  border: 1px solid lightgray;
  border-radius: 20px;
  padding: 1rem;
  height: 100%;
}
.payment_details {
  height: auto;
}
.color-box {
  width: 15px;
  height: 15px;
  display: inline-block;
  margin-right: 10px;
  border-radius: 50%;
}
.chart-legend .label {
  /* font-weight: bold; */
  margin-right: 10px;
  width: 100%;
}

.value {
  margin-left: 5px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: list-item;
  /* border-radius: 20px; */

  /* justify-content: center; */
}

li {
  display: flex;
  align-items: center;
  margin: 0 15px;
  padding: 0.5rem;
  /* width: fit-content; */
}
.language-switcher button {
  margin: 0 5px;
}
</style>
