<template>
    <div class="bg-[#F4F6F6] h-full">
        <div class="flex w-full min-h-screen">
            <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
            <div class="bg-[#FFFFFF] m-[8px] py-[20px] px-[16px] w-full rounded-[14px]" style="border: 1px solid #EDF1F1">
                <div class="flex items-center justify-between">
                    <div class="flex gap-[16px] items-center">
                        <router-link to="/contracts">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.57 6.43005L3.5 12.5001L9.57 18.5701M20.5 12.5001H3.67" stroke="#18181B" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </router-link>
                        <div>
                            <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">Reformulation of the payment schedule</p>
                            <p class="text-[10px]" style="font-family: Geist; font-weight: 400; color: #B9C7C6;">Contract > Reformulation of the payment schedule</p>
                        </div>
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

                <div class="bg-[#F4F6F6] mt-[16px] p-[6px] rounded-[8px] flex gap-[6px] min-h-screen">
                    <div class="bg-[#FFFFFF] p-[12px] w-full rounded-[6px] flex flex-col justify-between ">
                        <div>
                            <div>
                                <div class="flex justify-between">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Contract number</p>
                                    <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">H-33</span>
                                </div>
                                <div class="flex justify-between pt-[12px]">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Client</p>
                                    <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">REZAMANOV SHUKURALI SARDOR O‘G‘LI</span>
                                </div>
                                <div class="flex justify-between pt-[12px]">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Remaining amount</p>
                                    <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">618 181 200 UZS</span>
                                </div>
                            </div>
                            <div class="divide pt-[24px]"></div>
                            <div class="pt-[20px]">
                                <div class="flex justify-between items-center">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Payment period (month)</p>
                                    <div class="flex gap-[10px]">
                                    <button @click="reduceMonth">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" rx="10" fill="#E6EBFF"/>
                                            <path d="M11.5 7L8.5 10L11.5 13" stroke="#335FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                    <div class="cursor-pointer text-center w-[64px] h-[28px] py-[2px] rounded-[6px]  border ">{{ month }}</div>
                                    <button @click="addMonth">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width="20" height="20" rx="10" fill="#E6EBFF"/>
                                            <path d="M8.5 13L11.5 10L8.5 7" stroke="#335FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </button>
                                </div>
                                </div>
                                <div class="flex justify-between items-center pt-[12px]">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Initial payment date</p>
                                    <a-date-picker class="w-[275px] h-[28px]"/>
                                </div>
                                <div class="flex justify-between items-center pt-[12px]">
                                    <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Time interval (month)</p>
                                    <a-input-number :min="1" class="w-[72px] h-[28px] flex items-center text-center"/>
                                </div>
                            </div>
                            <div class="divide pt-[20px]"></div>
                            <div class="pt-[24px]">
                                <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Time interval (month)</p>
                                <textarea  placeholder="Leave a comment" class="mt-[12px] py-[13px] px-[14px] w-full resize-none rounded-[8px] outline-none h-[100px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
                            </div>
                        </div>

                        <div >
                            <button class="w-full py-[10px] text-center rounded-[8px] text-[16px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);box-shadow: 0px 4px 12px -2px #001B7EB8;box-shadow: 0px 0px 0px 1px #0025AD;">Confirm</button>
                        </div>
                    </div>
                    <div class="bg-[#FFFFFF] p-[12px] w-full  rounded-[6px] ">
                        <div class="flex justify-between gap-[12px]">
                            <div class="py-[12px] px-[16px] h-[72px] w-full border rounded-[6px] flex items-center gap-[20px]" style="box-shadow: 0px 1px 2px 0px #1823220D;">
                                <img src="/orangeWallet.svg" alt="">
                                <div>
                                    <p class="pb-[4px] text-[12px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Remaining amount</p>
                                    <span class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">0 UZS</span>
                                </div>
                            </div>
                            <div class="py-[12px] px-[16px]  border rounded-[6px] h-[72px] w-full flex items-center gap-[20px]" style="box-shadow: 0px 1px 2px 0px #1823220D;">
                                <img src="/purpleWallet.svg" alt="">
                                <div>
                                    <p class="pb-[4px] text-[12px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Amount in the table</p>
                                    <span class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">618 181 200 UZS</span>
                                </div>
                            </div>
                            <div class="w-full">
                                <button @click="openAddTable" class="bg-[#E5EBFF] text-[14px] py-[6px] rounded-[6px] w-full" style="font-family: Geist; font-weight: 600; color: #335FFF">Add a payment schedule</button>
                                <button class="bg-[#E5EBFF] text-[14px] py-[6px] rounded-[6px] w-full mt-[8px]" style="font-family: Geist; font-weight: 600; color: #335FFF">Clear the table</button>
                            </div>
                        </div>
                        <div class="pt-[12px]">
                            <table class="update-table">
                                <thead class="bg-[#F4F6F6]">
                                    <tr>
                                        <th>№</th>
                                        <th>Payment date</th>
                                        <th>Remaining amount</th>
                                        <th>Sum of payment</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(tab, index) in schedule" :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td><a-date-picker class=" h-[28px]"/></td>
                                        <td>
                                            <div class="border bg-[#F4F6F6] rounded-[6px] text-center h-[28px] py-[2px]">
                                                <span>{{ tab.remainingAmount }}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="border rounded-[6px] text-center h-[28px] py-[2px]">
                                                <span>{{ tab.sumOfPayment }}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="flex gap-[12px]">
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.1666 11.1667V13.6667C14.1666 17 12.8333 18.3334 9.49996 18.3334H6.33329C2.99996 18.3334 1.66663 17 1.66663 13.6667V10.5C1.66663 7.16669 2.99996 5.83335 6.33329 5.83335H8.83329M14.1666 11.1667H11.5C9.49996 11.1667 8.83329 10.5 8.83329 8.50002V5.83335M14.1666 11.1667L8.83329 5.83335M9.66663 1.66669H13M5.83329 4.16669C5.83329 2.78335 6.94996 1.66669 8.33329 1.66669H10.5166M18.3333 6.66669V11.825C18.3333 13.1167 17.2833 14.1667 15.9916 14.1667M18.3333 6.66669H15.8333C13.9583 6.66669 13.3333 6.04169 13.3333 4.16669V1.66669L18.3333 6.66669Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.3333 3.35002C16.1083 3.50002 17.5 4.52502 17.5 8.33335V13.3334C17.5 16.6667 16.6667 18.3334 12.5 18.3334H7.5C3.33333 18.3334 2.5 16.6667 2.5 13.3334V8.33335C2.5 4.53335 3.89167 3.50002 6.66667 3.35002M8.33333 5.00002H11.6667C13.3333 5.00002 13.3333 4.16669 13.3333 3.33335C13.3333 1.66669 12.5 1.66669 11.6667 1.66669H8.33333C7.5 1.66669 6.66667 1.66669 6.66667 3.33335C6.66667 5.00002 7.5 5.00002 8.33333 5.00002Z" stroke="#72908D" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>

                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17.5 4.98335C14.725 4.70835 11.9333 4.56669 9.15 4.56669C7.5 4.56669 5.85 4.65002 4.2 4.81669L2.5 4.98335M7.08333 4.14169L7.26667 3.05002C7.4 2.25835 7.5 1.66669 8.90833 1.66669H11.0917C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9167 4.14169M15.7083 7.61669L15.1667 16.0084C15.075 17.3167 15 18.3334 12.675 18.3334H7.325C5 18.3334 4.925 17.3167 4.83333 16.0084L4.29167 7.61669M8.60833 13.75H11.3833M7.91667 10.4167H12.0833" stroke="#DB4F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                </svg>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="isAddTable" className='fixed inset-0 bg-black opacity-50'></div>
        <transition name="popup">
            <div v-if="isAddTable" class="fixed inset-0  flex justify-center items-center">
                <div class=" bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px]">
                    <div  class="bg-[#FFFFFF] py-[16px] px-[12px] rounded-[6px]">
                            <div class="flex justify-between items-center">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Add an element to the table</p>
                                <img class="cursor-pointer" @click="closeAddTable" src="/closeWhite.svg" alt="">
                            </div>
                            <div class="divide pt-[20px]"></div>
                            <div class="pt-[20px] flex justify-between items-center">
                                <div>
                                    <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Amount</p>
                                    <input type="text" class="mt-[12px] p-[10px] border rounded-[8px] outline-none w-[272px]"/>
                                </div>
                                <div>
                                    <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Date</p>
                                    <a-date-picker class="w-[272px] h-[44px] mt-[12px]"/>
                                </div>
                            </div>
                            <div class="pt-[20px]">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Sum of payment</p>
                                <input type="text" class="mt-[12px] p-[10px] border rounded-[8px] outline-none w-full"/>
                            </div>
                        </div>
                        <div class="bg-[#FFFFFF] p-[12px] mt-[6px] rounded-[6px] flex gap-[20px]">
                            <button @click="closeAddTable" class="bg-[#F4F6F6] text-center py-[10px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">Close</button>
                            <button class="text-center py-[8px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Confirm</button>
                        </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
    export default {
        name:'Update',
        components: {Sidebar},
        data() {
            return {
                month: 0,
                isAddTable : false,  
                schedule: [
                    {
                        paymentDate : '21.09.2024',
                        remainingAmount : '618 181 200',
                        sumOfPayment : '12 878 775'
                    },
                    {
                        paymentDate : '21.09.2024',
                        remainingAmount : '618 181 200',
                        sumOfPayment : '12 878 775'
                    },
                    {
                        paymentDate : '21.09.2024',
                        remainingAmount : '618 181 200',
                        sumOfPayment : '12 878 775'
                    },
                    {
                        paymentDate : '21.09.2024',
                        remainingAmount : '618 181 200',
                        sumOfPayment : '12 878 775'
                    },
                    {
                        paymentDate : '21.09.2024',
                        remainingAmount : '618 181 200',
                        sumOfPayment : '12 878 775'
                    },
                    {
                        paymentDate : '21.09.2024',
                        remainingAmount : '618 181 200',
                        sumOfPayment : '12 878 775'
                    },
                    {
                        paymentDate : '21.09.2024',
                        remainingAmount : '618 181 200',
                        sumOfPayment : '12 878 775'
                    },
                    {
                        paymentDate : '21.09.2024',
                        remainingAmount : '618 181 200',
                        sumOfPayment : '12 878 775'
                    },
                    {
                        paymentDate : '21.09.2024',
                        remainingAmount : '618 181 200',
                        sumOfPayment : '12 878 775'
                    },
                    {
                        paymentDate : '21.09.2024',
                        remainingAmount : '618 181 200',
                        sumOfPayment : '12 878 775'
                    },
                ] 
            }
        },
        methods: {
            openAddTable() {
                this.isAddTable = true;
            },
            closeAddTable() {
                this.isAddTable = false;
            },
            addMonth() {
               this.month ++;
            },
            reduceMonth() {
                if (this.month > 0) {
                this.month--; // Decrease the value by 1, but not below 0
                }
            },
        },
    }
</script>

<style scoped>
    .divide {
        border-bottom: 1px dashed #95ACAA;
    }

    .update-table th,
    .update-table td{
        padding: 15px 15px;
        text-align: center;
        border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)
    }
    .update-table {
        width: 100%;
        border: 1px solid var(--Line-Container-Line, #EDF1F1)
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