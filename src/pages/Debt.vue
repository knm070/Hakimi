<template>
  <div class="main-page">
    <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
    <main class="container">
      <div class="header">
        <div class="inner">
          <div class="text">
            <h4>{{ $t("debt") }}</h4>
            <p>{{ $t("monitor_projects") }}</p>
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
        <div class="debt">
          <div>
            <!-- Navigation Buttons -->
            <div class="navigation">
              <button class="prev-btn" @click="previousPeriod">← {{ $t("prev") }}</button>
              <div class="current-month">
                <h6>{{ monthYearDisplay }}</h6>
              </div>
              <button class="next-btn" @click="nextPeriod">{{ $t("next") }} →</button>
            </div>
            <!-- Switch Buttons -->
            <div class="time-period-switch">
              <button :class="{ active: timePeriod === 'daily' }" @click="setTimePeriod('daily')">{{ $t("daily") }}</button>
              <button :class="{ active: timePeriod === 'monthly' }" @click="setTimePeriod('monthly')">{{ $t("monthly") }}</button>
              <button :class="{ active: timePeriod === 'yearly' }" @click="setTimePeriod('yearly')">{{ $t("yearly") }}</button>
            </div>
            <!-- Column Chart -->
            <div id="chart">
              <apexchart type="bar" :options="chartOptions" :series="chartSeries" height="400"></apexchart>
            </div>
            <!-- Table -->
            <table class="styled-table">
              <thead>
                <tr>
                  <th>{{ $t("first_name") }}</th>
                  <th>{{ $t("last_name") }}</th>
                  <th>{{ $t("company_name") }}</th>
                  <th>{{ $t("payment_date") }}</th>
                  <th>{{ $t("debt_amount") }}</th>
                  <th>{{ $t("delay_period_days") }}</th>
                  <th>{{ $t("max_delay_period_days") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(client, index) in paginatedData" :key="index">
                  <td>{{ client.contract__client_individual__first_name }}</td>
                  <td>{{ client.contract__client_individual__last_name }}</td>
                  <td>{{ client.contract__client_legal__company_name || "N/A" }}</td>
                  <td>{{ client.payment_date }}</td>
                  <td>{{ client.total_debt_amount.toLocaleString() }}</td>
                  <td>{{ client.delay_period }}</td>
                  <td>{{ client.max_delay_period }}</td>
                </tr>
              </tbody>
            </table>
            <div class="pagination-container">
              <!-- Items per page dropdown -->
              <div class="pagination-container" style="width: 30%; text-wrap: nowrap">
                <label for="perPage">Items per page:</label>
                <select id="perPage" v-model="perPage" @change="changeItemsPerPage">
                  <option v-for="option in [5, 10, 15, 20]" :key="option" :value="option">{{ option }}</option>
                </select>
              </div>
              <!-- Pagination Controls -->
              <div class="pagination-container">
                <button class="pagination-btn" @click="goToPage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
                <span>Page {{ currentPage }} of {{ totalPages }}</span>
                <button class="pagination-btn" @click="goToPage(currentPage + 1)" :disabled="currentPage === totalPages">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";

export default {
  name: "Debt",
  components: { Sidebar, apexchart: VueApexCharts },

  data() {
    return {
      languages: {
        en: "English",
        uz: "Uzbek",
        ru: "Russian",
        fa: "Persian",
      },
      currentLanguage: "en",
      clients_table: [],
      yearly_chart: [],
      daily_chart: [],
      monthly_chart: [],
      currentPage: 1, // Current active page
      perPage: 5, // Items per page
      searchQuery: "",
      timePeriod: "daily",
      currentMonth: new Date(),
      chartSeries: [],
      chartOptions: {
        chart: {
          type: "bar",
          height: 400,
        },
        toolbar: {
      tools: {
        zoom: false,   // Disable the zoom tool in the toolbar
        zoomin: false, // Disable zoom in
        zoomout: false, // Disable zoom out
        pan: false,    // Disable pan
      },
    },
        plotOptions: {
          bar: {
            borderRadius: 5,
            horizontal: false,
            columnWidth: "60%",
          },
        },
        colors: ["#00BA34"],
        yaxis: {
          categories: [],
          title: {
            text: "Values",
          },
        },
        xaxis: {},
        title: {
          text: "Data Overview",
          align: "left",
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "top",
        },
      },
    };
  },
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
  computed: {
    monthYearDisplay() {
      if (this.timePeriod === "monthly") {
        return this.currentMonth.getFullYear();
      } else if (this.timePeriod === "yearly") {
        const startYear = this.currentMonth.getFullYear() - 4;
        const endYear = this.currentMonth.getFullYear();
        return `${startYear} - ${endYear}`;
      }
      const options = { year: "numeric", month: "long" };
      return this.currentMonth.toLocaleDateString(undefined, options);
    },
    totalPages() {
      return Math.ceil(this.clients_table.length / this.perPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = this.currentPage * this.perPage;
      return this.clients_table.slice(start, end);
    },
  },
  methods: {
    changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    setTimePeriod(period) {
      this.timePeriod = period;
      this.updateChartData();
    },
    getDaysOfMonth(date) {
      const start = new Date(date.getFullYear(), date.getMonth(), 1);
      const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
      const days = [];
      for (let i = start.getDate(); i <= end.getDate(); i++) {
        days.push(`${i}`);
      }
      return days;
    },
    getMonthsOfYear() {
      return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    },
    getYears() {
      const currentYear = this.currentMonth.getFullYear();
      return Array.from({ length: 5 }, (_, i) => `${currentYear - 4 + i}`);
    },
    generateRandomData(count) {
      return Array.from({ length: count }, () => Math.floor(Math.random() * 100) + 1);
    },
    updateChartData() {
      let new_categories = [];
      let data = [];

      if (this.timePeriod === "daily") {
        new_categories = this.daily_chart.map((yearData) => yearData.datetime__date);
        data = this.daily_chart.map((yearData) => yearData.debt_amount);
        this.chartOptions.title.text = "Daily Data Overview";
      } else if (this.timePeriod === "monthly") {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        new_categories = this.monthly_chart.map(
          (monthData) => {
            const monthIndex = monthData.datetime__month - 1; // Month index should be 0-based
            // Ensure monthIndex is within the range 0-11
            return monthIndex >= 0 && monthIndex < 12 ? monthNames[monthIndex] : "Unknown";
          } );
         // Ensure monthly_chart data exists and is valid
      // if (this.monthly_chart && Array.isArray(this.monthly_chart)) {
      //   this.chartOptions.xaxis.categories = this.monthly_chart.map(
      //     (monthData) => monthNames[monthData.datetime__month - 1] || 'Unknown'
      //   );};
        data =  this.monthly_chart.map(
          (monthData) => monthData.debt_amount || 0
        );
        this.chartOptions.title.text = "Monthly Data Overview";
      } else if (this.timePeriod === "yearly") {
        new_categories = this.yearly_chart.map((yearData) => yearData.datetime__year);
        data = this.yearly_chart.map((yearData) => yearData.debt_amount);

        this.chartOptions.title.text = "Yearly Data Overview";
      }
      console.log("Data" + data);
      console.log("Category" + new_categories);
      console.log("Daily chart" + this.yearly_chart.map((yearData) => yearData.debt_amount));
      this.chartOptions.xaxis.categories = new_categories;
      this.chartSeries = [{ name: "Data", data }];
      this.chartOptions = {
        ...this.chartOptions,
        xaxis: {
          categories: new_categories,
        },
      };
    },
    previousPeriod() {
      if (this.timePeriod === "daily") {
        this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
      } else if (this.timePeriod === "monthly") {
        this.currentMonth.setFullYear(this.currentMonth.getFullYear() - 1);
      } else if (this.timePeriod === "yearly") {
        this.currentMonth.setFullYear(this.currentMonth.getFullYear() - 5);
      }
      this.updateChartData();
    },
    nextPeriod() {
      if (this.timePeriod === "daily") {
        this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
      } else if (this.timePeriod === "monthly") {
        this.currentMonth.setFullYear(this.currentMonth.getFullYear() + 1);
      } else if (this.timePeriod === "yearly") {
        this.currentMonth.setFullYear(this.currentMonth.getFullYear() + 5);
      }
      this.updateChartData();
    },
    changeItemsPerPage() {
      this.currentPage = 1; // Reset to first page when items per page changes
    },
  },
  mounted() {
    axios
      .get("/contract/debts/statistics/clients/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.clients_table = res.data;
        this.updateChartData(); // Initialize chart data
      }),
      axios
        .get("https://api.hakimi.itic.uz/contract/debts/statistics/2024/9/yearly", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.yearly_chart = res.data;
          this.updateChartData(); // Initialize chart data
          console.table("YEarly " + this.yearly_chart);
        }),
      axios
        .get("https://api.hakimi.itic.uz/contract/debts/statistics/2024/9/monthly", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.monthly_chart = res.data;
          this.updateChartData(); // Initialize chart data
        }),
      axios
        .get("https://api.hakimi.itic.uz/contract/debts/statistics/2024/9/daily", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          this.daily_chart = res.data;
          this.updateChartData(); // Initialize chart data
        });
  },
};
</script>

