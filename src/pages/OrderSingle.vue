<template>
  <div class="bg-[#F4F6F6] h-full">
    <div class="flex w-full min-h-screen">
      <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
      <div class="bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px]" style="border: 1px solid #edf1f1">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">№ {{ orderId }}</p>
            <p class="text-[10px]" style="font-family: Geist; font-weight: 400; color: #b9c7c6">Order > № {{ orderId }}</p>
          </div>
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

            <select v-model="currentLanguage" @change="changeLanguage" class="w-[100px] pl-[5px]">
              <option v-for="(label, lang) in languages" :key="lang" :value="lang">
                {{ label }}
              </option>
            </select>
          </div>
        </div>
        <div class="divide pt-[16px]"></div>

        <div class="bg-[#F4F6F6] mt-[16px] p-[6px] rounded-[8px] min-h-screen">
          <div class="flex gap-[6px]">
            <div class="bg-[#FFFFFF] px-[12px] pt-[12px] pb-[32px] w-full rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1); box-shadow: 0px 1px 2px 0px #1823220d">
              <div class="flex justify-between">
                <div class="flex items-center gap-[4px]">
                  <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #3f5d5a">Order</p>
                  <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #0037ff">#{{ orderId }}</span>
                </div>
                <button
                  :class="{
                    'bg-green-500 text-white': data.status === 'contracted',
                    'bg-red-500 text-white': data.status === 'cancelled',
                    'bg-[#DCE3E3]': data.status !== 'contracted' && data.status !== 'cancelled',
                  }"
                  class="py-[10px] rounded-[6px] w-[157px]"
                >
                  {{ data.status }}
                </button>
              </div>
              <div class="divide pt-[12px]"></div>

              <div class="pt-[24px]">
                <h2>Client informations</h2>
                <div class="divide pt-[16px]"></div>
                <div class="flex items-center gap-[12px] pt-[20px]">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="48" height="48" rx="24" fill="#00B252" />
                    <path
                      d="M17.464 18.64H20.008L24.104 30H21.928L20.984 27.312H16.488L15.544 30H13.368L17.464 18.64ZM20.376 25.536L18.744 20.736L17.096 25.536H20.376ZM25.2569 18.64H27.3049V25.312L30.8089 21.456H33.3369L29.9929 25.008L33.4489 30H31.1449L28.6489 26.224L27.3049 27.648V30H25.2569V18.64Z"
                      fill="white"
                    />
                  </svg>
                  <div class="flex items-center">
                    <div>
                      <p>{{ data.full_name }}</p>
                      <div class="flex gap-[4px] pt-[6px]">
                        <div class="w-[18px] h-[4px] rounded-full bg-[#FBEDE5]"></div>
                        <div class="w-[18px] h-[4px] rounded-full bg-[#FFFBE5]"></div>
                        <div class="w-[18px] h-[4px] rounded-full bg-[#C5F7DC]"></div>
                        <div class="w-[18px] h-[4px] rounded-full bg-[#E5EBFF]"></div>
                        <div class="w-[18px] h-[4px] rounded-full bg-[#FFEEFC]"></div>
                      </div>
                      <div class="flex items-center gap-[6px] pt-[6px]">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.985 9.165C10.985 9.345 10.945 9.53 10.86 9.71C10.775 9.89 10.665 10.06 10.52 10.22C10.275 10.49 10.005 10.685 9.7 10.81C9.4 10.935 9.075 11 8.725 11C8.215 11 7.67 10.88 7.095 10.635C6.52 10.39 5.945 10.06 5.375 9.645C4.8 9.225 4.255 8.76 3.735 8.245C3.22 7.725 2.755 7.18 2.34 6.61C1.93 6.04 1.6 5.47 1.36 4.905C1.12 4.335 1 3.79 1 3.27C1 2.93 1.06 2.605 1.18 2.305C1.3 2 1.49 1.72 1.755 1.47C2.075 1.155 2.425 1 2.795 1C2.935 1 3.075 1.03 3.2 1.09C3.33 1.15 3.445 1.24 3.535 1.37L4.695 3.005C4.785 3.13 4.85 3.245 4.895 3.355C4.94 3.46 4.965 3.565 4.965 3.66C4.965 3.78 4.93 3.9 4.86 4.015C4.795 4.13 4.7 4.25 4.58 4.37L4.2 4.765C4.145 4.82 4.12 4.885 4.12 4.965C4.12 5.005 4.125 5.04 4.135 5.08C4.15 5.12 4.165 5.15 4.175 5.18C4.265 5.345 4.42 5.56 4.64 5.82C4.865 6.08 5.105 6.345 5.365 6.61C5.635 6.875 5.895 7.12 6.16 7.345C6.42 7.565 6.635 7.715 6.805 7.805C6.83 7.815 6.86 7.83 6.895 7.845C6.935 7.86 6.975 7.865 7.02 7.865C7.105 7.865 7.17 7.835 7.225 7.78L7.605 7.405C7.73 7.28 7.85 7.185 7.965 7.125C8.08 7.055 8.195 7.02 8.32 7.02C8.415 7.02 8.515 7.04 8.625 7.085C8.735 7.13 8.85 7.195 8.975 7.28L10.63 8.455C10.76 8.545 10.85 8.65 10.905 8.775C10.955 8.9 10.985 9.025 10.985 9.165Z"
                            stroke="#72908D"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                          />
                        </svg>
                        <a class="list-none" href="#">{{ data.client_info.phone_number }}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-[20px]">
                  <div class="flex items-center">
                    <div class="w-full">
                      <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Client</p>
                      <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ data.full_name }}</span>
                    </div>
                    <div class="w-full">
                      <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Responsible employee</p>
                      <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ data.responsible }}</span>
                    </div>
                  </div>
                </div>
                <div class="pt-[20px]">
                  <div class="flex items-center">
                    <div class="w-full">
                      <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Residential complex</p>
                      <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ data.apartment.project_name }}</span>
                    </div>
                    <div class="w-full">
                      <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Address</p>
                      <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">NULL</span>
                    </div>
                  </div>
                </div>
                <div class="pt-[20px]">
                  <div class="flex items-center">
                    <div class="w-full">
                      <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Client phone number</p>
                      <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ data.client_info.phone_number }}</span>
                    </div>
                  </div>
                </div>
                <div class="pt-[20px]">
                  <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908d">House information</p>
                  <div class="pt-[20px]">
                    <div class="flex items-center">
                      <div class="w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">House number</p>
                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ data.apartment.house_number }}</span>
                      </div>
                      <div class="w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Floor</p>
                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ data.apartment.floor_number }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="pt-[20px]">
                    <div class="flex items-center">
                      <div class="w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Number of rooms</p>
                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ data.apartment.room_numbers }}</span>
                      </div>
                      <div class="w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Area (m²)</p>
                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ data.apartment.area }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="pt-[20px]">
                    <div class="flex items-center">
                      <div class="w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Unrepaired price</p>
                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000"><span v-if="data.apartment && data.apartment.unrepaired_price">
  {{ data.apartment.unrepaired_price.toLocaleString() }} UZS
