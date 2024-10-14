<template>
    <div class="bg-[#F4F6F6] flex w-full">
        <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
        <div class="bg-[#FFFFFF] m-[8px] p-[16px] rounded-[16px] w-full" style="border: 1px solid #EDF1F1">
            <div class="flex items-center justify-between">
                <div>
                    <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">Client balance</p>
                    <p class="text-[10px]" style="font-family: Geist; font-weight: 400; color: #B9C7C6;"> Payment > Client balance</p>
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
                <div class="flex gap-[6px]">
                    <div class="px-[16px] py-[26px] bg-[#10B981] rounded-[6px] w-[330px]" style="border: 1px solid #FFFFFF; box-shadow: 0px 1px 2px 0px #1823220D;">
                        <h3 class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #FFFFFFCC;">Client</h3>
                        <span class="text-[16px] pt-[2px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">NILUFAR SALIMOVA QUCHQOROVNA</span>
                        <h3 class="pt-[12px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #FFFFFFCC;">Cellphone number</h3>
                        <span class="text-[16px] pt-[2px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">+998975778118</span>
                    </div>
                    <div class="p-[16px] bg-[#F59E0B] rounded-[6px] w-[300px]" style="border: 1px solid #FFFFFF; box-shadow: 0px 1px 2px 0px #1823220D;">
                        <h3 class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #FFFFFF;">Client balance</h3>
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #FFFFFFCC;">Basic balance</p>
                        <span class="text-[16px] pt-[2px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">0 UZS</span>
                        <p class="text-[14px] pt-[12px]" style="font-family: Geist; font-weight: 500; color: #FFFFFFCC;">Additional balance</p>
                        <span class="text-[16px] pt-[2px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">0</span>
                    </div>
                    <div @click="showDeposit" class="bg-[#FFFFFF] w-[192px] rounded-[6px] flex flex-col items-center justify-center cursor-pointer" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 24.5C16 26.44 17.5 28 19.34 28H23.1C24.7 28 26 26.64 26 24.94C26 23.12 25.2 22.46 24.02 22.04L18 19.94C16.82 19.52 16.02 18.88 16.02 17.04C16.02 15.36 17.32 13.98 18.92 13.98H22.68C24.52 13.98 26.02 15.54 26.02 17.48M21 12V30M41 21C41 32.04 32.04 41 21 41C9.96 41 1 32.04 1 21C1 9.96 9.96 1 21 1M31 3V11M31 11H39M31 11L41 1" stroke="#0037FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="pt-[12px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #0037FF;">Deposit</p>
                    </div>  
                    <div @click="showDisbursement" class="cursor-pointer bg-[#FFFFFF] w-[192px] rounded-[6px] flex flex-col items-center justify-center" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
                        <svg width="43" height="42" viewBox="0 0 43 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 24.5C16.5 26.44 18 28 19.84 28H23.6C25.2 28 26.5 26.64 26.5 24.94C26.5 23.12 25.7 22.46 24.52 22.04L18.5 19.94C17.32 19.52 16.52 18.88 16.52 17.04C16.52 15.36 17.82 13.98 19.42 13.98H23.18C25.02 13.98 26.52 15.54 26.52 17.48M21.5 12V30M41.5 21C41.5 32.04 32.54 41 21.5 41C10.46 41 1.5 32.04 1.5 21C1.5 9.96 10.46 1 21.5 1M41.5 9V1M41.5 1H33.5M41.5 1L31.5 11" stroke="#0037FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="pt-[12px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #0037FF;">Disbursement of funds</p>
                    </div>  
                    <div class="bg-[#FFFFFF] w-[192px] rounded-[6px] flex flex-col items-center justify-center" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19V31M15 31L19 27M15 31L11 27M41 17V27C41 37 37 41 27 41H15C5 41 1 37 1 27V15C1 5 5 1 15 1H25M41 17H33C27 17 25 15 25 9V1M41 17L25 1" stroke="#0037FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p class="pt-[12px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #0037FF;">Download</p>
                    </div>  
                </div>
                <div class="bg-[#FFFFFF] mt-[6px] p-[16px] rounded-[6px]" style="border: 1px solid #EDF1F1;">
                    <table class="balance-table ">
                        <thead class="bg-[#F4F6F6]">
                            <tr class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471;border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)">
                                <th>№</th>
                                <th>Date of deposit</th>
                                <th>Amount entered</th>
                                <th>Payment type</th>
                                <th>Basis</th>
                                <th>Responsible</th>
                                <th>Transaction type</th>
                            </tr>
                        </thead>
                        <tbody v-for="(table,index) in deposit" :key="index" >
                            <tr class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #000000;  border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)">
                                <td>{{  table.number }}</td>
                                <td>{{ table.dateOfDeposit }}</td>
                                <td> {{ table.amountEntered }}</td>
                                <td>{{ table.paymentType }}</td>
                                <td> {{ table.basis }}</td>
                                <td>{{ table.responsible }}</td>
                                <td>{{ table.transactionType }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        <transition name="popup">
            <div v-if="isDepositOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div class="bg-[#F4F6F6] p-[6px] m-[12px] rounded-[8px] w-[600px]">
                    <div class="bg-[#FFFFFF] pt-[16px] pb-[6px] px-[12px] rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
                        <div class="flex justify-between items-center">
                            <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Deposit</p>
                            <img class="cursor-pointer" @click="closeDeposit" src="/closeWhite.svg" alt="">
                        </div>
                        <div class="divide pt-[12px]"></div>
                        <p class="pt-[12px] text-[16px] " style="font-family: Geist; font-weight: 500; color: #72908D;">To which currency</p>
                        <div class="w-[564px] rounded-[8px] mt-[12px] py-[13px] pr-[13px] flex justify-between items-center" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <select class="w-[564px] flex items-end pl-[13px]">
                                <option >UZS</option>
                                <option >USD</option>
                                <option >RUB</option>
                            </select>
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L13 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p class="pt-[12px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Sum of payment</p>
                        <div class="w-[564px] rounded-[8px] mt-[12px] p-[13px] flex justify-between items-center" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <input type="number" class="w-[564px] border-none outline-none">
                        </div>
                        <div class="pt-[12px] flex items-center justify-between">
                            <div class=" w-[276px]">
                                <p class="pt-[12px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Payment type</p>
                                <div class="rounded-[8px] mt-[12px] py-[12px] pr-[12px] flex justify-between items-center" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">  
                                    <select class="pl-[12px] ">
                                        <option >Cash</option>
                                        <option >Card</option>
                                    </select>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L13 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div class=" w-[276px]">
                                <p class="pt-[12px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Currency</p>
                                <div class="rounded-[8px] mt-[12px] py-[12px] pr-[12px] flex justify-between items-center" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">  
                                    <select class="pl-[12px] ">
                                        <option >UZS</option>
                                        <option >USD</option>
                                        <option >RUB</option>
                                    </select>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L13 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <textarea placeholder="Leave a comment"  class="w-full h-[120px] resize-none rounded-[8px] mt-[12px] px-[14px] py-[13px] outline-none " style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
                        </div>
                    </div>
                    <div class="bg-[#FFFFFF] rounded-[6px] mt-[6px] p-[12px] flex justify-between " style="  border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
                        <button @click="closeDeposit" class="w-[272px] py-[10px] rounded-[6px] flex items-center justify-center bg-[#F4F6F6] hover:bg-gray-300 text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Close</button>
                        <button class="w-[272px] py-[10px] rounded-[6px] flex items-center justify-center text-[16px" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%); border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Payment</button>
                    </div>
                </div>
            </div>
        </transition>
        <transition name="popup">
            <div v-if="isDisbursementOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                <div class="bg-[#F4F6F6] p-[6px] m-[12px] rounded-[8px] w-[600px]">
                    <div class="bg-[#FFFFFF] pt-[16px] pb-[6px] px-[12px] rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
                        <div class="flex justify-between items-center">
                            <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Disbursement of funds</p>
                            <img class="cursor-pointer" @click="closeDisbursement" src="/closeWhite.svg" alt="">
                        </div>
                        <div class="divide pt-[12px]"></div>
                        <p class="pt-[12px] text-[16px] " style="font-family: Geist; font-weight: 500; color: #72908D;">From which currency</p>
                        <div class="w-[564px] rounded-[8px] mt-[12px] py-[13px] pr-[13px] flex justify-between items-center" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <select class="w-[564px] flex items-end pl-[13px]">
                                <option >UZS</option>
                                <option >USD</option>
                                <option >RUB</option>
                            </select>
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L13 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <p class="pt-[12px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Sum of payment</p>
                        <div class="w-[564px] rounded-[8px] mt-[12px] p-[13px] flex justify-between items-center" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <input type="number" class="w-[564px] border-none outline-none">
                        </div>
                        <div class="pt-[12px] flex items-center justify-between">
                            <div class=" w-[276px]">
                                <p class="pt-[12px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Payment type</p>
                                <div class="rounded-[8px] mt-[12px] py-[12px] pr-[12px] flex justify-between items-center" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">  
                                    <select class="pl-[12px] ">
                                        <option >Cash</option>
                                        <option >Card</option>
                                    </select>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L13 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                            <div class=" w-[276px]">
                                <p class="pt-[12px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Currency</p>
                                <div class="rounded-[8px] mt-[12px] py-[12px] pr-[12px] flex justify-between items-center" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">  
                                    <select class="pl-[12px] ">
                                        <option >UZS</option>
                                        <option >USD</option>
                                        <option >RUB</option>
                                    </select>
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L7 7L13 1" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>
                            <textarea placeholder="Leave a comment"  class="w-full h-[120px] resize-none rounded-[8px] mt-[12px] px-[14px] py-[13px] outline-none " style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
                        </div>
                    </div>
                    <div class="bg-[#FFFFFF] rounded-[6px] mt-[6px] p-[12px] flex justify-between " style="  border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
                        <button @click="closeDeposit" class="w-[272px] py-[10px] rounded-[6px] flex items-center justify-center bg-[#F4F6F6] hover:bg-gray-300 text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Close</button>
                        <button class="w-[272px] py-[10px] rounded-[6px] flex items-center justify-center text-[16px" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%); border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Payment</button>
                    </div>
                </div>
            </div>
        </transition>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
    export default {
        name: 'ClientBalance',
        components: {Sidebar},
        

        data() {
            return {
                deposit: [
                    {   
                        number: 184,
                        dateOfDeposit: '09.08.2024 13:37',
                        amountEntered: '2,219,100,000 UZS',
                        paymentType: 'Card',
                        basis: 'Card',
                        responsible: 'Card',
                        transactionType : 'Card'
                    },
                    {   
                        number: 184,
                        dateOfDeposit: '09.08.2024 13:37',
                        amountEntered: '2,219,100,000 UZS',
                        paymentType: 'Card',
                        basis: 'Card',
                        responsible: 'Card',
                        transactionType : 'Card'
                    },
                    {   
                        number: 184,
                        dateOfDeposit: '09.08.2024 13:37',
                        amountEntered: '2,219,100,000 UZS',
                        paymentType: 'Card',
                        basis: 'Card',
                        responsible: 'Card',
                        transactionType : 'Card'
                    },
                    {   
                        number: 184,
                        dateOfDeposit: '09.08.2024 13:37',
                        amountEntered: '2,219,100,000 UZS',
                        paymentType: 'Card',
                        basis: 'Card',
                        responsible: 'Card',
                        transactionType : 'Card'
                    },
                    {   
                        number: 184,
                        dateOfDeposit: '09.08.2024 13:37',
                        amountEntered: '2,219,100,000 UZS',
                        paymentType: 'Card',
                        basis: 'Card',
                        responsible: 'Card',
                        transactionType : 'Card'
                    },
                    {   
                        number: 184,
                        dateOfDeposit: '09.08.2024 13:37',
                        amountEntered: '2,219,100,000 UZS',
                        paymentType: 'Card',
                        basis: 'Card',
                        responsible: 'Card',
                        transactionType : 'Card'
                    },
                    {   
                        number: 184,
                        dateOfDeposit: '09.08.2024 13:37',
                        amountEntered: '2,219,100,000 UZS',
                        paymentType: 'Card',
                        basis: 'Card',
                        responsible: 'Card',
                        transactionType : 'Card'
                    },
                    {   
                        number: 184,
                        dateOfDeposit: '09.08.2024 13:37',
                        amountEntered: '2,219,100,000 UZS',
                        paymentType: 'Card',
                        basis: 'Card',
                        responsible: 'Card',
                        transactionType : 'Card'
                    },
                    {   
                        number: 184,
                        dateOfDeposit: '09.08.2024 13:37',
                        amountEntered: '2,219,100,000 UZS',
                        paymentType: 'Card',
                        basis: 'Card',
                        responsible: 'Card',
                        transactionType : 'Card'
                    },
                ],
                isDepositOpen : false,
                isDisbursementOpen: false,
            }
        },
        methods: {
            showDeposit() {
                this.isDepositOpen = true;
            },
            closeDeposit() {
                this.isDepositOpen = false;
            },
            showDisbursement() {
                this.isDisbursementOpen = true;
            },
            closeDisbursement() {
                this.isDisbursementOpen = false;
            },
        },

    }
</script>

<style scoped>
    .divide {
        border-bottom: 1px dashed #95ACAA;
    }
    .balance-table th,
    .balance-table td {
        padding: 20px 15px;
    }
    .balance-table{
        width: 100%;
        border: 1px solid var(--Line-Container-Line, #EDF1F1);
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