<style scoped>
.v-data-table {
  overflow: auto;
}
.current-month {
  text-align: center;
  margin-bottom: 20px;
}

.controls {
  margin-bottom: 20px;
}

select {
  padding: 10px;
  font-size: 16px;
}

.navigation {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

button {
  padding: 8px;
  font-size: 14px;
  margin-left: 5px;
}
.time-period-switch {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.time-period-switch button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  background-color: #f0f0f0;
  color: #333;
  cursor: pointer;
  margin-right: 5px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.time-period-switch button.active {
  background-color: #007bff;
  color: #fff;
}

.time-period-switch button:hover {
  background-color: #e0e0e0;
}
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.prev-btn,
.next-btn {
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.prev-btn:hover,
.next-btn:hover {
  background-color: #0056b3;
}
.styled-table {
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 14px;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 10px 10px;
}
.styled-table thead tr {
  background-color: #f4f6f6;
  color: inherit;
  text-align: left;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}
.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}
.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid --background-background-gray;
}

.pagination-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.pagination-btn {
  /* background-color: #007bff; */
  color: inherit;
  border: none;
  padding: 10px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  margin: 0 10px;
}

.border {
  border: 1px solid lightgray;
  border-radius: 20px;
  padding: 0.5rem;
  height: 100%;
}
</style>
