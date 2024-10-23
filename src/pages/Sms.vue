<template>
  <div class="bg-[#F4F6F6] h-full">
    <div class="flex w-full min-h-screen">
      <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
      <div  class=" bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px] " style="border: 1px solid #EDF1F1" >
        <div class="flex items-center justify-between">
          <div>
              <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">SMS</p>
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
          <div class="pt-[6px]">
            <table class="sms-table">
              <thead>
                <tr v-for="(head, index) in tableHead" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471;">
                  <th>{{ head.number }}</th>
                  <th>{{ head.client }}</th>
                  <th>{{ head.phoneNumber }}</th>
                  <th>{{ head.message }}</th>
                  <th>{{ head.date }}</th>
                  <th>{{ head.sent }}</th>
                  <th>{{ head.status }}</th>
                </tr>
              </thead>
              <tbody>
                <tr @click="openMessage" v-for="(body, index) in tableBody" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 600; color:#000000;">
                  <td>{{ index + 1 }}</td>
                  <td class="w-[217px]">{{ body.client }}</td>
                  <td class="text-[12px]" style="color:#72908D;">{{ body.phoneNumber }}</td>
                  <td class=" w-[415px]" >{{ truncateText(body.message, 120) }}</td>
                  <td class="text-[#72908D]">{{ body.date }}</td>
                  <td>{{ body.sent }}</td>
                  <td>
                    <button v-if="index %3 == 0" class="py-[10px] w-[160px] bg-[#C5F7DC4D] rounded-[6px]" style="font-family: Geist; font-weight: 600; color: #008E42;">{{ body.statusWS }}</button>
                    <button v-else-if="index % 3 == 1" class="py-[10px] w-[160px] bg-[#E5EBFF] rounded-[6px]" style="font-family: Geist; font-weight: 600; color:#0037FF">{{ body.statusA }}</button>
                    <button v-else class="py-[10px] w-[160px] bg-[#E5EBFF] rounded-[6px]" style="font-family: Geist; font-weight: 600; color:#0037FF">{{ body.statusNA }}</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div v-if="isMessageOpen" class='fixed inset-0 bg-black opacity-50'></div>
    <transition name="popup">
      <div v-if="isMessageOpen" class="fixed inset-0  flex justify-center items-center">
        <div class=" bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px]">
          <div class="bg-[#FFFFFF] py-[16px] px-[12px] rounded-[6px]">
            <div class="flex justify-between items-center">
              <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">ABROROV ULMASJON ULUG‘BEKOVICH</p>
              <img class="cursor-pointer" @click="closeMessage" src="/closeWhite.svg" alt="">
            </div>
            <div class="divide pt-[12px]"></div>
            <div class="flex justify-between py-[16px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">Date of sent</p>
              <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">27.08.2024 11:22</span>
            </div>
            <div class="divide"></div>
            <div class="flex justify-between items-center py-[8px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">Status</p>
              <button class="py-[10px] w-[160px] bg-[#C5F7DC4D] rounded-[6px]" style="font-family: Geist; font-weight: 600; color: #008E42;">Was sent</button>   
            </div>
            <div class="divide"></div>
            <div class="py-[16px]">
              <h3 class="pb-[6px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">Message Text</h3>
              <p class="text-left text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471;">Hurmatli ABROROV ULMASJON ULUG‘BEKOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 24 raqamli xonadon uchun 6215000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 226459000.00 so'm, To'lov qilish raqami: 230750095</p>
            </div>
            <div class="divide"></div>
            <div class="flex justify-end">
              <button @click="closeMessage" class="py-[10px] w-[140px] text-center bg-[#F4F6F6] hover:bg-[#EDF1F1] rounded-[6px] mt-[16px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">Close</button>
            </div>
          </div>
        </div>
      </div>  
    </transition>

    <div v-if="isNotificationOpen" class='fixed inset-0 bg-black opacity-50'></div>
    <transition name="popup">
      <div v-if="isNotificationOpen" class="fixed inset-0  flex justify-center p-[38px]">
        <div class=" bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px] overflow-hidden ">
          <div class=" overflow-y-auto custom-scrollbar  h-full">
            <div class="bg-[#FFFFFF] py-[16px] px-[12px] rounded-[6px] ">
              <div class="flex justify-between items-center">
                <div class="flex items-center gap-[12px]">
                  <p class="text-[16px] " style="font-family: Geist; font-weight: 600; color: #000000;">Send a general notification</p>
                  <span class="w-[75px] bg-[#FFB743] text-center rounded-full py-[2px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">Premium</span>
                </div>
                <img class="cursor-pointer" @click="closeNotification" src="/closeWhite.svg" alt="">
              </div>
              <div class="divide pt-[24px]"></div>
              <div class="pt-[24px]">
                <ul class="flex gap-[12px]">
                  <li @click="setActiveButton(index)" v-for="(button, index) in notificationTabs" :key="index"
                  :class="['flex items-center gap-[12px] py-[12px] px-[16px] rounded-[6px] cursor-pointer transition-all duration-300']"
                  :style="{fontFamily: 'Geist', fontWeight: '600', color: activeButton === index ? '#0037FF' : '#95ACAA', border: activeButton === index ? '1px solid #0037FF' : '1px solid #EDF1F1'}">
                    <img :src="activeButton === index ?  button.image2 : button.image" alt="">
                    {{ button.name }}
                  </li>
                </ul>
              </div>
              <div v-if="activeButton === 1" class="pt-[24px]">
                <div>
                  <p>Residential complexes</p>
                  <div class="flex items-center gap-[6px] pt-[6px]">
                    <a-checkbox />
                    <span>Hakimi Towers</span>
                  </div>
                  <div class="pt-[24px]">
                    <p>Repair condition</p>
                    <div class="flex items-center pt-[12px] gap-[6px]">
                      <a-checkbox />
                      <p>Repaired</p>
                    </div>
                    <div class="flex items-center  pt-[12px] gap-[6px]">
                      <a-checkbox />
                      <p>Out of repair</p>
                    </div>
                  </div>
                  <div class="pt-[24px]">
                    <p>Contract condition</p>
                    <div class="flex justify-between w-[446px]">
                      <div>
                        <div class="flex items-center pt-[12px] gap-[6px]">
                          <a-checkbox />
                          <p>Active</p>
                        </div>
                        <div class="flex items-center pt-[12px] gap-[6px]">
                          <a-checkbox />
                          <p>Canceled</p>
                        </div>
                      </div>
                      <div>
                        <div class="flex items-center pt-[12px] gap-[6px]">
                          <a-checkbox />
                          <p>Initial</p>
                        </div>
                        <div class="flex items-center pt-[12px] gap-[6px]">
                          <a-checkbox />
                          <p>Completed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                    <div class="pt-[24px]">
                      <p>Template</p>
                      <div class="flex items-center gap-[12px]">
                        <a-select class="mt-[12px]"
                        v-model:value="value1"
                        :size="size"
                        style="width: 435px; "
                        :options="options"
                        ></a-select>
                        <img @click="openTemplate" class="pt-[10px] cursor-pointer" src="/settingsWhite.svg" alt="" width="44px" >
                      </div>
                    </div>
                    <div class="pt-[24px]">
                      <div class="w-full rounded-[6px] py-[6px] px-[12px] h-[145px] flex flex-wrap items-start gap-[8px] overflow-auto" style="border: 1px solid #DCE3E3">
                        <div class="py-[6px] px-[10px] bg-[#E5EBFF] rounded-[6px] text-[#0037FF]  text-[12px] cursor-pointer flex items-center gap-[6px]" v-for="(tag, index) in selectedTags" :key="index"
                        style="font-family: Geist; font-weight: 600;">
                          {{ tag }}
                          <svg @click="removeTag(index)" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.5 9.5L9 4M9 9.5L3.5 4" stroke="#0037FF" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
  
                        </div>
                      </div>
                      <div class="flex items-center flex-wrap gap-[8px] w-full pt-[24px]">
                        <button class="py-[6px] px-[10px] bg-[#E5EBFF] rounded text-[#0037FF]  text-[12px] cursor-pointer" v-for="(tag, index) in tags" :key="index" @click="selectTag(tag)"
                        style="font-family: Geist; font-weight: 600;">
                          {{ tag }}
                        </button>
                      </div>
                    </div>
                </div>
                
              </div>
              <div v-if="activeButton === 0" class="">
                <textarea placeholder="Enter message text" class="resize-none py-[13px] px-[14px] w-full h-[160px] outline-none rounded-[8px] mt-[24px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
              </div>
              <div  v-if="activeButton === 2" >
                <textarea placeholder="Enter message text" class="resize-none py-[13px] px-[14px] w-full h-[160px] outline-none rounded-[8px] mt-[24px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
              </div>
            </div>
            <div class="bg-[#FFFFFF] p-[12px] mt-[6px] rounded-[6px] flex gap-[20px]">
                <button @click="closeNotification" class="bg-[#F4F6F6] text-center py-[10px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">Close</button>
                <button class="text-center py-[8px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Send</button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <div v-if="isTemplateOpen" class='fixed inset-0 bg-black opacity-50'></div>
    <transition name="popup">
      <div v-if="isTemplateOpen"  class="fixed inset-0  flex justify-center items-center">
        <div class=" bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px]">
          <div class="bg-[#FFFFFF] py-[16px] px-[12px] rounded-[6px]">
            <div class="flex justify-between items-center">
                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">SMS notification templates</p>
                <img class="cursor-pointer" @click="closeTemplate" src="/closeWhite.svg" alt="">
            </div>
            <div class="divide pt-[24px]"></div>
            <div class="pt-[24px]">
              <input type="text" placeholder="Enter a name" class=" p-[12px] w-full outline-none rounded-[6px]" style="border: 1px solid #DCE3E3">
            </div>
                <div class="pt-[24px]">
                      <div class="w-full rounded-[6px] py-[6px] px-[12px] h-[145px] flex flex-wrap items-start gap-[8px] overflow-auto" style="border: 1px solid #DCE3E3">
                        <div class="py-[6px] px-[10px] bg-[#E5EBFF] rounded-[6px] text-[#0037FF]  text-[12px] cursor-pointer flex items-center gap-[6px]" v-for="(tag, index) in selectedTags" :key="index"
                        style="font-family: Geist; font-weight: 600;">
                          {{ tag }}
                          <svg @click="removeTag(index)" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.5 9.5L9 4M9 9.5L3.5 4" stroke="#0037FF" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
  
                        </div>
                      </div>
                      <div class="flex items-center flex-wrap gap-[8px] w-full pt-[24px]">
                        <button class="py-[6px] px-[10px] bg-[#E5EBFF] rounded text-[#0037FF]  text-[12px] cursor-pointer" v-for="(tag, index) in tags" :key="index" @click="selectTag(tag)"
                        style="font-family: Geist; font-weight: 600;">
                          {{ tag }}
                        </button>
                      </div>
                </div>
          </div>
          <div class="bg-[#FFFFFF] p-[12px] mt-[6px] rounded-[6px] flex gap-[20px]">
            <button @click="closeTemplate" class="bg-[#F4F6F6] text-center py-[10px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">Close</button>
            <button class="text-center py-[8px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Save</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import MainSidebar from '../components/MainSidebar.vue';
  import Filter from '../components/Filter.vue';
  import markedWhite from '/circleMarkedWhite.svg';
  import markedBlue from '/circleMarkedBlue.svg';
  import axios from "axios";
