<template>
  <div class="bg-[#F4F6F6] h-full">
    <div class="flex w-full min-h-screen">
      <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
          <div class=" bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px] " style="border: 1px solid #EDF1F1" >
            <div class="flex items-center justify-between">
                    <div>
                        <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">Debt</p>
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
            <div class="bg-[#F4F6F6] rounded-[8px] p-[6px] mt-[16px]">
          <Filter/>

              <div class="mt-[6px]">
                <table class="debt-table">
                  <thead>
                    <tr v-for="(head, index) in debtHead" :key="index" class="text-[14px]" style="font-family: Geist; font-weight : 500; color: #4F7471;">
                      <th> <a-checkbox/> </th>
                      <th>{{ head.contract }}</th>
                      <th>{{ head.client }}</th>
                      <th>{{ head.phoneNumber }}</th>
                      <th>{{ head.loadAmount }}</th>
                      <th>{{ head.delay }}</th>
                      <th>{{ head.delayRate }}</th>
                      <th>{{ head.surcharge }}</th>
                      <th>{{ head.responsible }}</th>
                      <th>{{ head.date }}</th>
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(body, index) in debtBody" :key="index" class="text-[14px]" style="font-family: Geist; font-weight : 600; color: #000000;">
                      <td> <a-checkbox/> </td>
                      <td>{{ body.contract }}</td>
                      <td>{{ body.client }}</td>
                      <td style="font-weight: 600; color: #72908D;">{{ body.phoneNumber }}</td>
                      <td style="font-weight: 600; color: #DB4F00;">{{ body.loadAmount }}</td>
                      <td>{{ body.delay }}</td>
                      <td>{{ body.delayRate }}</td>
                      <td  style="font-weight: 600; color: #DB4F00;">{{ body.surcharge }}</td>
                      <td>{{ body.responsible }}</td>
                      <td style="font-weight: 600; color: #72908D;">{{ body.date }}</td>
                      <td>
                          <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="5.50024" cy="6" r="5.5" fill="#D9D9D9"/>
                          </svg>
                      </td>
                      <td>
                        <div class="relative">
                          <svg @click="toggleMenu(index)" class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="6.00024" cy="12" r="1.5" transform="rotate(90 6.00024 12)" fill="#18181B"/>
                          <circle cx="12.0002" cy="12" r="1.5" transform="rotate(90 12.0002 12)" fill="#18181B"/>
                          <circle cx="18.0002" cy="12" r="1.5" transform="rotate(90 18.0002 12)" fill="#18181B"/>
                          </svg>

                          <div v-if="isOpen === index" class="absolute  w-[269px] shadow-lg bg-[#FFFFFF] rounded-[8px] z-10 right-0 mt-2">
                            <ul>
                              <li class="hover:bg-gray-100 flex cursor-pointer items-center gap-[10px] p-[10px] rounded-[6px]">Delete Penny</li>
                              <li @click="openMessage" class="hover:bg-gray-100 flex cursor-pointer items-center gap-[10px] p-[10px] rounded-[6px]">Send SMS</li>
                              <li class="hover:bg-gray-100 flex cursor-pointer items-center gap-[10px] p-[10px] rounded-[6px]">Customer status</li>
                              <li @click="openTask" class="hover:bg-gray-100 flex cursor-pointer items-center gap-[10px] p-[10px] rounded-[6px]">Create a task</li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
    </div>
    <div v-if="isMessageOpen" className='fixed inset-0 bg-black opacity-50 z-10'></div>
    <transition name="popup">
     <div v-if="isMessageOpen" class="fixed inset-0  flex justify-center items-center z-50">
        <div  class=" bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px]">
          <div class="bg-[#FFFFFF] py-[16px] px-[12px] rounded-[6px]">
            <div class="flex justify-between items-center">
              <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Send a message</p>
              <img class="cursor-pointer" @click="closeMessage" src="/closeWhite.svg" alt="">
            </div>
            <div class="divide pt-[20px]"></div>
            <div class="flex justify-between pt-[12px]">
              <div>
                <p class="text-[14px] pb-[6px]" style="font-family: Geist; font-weight: 500; color:#72908D;">Client</p>
                <p class="text-[14px]" style="font-family: Geist; font-weight: 600; color:#000000;">Sulaymonova Nodira</p>
              </div>

              <div>
                <p class="text-[14px] pb-[6px]" style="font-family: Geist; font-weight: 500; color:#72908D;">Cellphone number</p>
                <p class="text-[14px]" style="font-family: Geist; font-weight: 600; color:#000000;">+998917089332 </p>
              </div>
              <div>
                <p class="text-[14px] pb-[6px]" style="font-family: Geist; font-weight: 500; color:#72908D;">Contract</p>
                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color:#000000;">13</span>
              </div>
            </div>
            <div class="pt-[12px]">
              <textarea class="resize-none py-[13px] px-[14px] w-full h-[160px] rounded-[8px] outline-none" placeholder="Enter the message text" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
            </div>
          </div>
          <div class="bg-[#FFFFFF] p-[12px] mt-[6px] rounded-[6px] flex gap-[20px]">
              <button @click="closeMessage" class="bg-[#F4F6F6] text-center py-[10px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">Close</button>
              <button class="text-center py-[8px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Send a message</button>
          </div>
        </div>
     </div> 
    </transition>

    <div v-if="isTaskOpen" className='fixed inset-0 bg-black opacity-50 z-10'></div>
    <transition name="popup">
      <div v-if="isTaskOpen" class="fixed inset-0  flex justify-center items-center z-50">
        <div  class=" bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px]">
          <div class="bg-[#FFFFFF] py-[16px] px-[12px] rounded-[6px]">
            <div class="flex justify-between items-center">
              <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Create a task</p>
              <img class="cursor-pointer" @click="closeTask" src="/closeWhite.svg" alt="">
            </div>
              <div class="divide pt-[20px]"></div>
            <div class="flex gap-[12px] pt-[14px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color:#0037FF;">Task</p>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.28 5.9668L8.9333 10.3135C8.41997 10.8268 7.57997 10.8268 7.06664 10.3135L2.71997 5.9668" stroke="#0037FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <button class="py-[2px] px-[12px] border rounded-[6px] text-[12px]" style="font-family: Geist; font-weight: 500;">Today</button>
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color:#72908D;">for :</p>
            </div>
            <div class="pt-[12px]">
              <textarea class="resize-none py-[13px] px-[14px] w-full h-[160px] rounded-[8px] outline-none" placeholder="Input text" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
            </div>
          </div>
          <div class="bg-[#FFFFFF] p-[12px] mt-[6px] rounded-[6px] flex gap-[20px]">
              <button @click="closeTask" class="bg-[#F4F6F6] text-center py-[10px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">Close</button>
              <button class="text-center py-[8px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Send </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import MainSidebar from '../components/MainSidebar.vue';
