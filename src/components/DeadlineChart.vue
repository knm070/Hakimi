<template>
  <div>
    <apexchart type="pie" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [], // Chart series (data)
      chartOptions: {
        labels: [this.$t("on_time"), this.$t("last_one_month"), this.$t("late_three_months"), this.$t("late_one_year"), this.$t("late_more_than_year"), this.$t("not_paid")],
        colors: ["#00E396", "#FEB019", "#FF4560", "#775DD0", "#546E7A", "#D4526E"],
        chart: {
          type: "pie",
        },
        legend: {
          position: "bottom",
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
    };
  },
  async mounted() {
    try {
      const response = await axios.get("https://api.hakimi.itic.uz/contract/payment/deadline");
      const data = response.data;

      // Populate the series with the API data
      this.series = [data.on_time, data.last_one_month, data.late_three_months, data.late_one_year, data.late_more_than_year, data.not_paid];
    } catch (error) {
      console.error("Error fetching payment deadline data:", error);
    }
  },
};
</script>

<style scoped>
/* Optional styling */
</style>