import { useI18n } from "vue-i18n";
import { ref } from 'vue';
  export default {
    name:'SMS',
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
        tableHead: [
          {
            number : '№',
            client: 'Client',
            phoneNumber : 'Phone number',
            message: 'Message Text',
            date : 'Date of sent',
            sent: 'Sent' ,
            status: 'Status'
          }
        ],
        tableBody : [
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
          {
            client: 'SALIMOVA NILUFAR QUCHQOROVNA',
            phoneNumber : '+998975778118',
            message: "Hurmatli SUYUNOV RAFIQ RAXMONKULOVICH, siz ATLANT IDEAL INVESTdan xarid qilingan 15 raqamli xonadon uchun 5000000 so'm miqdorida to'lov amalga oshirdingiz! Qoldiq: 407500000.00 so'm, To'lov qilish raqami: 240750006",
            date : '21.06.2024 15:56',
            sent: 'Xusnor Odilova',
            statusA: 'Active',
            statusWS: 'Was sent',
            statusNA : 'Unable to send'
          },
        ],
        notificationTabs : [
          {
            name : 'All clients',
            image : markedWhite,
            image2: markedBlue
          },
          {
            name : 'Contracted',
            image : markedWhite,
            image2: markedBlue
          },
          {
            name : 'Not contract',
            image : markedWhite,
            image2: markedBlue
          },
        ],
        tags: [
          'Clients name','Contract number', 'Contract period', 'Payment number',
          'Intial Payment', 'Remaining amount', 'Shartnoma summasi', 'Name of the residential complex',
          'Building name','Apartment number', 'Number of rooms', 'Floor', 'Total area', 'Surcharge',
          'The builder company', 'Currency'
        ],
        selectedTags: [],
        isMessageOpen: false,
        isNotificationOpen: false,
        activeButton : 0,
        isTemplateOpen : false,
        size: ref('large')
      }
    },
    methods: {
      changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
      truncateText(text, limit) {
      return text.length > limit ? text.substring(0, limit) + '...' : text;
    },
    openMessage() {
      this.isMessageOpen = true;
    },
    closeMessage() {
      this.isMessageOpen = false;
    },
    openNotification() {
      this.isNotificationOpen = true;
    },
    closeNotification() {
      this.isNotificationOpen = false;
    },
    setActiveButton(index) {
      this.activeButton = index;
    },
    selectTag(tag) {
      if(!this.selectedTags.includes(tag)) {
        this.selectedTags.push(tag);
      }
    },
    removeTag( index) {
      this.selectedTags.splice(index, 1);
    },
    openTemplate() {
      this.isTemplateOpen = true;
      this.isNotificationOpen = false;
    },
    closeTemplate() {
      this.isTemplateOpen = false;
      this.isNotificationOpen = true;
    }
    },
  }
</script>

<style scoped>
    .divide {
      border-bottom: 1px dashed #95ACAA;
    }
    .sms-table {
      width: 100%;
      background: #FFFFFF;
      border: 1px solid var(--Line-Container-Line, #EDF1F1)
    }

    .sms-table th,
    .sms-table td {
      padding: 20px 20px;
      border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1);
    }

    .sms-table tbody tr:hover {
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

    .custom-scrollbar::-webkit-scrollbar {
        width: 8px;
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background-color: #EDF1F1;
      border-radius: 10px;
      padding: 4px;
    }

    .custom-scrollbar::-webkit-scrollbar-track {
      height: 10px;
      padding: 4px;
    }
</style>
