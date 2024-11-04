<template>
  <div class="main-page">
    <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
    <main class="container">
      <div class="header">
        <div class="inner">
          <div class="text">
            <h4>{{ $t("Sale") }}</h4>
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
        <div class="row mt-3">
          <div class="col-5 mt-5">
            <apexchart type="donut" :options="chartOptions" :series="series" width="400" height="400"></apexchart>
          </div>
          <div class="col-5">
            <div class="time-period-switch">
              <button :class="{ active: filter === 'day' }" @click="fetchDataDetails('day')">{{ $t("daily") }}</button>
              <button :class="{ active: filter === 'month' }" @click="fetchDataDetails('month')">{{ $t("monthly") }}</button>
              <button :class="{ active: filter === 'year' }" @click="fetchDataDetails('year')">{{ $t("yearly") }}</button>
              <select v-model="selectedValue" @change="updateSelectedLabel" v-if="chartOptions.labels" class="border">
              <option v-for="(label, index) in chartOptions.labels" :key="index" :value="label">
                {{ label }}
              </option>
            </select>
            </div>
            <div v-if="donutSeries.length === 0">
              <p class="text-center">{{ $t("No data available for the selected region.") }}</p>
            </div>
            <!-- Render donut chart if series has data -->
            <div v-else>
              <apexchart 
                type="donut" 
                :options="donutOptions" 
                :series="donutSeries" 
                width="400" 
                height="400"
              ></apexchart>
            </div>
           
            <!-- <apexchart type="donut" :options="donutOptions" :series="donutSeries" width="400" height="400"></apexchart> -->
          </div>
        </div>
        <div class="col-12 border mt-5">
          <apexchart type="bar" :options="barOptions" :series="barseries"></apexchart>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import TableContainer from "../components/TableContainer.vue";
import Sidebar from "../components/Sidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import { useI18n } from "vue-i18n";
import axios from "axios";

export default {
  name: "Sale",
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
      filter: "year", // Default filter

      donutSeries: [], // This will hold contract numbers
      series: [], // This will hold contract numbers
      selectedLabel: "", // This will hold contract numbers
      selectedValue: "Samarqand viloyati", // Variable to hold the selected value
      encodedValue:'Samarqand%20viloyati',
      chartOptions: {
        chart: {
          type: "donut",
          events: {}, // You can define chart events here if needed
        },
        labels: [], // This will hold region names
        colors: [], // Dynamic colors
        legend: {
          position: "right",
          horizontalAlign: "center",
          formatter: (label, opts) => {
            return `${label}: ${this.series[opts.seriesIndex]?.toLocaleString() || "N/A"}`;
          },
        },

        tooltip: {
          y: {
            formatter: (value) => {
              // Format series values as numbers with commas
              return value.toLocaleString();
            },
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
      donutOptions: {
        chart: {
          type: "donut",
          events: {}, // You can define chart events here if needed
        },
        labels: [], // This will hold region names
        colors: [], // Dynamic colors
        legend: {
          position: "right", // Position the legend to the right of the chart
          horizontalAlign: "center", // Center align the legend vertically
          formatter: (label, opts) => {
            return `${label}: ${this.donutSeries[opts.seriesIndex].toLocaleString()}`;
          },
        },
        tooltip: {
          y: {
            formatter: (value) => {
              // Format series values as numbers with commas
              return value.toLocaleString();
            },
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val, opts) {
            return opts.w.config.series[opts.seriesIndex]; // Display the raw numbers
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
      barseries: [
        {
          name: "Room Sales",
          data: [],
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
        xaxis: {
          categories: [], // Will hold the months
          title: {
            text: "Months",
          },
        },
        yaxis: {
          title: {
            text: "Number of Rooms",
          },
        },
        title: {
          text: "Monthly Room Sales",
          align: "center",
        },
      },
    };
  },
  mounted() {
    this.fetchData();
    this.fetchDataDetails(this.filter, this.encodedValue);
    this.fetchBarData();
  },
  methods: {
    changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
    updateSelectedLabel() {
      if(this.selectedValue.trim() === "Farg'ona viloyati"){
        this.encodedValue = "Farg'ona%20viloyati" 

      }else {
        this.encodedValue = encodeURIComponent(this.selectedValue); 
      }
      console.log("LAbel: "+this.encodedValue);
      this.fetchDataDetails(this.filter, this.encodedValue);
    },
    fetchData() {
      axios
        .get("https://api.hakimi.itic.uz/statistics/address")
        .then((response) => {
          const data = response.data;
          const series = data.map((item) => item.number_of_contract); // Extract contract numbers
          const labels = data.map((item) => item.region); // Extract region names

          const colors = this.generateColors(labels.length);

          this.series = series;
          this.chartOptions = {
            ...this.chartOptions, // Preserve other options
            labels: labels, // Set the region labels
            colors: colors, // Set the dynamically generated colors
          };
          console.log(this.chartOptions.labels);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    fetchDataDetails(period,encodedValue ) {
      const currentYear = new Date().getFullYear(); // Get the current year dynamically
      const apiUrl = `/statistics/address/detail/${currentYear}/${this.encodedValue}/${period}`;
      this.filter = period;
      axios
        .get(apiUrl)
        .then((response) => {
          const data = response.data;
          const series = data.map((item) => item.number_of_contract); // Extract contract numbers
          const labels = data.map((item) => item.district); // Extract region names

          const colors = this.generateColors(labels.length);

          this.donutSeries = series;
          this.donutOptions = {
            ...this.donutOptions, // Preserve other options
            labels: labels, // Set the region labels
            colors: colors, // Set the dynamically generated colors
          };
          console.log(this.donutOptions.labels);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    generateColors(count) {
      const colors = [];
      for (let i = 0; i < count; i++) {
        // Generate a color with high brightness and saturation for pie chart readability
        const color = `hsl(${Math.floor(Math.random() * 360)}, 75%, 60%)`; // HSL: Hue, Saturation, Lightness
        colors.push(color);
      }
      return colors;
    },
    fetchBarData() {
      axios
        .get("contract/apartments/roomsale/?sales_matric=room_numbers")
        .then((response) => {
          const data = response.data;
          const months = data.map((item) => this.getMonthName(item.month)); // Map month numbers to names
          const roomNumbers = data.map((item) => item.room_numbers); // Extract room numbers

          // Update chart data
          this.barseries[0].data = roomNumbers;
          this.barOptions.xaxis.categories = months;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    getMonthName(month) {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return monthNames[month - 1];
    },
  },
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
};
</script>

<style scoped>
.header {
  background-color: white;
  border-radius: 20px;
  margin: 1rem;
  padding: 1.2rem;
  width: auto;
}
.row {
  justify-content: space-around;
}
.time-period-switch {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.time-period-switch button {
  padding: 6px 12px;
  font-size: 14px;
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
.clickable-legend {
  cursor: pointer; /* Change cursor to pointer for clickable items */
  color: blue; /* Example styling for the legend items */
}
.clickable-legend:hover {
  text-decoration: underline; /* Add hover effect */
}
</style>
