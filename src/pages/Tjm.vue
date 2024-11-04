<template>
  <div class="main-page">
    <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
    <main class="container">
      <div class="header">
        <div class="inner">
          <div class="text">
            <h4>{{ $t("tjm") }}</h4>
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
        <div class="tjm row">
          <div class="border col-6 p-2">
            <h5>{{ $t("general_statistics") }}</h5>
            <div class="divider"></div>

            <div class="border">
              <b>{{ this.total_price.toLocaleString() }} UZS</b>

              <apexchart type="donut" :options="chartOptions" :series="series" height="350"></apexchart>
            </div>
            <div class="border mt-3 p-3">
              <h6>{{ $t("sale_of_apartments") }}</h6>
              <div class="blue-card">
                <span><b>{{ this.sale_data }}</b></span>
                <br />
                <small>{{ $t("number_of_houses_sold") }}</small>
              </div>
              <div class="blue-card" @click="openModal" style="cursor:pointer;">
              <a href="">
                <span><b>Hakimi Towers</b></span>
                <small style="float: inline-end">{{ $t("sold_out") }} {{ this.sale_data }}</small>
              </a>
              </div>
            </div>

            <!-- Modal -->
            <b-modal v-model="isModalOpen" title="Project Statistics" hide-footer>
              <div v-if="projectData">
                <div v-for="house in projectData.total_amount_houses" :key="house.house_id">
                  <p>House ID: {{ house.house_id }}</p>
                  <p>Total Amount: {{ house.total_amount.toLocaleString() }}</p>
                  <p>For Sale Amount: {{ house.for_sale_amount.toLocaleString() }}</p>
                  <p>Sold Amount: {{ house.sold_amount.toLocaleString() }}</p>
                  <p>Paid Amount: {{ house.paid_amount.toLocaleString() }}</p>
                  <p>Not Paid Amount: {{ house.not_paid_amount.toLocaleString() }}</p>
                  <hr />
                </div>
              </div>
            </b-modal>
            <div class="border mt-2 p-3">
              <h6>{{ $t("average_price_per_m2") }}</h6>
              <div class="blue-card">
                <span><b>Hakimi Towers</b></span>
              </div>
              <ul class="details">
                <li>
                  {{ $t("for_sold_apartments") }}
                  <small>
                    <b>{{ this.for_sold_apartments.toLocaleString() }} UZS</b>
                  </small>
                </li>
                <li>
                  {{ $t("for_apartments_for_sale") }}
                  <small>
                    <b>{{ this.for_apartments_for_sale.toLocaleString() }} UZS</b>
                  </small>
                </li>
                <li>
                  {{ $t("average") }}
                  <small>
                    <b>{{ this.average.toLocaleString() }} UZS</b>
                  </small>
                </li>
              </ul>
            </div>
          </div>
          <div class="border col-6">
            <h5>{{ $t("according_to_residential_complexes") }}</h5>
            <div class="divider"></div>
            <div class="border">
              <apexchart type="bar" :options="barOptions" :series="barSeries" />
            </div>
            <div class="border mt-2">
              <small>{{ $t("total_initial_payments") }}</small>
              <div class="divider"></div>
              <b>{{ this.total_initial_payments.toLocaleString() }} UZS</b>
              <div>
                <apexchart type="donut" :options="donutOptions" :series="donutSeries" height="250" />
              </div>
            </div>
            <div class="border mt-2">
              <b>{{ $t("houses_on_sale") }}</b>
              <div>
                <apexchart type="donut" :options="pieOptions" :series="pieSeries" height="350" />
              </div>
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
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
import { useI18n } from "vue-i18n";

