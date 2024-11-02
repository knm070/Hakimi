<template>
  <div class="bg-[#F4F6F6] h-full">
    <div class="flex w-full min-h-screen">
      <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
      <div class=" bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px] " style="border: 1px solid #EDF1F1" >
        <div class="flex items-center justify-between">
          <div>
              <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">Payment</p>
          </div>
          <div class="flex gap-[24px]">
                  <svg @click="openMessage" class="cursor-pointer" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.3399 14.99L18.3399 13.33C18.1299 12.96 17.9399 12.26 17.9399 11.85V9.32C17.9399 6.97 16.5599 4.94 14.5699 3.99C14.0499 3.07 13.0899 2.5 11.9899 2.5C10.8999 2.5 9.91994 3.09 9.39994 4.02C7.44994 4.99 6.09994 7 6.09994 9.32V11.85C6.09994 12.26 5.90994 12.96 5.69994 13.32L4.68994 14.99C4.28994 15.66 4.19994 16.4 4.44994 17.08C4.68994 17.75 5.25994 18.27 5.99994 18.52C7.93994 19.18 9.97994 19.5 12.0199 19.5C14.0599 19.5 16.0999 19.18 18.0399 18.53C18.7399 18.3 19.2799 17.77 19.5399 17.08C19.7999 16.39 19.7299 15.63 19.3399 14.99Z" fill="#72908D"/>
                      <path d="M14.8299 20.51C14.4099 21.67 13.2999 22.5 11.9999 22.5C11.2099 22.5 10.4299 22.18 9.87994 21.61C9.55994 21.31 9.31994 20.91 9.17994 20.5C9.30994 20.52 9.43994 20.53 9.57994 20.55C9.80994 20.58 10.0499 20.61 10.2899 20.63C10.8599 20.68 11.4399 20.71 12.0199 20.71C12.5899 20.71 13.1599 20.68 13.7199 20.63C13.9299 20.61 14.1399 20.6 14.3399 20.57C14.4999 20.55 14.6599 20.53 14.8299 20.51Z" fill="#72908D"/>
                  </svg>  
               <select v-model="currentLanguage" @change="changeLanguage" class="w-[100px] pl-[5px]">
              <option v-for="(label, lang) in languages" :key="lang" :value="lang">
                {{ label }}
              </option>
            </select>
          </div>
        </div>
        <div class="divide pt-[16px]"></div>
          <div class="flex justify-between items-center pt-[16px]">
            <ul class="flex items-center">
              <li v-for="(tab , index) in tabs" :key="index" class="flex gap-[10px] pr-[20px] cursor-pointer text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;" >
                <img :src="tab.image" alt="">
                {{ tab.name }}
                <span class="h-[16px]  pl-[10px]" style="border-right: 2px solid #EDF1F1;"></span>
              </li>
            </ul>
            <div class="search py-[12px] px-[20px] flex items-center rounded-[12px] w-[398px] cursor-pointer" style="border: 1px solid #B9C7C6">
              <input type="text" placeholder="Search..." class="outline-none w-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6668 14.6666L13.3335 13.3333M14.0002 7.66659C14.0002 11.1644 11.1646 13.9999 7.66683 13.9999C4.16903 13.9999 1.3335 11.1644 1.3335 7.66659C1.3335 4.16878 4.16903 1.33325 7.66683 1.33325C11.1646 1.33325 14.0002 4.16878 14.0002 7.66659Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="flex justify-center">
              <router-link to="/addclient">
                <button class="text-[16px] py-[11px] w-[200px] rounded-[8px] flex gap-[8px] justify-center" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%); border: 1px solid;border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66675 10.0001H13.3334M10.0001 13.3334V6.66675M10.0001 18.3334C14.5834 18.3334 18.3334 14.5834 18.3334 10.0001C18.3334 5.41675 14.5834 1.66675 10.0001 1.66675C5.41675 1.66675 1.66675 5.41675 1.66675 10.0001C1.66675 14.5834 5.41675 18.3334 10.0001 18.3334Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Add Client
                </button>
              </router-link>
            </div>
          </div>

          <div class="bg-[#F4F6F6] rounded-[8px] p-[6px] mt-[16px]">
           <Filter2/>
            <div class="mt-[6px]">
                <table class="client-table">
                  <thead>
                    <tr v-for="(head, index) in tableHead" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471; ">
                        <th>{{ head.number }}</th>
                        <th class="w-[260px]">{{ head.client }}</th>
                        <th>{{ head.phoneNumber }}</th>
                        <th>{{ head.residence }}</th>
                        <th>{{ head.balance }}</th>
                        <th>{{ head.status }}</th>
                        <th>{{ head.respobsible }}</th>
                        <th>{{ head.date }}</th>
                        <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr @click="gotoClientSingle(body.id)" v-for="(body, index) in paginatedData" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000; ">
                      <td>{{ body.id }}</td>
                      <td>{{ body.full_name }}</td>
                      <td>{{ body.phone_number }}</td>
                      <td>{{ body.region }}</td>
                      <td >{{ body.balance }}</td>
                      <td>
                       <button
                      :class="{
                        'bg-green-500 text-white': body.status === 'active',
                        'bg-red-500 text-white': body.status === 'cancelled',
                        'bg-[#DCE3E3]': body.status !== 'contracted' && body.status !== 'cancelled',
                      }"
                      class="py-[10px] rounded-[6px] w-[157px]"
                    >
                      {{ body.status }}
                    </button>
                      </td>
                      <td>Xusnora Odilova</td>
                      <td class="text-[#72908D] font-[500]">{{ body.given_date }}</td>
                      <td>
                        <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6" cy="12" r="1.5" transform="rotate(90 6 12)" fill="#18181B"/>
                        <circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill="#18181B"/>
                        <circle cx="18" cy="12" r="1.5" transform="rotate(90 18 12)" fill="#18181B"/>
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style="margin: 2rem">
              <button @click="prevPage" :disabled="currentPage === 1" class="pgn_data">Previous</button>
              <span>Page {{ currentPage }} of {{ totalPages }}</span>
              <button @click="nextPage" :disabled="currentPage === totalPages" class="pgn_data">Next</button>
            </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import MainSidebar from '../components/MainSidebar.vue';
