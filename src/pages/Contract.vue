<template>
  <div class="main-page">
    <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
    <main class="container">
      <div class="header">
        <div class="inner">
          <div class="text">
            <h4>{{ $t("contract") }}</h4>
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
        <!-- Tab navigation -->
        <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
              {{ $t("general") }}
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
              {{ $t("discounts") }}
            </button>
          </li>
        </ul>

        <!-- Tab content -->
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row">
              <div class="col-4">
                <div class="border">
                  <h6>{{ $t("contract_period") }}</h6>
                  <div class="divider"></div>
                  <div class="inner-tab mt-2">
                    <!-- Tab navigation -->
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="all-tab1" data-bs-toggle="tab" data-bs-target="#alltab" type="button" role="tab" aria-controls="home" aria-selected="true">
                          {{ $t("all") }}
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="hakimi-tab1" data-bs-toggle="tab" data-bs-target="#hakimitab" type="button" role="tab" aria-controls="profile" aria-selected="false">
                          {{ $t("hakimi_towers") }}
                        </button>
                      </li>
                    </ul>

                    <!-- Tab content -->
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="alltab" role="tabpanel" aria-labelledby="home-tab">
                        <div class="contract-cards">
                          <!-- 0-24 months card -->
                          <a href="#" class="card yellow">
                            <div class="card-header">
                              <div>{{ $t("months_0_24") }}</div>
                              <div>
                                <button @click="toggleDropdown('0_24_months')" class="arrow-btn">
                                  {{ contracts["0_24_months"].count }} {{ $t("contract") }}(s)
                                  <span v-if="isOpen['0_24_months']">▲</span>
                                  <span v-else>▼</span>
                                </button>
                              </div>
                            </div>
                          </a>
                          <div v-if="isOpen['0_24_months']" class="contract-list">
                            <ul>
                              <li v-for="(contract, index) in contracts['0_24_months'].contracts" :key="contract.contract_number">
                                <!-- Contract number and client name as dropdown header -->
                                <div class="contract-header" @click="toggleContractDetails('0_24_months', index)">
                                  {{ $t("contract") }} {{ contract.contract_number }} - {{ $t("client") }}: {{ contract.client }}
                                  <span v-if="isOpenContracts['0_24_months'][index]">▲</span>
                                  <span v-else>▼</span>
                                </div>
                                <!-- Contract details as dropdown content -->
                                <div v-if="isOpenContracts['0_24_months'][index]" class="client-info">
                                  <ul>
                                    <li>
                                      <span class="c_info">{{ $t("contract_number") }}</span>
                                      <span class="c_data">{{ contract.contract_number }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("client") }}</span>
                                      <span class="c_data">{{ contract.client }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("staff") }}</span>
                                      <span class="c_data">{{ contract.employee || "Null" }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("contract_amount") }}</span>
                                      <span class="c_data">{{ formatCurrency(contract.total_payment_sum) }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("monthly_payment") }}</span>
                                      <span class="c_data">{{ formatCurrency(contract.monthly_payment) }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("status") }}</span>
                                      <span class="c_data">{{ contract.status }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("initial_payment_date") }}</span>
                                      <span class="c_data">{{ contract.initial_payment_date }}</span>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <!-- 24-60 months card -->
                          <a href="#" class="card green">
                            <div class="card-header">
                              <div>{{ $t("months_24_60") }}</div>
                              <div>
                                <button @click="toggleDropdown('24_60_months')" class="arrow-btn">
                                  {{ contracts["24_60_months"].count }} {{ $t("contract") }}(s)
                                  <span v-if="isOpen['24_60_months']">▲</span>
                                  <span v-else>▼</span>
                                </button>
                              </div>
                            </div>
                          </a>
                          <div v-if="isOpen['24_60_months']" class="contract-list">
                            <ul>
                              <li v-for="(contract, index) in contracts['24_60_months'].contracts" :key="contract.contract_number">
                                <div class="contract-header" @click="toggleContractDetails('24_60_months', index)">
                                  {{ $t("contract") }} {{ contract.contract_number }} - {{ $t("client") }}: {{ contract.client }}
                                  <span v-if="isOpenContracts['24_60_months'][index]">▲</span>
                                  <span v-else>▼</span>
                                </div>
                                <div v-if="isOpenContracts['24_60_months'][index]" class="client-info">
                                  <ul>
                                    <li>
                                      <span class="c_info">{{ $t("contract_number") }}</span>
                                      <span class="c_data">{{ contract.contract_number }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("client") }}</span>
                                      <span class="c_data">{{ contract.client }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("staff") }}</span>
                                      <span class="c_data">{{ contract.employee || "Null" }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("contract_amount") }}</span>
                                      <span class="c_data">{{ formatCurrency(contract.total_payment_sum) }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("monthly_payment") }}</span>
                                      <span class="c_data">{{ formatCurrency(contract.monthly_payment) }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("status") }}</span>
                                      <span class="c_data">{{ contract.status }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("initial_payment_date") }}</span>
                                      <span class="c_data">{{ contract.initial_payment_date }}</span>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <!-- More than 60 months card -->
                          <a href="#" class="card red">
                            <div class="card-header">
                              <div>{{ $t("more_than_60_months") }}</div>
                              <div>
                                <button @click="toggleDropdown('60_plus_months')" class="arrow-btn">
                                  {{ contracts["60_plus_months"].count }} {{ $t("contract") }}(s)
                                  <span v-if="isOpen['60_plus_months']">▲</span>
                                  <span v-else>▼</span>
                                </button>
                              </div>
                            </div>
                          </a>
                          <div v-if="isOpen['60_plus_months']" class="contract-list">
                            <ul>
                              <li v-for="(contract, index) in contracts['60_plus_months'].contracts" :key="contract.contract_number">
                                <div class="contract-header" @click="toggleContractDetails('60_plus_months', index)">
                                  {{ $t("contract") }} {{ contract.contract_number }} - {{ $t("client") }}: {{ contract.client }}
                                  <span v-if="isOpenContracts['60_plus_months'][index]">▲</span>
                                  <span v-else>▼</span>
                                </div>
                                <div v-if="isOpenContracts['60_plus_months'][index]" class="client-info">
                                  <ul>
                                    <li>
                                      <span class="c_info">{{ $t("contract_number") }}</span>
                                      <span class="c_data">{{ contract.contract_number }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("client") }}</span>
                                      <span class="c_data">{{ contract.client }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("staff") }}</span>
                                      <span class="c_data">{{ contract.employee || "Null" }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("contract_amount") }}</span>
                                      <span class="c_data">{{ formatCurrency(contract.total_payment_sum) }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("monthly_payment") }}</span>
                                      <span class="c_data">{{ formatCurrency(contract.monthly_payment) }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("status") }}</span>
                                      <span class="c_data">{{ contract.status }}</span>
                                    </li>
                                    <li>
                                      <span class="c_info">{{ $t("initial_payment_date") }}</span>
                                      <span class="c_data">{{ contract.initial_payment_date }}</span>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- Hakimi Towers tab -->
                      <div class="tab-pane fade" id="hakimitab" role="tabpanel" aria-labelledby="profile-tab">
                        <!-- Hakimi Towers content can be added here if needed -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="border">
                  <h6>{{ $t("payment_according_to_charts") }}</h6>
                  <div class="divider"></div>
                  <div class="inner-tab mt-2">
                    <!-- Tab navigation -->
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="all-tab2" data-bs-toggle="tab" data-bs-target="#alltab2" type="button" role="tab" aria-controls="home" aria-selected="true">
                          {{ $t("all") }}
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button class="nav-link" id="hakimi-tab2" data-bs-toggle="tab" data-bs-target="#hakimitab2" type="button" role="tab" aria-controls="profile" aria-selected="false">
                          {{ $t("hakimi_towers") }}
                        </button>
                      </li>
                    </ul>

                    <!-- Tab content -->
                    <div class="tab-content" id="myTabContent">
                      <div class="tab-pane fade show active" id="alltab2" role="tabpanel" aria-labelledby="home-tab">
                        <div id="chart">
                          <div class="chart-header text-center mt-2">
                            <span>{{ $t("total_number_of_payers") }}</span>
                            <p>{{ payingClientsCount + nonPayingClientsCount }} {{ $t("clients") }}</p>
                          </div>
                          <apexchart type="donut" :options="pie_Options" :series="[payingClientsCount, nonPayingClientsCount]" height="400" :legend="legend"></apexchart>
                          <div class="chart-legend mb-2">
                            <div v-for="(value, index) in pie_series" :key="index" sytle="list-style:none;">
                              <span :style="{ backgroundColor: pie_Options.pie_colors[index] }" class="color-box"></span>
                              <span class="label">{{ pie_Options.labels[index] }}:</span>
                              <span class="value">{{ value }}</span>
                            </div>
                          </div>
                        </div>
                        <!-- Paying Clients Dropdown -->
                        <div class="client-list">
                          <h1 @click="toggleClientType('paying')" class="dropdown-header">
                            {{ $t("paying_clients") }}
                            <span :class="isPayingOpen ? 'arrow-up' : 'arrow-down'"></span>
                          </h1>
                          <ul v-if="isPayingOpen && payingClients.length > 0">
                            <li v-for="(client, index) in payingClients" :key="index">
                              <div @click="toggleDetails(index, 'paying')" class="client-summary">
                                <span>{{ client.client }}</span>
                                - {{ $t("contract") }}: {{ client.contract_number }}
                              </div>
                              <div v-if="openClient === index && openType === 'paying'" class="client-info">
                                <ul>
                                  <li>
                                    <span class="c_info">{{ $t("client") }}</span>
                                    <span class="c_data">{{ client.client }}</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("staff") }}</span>
                                    <span class="c_data">{{ client.employee || $t("na") }}</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("contract_amount") }}</span>
                                    <span class="c_data">{{ client.total_payment_sum.toLocaleString() }} UZS</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("residential_complex") }}</span>
                                    <span class="c_data">{{ $t("hakimi_towers") }}</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("contract_number") }}</span>
                                    <span class="c_data">{{ client.contract_number }}</span>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                          <p v-else-if="!isPayingOpen"></p>
                          <p v-else>{{ $t("no_paying_clients") }}</p>
                        </div>

                        <!-- Non-Paying Clients Dropdown -->
                        <div class="client-list">
                          <h1 @click="toggleClientType('non_paying')" class="dropdown-header">
                            {{ $t("non_paying_clients") }}
                            <span :class="isNonPayingOpen ? 'arrow-up' : 'arrow-down'"></span>
                          </h1>
                          <ul v-if="isNonPayingOpen && nonPayingClients.length > 0">
                            <li v-for="(client, index) in nonPayingClients" :key="index">
                              <div @click="toggleDetails(index, 'non_paying')" class="client-summary">
                                <span>{{ client.client }}</span>
                                - {{ $t("contract") }}: {{ client.contract_number }}
                              </div>
                              <div v-if="openClient === index && openType === 'non_paying'" class="client-info">
                                <ul>
                                  <li>
                                    <span class="c_info">{{ $t("client") }}</span>
                                    <span class="c_data">{{ client.client }}</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("staff") }}</span>
                                    <span class="c_data">{{ client.employee || $t("na") }}</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("contract_amount") }}</span>
                                    <span class="c_data">{{ client.total_payment_sum.toLocaleString() }} UZS</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("residential_complex") }}</span>
                                    <span class="c_data">{{ $t("hakimi_towers") }}</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("contract_number") }}</span>
                                    <span class="c_data">{{ client.contract_number }}</span>
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                          <p v-else-if="!isNonPayingOpen"></p>
                          <p v-else>{{ $t("no_non_paying_clients") }}</p>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="hakimitab2" role="tabpanel" aria-labelledby="profile-tab">
                        <h6>{{ $t("discount_statistics_ac") }}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="border">
                  <h6>{{ $t("client_contracts") }}</h6>
                  <div class="divider"></div>
                  <div v-for="(client, clientIndex) in clients" :key="clientIndex">
                    <!-- Client Phone Info -->
                    <div class="client-info p-3 d-flex" @click="toggleClientContracts(clientIndex)">
                      <img src="/assets/img/phone-call.png" :alt="$t('phone_call_alt')" />
                      <span class="black">{{ formatPhoneNumber(client.phone_number) }}</span>
                      <div class="contracts_count">{{ client.contracts.length }}</div>
                    </div>

                    <!-- Client Contracts List (Toggle) -->
                    <transition name="slide-fade">
                      <div v-if="isOpenClient[clientIndex]" class="client-contracts">
                        <ul>
                          <li v-for="(contract, contractIndex) in client.contracts" :key="contractIndex" @click="toggleContractDetails2(clientIndex, contractIndex)" class="client-info black" style="padding: 1rem">
                            <span>
                              <b>{{ $t("contract") }}:</b>
                              {{ contract.contract_number }}
                              <span style="text-transform: uppercase; float: inline-end">{{ contract.status }} ▼</span>
                            </span>
                            <!-- Toggle Contract Info -->
                            <transition name="fade">
                              <div v-if="isOpenContract[clientIndex] && isOpenContract[clientIndex][contractIndex]" class="client-info">
                                <ul>
                                  <li>
                                    <span class="c_info">{{ $t("contract_number") }}</span>
                                    <span class="c_data">{{ contract.contract_number }}</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("client") }}</span>
                                    <span class="c_data">{{ contract.client }}</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("staff") }}</span>
                                    <span class="c_data">{{ contract.employee || "N/A" }}</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("contract_amount") }}</span>
                                    <span class="c_data">{{ contract.total_payment_sum.toLocaleString() }} UZS</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("monthly_payment") }}</span>
                                    <span class="c_data">{{ contract.monthly_payment.toLocaleString() }} UZS</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("initial_payment_date") }}</span>
                                    <span class="c_data">{{ contract.initial_payment_date }}</span>
                                  </li>
                                  <li>
                                    <span class="c_info">{{ $t("status") }}</span>
                                    <span class="c_data">{{ contract.status }}</span>
                                  </li>
                                </ul>
                              </div>
                            </transition>
                          </li>
                        </ul>
                      </div>
                    </transition>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="border">
              <h5>Discount statistics for AC</h5>
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

// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";
export default {
  name: "Contract",
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
      payingClients: [], // List of paying clients
      nonPayingClients: [], // List of non-paying clients
      payingClientsCount: 0, // Count for pie chart
      isPayingOpen: false, // Dropdown for paying clients
      isNonPayingOpen: false, // Dropdown for non-paying clients
      nonPayingClientsCount: 0, // Count for pie chart
      openClient: null, // Track which client details are open
      openType: "", // Track if it's 'paying' or 'nonpaying'
      clients: [], // Stores the client and contract data from the API
      isOpenClient: [], // Tracks open/closed state for each client's contracts
      isOpenContract: [], // Tracks open/closed state for individual contract details
      pie_series: [],
      contracts: {
        "0_24_months": { count: 0, contracts: [] },
        "24_60_months": { count: 0, contracts: [] },
        "60_plus_months": { count: 0, contracts: [] }, // Placeholder for future data
      },
      isOpen: {
        "0_24_months": false,
        "24_60_months": false,
        "60_plus_months": false, // Dropdown states
      },
      isOpenContracts: {
        "0_24_months": {},
        "24_60_months": {},
        "60_plus_months": {},
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      pie_Options: {
        chart: {
          type: "donut",
        },
        pie_colors: ["#008FFB", "#00E396"], // Colors for each series
        pie_series: [],

        labels: ["Paying clients", "Non paying clients"],
        legend: {
          show: false,
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
  methods: {
    changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
    toggleClientType(type) {
      if (type === "paying") {
        this.isPayingOpen = !this.isPayingOpen;
      } else if (type === "non_paying") {
        this.isNonPayingOpen = !this.isNonPayingOpen;
      }
    },
    async fetchClients() {
      try {
        const response = await axios.get("/contract/client-contracts/");
        this.clients = response.data;
        // Initialize isOpenClient and isOpenContract arrays based on the fetched data
        this.isOpenClient = new Array(this.clients.length).fill(false);
        this.isOpenContract = this.clients.map(() => []);
      } catch (error) {
        console.error("Error fetching client contracts:", error);
      }
    },

    // Toggle client contract list visibility
    toggleClientContracts(clientIndex) {
      console.log("Clicked client index:", clientIndex); // Debugging
      // Directly update the array element by index
      this.isOpenClient[clientIndex] = !this.isOpenClient[clientIndex];
    },

    // Toggle individual contract details
    toggleContractDetails2(clientIndex, contractIndex) {
      console.log(`Toggle details for client ${clientIndex}, contract ${contractIndex}`); // Debugging
      // Check if the contract list for the client is initialized
      if (!this.isOpenContract[clientIndex]) {
        this.isOpenContract[clientIndex] = [];
      }
      // Directly update the nested array element
      this.isOpenContract[clientIndex][contractIndex] = !this.isOpenContract[clientIndex][contractIndex];
    },

    // Format phone number for display
    formatPhoneNumber(phoneNumber) {
      return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8)}`;
    },
    async fetchContracts() {
      try {
        const response = await axios.get("/contract/contracts/period/");
        this.contracts = response.data;
      } catch (error) {
        console.error("Error fetching contracts:", error);
      }
    },
    toggleDropdown(period) {
      this.isOpen[period] = !this.isOpen[period];
    },
    toggleContractDetails(period, index) {
      if (!this.isOpenContracts[period]) {
        this.isOpenContracts[period] = {}; // Ensure the period object exists
      }
      this.isOpenContracts[period][index] = !this.isOpenContracts[period][index];
    },
    formatCurrency(value) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "UZS",
        minimumFractionDigits: 0,
      }).format(value);
    },

    toggleDetails(index, type) {
      if (this.openClient === index && this.openType === type) {
        this.openClient = null;
        this.openType = "";
      } else {
        this.openClient = index;
        this.openType = type;
      }
    },
    async fetchClientStats() {
      try {
        const response = await axios.get("/contract/payment-summary/");
        const data = response.data;

        // Assign the data to the Vue component properties
        this.payingClients = data.paying_clients.paying_client_contracts;
        this.nonPayingClients = data.non_paying_clients.non_paying_client_contracts;
        this.payingClientsCount = data.paying_clients.number_of_paid_clients;
        this.nonPayingClientsCount = data.non_paying_clients.number_of_non_paying_clients;

        // Update pie series data
        this.pie_series = [this.payingClientsCount, this.nonPayingClientsCount];

        // Initialize arrays or other related properties as needed
        this.isOpenClient = new Array(this.payingClients.length).fill(false);
        this.isOpenContract = this.payingClients.map(() => []);
      } catch (error) {
        console.error("Error fetching payment summary:", error);
      }

      // Simulated API call to fetch data
      // fetch("https://api.hakimi.itic.uz/contract/payment-summary/")
      //   .then((response) => response.json())
      //   .then((data) => {
      //     this.payingClients = data.paying_clients.paying_client_contracts;
      //     this.nonPayingClients = data.non_paying_clients.non_paying_client_contracts;
      //     this.payingClientsCount = data.paying_clients.number_of_paid_clients;
      //     this.nonPayingClientsCount = data.non_paying_clients.number_of_non_paying_clients;
      //     this.pie_series = [this.payingClientsCount, this.nonPayingClientsCount];
      //   });
    },
  },
  mounted() {
    this.fetchContracts();
    this.fetchClients();
    this.fetchClientStats();
  },
};
</script>
<style>
.nav-tabs {
  border-bottom: none;
  margin-top: 1rem;
}

/* Optionally remove borders from tab buttons */
.nav-tabs .nav-link {
  border: none;
  padding: 0.3rem;
  margin-right: 5px !important;
  margin-left: 0px !important;
}
.dropdown-header{
  cursor:pointer;
  font-size:larger;
  margin-top:1rem;
}
.nav-tabs .nav-link.active {
  border-bottom: 2px solid #0d6efd; /* Optional: Customize active tab bottom border */
  background-color: initial;
  padding: 0.3rem;
}
.inner-tab ul li,
.header ul li {
  font-size: 14px;
  margin-right: 5px !important;
  margin-left: 0px !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.contract-cards .card {
  flex-direction: row;
  width: 100%;
  color: black;
  padding: 0.5rem;
  text-decoration: none;
  font-size: smaller;
  margin-top: 1rem;
  justify-content: space-between;
  font-weight: 500;
  border: none;
}
.contract-cards .yellow {
  background: #ffe033;
}
.contract-cards .green {
  display: inline-flex;

  background: #2cc171;
}
.contract-cards .red {
  display: inline-flex;

  background: #e27233;
}
.client-info {
  background-color: #f4f6f6;
  color: #4f7471;
  text-wrap: nowrap;
  word-wrap: nowrap;
  border-radius: 10px;
  margin-top: 1rem;
  cursor: pointer;
}

.client-info .c_info {
  width: 100%;
  font-weight: bold;
  font-size: 12px;
}
.client-info .c_data {
  font-size: 12px;
}
.client-info .contracts_count {
  background-color: #e74140;
  padding: 1px 6px;
  color: white;
  width: fit-content;
  border-radius: 25px;
}
.client-info .black {
  color: black;
  width: -webkit-fill-available;
  padding-left: 0.7rem;
}
.contract-cards {
  display: flex;
  flex-direction: column;
}

.card {
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.arrow-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px;
}

.contract-header {
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #f1f1f1;
}

.client-info {
  padding: 10px;
  background-color: #fafafa;
  list-style: none;
}

.client-info ul {
  list-style: none;
  padding: 0;
}

.client-info li {
  padding: 5px 0;
}

.c_info {
  font-weight: bold;
  margin-right: 10px;
}

.c_data {
  font-style: italic;
}
.contract-list li {
  list-style: none;
}
.contract-list ul {
  padding: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(10px);
  opacity: 0;
}
.client-contracts ul {
  padding: 0;
}
.client-contracts li {
  list-style: none;
  justify-content: space-between;
}
.client-summary {
  cursor: pointer;
  color: #000;
  padding: 5px;
  background-color: #f5f5f5;
  margin-bottom: 10px;
}
.color-box {
  width: 15px;
  height: 15px;
  display: inline-block;
  margin-right: 10px;
  border-radius: 50%;
}
</style>
