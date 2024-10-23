<template>
    <div class="bg-[#F4F6F6] h-full">
        <div class="flex w-full min-h-screen">
            <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
            <div class=" bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px] " style="border: 1px solid #EDF1F1" >
                <div class="flex items-center justify-between">
                    <div>
                        <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">SHAMSIYEV ZOKIR BOTIROVICH</p>
                        <p class="text-[10px] pt-[3px]" style="font-family: Geist; font-weight: 400; color: #B9C7C6;"> Clients > SHAMSIYEV ZOKIR BOTIROVICH</p>
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
                <div class="bg-[#F4F6F6] rounded-[8px] p-[6px] mt-[16px] flex gap-[6px]">
                    <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                        <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">Payments</p>
                        <div class="divide pt-[12px]"></div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-[12px] pt-[16px]">
                                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="48" height="48" rx="24" fill="#00B252"/>
                                <path d="M17.464 18.64H20.008L24.104 30H21.928L20.984 27.312H16.488L15.544 30H13.368L17.464 18.64ZM20.376 25.536L18.744 20.736L17.096 25.536H20.376ZM25.2569 18.64H27.3049V25.312L30.8089 21.456H33.3369L29.9929 25.008L33.4489 30H31.1449L28.6489 26.224L27.3049 27.648V30H25.2569V18.64Z" fill="white"/>
                                </svg>
                                <div>
                                    <p class="text-[12px]" style="font-family:Geist; font-weight:600; color:#000000;">Akbarali Khasanov</p>
                                    <div class="flex items-center gap-[6px] pt-[6px]">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.985 9.165C10.985 9.345 10.945 9.53 10.86 9.71C10.775 9.89 10.665 10.06 10.52 10.22C10.275 10.49 10.005 10.685 9.7 10.81C9.4 10.935 9.075 11 8.725 11C8.215 11 7.67 10.88 7.095 10.635C6.52 10.39 5.945 10.06 5.375 9.645C4.8 9.225 4.255 8.76 3.735 8.245C3.22 7.725 2.755 7.18 2.34 6.61C1.93 6.04 1.6 5.47 1.36 4.905C1.12 4.335 1 3.79 1 3.27C1 2.93 1.06 2.605 1.18 2.305C1.3 2 1.49 1.72 1.755 1.47C2.075 1.155 2.425 1 2.795 1C2.935 1 3.075 1.03 3.2 1.09C3.33 1.15 3.445 1.24 3.535 1.37L4.695 3.005C4.785 3.13 4.85 3.245 4.895 3.355C4.94 3.46 4.965 3.565 4.965 3.66C4.965 3.78 4.93 3.9 4.86 4.015C4.795 4.13 4.7 4.25 4.58 4.37L4.2 4.765C4.145 4.82 4.12 4.885 4.12 4.965C4.12 5.005 4.125 5.04 4.135 5.08C4.15 5.12 4.165 5.15 4.175 5.18C4.265 5.345 4.42 5.56 4.64 5.82C4.865 6.08 5.105 6.345 5.365 6.61C5.635 6.875 5.895 7.12 6.16 7.345C6.42 7.565 6.635 7.715 6.805 7.805C6.83 7.815 6.86 7.83 6.895 7.845C6.935 7.86 6.975 7.865 7.02 7.865C7.105 7.865 7.17 7.835 7.225 7.78L7.605 7.405C7.73 7.28 7.85 7.185 7.965 7.125C8.08 7.055 8.195 7.02 8.32 7.02C8.415 7.02 8.515 7.04 8.625 7.085C8.735 7.13 8.85 7.195 8.975 7.28L10.63 8.455C10.76 8.545 10.85 8.65 10.905 8.775C10.955 8.9 10.985 9.025 10.985 9.165Z" stroke="#72908D" stroke-width="1.5" stroke-miterlimit="10"/>
                                        </svg>
                                        <p class="text-[10px]" style="font-family:Geist; font-weight:500; color:#72908D;">+998911234567</p>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-[12px]">
                                <img class="cursor-pointer" src="/whiteMessageIcon.svg" alt="">
                                <img class="cursor-pointer" src="/whiteMenuIcon.svg" alt="">
                            </div>
                        </div>
                        <div class="flex justify-between w-full">
                            <div class="pt-[16px] w-full">
                                <div>
                                    <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color:#72908D;">Province</p>
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #000000;">Samarqand viloyati</span>
                                </div>

                                <div class="pt-[12px]">
                                    <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color:#72908D;">City/district</p>
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #000000;">Tayloq tumani</span>
                                </div>
                            </div>
                            <div class="pt-[16px] w-full">
                                <div>
                                    <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color:#72908D;">Residential address</p>
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #000000;">Tayloq tumani ГУЛБА ҚФЙ, ТАРАККИЁТ МФЙ, ЖАЛОИР ҚИШЛОҒИ, uy:Р/С</span>
                                </div>
                                <div class="pt-[12px]">
                                    <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color:#72908D;">Passport series, number</p>
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #000000;" >AB 7867954</span>
                                </div>
                            </div>
                        </div>

                        <div class="pt-[16px]">
                            <div class="flex justify-between p-[6px] bg-[#EDF1F1] rounded-[6px]">
                                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4F7471;">Given time</p>
                                <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">06.10.2017</span>
                            </div>
                            <div class="flex justify-between p-[6px]">
                                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4F7471;">Date of birth</p>
                                <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">07.04.1983</span>
                            </div>
                            <div class="flex justify-between p-[6px] bg-[#EDF1F1] rounded-[6px]">
                                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4F7471;">Work place</p>
                            </div>
                            <div class="flex justify-between p-[6px]">
                                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4F7471;">Given place</p>
                                <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">SAMARQAND VILOYATI TAYLOQ TUMANI IIB     </span>
                            </div>
                            <div class="flex justify-center pt-[16px]">
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="36" height="36" rx="18" fill="#335FFF"/>
                                <path d="M24 21L18 15L12 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div class="p-[12px] rounded-[12px] mt-[16px]"  style="border: 1px solid #EDF1F1">
                            <div class="flex justify-between">
                                <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Contract number</p>
                                <div class="flex items-center gap-[8px]">
                                    <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color:#335FFF;">188</span>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.8333 9.1665L17.6666 2.33317M18.3333 5.6665V1.6665H14.3333M9.16663 1.6665H7.49996C3.33329 1.6665 1.66663 3.33317 1.66663 7.49984V12.4998C1.66663 16.6665 3.33329 18.3332 7.49996 18.3332H12.5C16.6666 18.3332 18.3333 16.6665 18.3333 12.4998V10.8332" stroke="#335FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="pt-[20px] flex justify-between">
                                <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Calculated prize money</p>
                                <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color:#000000;">740 250 000 UZS</span>
                            </div>
                        </div>
                        <div @click="openLead" class="cursor-pointer p-[16px] rounded-[12px] mt-[16px] flex justify-center items-center gap-[12px]"  style="border: 1px solid #EDF1F1">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66669 9.99984H13.3334M10 13.3332V6.6665M10 18.3332C14.5834 18.3332 18.3334 14.5832 18.3334 9.99984C18.3334 5.4165 14.5834 1.6665 10 1.6665C5.41669 1.6665 1.66669 5.4165 1.66669 9.99984C1.66669 14.5832 5.41669 18.3332 10 18.3332Z" stroke="#335FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p class="text-[16px]" style="font-family:Geist; font-weight: 500; color:#335FFF;">Attaching a lead</p>
                        </div>
                    </div>
                    <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] w-full flex flex-col justify-between" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                        <div>
                            <div class="flex justify-center">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color:#72908D;">15.08.2024</p>
                            </div>
                            <div class="pt-[6px]">
                                <p class="pb-[6px] text-[12px]" style="font-family: Geist; font-weight: 400; color:#3F5D5A;">15.08.2024 13:20 Xusnor Odilova Client created</p>
                                <p class="pb-[6px] text-[12px]" style="font-family: Geist; font-weight: 400; color:#3F5D5A;"> 15.08.2024 13:20 Xusnor Odilova Contract has been created</p>
                                <p class="pb-[6px] text-[12px]" style="font-family: Geist; font-weight: 400; color:#3F5D5A;">15.08.2024 13:32 Xusnor Odilova Contract has been created №189</p>
                                <p class="pb-[6px] text-[12px]" style="font-family: Geist; font-weight: 400; color:#3F5D5A;">15.08.2024 13:41 Xusnor Odilova Contract activated</p>
                            </div>
                        </div>
                        <div class="p-[12px] w-full " style="box-shadow: 2px -2px 12px 0px #0000001F;">
                            <div>
                                <div class="flex items-center gap-[12px]">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color:#0037FF;">Task</p>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.28 5.9668L8.9333 10.3135C8.41997 10.8268 7.57997 10.8268 7.06664 10.3135L2.71997 5.9668" stroke="#0037FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <button class="py-[2px] px-[12px] border rounded-[6px] text-[12px]" style="font-family: Geist; font-weight: 500;">Today</button>
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color:#72908D;">for :</p>
                                    <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color:#000000;">one_lid.undefined</span>
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color:#72908D;">input text</p>
                                </div>
                            </div>
                            <div class="flex items-center justify-between pt-[48px]">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#3F5D5A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.5 9.75C16.3284 9.75 17 9.07843 17 8.25C17 7.42157 16.3284 6.75 15.5 6.75C14.6716 6.75 14 7.42157 14 8.25C14 9.07843 14.6716 9.75 15.5 9.75Z" stroke="#3F5D5A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.5 9.75C9.32843 9.75 10 9.07843 10 8.25C10 7.42157 9.32843 6.75 8.5 6.75C7.67157 6.75 7 7.42157 7 8.25C7 9.07843 7.67157 9.75 8.5 9.75Z" stroke="#3F5D5A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.4 13.3H15.6C16.1 13.3 16.5 13.7 16.5 14.2C16.5 16.69 14.49 18.7 12 18.7C9.51 18.7 7.5 16.69 7.5 14.2C7.5 13.7 7.9 13.3 8.4 13.3Z" stroke="#3F5D5A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div class="flex gap-[12px]">
                                    <button class="bg-[#F4F6F6] py-[8px] px-[24px] rounded-[8px] text-[14px]" style="font-family:Geist; font-weight: 600; color: #000000;">Cancel</button>
                                    <button class="py-[8px] px-[28px] rounded-[8px] text-[16px]" style="font-family:Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid;border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isLeadOpen" className='fixed inset-0 bg-black opacity-50'></div>
        <transition name="popup">
            <div v-if="isLeadOpen" class="fixed inset-0  flex justify-center items-center">
                <div class=" bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px]">
                    <div class="bg-[#FFFFFF] py-[16px] px-[12px] rounded-[6px]">
                        <div class="flex justify-between items-center">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Attaching a lead</p>
                                <img class="cursor-pointer" @click="closeLead" src="/closeWhite.svg" alt="">
                        </div>
                        <div class="divide pt-[20px]"></div>
                        <div class="pt-[20px]">
                            <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;">Search for a lead</p>
                            <input type="text" class="p-[12px] rounded-[8px] outline-none w-full mt-[12px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import MainSidebar from '../components/MainSidebar.vue';
import axios from "axios";
import { useI18n } from "vue-i18n";
    export default {
        name: 'ClientSingle',
        components: {MainSidebar},
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
                isLeadOpen: false,
            }
        },
        methods: {
            changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
            openLead() {
                this.isLeadOpen = true;
            },
            closeLead() {
                this.isLeadOpen = false;
            }
        },
    }
</script>

<style  scoped>
  .divide {
    border-bottom: 1px dashed #95ACAA;
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