import Filter2 from '../components/Filter.vue';
import axios from "axios";
import { useI18n } from "vue-i18n";
import Filter from '/paymetnsFilter.svg'
import Download from '/paymentsDownload.svg'
import Table from '/paymentsTable.svg'
import Bank from '/paymentsBank.svg'
import Information from '/paymentsInformation.svg'
  export default {
    name: 'Clients',
    components : {MainSidebar,Filter2},
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
      table_data:[],
      currentPage: 1,
      itemsPerPage: 10, // Adjust this to set how many items per page
 
        tabs :[ 
        {
          name: 'Filter',
          image : Filter
        },
        {
          name:'Download',
          image: Download
        },
        {
          name:'Table settings',
          image : Table
        },
        {
          name: 'Bank',
          image: Bank
        },
        {
          name: 'Information',
          image : Information
        }
      ],
      tableHead : [
        {
          number : '№',
          client: 'Client',
          phoneNumber : 'Phone number',
          residence : 'Place of residence',
          balance : 'Client balance',
          status : 'Status',
          respobsible: 'Responsible',
          date:'Date',
        }
      ],
     
      }
    },
    computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.table_data.slice(start, start + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.table_data.length / this.itemsPerPage);
    },
  },
    mounted() {
    this.fetchTableData();
  },
    methods: {
      changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
    
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
      gotoClientSingle() {
        this.$router.push('/client-single')
      },
      async fetchTableData() {
      try {
        const response = await axios.get("/accounts/clients/");
        this.table_data = response.data.results;
      } catch (error) {
        this.error = "An error occurred while fetching data";
        console.error(error);
      }
    },
    },
  }
</script>

<style scoped>
  .divide {
    border-bottom: 1px dashed #95ACAA;
  }

  .client-table{
    width: 100%;
    background: #FFFFFF;
    border: 1px solid var(--Line-Container-Line, #EDF1F1)
  }

  .client-table th {
    padding: 16px 16px;
    border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)
  }
  .client-table td {
    padding: 20px 20px;
    border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)
  }

  .client-table tbody tr:hover {
    background: #EDF1F1;
    transition: all 300ms;
  }
  .pgn_data {
  background-color: #00b252;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pgn_data:hover {
  background-color: #008a3b;
}
</style>
