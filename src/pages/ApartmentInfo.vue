<template>
    <div class="bg-[#F4F6F6] flex ">
        <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
        <div class=" bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px]" style="border: 1px solid #EDF1F1">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">Apartment info</p>
                    <p class="text-[10px]" style="font-family: Geist; font-weight: 400; color: #B9C7C6;"> Contract > Client info > Apartment info</p>
                </div>
                <div class="flex gap-[24px]">
                        <svg @click="openMessage" class="cursor-pointer" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.3399 14.99L18.3399 13.33C18.1299 12.96 17.9399 12.26 17.9399 11.85V9.32C17.9399 6.97 16.5599 4.94 14.5699 3.99C14.0499 3.07 13.0899 2.5 11.9899 2.5C10.8999 2.5 9.91994 3.09 9.39994 4.02C7.44994 4.99 6.09994 7 6.09994 9.32V11.85C6.09994 12.26 5.90994 12.96 5.69994 13.32L4.68994 14.99C4.28994 15.66 4.19994 16.4 4.44994 17.08C4.68994 17.75 5.25994 18.27 5.99994 18.52C7.93994 19.18 9.97994 19.5 12.0199 19.5C14.0599 19.5 16.0999 19.18 18.0399 18.53C18.7399 18.3 19.2799 17.77 19.5399 17.08C19.7999 16.39 19.7299 15.63 19.3399 14.99Z" fill="#72908D"/>
                            <path d="M14.8299 20.51C14.4099 21.67 13.2999 22.5 11.9999 22.5C11.2099 22.5 10.4299 22.18 9.87994 21.61C9.55994 21.31 9.31994 20.91 9.17994 20.5C9.30994 20.52 9.43994 20.53 9.57994 20.55C9.80994 20.58 10.0499 20.61 10.2899 20.63C10.8599 20.68 11.4399 20.71 12.0199 20.71C12.5899 20.71 13.1599 20.68 13.7199 20.63C13.9299 20.61 14.1399 20.6 14.3399 20.57C14.4999 20.55 14.6599 20.53 14.8299 20.51Z" fill="#72908D"/>
                        </svg>  
    
                        <select class="w-[100px] pl-[5px]">
                            <option >English</option>
                            <option >Uzbek</option>
                            <option >Russian</option>
                            <option >Persian</option>
                        </select>
                </div>
            </div>
            <div class="divide pt-[16px]"></div>

            <div class="mt-[16px] p-[6px] bg-[#F4F6F6] rounded-[8px]">
                <div class="bg-[#FFFFFF] rounded-[6px] py-[18px] px-[12px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
                    <p class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">Tanlangan xonadonlar</p>
                </div>

                <div class="my-[6px] flex gap-[6px]">
                    <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] w-full">
                        <div  class="flex items-center justify-center pb-[12px]">
                            <img src="/assets/img/HakimiPagePlan2.jpg" alt="" width="200px" height="200px">
                        </div>
                        <div class="flex pt-[12px] gap-[6px]">
                            <button class="bg-[#00B252] py-[6px] px-[12px] rounded-[6px]" style="font-family: Geist; font-weight: 500; color: #FFFFFF;">3 xonali</button>
                            <div class="bg-[#F4F6F6] rounded-[8px] p-[4px] w-[163px] flex gap-[4px]">
                                <button @click="selectButton('tamirsiz')" :class="['py-[6px] px-[12px] rounded-[6px] text-[14px] transition-all duration-300', selectedButton === 'tamirsiz' ? 'bg-[#FFFFFF]' : 'bg-[#F4F6F6]']" :style="{fontFamily: 'Geist', fontWeight: '600', color: selectedButton === 'tamirsiz' ?  '#000000' : '#72908D' , boxShadow: selectedButton === 'tamirsiz' ? '0px 1px 2px 0px #0000001F' : 'none'}">Ta’mirsiz </button>
                                <button tton @click="selectButton('tamirli')" :class="[' py-[6px] px-[12px] rounded-[6px] text-[14px]', selectedButton === 'tamirli' ?  'bg-[#FFFFFF]' : 'bg-[#F4F6F6]']" :style="{fontFamily: 'Geist', fontWeight: '600', color: selectedButton === 'tamirli' ?  '#000000' : '#72908D', boxShadow: selectedButton === 'tamirli' ? '0px 1px 2px 0px #0000001F' : 'none', transition:'color 0.3s, background-color 0.3s, box-shadow 0.3s'}">Ta’mirli</button>   
                            </div>
                        </div>
                        <div class="divide my-[12px]"></div>
                        <div class="mt-[12px] bg-[#E5EBFF] p-[12px] flex flex-col items-start rounded-[4px]">
                            <div class="flex gap-[9px]">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" rx="6" fill="white"/>
                                    <mask id="mask0_53_1502" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="16" height="16">
                                    <rect x="2" y="2" width="16" height="16" fill="#D9D9D9"/>
                                    </mask>
                                    <g mask="url(#mask0_53_1502)">
                                    <path d="M4.66667 14C4.47778 14 4.31944 13.9361 4.19167 13.8083C4.06389 13.6806 4 13.5222 4 13.3333C4 13.1444 4.06389 12.9861 4.19167 12.8583C4.31944 12.7306 4.47778 12.6667 4.66667 12.6667H11.3333C11.5222 12.6667 11.6806 12.7306 11.8083 12.8583C11.9361 12.9861 12 13.1444 12 13.3333C12 13.5222 11.9361 13.6806 11.8083 13.8083C11.6806 13.9361 11.5222 14 11.3333 14H4.66667ZM4.66667 10.6667C4.47778 10.6667 4.31944 10.6028 4.19167 10.475C4.06389 10.3472 4 10.1889 4 10C4 9.81111 4.06389 9.65278 4.19167 9.525C4.31944 9.39722 4.47778 9.33333 4.66667 9.33333H15.3333C15.5222 9.33333 15.6806 9.39722 15.8083 9.525C15.9361 9.65278 16 9.81111 16 10C16 10.1889 15.9361 10.3472 15.8083 10.475C15.6806 10.6028 15.5222 10.6667 15.3333 10.6667H4.66667ZM4.66667 7.33333C4.47778 7.33333 4.31944 7.26944 4.19167 7.14167C4.06389 7.01389 4 6.85556 4 6.66667C4 6.47778 4.06389 6.31944 4.19167 6.19167C4.31944 6.06389 4.47778 6 4.66667 6H15.3333C15.5222 6 15.6806 6.06389 15.8083 6.19167C15.9361 6.31944 16 6.47778 16 6.66667C16 6.85556 15.9361 7.01389 15.8083 7.14167C15.6806 7.26944 15.5222 7.33333 15.3333 7.33333H4.66667Z" fill="#1C1B1F"/>
                                    </g>
                                </svg>
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #000000;">Hakimi Towers</p>
                                <span class="text-[16px]" style="font-family: Geist; font-weight: 400; color: #2CC171;">3</span>
                                <span  class="text-[16px]" style="font-family: Geist; font-weight: 400; color: #00000099;">№ 5-6</span>
                            </div>
                            <div class="pt-[8px] flex flex-col">
                                <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #002CCC;">656 000 000 UZS</span>
                                <div class="flex gap-[4px]">
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #000000;">38.8 m² • </span>
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #002CCC;">4 500 000 UZS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] w-full">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">Mijoz ma`lumotlari</p>
                        <div class="divide pt-[12px]"></div>
                        <div class="rounded-[6px] p-[20px] mt-[12px]" style="border: 1px solid #EDF1F1">
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="44" height="44" rx="6" fill="#22C55E" fill-opacity="0.1"/>
                                <mask id="mask0_65_4292" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="10" y="10" width="24" height="24">
                                <rect x="10" y="10" width="24" height="24" fill="#D9D9D9"/>
                                </mask>
                                <g mask="url(#mask0_65_4292)">
                                <path d="M29.95 31C27.8667 31 25.8083 30.5458 23.775 29.6375C21.7417 28.7292 19.8917 27.4417 18.225 25.775C16.5583 24.1083 15.2708 22.2583 14.3625 20.225C13.4542 18.1917 13 16.1333 13 14.05C13 13.75 13.1 13.5 13.3 13.3C13.5 13.1 13.75 13 14.05 13H18.1C18.3333 13 18.5417 13.0792 18.725 13.2375C18.9083 13.3958 19.0167 13.5833 19.05 13.8L19.7 17.3C19.7333 17.5667 19.725 17.7917 19.675 17.975C19.625 18.1583 19.5333 18.3167 19.4 18.45L16.975 20.9C17.3083 21.5167 17.7042 22.1125 18.1625 22.6875C18.6208 23.2625 19.125 23.8167 19.675 24.35C20.1917 24.8667 20.7333 25.3458 21.3 25.7875C21.8667 26.2292 22.4667 26.6333 23.1 27L25.45 24.65C25.6 24.5 25.7958 24.3875 26.0375 24.3125C26.2792 24.2375 26.5167 24.2167 26.75 24.25L30.2 24.95C30.4333 25.0167 30.625 25.1375 30.775 25.3125C30.925 25.4875 31 25.6833 31 25.9V29.95C31 30.25 30.9 30.5 30.7 30.7C30.5 30.9 30.25 31 29.95 31ZM16.025 19L17.675 17.35L17.25 15H15.025C15.1083 15.6833 15.225 16.3583 15.375 17.025C15.525 17.6917 15.7417 18.35 16.025 19ZM24.975 27.95C25.625 28.2333 26.2875 28.4583 26.9625 28.625C27.6375 28.7917 28.3167 28.9 29 28.95V26.75L26.65 26.275L24.975 27.95Z" fill="#22C55E"/>
                                </g>
                            </svg>
                            <p class="pt-[12px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #00000099;">+998916951633</p>
                            <h3 class="pt-[6px] text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">XASANOV AKBARALI QURBONALI O‘G‘LI</h3>

                        </div>
                    </div>
                </div>

                <div class="mt-[6px] rounded-[6px] bg-[#FFFFFF] p-[12px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                    <p class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A">Shartnoma ma’lumotlari</p>
                    <div class="divide pt-[12px]"></div>
                    <div class="pt-[24px] flex items-center flex-wrap gap-[32px]">
                        <div>
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Shartnoma raqami</p>
                            <input v-model="queryMonth" type="text" class="p-[12px] rounded-[6px] outline-none mt-[6px]" style="border: 1px solid #DCE3E3">
                        </div>
                        <div>
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Qaytarish muddati (oy)</p>
                            <div class="flex mt-[6px]">
                                <button @click="reduceMonth" class="px-[16px] py-[10px] bg-[#F4F6F6]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3); border-radius: 8px 0 0 8px;">-</button>
                                <div class="text-center w-[166px] py-[11px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">{{ month1  + ' dan'}}</div>
                                <button @click="addMonth" class="px-[16px] py-[10px] bg-[#F4F6F6]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3); border-radius: 0 8px 8px 0;">+</button>
                            </div>
                        </div>
                        <div>
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Vaqt oralig'i (oy)</p>
                            <div class="flex mt-[6px]">
                                <button @click="reduceMonth2" class="px-[16px] py-[10px] bg-[#F4F6F6]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3); border-radius: 8px 0 0 8px;">-</button>
                                <div class="text-center w-[166px] py-[11px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">{{ month2  + ' dan'}}</div>
                                <button @click="addMonth2" class="px-[16px] py-[10px] bg-[#F4F6F6]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3); border-radius: 0 8px 8px 0;">+</button>
                            </div>
                        </div>
                        <div>
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Vositachi</p>
                            <select class="p-[11px] rounded-[6px] w-[270px] mt-[6px]" style="border: 1px solid #DCE3E3">
                                <option value="Axmadjon Khaydarov">Axmadjon Khaydarov</option>
                                <option value="Axmadjon Khaydarov">Axmadjon Khaydarov</option>
                                <option value="Axmadjon Khaydarov">Axmadjon Khaydarov</option>
                                <option value="Axmadjon Khaydarov">Axmadjon Khaydarov</option>
                            </select>
                        </div>
                        <div>
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Mas'ul xodim</p>
                            <select class="p-[12px] rounded-[6px] w-[270px] mt-[6px]" style="border: 1px solid #DCE3E3">
                                <option value="Axmadjon Khaydarov">Axmadjon Khaydarov</option>
                                <option value="Axmadjon Khaydarov">Axmadjon Khaydarov</option>
                                <option value="Axmadjon Khaydarov">Axmadjon Khaydarov</option>
                                <option value="Axmadjon Khaydarov">Axmadjon Khaydarov</option>
                            </select>
                        </div>
                        <div>
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Izoh</p>
                            <input type="text" class=" w-[270px] p-[12px] rounded-[6px] outline-none mt-[6px]" style="border: 1px solid #DCE3E3">
                        </div>
                    </div>
                </div>

                <div class="mt-[6px] rounded-[6px] bg-[#FFFFFF] p-[12px]">
                    <p class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">To’lov ma’lumotlari</p>
                    <div class="divide pt-[12px]"></div>
                    <div class="flex flex-wrap pt-[24px] gap-[32px]">
                        <div>
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Umumiy to’lov summasi</p>
                            <div class="p-[12px] w-[270px] bg-[#F4F6F6] rounded-[6px] mt-[6px] flex justify-between" style="border: 1px solid #DCE3E3">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">574 000 000</p>
                                <span class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">UZS</span>
                            </div>
                        </div>
                        <div>
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Shartnoma raqami H-40</p>
                            <div class="p-[12px] w-[270px] bg-[#FFFFFF] rounded-[6px] mt-[6px] flex justify-between" style="border: 1px solid #DCE3E3">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #000000;">574 000</p>
                                <span class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #000000;">UZS</span>
                            </div>
                        </div>
                        <div>
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Boshlang'ich to'lov sanasi</p>
                            <input type="date" class="rounded-[6px] p-[12px] w-[270px] mt-[6px]" lang="en" style="border: 1px solid #DCE3E3">
                        </div>
                        <div>
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Qoldiq summa</p>
                            <div class="p-[12px] w-[270px] bg-[#F4F6F6] rounded-[6px] mt-[6px] flex justify-between" style="border: 1px solid #DCE3E3">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">573 426 000</p>
                                <span class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">UZS</span>
                            </div>
                        </div>
                        <div>
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Qoldiq summa</p>
                            <div class="p-[12px] w-[270px] bg-[#F4F6F6] rounded-[6px] mt-[6px] flex justify-between" style="border: 1px solid #DCE3E3">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">15 928 500</p>
                                <span class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">UZS</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-[6px] rounded-[6px] bg-[#FFFFFF] px-[12px] pt-[12px] pb-[32px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                    <h3 class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">Chegirma</h3>
                    <div class="divide pt-[12px]"></div>
                    <div class="pt-[24px]">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3F5D5A;">Chegirma summasi</p>
                        <div class="w-[270px] rounded-[6px] flex p-[12px] justify-between mt-[6px]" style="border: 1px solid #DCE3E3">
                            <input type="text" class="border-none outline-none" v-model="discount">
                            <p>UZS</p>
                        </div>
                    </div>
                </div>

                <div class="mt-[6px] rounded-[6px] bg-[#FFFFFF] p-[12px] flex gap-[20px] justify-end" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                    <router-link to="/client-info">
                        <button class="py-[10px] px-[12px] bg-[#F4F6F6] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">Orqaga</button>
                    </router-link>
                    <button class="py-[10px] px-[12px] bg-[#F4F6F6] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">Jadval shakllantirish</button>
                    <button class="py-[8px] px-[12px] rounded-[8px] text-[16px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%); border: 1px solid;border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Shartnoma yaratish</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar.vue';
import AddClient from './AddClient.vue';
    export default {
        name: 'ApartmentInfo',
        components: {Sidebar, AddClient},
        data() {
            return {
                selectedButton: 'tamirsiz',
                queryMonth : 'H-40',
                month1: 0,
                month2: 0,
                dateInput: 'dd.yy.yyyy',
                discount : '0',
            }
        },
        methods: {
            selectButton(button) {
                this.selectedButton = button;
            },
            addMonth() {
               this.month1 ++;
            },
            reduceMonth() {
                if (this.month1 > 0) {
                this.month1--; // Decrease the value by 1, but not below 0
                }
            },
            addMonth2() {
               this.month2 ++;
            },
            reduceMonth2() {
                if (this.month2 > 0) {
                this.month2--; // Decrease the value by 1, but not below 0
                }
            }
        }
    }
</script>

<style  scoped>
.divide {
        border-bottom: 1px dashed #95ACAA;
    }
</style>