</span>
</span>
                      </div>
                      <div class="w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Repaired price</p>
                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000"><span v-if="data.apartment && data.apartment.repaired_price">
  {{ data.apartment.repaired_price.toLocaleString() }} UZS
</span></span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="pt-[20px]">
                  <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908d">Order information</p>
                  <div class="pt-[20px]">
                    <div class="flex items-center">
                      <div class="w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Order period (day)</p>
                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ data.period }} day</span>
                      </div>
                      <div class="w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Order date</p>
                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ new Date(data.created_at).toLocaleString() }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="pt-[20px]">
                    <div class="flex items-center">
                      <div class="w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Payment status</p>
                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">Payment is non-refundable</span>
                      </div>
                      <div class="w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Agreed amount</p>
                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000"> {{ data.agreed_amount.toLocaleString() }}UZS</span>
                      </div>
                    </div>
                  </div>
                  <div class="pt-[20px]">
                    <div class="flex items-center">
                      <div class="w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Date of order cancellation</p>
                        <span class="text-[14px] flex items-center gap-[12px]" style="font-family: Geist; font-weight: 600; color: #000000">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.3305 9.16663H13.338M9.99632 9.16663H10.0038M6.66217 9.16663H6.66966M7.08341 15.8333H6.66675C3.33341 15.8333 1.66675 15 1.66675 10.8333V6.66663C1.66675 3.33329 3.33341 1.66663 6.66675 1.66663H13.3334C16.6667 1.66663 18.3334 3.33329 18.3334 6.66663V10.8333C18.3334 14.1666 16.6667 15.8333 13.3334 15.8333H12.9167C12.6584 15.8333 12.4084 15.9583 12.2501 16.1666L11.0001 17.8333C10.4501 18.5666 9.55008 18.5666 9.00008 17.8333L7.75008 16.1666C7.61675 15.9833 7.30841 15.8333 7.08341 15.8333Z"
                              stroke="#18181B"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-[#FFFFFF] p-[12px] w-full rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1); box-shadow: 0px 1px 2px 0px #1823220d">
              <h2 class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #3f5d5a">Payments</h2>
              <div class="divide pt-[16px]"></div>

              <div class="w-full h-full flex items-center justify-center">
                <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #72908d">This order has been cancelled!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainSidebar from "../components/MainSidebar.vue";
import axios from "axios";
import { useI18n } from "vue-i18n";
export default {
  name: "OrderSingle",
  components: { MainSidebar },
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
      data: { client_info: {}, apartment: {} },
      orderId: null, // Initialize orderId
    };
  },
  created() {
    // Retrieve the ID from the URL
    this.orderId = this.$route.params.id;
  },
  mounted() {
    this.fetchData();
    // this.orderId = this.$route.params.id;
  },
  methods: {
    changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
    async fetchData() {
      try {
        const response = await axios.get(`/contracts/orders/${this.orderId}`);
        this.data = response.data;
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
  border-bottom: 1px dashed #95acaa;
}
</style>
