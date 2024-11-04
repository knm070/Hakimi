<template>
  <div class="payments-page">
    <Sidebar image="../logo.svg" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
    <main class="container">
      <div class="header">
        <div class="inner">
          <div class="text">
            <h4>{{ $t("payments") }}</h4>
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
        <div class="payments-data">
          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="simple-tab-0" data-bs-toggle="tab" href="#simple-tabpanel-0" role="tab" aria-controls="simple-tabpanel-0" aria-selected="true">{{ $t("payments") }}</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="simple-tab-1" data-bs-toggle="tab" href="#simple-tabpanel-1" role="tab" aria-controls="simple-tabpanel-1" aria-selected="false">{{ $t("payment_period") }}</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="simple-tab-2" data-bs-toggle="tab" href="#simple-tabpanel-2" role="tab" aria-controls="simple-tabpanel-2" aria-selected="false">{{ $t("monthly_payment_schedule") }}</a>
            </li>
          </ul>
          <div class="tab-content pt-2" id="tab-content">
            <div class="tab-pane active" id="simple-tabpanel-0" role="tabpanel" aria-labelledby="simple-tab-0">
              <div id="chart">
                <apexchart type="bar" :options="chartOptions" :series="series" height="350"></apexchart>
              </div>
              <!-- Table -->
              <table class="styled-table">
                <thead>
                  <tr>
                    <th>{{ $t("date") }}</th>
                    <th>{{ $t("payment") }}</th>
                    <th>{{ $t("terminal") }}</th>
                    <th>{{ $t("cash") }}</th>
                    <th>{{ $t("money_transfer") }}</th>
                    <th>{{ $t("bank") }}</th>
                    <th>{{ $t("other") }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in paymentData" :key="index">
                    <td>{{ item.datetime__date }}</td>
                    <td>{{ item.payment }}</td>
                    <td>{{ item.terminal }}</td>
                    <td>{{ item.cash }}</td>
                    <td>{{ item.p2p }}</td>
                    <td>{{ item.bank }}</td>
                    <td>{{ item.other }}</td>
                  </tr>
                </tbody>
              </table>

              <div class="" style="display: flex">
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
            <div class="tab-pane" id="simple-tabpanel-1" role="tabpanel" aria-labelledby="simple-tab-1">
              <div class="row pt-2">
                <div class="col-6 border">
                  <h5 class="text-center">{{ $t("payment_period") }}</h5>
                  <table>
                    <thead>
                      <tr>
                        <th>Status</th>
                        <th>Number of Contracts</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Total paying contracts</td>
                        <td>{{ this.Deadline_data.total_paying_contracts }}</td>
                      </tr>
                      <tr>
                        <td>On Time</td>
                        <td>{{ this.Deadline_data.on_time }}</td>
                      </tr>
                      <tr>
                        <td>Late (Last One Month)</td>
                        <td>{{ this.Deadline_data.last_one_month }}</td>
                      </tr>
                      <tr>
                        <td>Late (Last Three Months)</td>
                        <td>{{ this.Deadline_data.late_three_months }}</td>
                      </tr>
                      <tr>
                        <td>Late (Last One Year)</td>
                        <td>{{ this.Deadline_data.late_one_year }}</td>
                      </tr>
                      <tr>
                        <td>Late (More Than One Year)</td>
                        <td>{{ this.Deadline_data.late_more_than_year }}</td>
                      </tr>
                      <tr>
                        <td>Not Paid</td>
                        <td>{{ this.Deadline_data.not_paid }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="col-6 border">
                  <div class="top d-flex justify-content-space-between">
                    <h6 class="pt-2">{{ $t("expected_payments") }}</h6>
                    &nbsp &nbsp
                    <select class="form-select" aria-label="Default select example" style="width: 4rem; font-size: 14px">
                      <option selected>UZS</option>
                      <option value="1">USD</option>
                    </select>
                    <VueDatePicker v-model="month" month-picker />
                    <select class="form-select" aria-label="Default select example" style="width: fit-content; font-size: 14px">
                      <option selected>{{ $t("all_residential_complexes") }}</option>
                      <option value="1">Hakimi Towers</option>
                    </select>
                  </div>
                  <div class="divider"></div>
                  <div class="content">
                    <h6 class="pt-2 mb-2">{{ $t("expected_payments") }}</h6>
                  </div>
                  <div class="block gray mt-3">{{ (expecting_payments.full_payment ?? 0).toLocaleString() }} soum</div>
                  <div class="blocks mt-3">
                    <div class="block purple"></div>
                    <div class="block orange"></div>
                  </div>
                  <div class="d-flex text-bold mt-2" style="justify-content: space-between">
                    <div class="text-purple">{{ (expecting_payments.paid ?? 0).toLocaleString() }} soum</div>
                    <div class="text-orange">{{ (expecting_payments.expecting_payment ?? 0).toLocaleString() }} soum</div>
                  </div>
                  <div class="content">
                    <h6 class="pt-2 mb-2">{{ $t("overdue_payments_schedule") }}</h6>
                  </div>
                  <div class="block gray mt-3">{{ (expecting_payments.overdue_payments ?? 0).toLocaleString() }} soum</div>
                  <div class="blocks mt-3">
                    <div class="block purple"></div>
                    <div class="block orange"></div>
                  </div>
                  <div class="d-flex text-bold mt-2" style="justify-content: space-between">
                    <div class="text-purple">{{ expecting_payments.overdue_paid ?? 0 }} soum</div>
                    <div class="text-orange">{{ (expecting_payments.overdue_expecting_payments ?? 0).toLocaleString() }} soum</div>
                  </div>
                  <div class="info d-flex mt-4" style="justify-content: center">
                    <div class="Ellipse1" style="width: 16px; height: 16px; background: #8b62ff; border-radius: 50%; margin-top: 4px"></div>
                    <p>{{ $t("payments") }}</p>
                    <div class="Ellipse1 ml-2" style="width: 16px; height: 16px; background: #f7b91e; border-radius: 50%; margin-top: 4px"></div>
                    <span>{{ $t("expected_payments") }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="simple-tabpanel-2" role="tabpanel" aria-labelledby="simple-tab-2">
              <div style="display: flex">
                <VueDatePicker v-model="date" range :multiCalendars="true" />
                <p style="display: none">Selected Date Range: {{ date }}</p>
                <select class="form-select ml-5" aria-label="Default select example" style="width: 100%; font-size: 14px">
                  <option selected>{{ $t("all_residential_complexes") }}</option>
                  <option value="1">Hakimi Towers</option>
                </select>
              </div>
              <apexchart type="bar" height="350" :options="barOptions" :series="barSeries"></apexchart>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import TableContainer from "../components/TableContainer.vue";
import Sidebar from "../components/Sidebar.vue";
// import DeadlineChart from "../components/DeadlineChart.vue";
import VueApexCharts from "vue3-apexcharts";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import dayjs from "dayjs"; // For handling date formatting
import axios from "axios";
import { useI18n } from "vue-i18n";

export default {
  name: "Payments",
  components: { Sidebar, TableContainer, apexchart: VueApexCharts, VueDatePicker },
  data() {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    return {
      languages: {
        en: "English",
        uz: "Uzbek",
        ru: "Russian",
        fa: "Persian",
      },
      currentLanguage: "en",
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      selectedDate: [startDate, endDate],
      barSeries: [
        {
          name: "Plan (monthly payment schedule)",
          data: [],
        },
        {
          name: "Payments",
          data: [],
        },
      ],
      barOptions: {
        chart: {
          type: "bar",
          stacked: false,
        },
        toolbar: {
          tools: {
            zoom: false, // Disable the zoom tool in the toolbar
            zoomin: false, // Disable zoom in
            zoomout: false, // Disable zoom out
            pan: false, // Disable pan
          },
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#FECB48", "#00BA34"],
        xaxis: {
          categories: [],
          title: {
            text: "Months",
          },
        },
        yaxis: {
          title: {
            text: "Amount (soum)",
          },
        },
        legend: {
          position: "top",
        },
        title: {
          text: "Monthly Payments (2023-2024)",
        },
      },
      series: [],
      chartOptions: {
        chart: {
          type: "bar",
          stacked: false,
        },
        toolbar: {
          tools: {
            zoom: false, // Disable the zoom tool in the toolbar
            zoomin: false, // Disable zoom in
            zoomout: false, // Disable zoom out
            pan: false, // Disable pan
          },
        },
        xaxis: {
          categories: [], // Full dates (YYYY-MM-DD)
          labels: {
            show: true,
            rotate: -45, // Rotate labels to avoid overlap
          },
          tickAmount: "dataPoints", // Ensures that a tick is placed for each data point
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          labels: {
            style: {
              colors: ["#000000"], // Y-axis label color set to black
              fontSize: "12px",
            },
          },
        },

        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        fill: {
          opacity: 1,
        },
        title: {
          text: "Payments Statistics",
          align: "center",
        },
      },
      currentPage: 1,
      perPage: 5,
      expecting_payments: [],
      Deadline_data: [],
      deadline: [],
      total_paying_contracts: [],
      statistic_payment: [],
      paymentData: [],
      date: null,
    };
  },
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.paymentData.length / this.perPage);
    },
    paginatedData() {
      const start = (this.currentPage - 1) * this.perPage;
      const end = this.currentPage * this.perPage;
      return this.paymentData.slice(start, end);
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
    changeItemsPerPage() {
      this.currentPage = 1;
    },
    async fetchPaymentDeadlineStats() {
      try {
        const response = await axios.get("/statistics/payment/deadline");
        this.Deadline_data = response.data;
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    },
    async fetchPaymentData() {
      try {
        const response = await axios.get("/statistics/payment/monthly/2023/2024");
        const data = response.data;

        const expectingPayments = [];
        const paidPayments = [];
        const months = [];

        data.forEach((entry) => {
          // Adjust month value if necessary (ensure 1-indexing)
          const monthYear = dayjs()
            .set("month", entry.month - 1) // Adjust for 1-based month
            .set("year", entry.year)
            .format("MMM YYYY");

          months.push(monthYear);
          expectingPayments.push(entry.expecting_payment || 0);
          paidPayments.push(entry.paid || 0);
        });

        // Update the chart data
        this.barSeries[0].data = expectingPayments;
        this.barSeries[1].data = paidPayments;

        // Ensure the categories are set to the formatted months
        this.barOptions = {
          ...this.barOptions,
          xaxis: {
            ...this.barOptions.xaxis,
            categories: months, // Set the formatted month-year categories
          },
        };

        console.log("months : " + months);
      } catch (error) {
        console.error("Error fetching payment data:", error);
      }
    },

    async fetchData() {
      try {
        const currentDate = dayjs(); // Get current date
        const year = currentDate.year(); // Get current year
        const month = currentDate.month() + 1; // Get current month (months are 0-based in dayjs, so add 1)

        // Fetch data from the API
        const response = await axios.get(`/statistics/payment/statistic/?year=${year}&month=${month}`);
        this.paymentData = response.data.detail;

        const daysInMonth = currentDate.daysInMonth();

        // Create an array of all days in the month
        const allDays = Array.from({ length: daysInMonth }, (_, index) => dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"));

        // Initialize series arrays
        let paymentSeries = Array(daysInMonth).fill(0);
        let terminalSeries = Array(daysInMonth).fill(0);
        let cashSeries = Array(daysInMonth).fill(0);
        let p2pSeries = Array(daysInMonth).fill(0);
        let bankSeries = Array(daysInMonth).fill(0);
        let otherSeries = Array(daysInMonth).fill(0);
        let totalPaymentSeries = Array(daysInMonth).fill(0);

        // Populate the series arrays
        this.paymentData.forEach((item) => {
          const index = allDays.indexOf(item.datetime__date);
          if (index !== -1) {
            paymentSeries[index] = item.payment || 0;
            terminalSeries[index] = item.terminal || 0;
            cashSeries[index] = item.cash || 0;
            p2pSeries[index] = item.p2p || 0;
            bankSeries[index] = item.bank || 0;
            otherSeries[index] = item.other || 0;

            // Calculate total payment for each day
            totalPaymentSeries[index] = item.payment + item.terminal + item.cash + item.p2p + item.bank + item.other;
          }
        });

        // Directly update the chart with the total payment series data
        this.series = [
          {
            name: "Total Payment", // Series name data: totalPaymentSeries,
            data: paymentSeries,
          },
        ];

        // Update the chart x-axis categories with the days of the month
        this.chartOptions.xaxis.categories = allDays;

        // Configure the tooltip to display all categories on hover
        this.chartOptions.tooltip = {
          shared: true,
          intersect: false,
          custom: ({ series, seriesIndex, dataPointIndex, w }) => {
            const total = totalPaymentSeries[dataPointIndex];
            const payment = paymentSeries[dataPointIndex];
            const terminal = terminalSeries[dataPointIndex];
            const cash = cashSeries[dataPointIndex];
            const p2p = p2pSeries[dataPointIndex];
            const bank = bankSeries[dataPointIndex];
            const other = otherSeries[dataPointIndex];

            return `
          <div class="tooltip-container">
            <strong>Date: ${w.globals.categoryLabels[dataPointIndex]}</strong><br/>
            <strong>Total Payment: ${total}</strong><br/>
            <strong>Details:</strong><br/>
            Payment: ${payment}<br/>
            Terminal: ${terminal}<br/>
            Cash: ${cash}<br/>
            P2P: ${p2p}<br/>
            Bank: ${bank}<br/>
            Other: ${other}
          </div>
        `;
          },
        };
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
  mounted() {
    this.fetchPaymentData();
    this.fetchData();
    this.fetchPaymentDeadlineStats();
    axios
      .get("/statistics/payment/expecting/?year=2024&month=9", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.expecting_payments = res.data;
      })
      .catch((error) => {
        console.error("Error fetching expecting payments:", error);
      });
  },
};
</script>

<style scoped>
.filter-buttons {
  margin-bottom: 20px;
}

.filter-buttons button {
  margin-right: 10px;
}
.payments-page {
  display: flex;
  background-color: var(--background-background-gray);
  height: 100%;
  color: inherit;
}
.payments-data {
  border: 1px solid lightgray;
  border-radius: 20px;
  padding: 1rem;
  height: 100%;
}
.nav {
  display: flex;
}
.nav-item {
  /* padding: 4px 12px; */
  /* margin-right: 0.7rem; */
  background: #f4f6f6;
  border-radius: 6px;
  align-items: center;
  border: none;
  cursor: pointer; /* Show a pointer cursor on hover */
  color: #72908d; /* Text color */
  outline: none; /* Remove default focus outline */
  transition: background 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
  color: inherit;
}

.pay-btn:hover {
  background: #e0e3e3; /* Slightly darker background on hover */
}

.pay-btn:focus {
  box-shadow: 0 0 0 2px rgba(114, 189, 183, 0.5); /* Focus ring for accessibility */
}
.payment-period {
  word-wrap: break-word; /* Ensure long words break correctly */
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
.tab-pane {
  padding-top: 2px !important;
}
.top {
  vertical-align: middle;
  margin: auto;
}
.top .dp__main {
  width: min-content;
}
select {
  -webkit-appearance: none; /* Chrome, Safari, Edge, Opera */
  -moz-appearance: none; /* Firefox */
  appearance: none;
  background: none; /* Remove background, optional */
  /* padding-right: 20px;    */
  /* Optional: create space for your own icon or styling */
}
.form-select {
  padding: 5px !important;
  width: 4rem;
}
.block {
  color: black;
  font-weight: bold;
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
}
.blocks {
  display: flex;
}
.gray {
  background-color: #f4f6f6;
  width: 100%;
}
.purple {
  background-color: #8b62ff;
  width: 20%;
}
.blocks .orange {
  background-color: #f7b91e;
  width: 80%;
}
.color-box {
  width: 15px;
  height: 15px;
  display: inline-block;
  margin-right: 10px;
  border-radius: 50%;
}

/* Chart design */
.chart-legend {
  margin-top: 20px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: list-item;
  border-radius: 20px;

  /* justify-content: center; */
}

li {
  display: flex;
  align-items: center;
  margin: 0 15px;
  padding: 0.5rem;
  width: fit-content;
}
li ::nth-of-type(even) {
  background: #edf1f1;
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
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}
/* Chart design */
</style>
