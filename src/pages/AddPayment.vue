<template>
    <div class="bg-[#F4F6F6] h-full">
        <div class="flex w-full min-h-screen">
            <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
            <div class=" bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px] " style="border: 1px solid #EDF1F1">
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

                <div class="pt-[16px] flex justify-between items-center">
                    <ul class="flex gap-[20px]">
                        <li class="flex items-center gap-[12px] cursor-pointer text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;" >
                            <img src="/paymentsDownload.svg" alt="">
                            Download
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.03996 4.47493L5.29996 7.73493C5.68496 8.11993 6.31496 8.11993 6.69996 7.73493L9.95996 4.47493" stroke="#95ACAA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </li>
                        <span class="h-[16px] mt-[3px]" style="border-right: 2px solid #EDF1F1;"></span>
                        <li class="flex items-center gap-[12px] cursor-pointer text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;" >
                            <img src="/paymentsBank.svg" alt="">
                            Bank
                        </li>
                    </ul>
                    <div class="search py-[12px] px-[20px] flex items-center rounded-[12px] w-[398px] cursor-pointer" style="border: 1px solid #B9C7C6">
                        <input type="text" placeholder="Search..." class="outline-none w-full">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6668 14.6666L13.3335 13.3333M14.0002 7.66659C14.0002 11.1644 11.1646 13.9999 7.66683 13.9999C4.16903 13.9999 1.3335 11.1644 1.3335 7.66659C1.3335 4.16878 4.16903 1.33325 7.66683 1.33325C11.1646 1.33325 14.0002 4.16878 14.0002 7.66659Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>

                <div class="bg-[#F4F6F6] mt-[16px] p-[6px] flex gap-[6px] rounded-[8px]">
                    <div class="w-full">
                        <div>
                            <div class="flex gap-[6px]">
                              <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center    w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                                <span class="w-[4px] h-full bg-[#00A389] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                                <div>
                                  <p class="text-[12px] pb-[4px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Total amount</p>
                                  <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                                </div>
                              </div>
                          
                              <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                                <span class="w-[4px] h-full bg-[#00A389] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                                <div>
                                  <p class="text-[12px] pb-[4px]" style="font-family: Geist; font-weight: 500; color: #72908D;">First payment</p>
                                  <span class="text-[20px] " style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                                </div>
                              </div>
                          
                              <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                                <span class="w-[4px] h-full  bg-[#00A389] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                                <div>
                                  <p class="text-[12px] pb-[4px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Paid amount</p>
                                  <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                                </div>
                              </div>
                            </div>
    
                            <div  class="flex gap-[6px] pt-[6px]">
                                <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                                  <span class="w-[4px] h-full  bg-[#00A389] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                                  <div>
                                    <p class="text-[12px] pb-[4px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Discount</p>
                                    <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                                  </div>
                                </div>
                            
                                <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                                  <span class="w-[4px] h-full  bg-[#FF403F] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                                  <div>
                                    <p class="text-[12px] pb-[4px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Remaining amount</p>
                                    <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                                  </div>
                                </div>
      
                                <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                                  <span class="w-[4px] h-full  bg-[#FF403F] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                                  <div>
                                    <p class="text-[12px] pb-[4px] " style="font-family: Geist; font-weight: 500; color: #72908D;" >Monthly arrears</p>
                                    <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                                  </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-[6px] p-[16px] rounded-[6px] bg-[#FFFFFF] " style="border: 1px solid #EDF1F1">
                            <div class="flex gap-[6px]">
                                <button @click="selectTab('history')" :class="[' py-[6px] px-[12px] rounded-[6px] text-[14px] cursor-pointer' , selectedTab === 'history' ? 'bg-[#E5EBFF]' : 'bg-[#F4F6F6]']" :style="{fontFamily: 'Geist' , fontWeight:'600' , color: selectedTab === 'history' ? '#0037FF' : '#72908D'}">Payment history</button>
                                <button @click="selectTab('schedule')" :class="[' py-[6px] px-[12px] rounded-[6px] text-[14px] cursor-pointer' , selectedTab === 'schedule' ? 'bg-[#E5EBFF]' : 'bg-[#F4F6F6]']" :style="{fontFamily: 'Geist' , fontWeight:'600' , color: selectedTab === 'schedule' ? '#0037FF' : '#72908D'}">Payment schedule</button>
                            </div>
                            <div class="divide pt-[16px]"></div>
                            <div class="">
                                <table class="paymenr-table mt-[16px]" v-if="selectedTab == 'history'">
                                    <thead class="bg-[#F4F6F6] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471;">
                                        <tr>
                                            <th>№</th>
                                            <th>Client </th>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Payment type</th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">
                                        <tr v-for="(body, index) in paymentTable" :key="index">
                                            <td>{{ body.number }}</td>
                                            <td style="font-weight: 600;">{{ body.client }}</td>
                                            <td>{{ body.date }}</td>
                                            <td>{{ body.amount }}</td>
                                            <td>{{ body.type }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div>
                                <table class="schedules-table mt-[16px] w-[570px]" v-if="selectedTab === 'schedule'">
                                    <thead >
                                        <tr class="bg-[#F4F6F6] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471;">
                                            <th>№</th>
                                            <th>Date of payment</th>
                                            <th>Sum of payment</th>
                                            <th>Paid amount (soum)</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="amountPaid" >
                                        <tr v-for="(table, index) in fullPaymentSchedule" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ table.dateOfPayment }}</td>
                                            <td>{{ table.sumOfPayment }}</td>
                                            <td style="color: #00B252; font-weight: 600;">{{ table.paid }}</td>
                                        </tr>
                                    </tbody>
                                    <tbody >
                                        <tr v-for="(table, index) in paymentSchedule" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">
                                            <td>{{ index + 4 }}</td>
                                            <td>{{ table.dateOfPayment }}</td>
                                            <td>{{ table.sumOfPayment }}</td>
                                            <td style="color: #E27233;  font-weight: 600;">{{ table.paid }}</td>
                                        </tr>
                                    </tbody>
                                    <tbody v-if="amountPaid" >
                                        <tr v-for="(table, index) in fullPaymentSchedule" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">
                                            <td>{{ index + 7 }}</td>
                                            <td>{{ table.dateOfPayment }}</td>
                                            <td>{{ table.sumOfPayment }}</td>
                                            <td style="color: #00B252; font-weight: 600;">{{ table.paid }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="w-full">
                        <div class="bg-[#FFFFFF] px-[12px] pt-[12px] pb-[32px] rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                            <div class="search py-[12px] px-[20px] mb-[16px] flex items-center gap-[12px] rounded-[12px] w-full cursor-pointer" style="border: 1px solid #B9C7C6">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6668 14.6666L13.3335 13.3333M14.0002 7.66659C14.0002 11.1644 11.1646 13.9999 7.66683 13.9999C4.16903 13.9999 1.3335 11.1644 1.3335 7.66659C1.3335 4.16878 4.16903 1.33325 7.66683 1.33325C11.1646 1.33325 14.0002 4.16878 14.0002 7.66659Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <input type="text" placeholder="Search..." class="outline-none w-full">
                            </div>
                            <div class="flex flex-col text-center items-center py-[32px]">
                                <h2 class="pb-[8px] text-[14px] text-[#000000] font-[600]" style="font-family: Geist;">Client is not selected...</h2>
                                <p class="text-[14px] text-[#4F7471] font-[400]" style="font-family: Geist;">Search for and select a customer from the search section</p>
                            </div>
                        </div>

                        <div class="mt-[6px] px-[12px] pt-[12px] pb-[32px] rounded-[6px] bg-[#FFFFFF]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                            <div class="flex gap-[6px]">
                                <button @click="selectButton('standard')" :class="['w-full py-[12px] rounded-[6px] text-[14px] cursor-pointer' , selectedButton === 'standard' ? 'bg-[#E5EBFF]' : 'bg-[#F4F6F6]']" :style="{fontFamily: 'Geist' , fontWeight: '600' , color: selectedButton === 'standard' ? '#0037FF' : '#72908D'}">Standard payment</button>
                                <button @click="selectButton('balance')" :class="['w-full py-[12px] rounded-[6px] text-[14px] cursor-pointer' , selectedButton === 'balance' ? 'bg-[#E5EBFF]' : 'bg-[#F4F6F6]']" :style="{fontFamily: 'Geist' , fontWeight: '600' , color: selectedButton === 'balance' ? '#0037FF' : '#72908D'}">Payment from the balance</button>
                            </div>
                            <div class="divide pt-[12px]"></div>
                            <div v-if="selectedButton === 'standard'" class="pt-[32px] w-full">
                                <div>
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Payment number</p>
                                    <div class="w-full bg-[#F4F6F6] p-[12px] mt-[6px] rounded-[6px]" style="border: 1px solid #DCE3E3">
                                        <span class="text-[16px] text-[#95ACAA] font-[500]" style="font-family: Geist;">948</span>
                                    </div>
                                </div>
                                <div class="flex gap-[12px] pt-[24px] w-full">
                                    <div>
                                        <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Payment amount</p>
                                        <input type="text" disabled class="w-[347px] h-[44px] p-[10px] bg-[#F4F6F6]  mt-[6px] rounded-[6px] outline-none" style="border: 1px solid #DCE3E3"/>
                                    </div>
                                    <div>
                                        <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Currency</p>
                                        <div  class=" w-[197px] bg-[#F4F6F6] p-[8px] mt-[6px] rounded-[6px] flex items-center justify-end" style="border: 1px solid #DCE3E3">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_171_13780" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                            <rect x="24.5" y="24" width="24" height="24" transform="rotate(-180 24.5 24)" fill="#D9D9D9"/>
                                            </mask>
                                            <g mask="url(#mask0_171_13780)">
                                            <path d="M12.5 13.2001L16.4 9.3001C16.5833 9.11676 16.8166 9.0251 17.1 9.0251C17.3833 9.0251 17.6166 9.11676 17.8 9.3001C17.9833 9.48343 18.075 9.71676 18.075 10.0001C18.075 10.2834 17.9833 10.5168 17.8 10.7001L13.2 15.3001C13 15.5001 12.7666 15.6001 12.5 15.6001C12.2333 15.6001 12 15.5001 11.8 15.3001L7.19995 10.7001C7.01662 10.5168 6.92495 10.2834 6.92495 10.0001C6.92495 9.71676 7.01662 9.48343 7.19995 9.3001C7.38328 9.11676 7.61662 9.0251 7.89995 9.0251C8.18328 9.0251 8.41662 9.11676 8.59995 9.3001L12.5 13.2001Z" fill="#4F7471"/>
                                            </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Payment type</p>
                                        <a-select 
                                        class="mt-[6px]"
                                            v-model:value="value"
                                            :size="size"
                                            style="width: 197px;"
                                            show-search
                                            :options="paymnentOptions"
                                            :filter-option="filterOption">
                                        </a-select>
                                    </div>
                                </div>
                                <div class="flex gap-[12px] items-center pt-[24px]">
                                    <div>
                                        <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Exchange rate</p>
                                        <div class="p-[12px] bg-[#FFFFFF] rounded-[6px] flex justify-between mt-[6px] w-[355px]" style="border: 1px solid #DCE3E3">
                                            <input class=" bg-[#FFFFFF] w-full" type="text" disabled>
                                            <span>UZS</span>
                                        </div>
                                    </div>
                                    <div class="pt-[25px]">
                                        <svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="6.5" width="31" height="31" rx="15.5" fill="#E5EBFF"/>
                                        <rect x="0.5" y="6.5" width="31" height="31" rx="15.5" stroke="white"/>
                                        <path d="M18.43 15.9299L24.5 21.9999L18.43 28.0699M7.5 21.9999H24.33" stroke="#0037FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div >
                                        <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;"> Result</p>
                                        <div class="p-[12px] bg-[#FFFFFF] rounded-[6px] flex justify-between mt-[6px] w-[355px]" style="border: 1px solid #DCE3E3">
                                            <span>0</span>
                                            <input class=" bg-[#FFFFFF] w-full" type="text" disabled>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-[12px] pt-[24px]">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Date:</p>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" v-model="isToggled" class="sr-only peer" />
                                        <div class="w-[45px] h-[25px] bg-gray-300 rounded-[12px] peer-checked:bg-green-600 transition-colors duration-300"></div>
                                        <div class="absolute left-[3px] top-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                                    </label>
                                </div>
                                <div class="pt-[24px]">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Comment</p>
                                    <input type="text" disabled class="w-full h-[44px] p-[10px] bg-[#F4F6F6]  mt-[6px] rounded-[6px] outline-none" style="border: 1px solid #DCE3E3"/>
                                </div>
                                <div class="flex items-center pt-[24px] gap-[12px]">
                                    <a-checkbox class="w-[20px] h-[20px]"/>
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #B9C7C6;">Payment to penny</p>
                                </div>
                                <div class="pt-[24px]">
                                    <button class="w-full py-[40px] bg-[#F4F6F6] rounded-[6px] text-[16px]"  style="font-family: Geist; font-weight: 500; color: #B9C7C6; border: 1px solid #DCE3E3">Payment</button>
                                </div>
                            </div>
                            <div v-if="selectedButton === 'balance'" class="pt-[32px] w-full">
                                <div>
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Search client</p>
                                    <input type="text" placeholder="Search client" disabled class="w-full mt-[6px] bg-[#FFFFFF] p-[12px] rounded-[6px]" style="border: 1px solid #DCE3E3"/>
                                </div>
                                <div class="pt-[24px]">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Payment number</p>
                                    <div class="w-full bg-[#F4F6F6] p-[12px] mt-[6px] rounded-[6px]" style="border: 1px solid #DCE3E3">
                                        <span class="text-[16px] text-[#95ACAA] font-[500]" style="font-family: Geist;">948</span>
                                    </div>
                                </div>
                                <div class="flex gap-[12px] pt-[24px] w-full">
                                    <div>
                                        <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Payment amount</p>
                                        <input type="text" disabled class="w-[347px] h-[44px] p-[10px] bg-[#F4F6F6]  mt-[6px] rounded-[6px] outline-none" style="border: 1px solid #DCE3E3"/>
                                    </div>
                                    <div>
                                        <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Currency</p>
                                        <div  class=" w-[197px] bg-[#F4F6F6] p-[8px] mt-[6px] rounded-[6px] flex items-center justify-end" style="border: 1px solid #DCE3E3">
                                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <mask id="mask0_171_13780" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="25" height="24">
                                            <rect x="24.5" y="24" width="24" height="24" transform="rotate(-180 24.5 24)" fill="#D9D9D9"/>
                                            </mask>
                                            <g mask="url(#mask0_171_13780)">
                                            <path d="M12.5 13.2001L16.4 9.3001C16.5833 9.11676 16.8166 9.0251 17.1 9.0251C17.3833 9.0251 17.6166 9.11676 17.8 9.3001C17.9833 9.48343 18.075 9.71676 18.075 10.0001C18.075 10.2834 17.9833 10.5168 17.8 10.7001L13.2 15.3001C13 15.5001 12.7666 15.6001 12.5 15.6001C12.2333 15.6001 12 15.5001 11.8 15.3001L7.19995 10.7001C7.01662 10.5168 6.92495 10.2834 6.92495 10.0001C6.92495 9.71676 7.01662 9.48343 7.19995 9.3001C7.38328 9.11676 7.61662 9.0251 7.89995 9.0251C8.18328 9.0251 8.41662 9.11676 8.59995 9.3001L12.5 13.2001Z" fill="#4F7471"/>
                                            </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Payment type</p>
                                        <a-select 
                                        class="mt-[6px]"
                                            v-model:value="value"
                                            :size="size"
                                            style="width: 197px;"
                                            show-search
                                            :options="paymnentOptions"
                                            :filter-option="filterOption">
                                        </a-select>
                                    </div>
                                </div>
                                <div class="flex gap-[12px] items-center pt-[24px]">
                                    <div>
                                        <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Exchange rate</p>
                                        <div class="p-[12px] bg-[#FFFFFF] rounded-[6px] flex justify-between mt-[6px] w-[355px]" style="border: 1px solid #DCE3E3">
                                            <input class=" bg-[#FFFFFF] w-full" type="text" disabled>
                                            <span>UZS</span>
                                        </div>
                                    </div>
                                    <div class="pt-[25px]">
                                        <svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="6.5" width="31" height="31" rx="15.5" fill="#E5EBFF"/>
                                        <rect x="0.5" y="6.5" width="31" height="31" rx="15.5" stroke="white"/>
                                        <path d="M18.43 15.9299L24.5 21.9999L18.43 28.0699M7.5 21.9999H24.33" stroke="#0037FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div >
                                        <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;"> Result</p>
                                        <div class="p-[12px] bg-[#FFFFFF] rounded-[6px] flex justify-between mt-[6px] w-[355px]" style="border: 1px solid #DCE3E3">
                                            <span>0</span>
                                            <input class=" bg-[#FFFFFF] w-full" type="text" disabled>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex items-center gap-[12px] pt-[24px]">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Date:</p>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" v-model="isToggled" class="sr-only peer" />
                                        <div class="w-[45px] h-[25px] bg-gray-300 rounded-[12px] peer-checked:bg-green-600 transition-colors duration-300"></div>
                                        <div class="absolute left-[3px] top-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                                    </label>
                                </div>
                                <div class="pt-[24px]">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #3F5D5A;">Comment</p>
                                    <input type="text" disabled class="w-full h-[44px] p-[10px] bg-[#F4F6F6]  mt-[6px] rounded-[6px] outline-none" style="border: 1px solid #DCE3E3"/>
                                </div>
                                <div class="flex items-center pt-[24px] gap-[12px]">
                                    <a-checkbox class="w-[20px] h-[20px]"/>
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400 ; color: #B9C7C6;">Payment to penny</p>
                                </div>
                                <div class="pt-[24px]">
                                    <button class="w-full py-[40px] bg-[#F4F6F6] rounded-[6px] text-[16px]"  style="font-family: Geist; font-weight: 500; color: #B9C7C6; border: 1px solid #DCE3E3">Payment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MainSidebar from '../components/MainSidebar.vue';
import axios from "axios";
import { useI18n } from "vue-i18n";
import { ref } from 'vue';
    export default {
        name : 'AddPayment',
        components : {MainSidebar},
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
                value: ref(undefined),
                size: ref('large'),
                paymnentOptions : [
                    {
                        value: 'P2P',
                        ladel:'P2P'
                    },
                    {
                        value: 'Bank',
                        label: 'Bank'
                    },
                    {
                        value :'Card',
                        label : 'Card'
                    },
                    {
                        value: 'Cash',
                        label: 'Cash'
                    },
                    {
                        value: 'Other',
                        label: 'Other'
                    }
                ],
                amountPaid: true,
                selectedTab: 'schedule',
                selectedButton : 'standard',
                fullPaymentSchedule : [
                    {
                        dateOfPayment: "09.08.2024 ",
                        sumOfPayment : "8,000,000",
                        paid : "8,000,000",
                    },
                    {
                        dateOfPayment: "09.08.2024 ",
                        sumOfPayment : "8,000,000",
                        paid : "8,000,000",
                    },
                    {
                        dateOfPayment: "09.08.2024 ",
                        sumOfPayment : "8,000,000",
                        paid : "8,000,000",
                    },
                ],
                paymentSchedule : [
                    {
                        dateOfPayment: "09.08.2024 ",
                        sumOfPayment : "8,000,000",
                        paid : "4,795,000",
                    },
                    {
                        dateOfPayment: "09.08.2024 ",
                        sumOfPayment : "8,000,000",
                        paid : "4,795,000",
                    },
                    {
                        dateOfPayment: "09.08.2024 ",
                        sumOfPayment : "8,000,000",
                        paid : "4,795,000",
                    },
                ],
                paymentTable : [
                    {
                      number: '184',
                      client: 'XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH',
                      date : '09.08.2024 13:37',
                      amount: '2,219,100,000 UZS',
                      type: 'Card'  
                    },
                    {
                      number: '184',
                      client: 'XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH',
                      date : '09.08.2024 13:37',
                      amount: '2,219,100,000 UZS',
                      type: 'Card'  
                    },
                    {
                      number: '184',
                      client: 'XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH',
                      date : '09.08.2024 13:37',
                      amount: '2,219,100,000 UZS',
                      type: 'Card'  
                    },
                    {
                      number: '184',
                      client: 'XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH',
                      date : '09.08.2024 13:37',
                      amount: '2,219,100,000 UZS',
                      type: 'Card'  
                    },
                    {
                      number: '184',
                      client: 'XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH',
                      date : '09.08.2024 13:37',
                      amount: '2,219,100,000 UZS',
                      type: 'Card'  
                    },
                    {
                      number: '184',
                      client: 'XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH',
                      date : '09.08.2024 13:37',
                      amount: '2,219,100,000 UZS',
                      type: 'Card'  
                    },
                    {
                      number: '184',
                      client: 'XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH',
                      date : '09.08.2024 13:37',
                      amount: '2,219,100,000 UZS',
                      type: 'Card'  
                    },
                    {
                      number: '184',
                      client: 'XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH',
                      date : '09.08.2024 13:37',
                      amount: '2,219,100,000 UZS',
                      type: 'Card'  
                    },
                    {
                      number: '184',
                      client: 'XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH',
                      date : '09.08.2024 13:37',
                      amount: '2,219,100,000 UZS',
                      type: 'Card'  
                    },
                    {
                      number: '184',
                      client: 'XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH',
                      date : '09.08.2024 13:37',
                      amount: '2,219,100,000 UZS',
                      type: 'Card'  
                    },
                ]
            }
        },
        methods: {
            changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
            selectTab(tab){
                this.selectedTab = tab;
            },
            selectButton(button) {
                this.selectedButton = button;
            }
        },
    }
</script>

<style scoped>
    .divide {
        border-bottom: 1px dashed #95ACAA;
    }
    .paymenr-table td{
        padding: 10px 10px;
        border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1);
    }

    .paymenr-table th {
        padding: 20px 10px;
        width: 171px;
    }

    .paymenr-table {
        width: 100%;
        border: 1px solid var(--Line-Container-Line, #EDF1F1);
    }

    .paymenr-table tbody{
        border: 1px solid var(--Line-Container-Line, #EDF1F1);
    }

    .paymenr-table tbody tr:hover {
        background: #EDF1F1;
        transition: all 300ms;
    }


    .schedules-table {
        width: 100%;
        border: 1px solid var(--Line-Container-Line, #EDF1F1);
    }
    .schedules-table td,
    .schedules-table th {
        border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1);
        padding: 20px 15px;
    }
</style>