import Filter from '../components/Filter.vue';
import axios from "axios";
import { useI18n } from "vue-i18n";
export default {
  name : 'Debt',
  components : {MainSidebar,Filter},
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
      isOpen : false,
      isMessageOpen : false,
      isTaskOpen: false,
      debtHead : [
        {
          contract : 'Contract',
          client : 'Client',
          phoneNumber : 'Phone number',
          loadAmount: 'Loan amount',
          delay : 'Delay',
          delayRate : 'Maximum delay time',
          surcharge : 'Surcharge',
          responsible : 'Responsible',
          date : 'Date'
        }
      ],
      debtBody  : [
        {
          contract : '942',
          client : 'SALIMOVA NILUFAR QUCHQOROVNA',
          phoneNumber : '+998975778118',
          loadAmount: '2 137 500 UZS',
          delay : '4',
          delayRate : '4',
          surcharge : '2 137 500 UZS',
          responsible : 'Xusnor Odilova',
          date : '10.08.2024'
        },
        {
          contract : '942',
          client : 'SALIMOVA NILUFAR QUCHQOROVNA',
          phoneNumber : '+998975778118',
          loadAmount: '2 137 500 UZS',
          delay : '4',
          delayRate : '4',
          surcharge : '2 137 500 UZS',
          responsible : 'Xusnor Odilova',
          date : '10.08.2024'
        },
        {
          contract : '942',
          client : 'SALIMOVA NILUFAR QUCHQOROVNA',
          phoneNumber : '+998975778118',
          loadAmount: '2 137 500 UZS',
          delay : '4',
          delayRate : '4',
          surcharge : '2 137 500 UZS',
          responsible : 'Xusnor Odilova',
          date : '10.08.2024'
        },
        {
          contract : '942',
          client : 'SALIMOVA NILUFAR QUCHQOROVNA',
          phoneNumber : '+998975778118',
          loadAmount: '2 137 500 UZS',
          delay : '4',
          delayRate : '4',
          surcharge : '2 137 500 UZS',
          responsible : 'Xusnor Odilova',
          date : '10.08.2024'
        },
        {
          contract : '942',
          client : 'SALIMOVA NILUFAR QUCHQOROVNA',
          phoneNumber : '+998975778118',
          loadAmount: '2 137 500 UZS',
          delay : '4',
          delayRate : '4',
          surcharge : '2 137 500 UZS',
          responsible : 'Xusnor Odilova',
          date : '10.08.2024'
        },
        {
          contract : '942',
          client : 'SALIMOVA NILUFAR QUCHQOROVNA',
          phoneNumber : '+998975778118',
          loadAmount: '2 137 500 UZS',
          delay : '4',
          delayRate : '4',
          surcharge : '2 137 500 UZS',
          responsible : 'Xusnor Odilova',
          date : '10.08.2024'
        },
        {
          contract : '942',
          client : 'SALIMOVA NILUFAR QUCHQOROVNA',
          phoneNumber : '+998975778118',
          loadAmount: '2 137 500 UZS',
          delay : '4',
          delayRate : '4',
          surcharge : '2 137 500 UZS',
          responsible : 'Xusnor Odilova',
          date : '10.08.2024'
        },
        {
          contract : '942',
          client : 'SALIMOVA NILUFAR QUCHQOROVNA',
          phoneNumber : '+998975778118',
          loadAmount: '2 137 500 UZS',
          delay : '4',
          delayRate : '4',
          surcharge : '2 137 500 UZS',
          responsible : 'Xusnor Odilova',
          date : '10.08.2024'
        },
        {
          contract : '942',
          client : 'SALIMOVA NILUFAR QUCHQOROVNA',
          phoneNumber : '+998975778118',
          loadAmount: '2 137 500 UZS',
          delay : '4',
          delayRate : '4',
          surcharge : '2 137 500 UZS',
          responsible : 'Xusnor Odilova',
          date : '10.08.2024'
        },
        {
          contract : '942',
          client : 'SALIMOVA NILUFAR QUCHQOROVNA',
          phoneNumber : '+998975778118',
          loadAmount: '2 137 500 UZS',
          delay : '4',
          delayRate : '4',
          surcharge : '2 137 500 UZS',
          responsible : 'Xusnor Odilova',
          date : '10.08.2024'
        },
      ]
    }
  },
  methods: {
    changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
    openTask() {
      this.isTaskOpen = true;
    },
    closeTask() {
      this.isTaskOpen = false;
    },


    openMessage() {
      this.isMessageOpen = true;
    },

    closeMessage() {
      this.isMessageOpen = false;
    },
    toggleMenu(index) {
      this.isOpen = this.isOpen === index ? null : index;
    }
  } 
}
</script>

<style scoped>
  .divide {
    border-bottom: 1px dashed #95ACAA;
  }

  .debt-table {
    width: 100%;
    border: 1px solid var(--Line-Container-Line, #EDF1F1);
    background: #FFFFFF;
  }

  .debt-table th,
  .debt-table td {
    padding: 16px 16px;
    border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1);
  }

  .debt-table tbody tr:hover {
    background: #EDF1F1;
    transition: all 300ms;
  }
  .popup-enter-active,
    .popup-leave-active {
    transition: all 0.2s ease;
    }

    .popup-enter-from,
    .popup-leave-to {
    transform: scale(0.7);
    opacity: 0;
    }

    .popup-enter-to,
    .popup-leave-from {
    transform: scale(1);
    opacity: 1;
    }
</style>