export default {
  name: "TJM",
  components: {
    Sidebar,
    TableContainer,
    apexchart: VueApexCharts,
  },
  data() {
    return {
      languages: {
        en: "English",
        uz: "Uzbek",
        ru: "Russian",
        fa: "Persian",
      },
      currentLanguage: "en",
      isModalOpen: false,
      projectData: [],
      sale_data: [],
      bardata: 0,
      total_initial_payments: 0,
      total_price: 0,
      project_statistics: [],
      initial_payments: [],
      average: 0,
      for_apartments_for_sale: 0,
      for_sold_apartments: 0,
      series: [15, 28, 47], // Series data for the donut chart
      chartOptions: {
        chart: {
          type: "donut",
        },
        title: {
          text: "Total price of houses", // Chart title
          align: "center",
          margin: 10,
          offsetY: 10,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
            color: "#263238",
          },
        },
        labels: ["On Sale", "Sold Out", "Ordered"], // Labels for the donut chart
        colors: ["#FF4560", "#00E396", "#008FFB"], // Customize colors if needed
        legend: {
          position: "bottom",
        },
        dataLabels: {
          enabled: false,
          formatter: function (val, opts) {
            return opts.w.config.series[opts.seriesIndex];
          }, // Display the raw value
          style: {
            fontSize: "14px",
            colors: ["#fff"],
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 300,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
      barSeries: [
        {
          name: "Hakimi Towers",
          data: [], // Single data point for the category
        },
      ],
      barOptions: {
        chart: {
          type: "bar",
          height: 350,
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
            horizontal: false,
            columnWidth: "50%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ["Hakimi Towers"], // Single category
        },
        yaxis: {
          title: {
            text: "Sales",
          },
        },
      },
      donutSeries: [],
      donutOptions: {
        chart: {
          type: "donut",
          title: {
            text: 'Total Initial Payments by House',
          },
        },
    labels :["№1", "№2", "№3", "№4", "№5"],
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
            },
          },
        },
        colors: [],
        dataLabels: {
          enabled: false,
        },
        legend: {
          position: "bottom", // Position the legend to the right of the chart
          horizontalAlign: "center", // Center align the legend vertically
          formatter: (label, opts) => {
            return `${label}: ${this.donutSeries[opts.seriesIndex]}`;
          },
        },
      },
      pieSeries: [],
      pieOptions: {
        chart: {
          type: "donut",
        },
        // labels: this.getLabels(),

        labels: ["1 room", "3 rooms", "2 rooms"],
        plotOptions: {
          pie: {
            donut: {
              size: "65%",
            },
          },
        },

        // colors: ["#FF4560"],
        dataLabels: {
          enabled: false,
          formatter: function (val, opts) {
            return opts.w.config.series[opts.seriesIndex];
          },
        },
        legend: {
          position: "bottom",
        },
      },
    };
  },
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
  async created() {
    await this.fetchData();
    await this.fetchInitialPayments();
    await this.fetchInittialData();
    await this.fetchAverageData();
    await  this.fetchProjectData();
    await  this.fetchSaleData();

    this.$refs.apexChart.updateOptions(this.donutOptions); // Update options to ensure they are applied

  },
  methods: {
    openModal() {
      this.isModalOpen = true;
      // this.fetchProjectData();
    },
    async fetchProjectData() {
      try {
        const response = await axios.get("/statistics/projects/statistics/");
        this.projectData = response.data[0];
        console.log(this.projectData);
      } catch (error) {
        console.error("Error fetching project data", error);
      }
    },
    async fetchSaleData() {
      try {
        const response = await axios.get("/statistics/sale-of_apartments/");
        this.sale_data = response.data.total_number_of_houses_sold;
        console.log(this.sale_data);
      } catch (error) {
        console.error("Error fetching project data", error);
      }
    },
    async fetchInitialPayments() {
      try {
        const response = await axios.get("/statistics/apartments/stats/total_initial_payments/");
        const houses = response.data[0].houses; // Assuming the data structure you provided
        this.donutSeries = houses.map(house => house.total_initial_payment);
        this.donutOptions.labels = houses.map(house => house.name);

// Sum the values in donutSeries and assign it to total_initial_payments
this.total_initial_payments = this.donutSeries.reduce((sum, payment) => sum + payment, 0);

        // console.log(this.donutOptions.labels); // Should show the names of the houses
        console.log('Series:', this.donutSeries);
        console.log('Labels:', this.donutOptions.labels);
      } catch (error) {
        console.error("Error fetching project data", error);
      }
    },
    changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
    async fetchData() {
      try {
        const response = await axios.get("/statistics/projects/total-statistics/");
        const data = response.data;
        this.bardata = data.apartments_total_amount_in_sale + data.contracted_paid_apartments_amount + data.contracted_not_paid_apartments_amount;
        this.barSeries[0].data = [this.bardata]
        this.series = [data.apartments_total_amount_in_sale, data.contracted_paid_apartments_amount, data.contracted_not_paid_apartments_amount];
        this.chartOptions.labels = ["On Sale", "Sold Out", "Ordered"];

// Sum the values in series and assign it to total_prices
this.total_price = this.series.reduce((sum, amount) => sum + amount, 0);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchInittialData() {
      try {
        const response = await axios.get("/statistics/apartments/stats/for-sale/");
        const data = response.data;
        this.project_statistics = data;
        // this.pieOptions.labels.value = data.map(item => `Room ${item.room_numbers}`);
        this.pieSeries = data.map((item) => item.total_apartments);
        // Update series and labels based on the fetched data
        // this.series = [data.on_sale, data.sold_out, data.ordered];
        // this.chartOptions.labels = ["On Sale", "Sold Out", "Ordered"];
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    async fetchAverageData() {
      try {
        const response = await axios.get("/statistics/average-prices/");
        const data = response.data[0];
        this.for_sold_apartments = data.for_sold_apartments;
        this.for_apartments_for_sale = data.for_apartments_for_sale;
        this.average = data.average;
        // Update series and labels based on the fetched data
        // this.series = [data.on_sale, data.sold_out, data.ordered];
        // this.chartOptions.labels = ["On Sale", "Sold Out", "Ordered"];
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
  },
};
</script>
<style scoped>
.blue-card {
  background-color: #e5ebff;
  padding: 0.7rem;
  color: #002ccc;
  margin-bottom: 1rem;
}
.details li {
  padding: 0.5rem;
  list-style: none;
  font-size: 16px;
}
.details ul {
  list-style: none;
}
.details small {
  float: inline-end;
}
</style>
