<template>
  <div class="bg-[#F4F6F6] h-full">
    <div class="flex w-full min-h-screen">
      <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
      <div class="bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px]" style="border: 1px solid #edf1f1">
        <div>
          <div class="flex items-center justify-between pb-[16px]">
            <h1 class="text-[20px]" style="font-family: Geist; font-weight: 600; color: rgba(0, 0, 0, 1)">Main page</h1>
            <div class="flex gap-[24px]">
              <svg @click="openMessage" class="cursor-pointer" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.3399 14.99L18.3399 13.33C18.1299 12.96 17.9399 12.26 17.9399 11.85V9.32C17.9399 6.97 16.5599 4.94 14.5699 3.99C14.0499 3.07 13.0899 2.5 11.9899 2.5C10.8999 2.5 9.91994 3.09 9.39994 4.02C7.44994 4.99 6.09994 7 6.09994 9.32V11.85C6.09994 12.26 5.90994 12.96 5.69994 13.32L4.68994 14.99C4.28994 15.66 4.19994 16.4 4.44994 17.08C4.68994 17.75 5.25994 18.27 5.99994 18.52C7.93994 19.18 9.97994 19.5 12.0199 19.5C14.0599 19.5 16.0999 19.18 18.0399 18.53C18.7399 18.3 19.2799 17.77 19.5399 17.08C19.7999 16.39 19.7299 15.63 19.3399 14.99Z"
                  fill="#72908D"
                />
                <path
                  d="M14.8299 20.51C14.4099 21.67 13.2999 22.5 11.9999 22.5C11.2099 22.5 10.4299 22.18 9.87994 21.61C9.55994 21.31 9.31994 20.91 9.17994 20.5C9.30994 20.52 9.43994 20.53 9.57994 20.55C9.80994 20.58 10.0499 20.61 10.2899 20.63C10.8599 20.68 11.4399 20.71 12.0199 20.71C12.5899 20.71 13.1599 20.68 13.7199 20.63C13.9299 20.61 14.1399 20.6 14.3399 20.57C14.4999 20.55 14.6599 20.53 14.8299 20.51Z"
                  fill="#72908D"
                />
              </svg>

              <select class="w-[100px] pl-[5px]">
                <option>English</option>
                <option>Uzbek</option>
                <option>Russian</option>
                <option>Persian</option>
              </select>
            </div>
          </div>
          <div class="divide"></div>
          <div class="flex gap-[64px] pt-[14px]">
            <div>
              <h2 class="text-[14px]" style="font-family: Geist; font-weight: 600; color: rgba(0, 0, 0, 1)">Residential complexes</h2>
              <p class="text-[10px]" style="font-family: Geist; font-weight: 400; color: rgba(63, 93, 90, 1)">Select an apartment complex</p>
            </div>
            <div class="rounded-full w-[257px] flex justify-between items-center px-[20px]" style="border: 1px solid rgba(185, 199, 198, 1)">
              <input type="text" placeholder="Search by house name..." class="border-none outline-none text-[10px]" />
              <svg class="cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.6668 14.6668L13.3335 13.3335M14.0002 7.66683C14.0002 11.1646 11.1646 14.0002 7.66683 14.0002C4.16903 14.0002 1.3335 11.1646 1.3335 7.66683C1.3335 4.16903 4.16903 1.3335 7.66683 1.3335C11.1646 1.3335 14.0002 4.16903 14.0002 7.66683Z"
                  stroke="#72908D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>

          <div class="bg-[#F4F6F6] rounded-[12px] p-[12px] w-[220px] m-[16px] cursor-pointer">
            <span>{{ projects.name }}</span>
            <div class="bg-[#FFFFFF] w-full h-[4px] rounded-full mt-[4px]">
              <div class="bg-[#2CC171] h-full rounded-full" :style="{ width: progress + '%' }"></div>
            </div>
            <div class="pt-[12px]">
              <div class="flex items-center justify-between">
                <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">Apartments</p>
                <span class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">{{ projects.apartments_count }}</span>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">Free apartments</p>
                <span class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">{{ projects.free_apartments_count }}</span>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">Orders</p>
                <span class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">{{ projects.orders_count }}</span>

              </div>
              <div class="flex items-center justify-between">
                <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">Contracts</p>
                <span class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">{{ projects.contracts_count }}</span>

              </div>
            </div>
          </div>
        </div>

        <div class="">
          <Filter />
        </div>

        <div class="mt-[16px] w-full">
          <div>
    <table class="styled-table w-full" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
      <thead class="bg-[#EDF1F1] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4f7471">
        <tr>
          <th>№</th>
          <th>Residential Complex name</th>
          <th>Block</th>
          <th>Apartment number</th>
          <th>Floor</th>
          <th>Number of rooms</th>
          <th>Area</th>
          <th>Price per meter</th>
          <th>Total price</th>
          <th>Repaired condition</th>
          <th>Apartment class</th>
          <th>Condition</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedData" :key="index">
          <router-link :to="`/main/Hakimi/${item.id}`" style="display: contents">
                      <td>{{ item.id }}</td>
            <td>{{ item.project_name }}</td>
            <td>{{ item.house_number }}</td>
            <td>{{ item.number }}</td>
            <td>{{ item.floor_number }}</td>
            <td>
              <span
                class="rounded-full bg-[#C5F7DC] px-[10px] py-[7px] text-center"
                style="font-family: Geist; font-weight: 600; color: #000000"
              >{{ item.room_numbers }}</span>
            </td>
            <td>{{ item.area }}</td>
            <td>{{ item.unrepaired_price }} UZS</td>
            <td>{{ item.price_all_meter }} UZS</td>
            <td>{{ item.condition }}</td>
            <td>{{ item.tariff }}</td>
            <td>
              <p
                :class="getConditionClass(item.condition)"
                class="rounded-[30px] text-center text-[12px] px-[8px] py-[8px]"
                style="font-family: Geist; font-weight: 600; color: #000000"
              >
                {{ item.sale_type }}
              </p>
            </td>
          </router-link>
        </tr>
      </tbody>
    </table>

    <!-- Pagination Controls -->
    <div class="pagination-controls">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainSidebar from "../components/MainSidebar.vue";
