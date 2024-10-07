<template>
    <div class="bg-[#F4F6F6] flex ">
        <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
        
        <div class=" bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px]" style="border: 1px solid #EDF1F1">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">Client info</p>
                    <p class="text-[10px]" style="font-family: Geist; font-weight: 400; color: #B9C7C6;"> Contract > Client info</p>
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

            <div class="mt-[16px] p-[6px] bg-[#F4F6F6] rounded-[8px] ">
                <div class="bg-[#FFFFFF] p-[12px] mb-[6px] rounded-[6px] text-[14px]" style=" font-family: Geist; font-weight: 600; color: #000000; border: 1px solid var(--Line-Container-Line, #EDF1F1)">
                    <h2>Client contracts</h2>
                </div>
                <div class="bg-[#FFFFFF] py-[24px] px-[12px] rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1)">
                    <div class="bg-[#F4F6F6] rounded-[8px] p-[4px] w-[220px] flex gap-[4px]">
                        <button @click="selectButton('individuals')" :class="['py-[4px] px-[12px] rounded-[6px] text-[14px] transition-all duration-300', selectedButton === 'individuals' ? 'bg-[#FFFFFF]' : 'bg-[#F4F6F6]']" :style="{fontFamily: 'Geist', fontWeight: '600', color: selectedButton === 'individuals' ?  '#000000' : '#72908D' , boxShadow: selectedButton === 'individuals' ? '0px 1px 2px 0px #0000001F' : 'none'}">Individuals</button>
                        <button @click="selectButton('legalEntities')" :class="[' py-[4px] px-[12px] rounded-[6px] text-[14px]', selectedButton === 'legalEntities' ?  'bg-[#FFFFFF]' : 'bg-[#F4F6F6]']" :style="{fontFamily: 'Geist', fontWeight: '600', color: selectedButton === 'legalEntities' ?  '#000000' : '#72908D', boxShadow: selectedButton === 'legalEntities' ? '0px 1px 2px 0px #0000001F' : 'none', transition:'color 0.3s, background-color 0.3s, box-shadow 0.3s'}">Legal entities</button>   
                    </div>

                    <div v-show="selectedButton === 'individuals'">
                        <div class="pt-[32px] flex gap-[24px] items-end">
                            <div>
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Passport series and number</p>
                                <div class="flex gap-[12px] mt-[12px] ">
                                    <input type="text" class="w-[100px] rounded-[8px] p-[10px] border-none outline-none" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                    <input type="text" class="w-[400px] rounded-[8px] p-[10px] border-none outline-none" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                </div>
                            </div>
                            <div class="">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Date of birth</p>
                                <!-- <input type="date" placeholder="dd.mm.yyyy"  class="  mt-[12px] w-[400px] rounded-[8px] p-[10px] border-none outline-none text-[16px]" style="font-family: Geist; font-weight: 400; color: #95ACAA; border: 1px solid var(--Line-Field-Line, #DCE3E3)"> -->
                                <a-date-picker :format="dateFormatList" placeholder="dd.mm.yyyy" class="w-[400px] p-[10px] mt-[12px]"/>
                            </div>
                            <div>
                                 <button class="py-[12px] w-[161px] text-[16px] rounded-[8px]" style=" font-family: Geist; font-weight: 600; color: #FFFFFF ; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Search</button>
                            </div>
                        </div>
                        <div class="pt-[36px]">
                            <h2>Client information</h2>
                            <div class="divide pt-[16px]"></div>
                            <div class="pt-[12px] flex justify-between">
                                <div>
                                    <p>Cellphone number</p>
                                    <div class="pt-[12px] flex items-end">
                                        <div class="w-[80px] py-[12px] px-[14px] flex items-center gap-[10px]" style="border-radius: 8px 0 0 8px; border: 1px solid var(--Line-Field-Line, #DCE3E3)">  
                                            <img src="/uzIcon.svg" alt="">
                                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.9207 0.180176H6.69072H1.08072C0.120725 0.180176 -0.359275 1.34018 0.320725 2.02018L5.50072 7.20018C6.33072 8.03018 7.68073 8.03018 8.51073 7.20018L10.4807 5.23018L13.6907 2.02018C14.3607 1.34018 13.8807 0.180176 12.9207 0.180176Z" fill="#72908D"/>
                                            </svg>
                                        </div>
                                        <div class="w-[240px] flex items-center py-[13px] px-[14px]" style="border-radius: 0 8px 8px 0; border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                            <input v-model="searchQueryNumder" type="text" class=" w-[240px] border-none outline-none">
                                        </div>
                                            <input type="checkbox" class="w-[24px] h-[24px] border-none outline-none ml-[12px]" >
                                        </div>
                                        <p class="pt-[12px] text-right">Add phone number</p>
                                </div>
                                <div>
                                    <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>First name</p>
                                    <input type="text" class="rounded-[8px] w-[580px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                    
                                    <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Last name</p>
                                    <input type="text" class="rounded-[8px] w-[580px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                    
                                    <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Middle name</p>
                                    <input type="text" class="rounded-[8px] w-[580px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                </div>
                            </div>
    
                            <div>
                                <h2>Passport information</h2>
                                <div class="divide pt-[12px]"></div>
                                <div class="flex justify-between pt-[12px]">
                                    <div>
                                        <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;">PIN</p>
                                        <input type="text" class="rounded-[8px] w-[580px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                        <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Given date</p>
                                        <a-date-picker :format="dateFormatList" placeholder="dd.mm.yyyy" class="w-[580px] p-[14px] rounded-[8px] mt-[12px]"/>
                                        <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Validity period</p>
                                        <a-date-picker :format="dateFormatList" placeholder="dd.mm.yyyy" class="w-[580px] p-[14px] rounded-[8px] mt-[12px]"/>
    
                                        <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;">Passport file (not required)</p>
                                        <div class="p-[13px] mt-[12px] rounded-[8px] flex items-center justify-between" style="border: 1px dashed var(--Line-Field-Line, #DCE3E3)">
                                            <input type="file" id="file-input" name="photoUpload" class="hidden">
                                            <div class="flex items-center gap-[24px]">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5 8.19H15.61C13.24 8.19 11.31 6.26 11.31 3.89V1C11.31 0.45 10.86 0 10.31 0H6.07C2.99 0 0.5 2 0.5 5.57V14.43C0.5 18 2.99 20 6.07 20H13.93C17.01 20 19.5 18 19.5 14.43V9.19C19.5 8.64 19.05 8.19 18.5 8.19ZM9.53 11.53C9.38 11.68 9.19 11.75 9 11.75C8.81 11.75 8.62 11.68 8.47 11.53L7.75 10.81V15C7.75 15.41 7.41 15.75 7 15.75C6.59 15.75 6.25 15.41 6.25 15V10.81L5.53 11.53C5.24 11.82 4.76 11.82 4.47 11.53C4.18 11.24 4.18 10.76 4.47 10.47L6.47 8.47C6.54 8.41 6.61 8.36 6.69 8.32C6.71 8.31 6.74 8.3 6.76 8.29C6.82 8.27 6.88 8.26 6.95 8.25C6.98 8.25 7 8.25 7.03 8.25C7.11 8.25 7.19 8.27 7.27 8.3C7.28 8.3 7.28 8.3 7.29 8.3C7.37 8.33 7.45 8.39 7.51 8.45C7.52 8.46 7.53 8.46 7.53 8.47L9.53 10.47C9.82 10.76 9.82 11.24 9.53 11.53Z" fill="#4F7471"/>
                                                <path d="M15.43 6.81C16.38 6.82 17.7 6.82 18.83 6.82C19.4 6.82 19.7 6.15 19.3 5.75C17.86 4.3 15.28 1.69 13.8 0.21C13.39 -0.2 12.68 0.08 12.68 0.65V4.14C12.68 5.6 13.92 6.81 15.43 6.81Z" fill="#4F7471"/>
                                                </svg>
        
                                                <div>
                                                    <h3>Upload a passport</h3>
                                                    <p class="text-[12px]">JPG, PNG or PDF, file size must not exceed 10 MB</p>
                                                </div>
                                            </div>
                                            <label for="file-input" class=" py-[6px] px-[12px] rounded-[4px] cursor-pointer" style=" color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);">Upload</label>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;">INN</p>
                                        <input type="text" class="rounded-[8px] w-[580px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                        <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span> Given place</p>
                                        <input type="text" class="rounded-[8px] w-[580px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                    </div>
                                </div>
                            </div>
    
                            <div class="pt-[32px]">
                                <h2>Information of the place of residence</h2>
                                <div class="divide pt-[12px]"></div>
                                <div class="flex pt-[12px]">
                                    <div class="">
                                        <p class="pl-[15px]">Country</p>
                                        <div class="p-[13px]">
                                            <a-select class="mt-[12px]"
                                                v-model:value="value"
                                                show-search
                                                placeholder="Select a country"
                                                style="width: 375px "
                                                :options="countryOptions"
                                                :filter-option="filterOption">
                                            </a-select>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-[16px] pl-[10px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Province  </p>
                                        <div class="p-[13px]">
                                            <a-select class="mt-[12px]"
                                                v-model:value="value"
                                                show-search
                                                placeholder="Select an area"
                                                style="width: 370px "
                                                :options="cityOptions"
                                                :filter-option="filterOption">
                                            </a-select>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-[16px] pl-[10px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>City/district</p>
                                        <div class="p-[13px]">
                                            <a-select class="mt-[12px]"
                                                v-model:value="value"
                                                show-search
                                                placeholder="Select an area"
                                                style="width: 370px "
                                                :options="options"
                                                :filter-option="filterOption">
                                            </a-select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex gap-[24px]">
                                <div>
                                    <p class="text-[16px] " style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>MFY, street, house</p>
                                    <textarea class="w-[580px] h-[108px] rounded-[8px] resize-none mt-[12px] outline-none border-none p-[8px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
                                </div>
                                <div>
                                    <p class="text-[16px] " style="font-family: Geist; font-weight: 600; color: #72908D;">Work place</p>
                                    <textarea class="w-[580px] h-[108px] rounded-[8px] resize-none mt-[12px] outline-none border-none p-[8px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
                                </div>
                            </div>
                        </div>  
                    </div>
       
                </div>

                <div class="bg-[#FFFFFF] mt-[6px] rounded-[6px] p-[12px] flex justify-end gap-[20px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
                    <button class="w-[200px] py-[10px] bg-[#F4F6F6] rounded-[6px]">Cancel</button>
                    <button class="w-[200px] py-[10px] rounded-[6px]" style="color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%); border: 1px solid;border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Next</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
import { ref } from 'vue';
    export default {

        name: 'ClientInfo',
        components : {Sidebar},
        data() {
            return {
                selectedButton: 'individuals',
                dateFormatList : ['DD.MM.YYYY', 'DD.MM.YY'],
                searchQueryNumder : '+998 ',
                countryOptions : ref([
                {
                    value: 'Uzbekistan',
                    label: 'Uzbekistan',
                },
                {
                    value: 'Russia',
                    label: 'Russia',
                },
                {
                    value: 'USA',
                    label: 'USA',
                },
                ]),
                cityOptions : ref([
                    {
                        value: 'tashkent',
                        label: 'Tashkent'
                    },
                    {
                        value: 'samarqand',
                        label: 'Samarqand'
                    },
                    {
                        value: 'andijan',
                        label: 'Andijan'
                    },
                    {
                        value: 'bukhara',
                        label: 'Bukhara'
                    },
                ]),

            }
        },
        methods: {
            selectButton(button) {
                this.selectedButton = button;
            },
            filterOption(input, option){
                 option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
            },
           
        },
   }
</script>

<style scoped>
     .divide {
        border-bottom: 1px dashed #95ACAA;
    }
</style>