import Filter from "../components/Filter.vue";
import axios from "axios";
import { useI18n } from "vue-i18n";
export default {
  name: "Main",
  components: { MainSidebar, Filter },
  data() {
    return {
      languages: {
        en: "English",
        uz: "Uzbek",
        ru: "Russian",
        fa: "Persian",
      },
      currentLanguage: "en",
      locale: this.$i18n.locale,
      id:null,
      progress: 48,
      isMessageOpen: false,
      table_data: [],
      projects: [],
      currentPage: 1,
      itemsPerPage: 10, // Customize this value as needed
      error: null,

    };
  },
  mounted() {
    this.fetchTableData();
    this.fetchProjectData();
    this.id = this.$route.params.id;
  },
  computed: {
    // Calculate total pages based on data length and items per page
    totalPages() {
      return Math.ceil(this.table_data.length / this.itemsPerPage);
    },
    // Slice the data array for the current page
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.table_data.slice(start, end);
    },
  },
  methods: {
    changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    // Navigate to the next page
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    openMessage() {
      this.isMessageOpen = true;
    },

    closeMessage() {
      this.isMessageOpen = false;
    },
    getConditionClass(condition) {
      switch (condition) {
        case "sold_out":
          return "bg-red-500";
        case "for_sale":
          return "bg-green-500";
        case "not_for_sale":
          return "bg-orange-500";
        default:
          return "bg-gray-200"; // Default background color
      }
    },
    async fetchTableData() {
      try {
        const response = await axios.get("/projects/apartments/list/");
        this.table_data = response.data.results;
      } catch (error) {
        this.error = "An error occurred while fetching data";
        console.error(error);
      }
    },
    async fetchProjectData() {
      try {
        const response = await axios.get("https://api.hakimi.itic.uz/projects/");
        this.projects = response.data.results[0];
      } catch (error) {
        this.error = "An error occurred while fetching data";
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.divide {
  border-top: 1px dashed #95acaa;
}

.styled-table th,
.styled-table td {
  padding: 10px 10px;
}
.pagination-controls {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

button {
  margin: 0 8px;
}
</style>

