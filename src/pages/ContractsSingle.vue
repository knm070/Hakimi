<template>
  <div class="bg-[#F4F6F6] flex">
    <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
    <div class="bg-[#FFFFFF] m-[8px] rounded-[14px] p-[16px] w-full" style="border: 1px solid #edf1f1">
      <div class="flex items-center justify-between">
        <div>
          <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">№ {{contractId}}</span>
          <p class="text-[10px]" style="font-family: Geist; font-weight: 400; color: #b9c7c6">Contract > № {{contractId}}</p>
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
      <div class="flex justify-between">
        <ul class="py-[16px] flex gap-[20px]">
          <li @click="openPaymentInfo" class="cursor-pointer flex gap-[10px] items-center text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M1.33325 5.66683H8.99992M3.99992 11.0002H5.33325M6.99992 11.0002H9.66659M14.6666 7.3535V10.7402C14.6666 13.0802 14.0733 13.6668 11.7066 13.6668H4.29325C1.92659 13.6668 1.33325 13.0802 1.33325 10.7402V5.26016C1.33325 2.92016 1.92659 2.3335 4.29325 2.3335H8.99992M10.9999 4.00016L11.9999 5.00016L14.6666 2.3335"
                stroke="#72908D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Payment
          </li>
          <div style="border: 1px solid #edf1f1"></div>
          <li class="flex gap-[10px] items-center text-[14px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #000000">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 8.00016L6.66353 10.6668L12 5.3335" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            CRM
          </li>
          <div style="border: 1px solid #edf1f1"></div>
          <li class="flex gap-[10px] items-center text-[14px] cursor-pointer" @click="openArchive" style="font-family: Geist; font-weight: 500; color: #000000">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.83333 9.3335H11.6667M6 12.0002H11.6667M14 4.66683V11.3335C14 13.3335 13 14.6668 10.6667 14.6668H5.33333C3 14.6668 2 13.3335 2 11.3335V4.66683C2 2.66683 3 1.3335 5.33333 1.3335H10.6667C13 1.3335 14 2.66683 14 4.66683ZM10.3333 1.3335V6.57349C10.3333 6.86682 9.98665 7.01348 9.77332 6.82015L8.22668 5.39351C8.10002 5.27351 7.89998 5.27351 7.77332 5.39351L6.22668 6.82015C6.01335 7.01348 5.66667 6.86682 5.66667 6.57349V1.3335H10.3333Z"
                stroke="#72908D"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Archive
          </li>
          <div style="border: 1px solid #edf1f1"></div>
          <li class="flex gap-[10px] items-center text-[14px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #000000">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.99992 7.3335V11.3335M5.99992 11.3335L7.33325 10.0002M5.99992 11.3335L4.66659 10.0002M14.6666 6.66683V10.0002C14.6666 13.3335 13.3333 14.6668 9.99992 14.6668H5.99992C2.66659 14.6668 1.33325 13.3335 1.33325 10.0002V6.00016C1.33325 2.66683 2.66659 1.3335 5.99992 1.3335H9.33325M14.6666 6.66683H11.9999C9.99992 6.66683 9.33325 6.00016 9.33325 4.00016V1.3335M14.6666 6.66683L9.33325 1.3335"
                stroke="#72908D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Download
          </li>
          <div style="border: 1px solid #edf1f1"></div>
          <li @click="openContract" class="cursor-pointer flex gap-[10px] items-center text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.99992 5.3335V8.66683M7.99626 10.6668H8.00224M7.99992 14.6668C11.6666 14.6668 14.6666 11.6668 14.6666 8.00016C14.6666 4.3335 11.6666 1.3335 7.99992 1.3335C4.33325 1.3335 1.33325 4.3335 1.33325 8.00016C1.33325 11.6668 4.33325 14.6668 7.99992 14.6668Z"
                stroke="#72908D"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            Information
          </li>
        </ul>
        <div class="flex items-center gap-[6px] pr-[10px] cursor-pointer" @click="openCancellation">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.6667 6.66683V10.0002C14.6667 13.3335 13.3334 14.6668 10 14.6668H6.00004C2.66671 14.6668 1.33337 13.3335 1.33337 10.0002V6.00016C1.33337 2.66683 2.66671 1.3335 6.00004 1.3335H9.33337M14.6667 6.66683H12C10 6.66683 9.33337 6.00016 9.33337 4.00016V1.3335M14.6667 6.66683L9.33337 1.3335"
              stroke="#DB4F00"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #db4f00">Cancel</p>
        </div>
      </div>

      <div class="bg-[#EDF1F1] p-[6px] rounded-[8px] flex" v-if="table_data">
        <div class="">
          <div class="flex flex-wrap gap-[6px]">
            <div class="bg-[#FFFFFF] py-[20px] px-[16px] rounded-[6px] flex flex-col items-start gap-[12px] w-[197px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
              <div class="flex gap-[12px] items-center">
                <img src="/moneyIcon.svg" alt="" />
                <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Contract amount</p>
              </div>
              <span class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.contract.contract_amount.toLocaleString() }} UZS</span>
            </div>
            <div class="bg-[#FFFFFF] py-[20px] px-[16px] rounded-[6px] flex flex-col items-start gap-[12px] w-[197px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
              <div class="flex gap-[12px] items-center">
                <img src="/cardIcon.svg" alt="" />
                <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">First payment</p>
              </div>
              <span class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.contract.first_payment.toLocaleString() }} UZS</span>
            </div>
            <div class="bg-[#FFFFFF] py-[20px] px-[16px] rounded-[6px] flex flex-col items-start gap-[12px] w-[197px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
              <div class="flex items-center">
                <div class="flex gap-[12px] items-center pr-[15px]">
                  <img src="/dateIcon.svg" alt="" />
                  <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Contract period</p>
                </div>
                <div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.99967 1.3335C4.32634 1.3335 1.33301 4.32683 1.33301 8.00016C1.33301 11.6735 4.32634 14.6668 7.99967 14.6668C11.673 14.6668 14.6663 11.6735 14.6663 8.00016C14.6663 4.32683 11.673 1.3335 7.99967 1.3335ZM7.49967 5.3335C7.49967 5.06016 7.72634 4.8335 7.99967 4.8335C8.27301 4.8335 8.49967 5.06016 8.49967 5.3335V8.66683C8.49967 8.94016 8.27301 9.16683 7.99967 9.16683C7.72634 9.16683 7.49967 8.94016 7.49967 8.66683V5.3335ZM8.61301 10.9202C8.57967 11.0068 8.53301 11.0735 8.47301 11.1402C8.40634 11.2002 8.33301 11.2468 8.25301 11.2802C8.17301 11.3135 8.08634 11.3335 7.99967 11.3335C7.91301 11.3335 7.82634 11.3135 7.74634 11.2802C7.66634 11.2468 7.59301 11.2002 7.52634 11.1402C7.46634 11.0735 7.41967 11.0068 7.38634 10.9202C7.35301 10.8402 7.33301 10.7535 7.33301 10.6668C7.33301 10.5802 7.35301 10.4935 7.38634 10.4135C7.41967 10.3335 7.46634 10.2602 7.52634 10.1935C7.59301 10.1335 7.66634 10.0868 7.74634 10.0535C7.90634 9.98683 8.09301 9.98683 8.25301 10.0535C8.33301 10.0868 8.40634 10.1335 8.47301 10.1935C8.53301 10.2602 8.57967 10.3335 8.61301 10.4135C8.64634 10.4935 8.66634 10.5802 8.66634 10.6668C8.66634 10.7535 8.64634 10.8402 8.61301 10.9202Z"
                      fill="#335FFF"
                    />
                  </svg>
                </div>
              </div>

              <span class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.contract.contract_period }} months</span>
            </div>
            <div class="bg-[#FFFFFF] py-[20px] px-[16px] rounded-[6px] flex flex-col items-start gap-[12px] w-[197px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
              <div class="flex gap-[12px] items-center">
                <img src="/cardIcon2.svg" alt="" />
                <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Paid amount</p>
              </div>
              <span class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.contract.paid_amount.toLocaleString() }} UZS</span>
            </div>
            <div class="bg-[#FFFFFF] py-[20px] px-[16px] rounded-[6px] flex flex-col items-start gap-[12px] w-[197px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
              <div class="flex gap-[12px] items-center">
                <img src="/cashIcon.svg" alt="" />
                <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Remaining amount</p>
              </div>
              <span class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.contract.remian_amount.toLocaleString() }} UZS</span>
            </div>
            <div class="bg-[#FFFFFF] py-[20px] px-[16px] rounded-[6px] flex flex-col items-start gap-[12px] w-[197px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
              <div class="flex gap-[12px] items-center">
                <img src="/walletIcon.svg" alt="" />
                <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Monthly arrears</p>
              </div>
              <span class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.contract.monthly_arrears.toLocaleString() }} UZS</span>
            </div>
          </div>

          <div class="mt-[6px] p-[16px] rounded-[6px] bg-[#FFFFFF]" style="border: 1px solid #edf1f1">
            <div class="flex gap-[6px]">
              <button @click="selectTab('history')" :class="[' py-[6px] px-[12px] rounded-[6px] text-[14px] cursor-pointer', selectedTab === 'history' ? 'bg-[#E5EBFF]' : 'bg-[#F4F6F6]']" :style="{ fontFamily: 'Geist', fontWeight: '600', color: selectedTab === 'history' ? '#0037FF' : '#72908D' }">
                Payment history
              </button>
              <button @click="selectTab('schedule')" :class="[' py-[6px] px-[12px] rounded-[6px] text-[14px] cursor-pointer', selectedTab === 'schedule' ? 'bg-[#E5EBFF]' : 'bg-[#F4F6F6]']" :style="{ fontFamily: 'Geist', fontWeight: '600', color: selectedTab === 'schedule' ? '#0037FF' : '#72908D' }">
                Payment schedule
              </button>
            </div>
            <div class="divide pt-[16px]"></div>

            <div class="">
              <table class="paymenr-table mt-[16px]" v-if="selectedTab == 'history'">
                <thead class="bg-[#F4F6F6] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4f7471">
                  <tr>
                    <th>№</th>
                    <th>Client</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Payment type</th>
                    <th></th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody v-if="payment_detail" class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">
                  <tr v-for="(item, index) in payment_detail" :key="index">
                    <td>{{ item.id }}</td>
                    <td style="font-weight: 600">{{ table_data.client_data.first_name + " "+table_data.client_data.last_name + " "+table_data.client_data.middle_name  }}</td>
                    <td>{{ new Date(item.datetime).toLocaleString() }}</td>

                    <td>{{ item.amount.toLocaleString() }}  UZS</td>
                    <td>{{ item.payment_type }}</td>
                    <td @click="openPayment" class="cursor-pointer">
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M10.7998 0C5.2898 0 0.799805 4.49 0.799805 10C0.799805 15.51 5.2898 20 10.7998 20C16.3098 20 20.7998 15.51 20.7998 10C20.7998 4.49 16.3098 0 10.7998 0ZM10.0498 6C10.0498 5.59 10.3898 5.25 10.7998 5.25C11.2098 5.25 11.5498 5.59 11.5498 6V11C11.5498 11.41 11.2098 11.75 10.7998 11.75C10.3898 11.75 10.0498 11.41 10.0498 11V6ZM11.7198 14.38C11.6698 14.51 11.5998 14.61 11.5098 14.71C11.4098 14.8 11.2998 14.87 11.1798 14.92C11.0598 14.97 10.9298 15 10.7998 15C10.6698 15 10.5398 14.97 10.4198 14.92C10.2998 14.87 10.1898 14.8 10.0898 14.71C9.9998 14.61 9.9298 14.51 9.8798 14.38C9.8298 14.26 9.7998 14.13 9.7998 14C9.7998 13.87 9.8298 13.74 9.8798 13.62C9.9298 13.5 9.9998 13.39 10.0898 13.29C10.1898 13.2 10.2998 13.13 10.4198 13.08C10.6598 12.98 10.9398 12.98 11.1798 13.08C11.2998 13.13 11.4098 13.2 11.5098 13.29C11.5998 13.39 11.6698 13.5 11.7198 13.62C11.7698 13.74 11.7998 13.87 11.7998 14C11.7998 14.13 11.7698 14.26 11.7198 14.38Z"
                          fill="#95ACAA"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.7998 11V17M9.7998 17L11.7998 15M9.7998 17L7.7998 15M22.7998 10V15C22.7998 20 20.7998 22 15.7998 22H9.7998C4.7998 22 2.7998 20 2.7998 15V9C2.7998 4 4.7998 2 9.7998 2H14.7998M22.7998 10H18.7998C15.7998 10 14.7998 9 14.7998 6V2M22.7998 10L14.7998 2"
                          stroke="#335FFF"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </td>
                    <td>
                      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M18.7998 4.98C15.4698 4.65 12.1198 4.48 8.7798 4.48C6.7998 4.48 4.8198 4.58 2.8398 4.78L0.799805 4.98M6.2998 3.97L6.5198 2.66C6.6798 1.71 6.7998 1 8.4898 1H11.1098C12.7998 1 12.9298 1.75 13.0798 2.67L13.2998 3.97M16.6498 8.14L15.9998 18.21C15.8898 19.78 15.7998 21 13.0098 21H6.5898C3.7998 21 3.7098 19.78 3.5998 18.21L2.9498 8.14M8.1298 15.5H11.4598M7.2998 11.5H12.2998"
                          stroke="#DB4F00"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <table class="schedule-table mt-[16px] w-[570px]" v-if="selectedTab === 'schedule'">
                <thead>
                  <tr class="bg-[#F4F6F6] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4f7471">
                    <th>№</th>
                    <th>Date of payment</th>
                    <th>Sum of payment</th>
                    <th>Paid amount (soum)</th>
                    <th>Payment type</th>
                  </tr>
                </thead>
                <tbody v-if="paginatedPaymentSchedule">
                  <tr v-for="(item, index) in paginatedPaymentSchedule" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">
                    <td>{{ item.number }}</td>
                    <td>{{ item.payment_date }}</td>
                    <td>{{ item.payment_sum }}</td>
                    <td style="color: #00b252; font-weight: 600">{{ item.paid_sum ?? 0 }} UZS</td>
                    <td>{{ item.type }}</td>

                  </tr>
                </tbody>
              </table>
              <div class="">
                <button @click="currentPage = Math.max(currentPage - 1, 1)" :disabled="currentPage === 1" class="pgn_btn">Previous</button>
                <span>Page {{ currentPage }} of {{ totalPages }}</span>
                <button @click="currentPage = Math.min(currentPage + 1, totalPages)" :disabled="currentPage === totalPages" class="pgn_btn">Next</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div class="bg-[#FFFFFF] px-[12px] pt-[12px] rounded-[6px] ml-[6px] w-[600px] h-[450px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
            <h2>Payments</h2>
            <div class="divide pt-[12px]"></div>

            <div class="flex items-center gap-[12px] pt-[16px]">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="#00B252" />
                <path
                  d="M17.464 18.64H20.008L24.104 30H21.928L20.984 27.312H16.488L15.544 30H13.368L17.464 18.64ZM20.376 25.536L18.744 20.736L17.096 25.536H20.376ZM25.2569 18.64H27.3049V25.312L30.8089 21.456H33.3369L29.9929 25.008L33.4489 30H31.1449L28.6489 26.224L27.3049 27.648V30H25.2569V18.64Z"
                  fill="white"
                />
              </svg>
              <div class="flex items-center">
                <div>
                  <p>{{ table_data.client_data.first_name + " "+table_data.client_data.last_name + " "+table_data.client_data.middle_name  }}</p>
                  <div class="flex gap-[4px] pt-[6px]">
                    <div class="w-[18px] h-[4px] rounded-full bg-[#FBEDE5]"></div>
                    <div class="w-[18px] h-[4px] rounded-full bg-[#FFFBE5]"></div>
                    <div class="w-[18px] h-[4px] rounded-full bg-[#C5F7DC]"></div>
                    <div class="w-[18px] h-[4px] rounded-full bg-[#E5EBFF]"></div>
                    <div class="w-[18px] h-[4px] rounded-full bg-[#FFEEFC]"></div>
                  </div>
                  <div class="flex items-center gap-[6px]">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.985 9.165C10.985 9.345 10.945 9.53 10.86 9.71C10.775 9.89 10.665 10.06 10.52 10.22C10.275 10.49 10.005 10.685 9.7 10.81C9.4 10.935 9.075 11 8.725 11C8.215 11 7.67 10.88 7.095 10.635C6.52 10.39 5.945 10.06 5.375 9.645C4.8 9.225 4.255 8.76 3.735 8.245C3.22 7.725 2.755 7.18 2.34 6.61C1.93 6.04 1.6 5.47 1.36 4.905C1.12 4.335 1 3.79 1 3.27C1 2.93 1.06 2.605 1.18 2.305C1.3 2 1.49 1.72 1.755 1.47C2.075 1.155 2.425 1 2.795 1C2.935 1 3.075 1.03 3.2 1.09C3.33 1.15 3.445 1.24 3.535 1.37L4.695 3.005C4.785 3.13 4.85 3.245 4.895 3.355C4.94 3.46 4.965 3.565 4.965 3.66C4.965 3.78 4.93 3.9 4.86 4.015C4.795 4.13 4.7 4.25 4.58 4.37L4.2 4.765C4.145 4.82 4.12 4.885 4.12 4.965C4.12 5.005 4.125 5.04 4.135 5.08C4.15 5.12 4.165 5.15 4.175 5.18C4.265 5.345 4.42 5.56 4.64 5.82C4.865 6.08 5.105 6.345 5.365 6.61C5.635 6.875 5.895 7.12 6.16 7.345C6.42 7.565 6.635 7.715 6.805 7.805C6.83 7.815 6.86 7.83 6.895 7.845C6.935 7.86 6.975 7.865 7.02 7.865C7.105 7.865 7.17 7.835 7.225 7.78L7.605 7.405C7.73 7.28 7.85 7.185 7.965 7.125C8.08 7.055 8.195 7.02 8.32 7.02C8.415 7.02 8.515 7.04 8.625 7.085C8.735 7.13 8.85 7.195 8.975 7.28L10.63 8.455C10.76 8.545 10.85 8.65 10.905 8.775C10.955 8.9 10.985 9.025 10.985 9.165Z"
                        stroke="#72908D"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                      />
                    </svg>
                    <a class="list-none" href="#">{{ table_data.client_data.phone_number }}</a>
                  </div>
                </div>
                <div class="flex items-center gap-[12px] pl-[270px]">
                  <img @click="gotoClientBalance" class="cursor-pointer" src="/profileMoney.svg" alt="" />
                  <img class="cursor-pointer" src="/chatIcon.svg" alt="" />
                </div>
              </div>
            </div>

            <div class="flex items-start justify-between pb-[16px] pt-[12px]">
              <div>
                <div>
                  <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">Province</p>
                  <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #000000">{{ table_data.client_data.region_name }}</span>
                </div>
                <div class="pt-[12px]">
                  <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">City/district</p>
                  <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #000000">{{ table_data.client_data.district_name }}</span>
                </div>
              </div>
              <div class="max-w-[360px] w-full pl-[50px]">
                <div>
                  <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">Address</p>
                  <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #000000">{{ table_data.client_data.address }}</span>
                </div>
                <div class="pt-[12px]">
                  <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908d">Passport series, number</p>
                  <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #000000">{{ table_data.client_data.passport }}</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col gap-[5px]">
              <div class="flex items-center justify-between p-[6px] rounded-[6px] bg-[#EDF1F1]">
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4f7471">Given time</p>
                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.client_data.given_date }}</span>
              </div>
              <div class="flex items-center justify-between p-[6px]">
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4f7471">Date of birth</p>
                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.client_data.birth_date }}</span>
              </div>
              <div class="flex items-center justify-between p-[6px] rounded-[6px] bg-[#EDF1F1]">
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4f7471">Work place</p>
                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.client_data.work_place }}</span>
              </div>
              <div class="flex items-center justify-between p-[6px]">
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4f7471">Given place</p>
                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.client_data.passport_place }}</span>
              </div>
            </div>
            <div class="pl-[270px] pt-[16px] cursor-pointer">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="18" fill="#335FFF" />
                <path d="M24 21L18 15L12 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] mt-[6px] ml-[6px]">
            <h2>House information</h2>
            <div class="divide pt-[12px]"></div>
            <div class="flex items-center justify-center gap-[32px] pt-[12px]">
              <img class="cursor-pointer" src="/whiteArrowLeft.svg" alt="" />
              <div @click="openImage">
                <img src="/assets/img/housePlan.jpg" alt="" />
              </div>
              <img class="cursor-pointer" src="/whiteArrowRight.svg" alt="" />
            </div>
            <div class="pt-[12px] flex flex-col gap-[5px]">
              <div class="flex items-center justify-between p-[6px] rounded-[6px] bg-[#EDF1F1]">
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4f7471">Building</p>
                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.apartment_data.building }}</span>
              </div>
              <div class="flex items-center justify-between p-[6px]">
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4f7471">Number of rooms</p>
                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.apartment_data.number_of_rooms }}</span>
              </div>
              <div class="flex items-center justify-between p-[6px] rounded-[6px] bg-[#EDF1F1]">
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4f7471">Floor</p>
                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.apartment_data.floor }}</span>
              </div>
              <div class="flex items-center justify-between p-[6px]">
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4f7471">Apartment number</p>
                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.apartment_data.number }}</span>
              </div>
              <div class="flex items-center justify-between p-[6px] rounded-[6px] bg-[#EDF1F1]">
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4f7471">Total area</p>
                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.apartment_data.area }}m2</span>
              </div>
              <div class="flex items-center justify-between p-[6px]">
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4f7471">Submission status</p>
                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ table_data.apartment_data.submission_status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="popup">
      <div v-show="isImageOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start">
        <div ref="panel" class="flex">
          <img class="cursor-pointer mr-[200px]" src="/whiteArrowLeft.svg" alt="" />
          <img class="h-screen" src="/assets/img/bigHousePlan.jpg" alt="" />
          <img class="cursor-pointer ml-[200px]" src="/whiteArrowRight.svg" alt="" />
        </div>
        <div class="flex gap-[48px] pt-[50px]">
          <!--  -  -->
          <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.7H14M22 22L20 20M21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <!--   +   -->
          <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.2 11.7H14.2M11.7 14.2V9.2M22 22L20 20M21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 6.25329 6.25329 2 11.5 2C16.7467 2 21 6.25329 21 11.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <!-- X -->
          <svg class="cursor-pointer" @click="closeImage" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.17 14.83L14.83 9.17M14.83 14.83L9.17 9.17M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
    </transition>

    <transition name="popup">
      <div v-if="isPaymentOPen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-[#F4F6F6] p-[6px] rounded-[8px] w-[500px]">
          <div class="bg-[#FFFFFF] p-[12px] rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
            <div class="flex justify-between items-center">
              <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">Payment info</p>
              <img class="cursor-pointer" @click="closePayment" src="/closeWhite.svg" alt="" />
            </div>
            <div class="divide pt-[10px]"></div>
            <div class="flex justify-between items-center pt-[12px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Responsible employee</p>
              <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">{{ table_data.information.responsible }}</span>
            </div>
            <div class="divide pt-[12px]"></div>
            <div class="flex justify-between items-center pt-[12px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Date</p>
              <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">{{ table_data.information.contract_created_date }}</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="popup">
      <div v-if="isContractOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-[#F4F6F6] p-[6px] rounded-[8px] w-[500px]">
          <div class="bg-[#FFFFFF] p-[12px] rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
            <div class="flex justify-between items-center">
              <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">Contract information</p>
              <img class="cursor-pointer" @click="closeContract" src="/closeWhite.svg" alt="" />
            </div>
            <div class="divide pt-[10px]"></div>
            <div class="flex justify-between items-center pt-[18px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Payment id</p>
              <span class="text-[14px] flex gap-[14px] items-center" style="font-family: Geist; font-weight: 500; color: #000000">
                240750083
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16 12.4V15.4C16 19.4 14.4 21 10.4 21H6.6C2.6 21 1 19.4 1 15.4V11.6C1 7.6 2.6 6 6.6 6H9.6M16 12.4H12.8C10.4 12.4 9.6 11.6 9.6 9.2V6M16 12.4L9.6 6M10.6 1H14.6M6 4C6 2.34 7.34 1 9 1H11.62M21 7V13.19C21 14.74 19.74 16 18.19 16M21 7H18C15.75 7 15 6.25 15 4V1L21 7Z"
                    stroke="#335FFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
            <div class="divide pt-[16px]"></div>

            <div class="flex justify-between items-center pt-[16px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Contract create date</p>
              <span class="text-[14px] flex gap-[14px] items-center" style="font-family: Geist; font-weight: 500; color: #000000">12.08.2024 18:25</span>
            </div>
            <div class="divide pt-[16px]"></div>

            <div class="flex justify-between items-center pt-[16px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Contract creator</p>
              <span class="text-[14px] flex gap-[14px] items-center" style="font-family: Geist; font-weight: 500; color: #000000">Xusnor Odilova</span>
            </div>
            <div class="divide pt-[16px]"></div>

            <div class="flex justify-between items-center pt-[16px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Contract Officer</p>
              <span class="text-[14px] flex gap-[14px] items-center" style="font-family: Geist; font-weight: 500; color: #000000">Xusnor Odilova</span>
            </div>
            <div class="divide pt-[16px]"></div>

            <div class="flex justify-between items-center pt-[16px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Mediator</p>
              <span class="text-[14px] flex gap-[14px] items-center" style="font-family: Geist; font-weight: 500; color: #000000">Xusnor Odilova</span>
            </div>
            <div class="divide pt-[16px]"></div>

            <div class="flex justify-between items-center pt-[16px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Explanation of the contract</p>
              <svg @click="toggleInput" class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 1.99976H9C4 1.99976 2 3.99976 2 8.99976V14.9998C2 19.9998 4 21.9998 9 21.9998H15C20 21.9998 22 19.9998 22 14.9998V12.9998M14.91 4.14976C15.58 6.53976 17.45 8.40976 19.85 9.08976M16.04 3.01976L8.16 10.8998C7.86 11.1998 7.56 11.7898 7.5 12.2198L7.07 15.2298C6.91 16.3198 7.68 17.0798 8.77 16.9298L11.78 16.4998C12.2 16.4398 12.79 16.1398 13.1 15.8398L20.98 7.95976C22.34 6.59976 22.98 5.01976 20.98 3.01976C18.98 1.01976 17.4 1.65976 16.04 3.01976Z"
                  stroke="#335FFF"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <div v-if="isEditing" class="mt-[6px] flex flex-col items-end edit-page">
              <textarea v-model="explanation" rows="3" class="w-full rounded-[8px] resize-none outline-none p-[12px]" style="border: 1px solid #335fff"></textarea>
              <button class="py-[8px] w-[166px] rounded-[8px] mt-[16px]" style="color: #ffffff; background: linear-gradient(180deg, #0037ff 0%, #002dd1 100%); border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%)">Save</button>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="popup">
      <div v-if="isCancelOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-[#F4F6F6] p-[6px] rounded-[8px] w-[415px]">
          <div class="bg-[#FFFFFF] p-[12px] rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
            <div class="flex justify-between items-center">
              <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">Cancellation information</p>
              <img class="cursor-pointer" @click="closeCancellation" src="/closeWhite.svg" alt="" />
            </div>
            <div class="divide pt-[12px]"></div>
            <div class="flex justify-between items-center pt-[16px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">Change date</p>
              <span class="text-[14px] flex gap-[14px] items-center" style="font-family: Geist; font-weight: 500; color: #000000">Canceled</span>
            </div>
            <div class="divide pt-[12px]"></div>
            <div class="flex justify-between items-center pt-[16px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">16.08.2024 17:31</p>
              <span class="text-[14px] flex gap-[14px] items-center" style="font-family: Geist; font-weight: 500; color: #000000">Xusnor Odilova</span>
            </div>
            <div class="divide pt-[12px]"></div>
            <div class="pt-[16px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">Comment</p>
              <span class="text-[14px] flex gap-[14px] items-center pt-[6px]" style="font-family: Geist; font-weight: 500; color: #4f7471">O'zgarishlar tufayli</span>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="popup">
      <div v-if="isArchiveOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div class="bg-[#F4F6F6] p-[6px] m-[12px] rounded-[8px] w-[760px]">
          <div class="bg-[#FFFFFF] p-[12px] rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
            <div class="flex justify-between items-center">
              <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">Payment schedule archive</p>
              <img class="cursor-pointer" @click="closeArchive" src="/closeWhite.svg" alt="" />
            </div>
            <div class="divide pt-[12px]"></div>
            <div class="flex mt-[12px] gap-[16px]">
              <div
                v-for="(schedule, index) in paymentSchedules"
                :key="index"
                @click="selectSchedule(index)"
                :class="['rounded-[6px] p-[12px] w-[354px] cursor-pointer flex  gap-[12px]', isSelected === index ? 'bg-[#E5EBFF]' : 'bg-[#FFFFFF]']"
                style="border: 1px solid var(--Line-Container-Line, #edf1f1)"
              >
                <svg v-if="isSelected === index" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="#E6EBFF" />
                  <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" stroke="#335FFF" />
                  <circle cx="8" cy="8" r="3" fill="#335FFF" />
                </svg>

                <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="8" cy="8" r="7.5" stroke="#DCE3E3" />
                </svg>

                <div>
                  <div class="flex items-center justify-between">
                    <p class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #000000">{{ index + 1 }} - {{ schedule.title }}</p>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.3307 9.1665H13.3382M9.99656 9.1665H10.004M6.66242 9.1665H6.6699M7.08366 15.8332H6.66699C3.33366 15.8332 1.66699 14.9998 1.66699 10.8332V6.6665C1.66699 3.33317 3.33366 1.6665 6.66699 1.6665H13.3337C16.667 1.6665 18.3337 3.33317 18.3337 6.6665V10.8332C18.3337 14.1665 16.667 15.8332 13.3337 15.8332H12.917C12.6587 15.8332 12.4087 15.9582 12.2503 16.1665L11.0003 17.8332C10.4503 18.5665 9.55033 18.5665 9.00033 17.8332L7.75033 16.1665C7.61699 15.9832 7.30866 15.8332 7.08366 15.8332Z"
                        stroke="#335FFF"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <div class="flex py-[4px] justify-between w-[302px]">
                    <p class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #72908d">Created date</p>
                    <span class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #000000">{{ schedule.createdDate }}</span>
                  </div>
                  <div class="flex justify-between w-[302px]">
                    <p class="text-[12px] justify-between" style="font-family: Geist; font-weight: 400; color: #72908d">Bekor_qilingan_sana</p>
                    <span class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #000000">{{ schedule.cancelledDate }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-[12px]">
              <table class="archive-table w-[724px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
                <thead class="bg-[#F4F6F6]">
                  <tr class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">
                    <th>№</th>
                    <th>Date of payment</th>
                    <th>Sum of payment</th>
                    <th>Paid amount (soum)</th>
                  </tr>
                </thead>
                <tbody v-for="(table, index) in paymentTable" :key="index" style="border-bottom: 1px solid var(--Line-Container-Line, #edf1f1)">
                  <tr class="text-[14px]" style="font-family: Geist; font-weight: 00; color: #000000">
                    <td>{{ index + 1 }}</td>
                    <td>{{ table.paymentDate }}</td>
                    <td>{{ table.paymentSum }}</td>
                    <td>{{ table.paidAmount.toLocaleString() }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="slide" enter-active-class="transition-transform duration-300 ease-out" leave-active-class="transition-transform duration-300 ease-in" enter-from-class="translate-x-full" enter-to-class="translate-x-0" leave-from-class="translate-x-0" leave-to-class="translate-x-full">
      <div v-if="Payment" class="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
        <div class="bg-[#F4F6F6] p-[6px] w-[559px] m-[8px] rounded-[8px] overflow-y-auto">
          <div class="bg-[#FFFFFF] p-[12px] flex justify-between items-center rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1); box-shadow: 0px 1px 2px 0px #1823220d">
            <p class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">Payment</p>
            <img class="cursor-pointer" @click="closePaymentInfo" src="/closeWhite.svg" alt="" />
          </div>
          <div class="mt-[6px] flex flex-wrap gap-[6px]">
            <div class="bg-[#FFFFFF] rounded-[6px] px-[16px] py-[20px] w-[260px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
              <div class="flex items-center gap-[12px]">
                <img src="/moneyIcon.svg" alt="" />
                <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Remainder initial payment</p>
              </div>
              <p class="pt-[12px] text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">475,300,000UZS</p>
            </div>
            <div class="bg-[#FFFFFF] rounded-[6px] px-[16px] py-[20px] w-[260px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
              <div class="flex items-center gap-[12px]">
                <img src="/cardIcon.svg" alt="" />
                <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Surcharge</p>
              </div>
              <p class="pt-[12px] text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">475,300,000UZS</p>
            </div>
            <div class="bg-[#FFFFFF] rounded-[6px] px-[16px] py-[20px] w-full" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
              <div class="flex items-center gap-[12px]">
                <img src="/dateIcon.svg" alt="" />
                <p class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908d">Monthly arrears</p>
              </div>
              <p class="pt-[12px] text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">475,300,000UZS</p>
            </div>
          </div>

          <div class="bg-[#FFFFFF] px-[12px] pt-[12px] pb-[32px] rounded-[8px] mt-[6px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1)">
            <div class="flex gap-[6px]">
              <button
                @click="selectPayment('standard')"
                :class="[' w-[248px] py-[12px] rounded-[6px] text-[14px] cursor-pointer', selectedPayment === 'standard' ? 'bg-[#E5EBFF]' : 'bg-[#F4F6F6]']"
                :style="{ fontFamily: 'Geist', fontWeight: '600', color: selectedPayment === 'standard' ? '#0037FF' : '#72908D' }"
              >
                Standard payment
              </button>
              <button
                @click="selectPayment('balance')"
                :class="[' w-[248px] py-[12px] rounded-[6px] text-[14px] cursor-pointer', selectedPayment === 'balance' ? 'bg-[#E5EBFF]' : 'bg-[#F4F6F6]']"
                :style="{ fontFamily: 'Geist', fontWeight: '600', color: selectedPayment === 'balance' ? '#0037FF' : '#72908D' }"
              >
                Payment from the balance
              </button>
            </div>
            <div class="divide pt-[12px]"></div>
            <div class="pt-[32px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3f5d5a">Payment number</p>
              <input type="text" class="w-[503px] p-[12px] rounded-[6px] mt-[6px] text-[16px]" v-model="paymentNumber" style="font-family: Geist; font-weight: 500; color: #95acaa; border: 1px solid #dce3e3" />
            </div>

            <div class="pt-[24px] flex gap-[12px]">
              <div>
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3f5d5a">Payment amount</p>
                <input type="text" class="w-[200px] p-[12px] rounded-[6px] mt-[6px]" style="border: 1px solid #dce3e3" />
              </div>
              <div>
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3f5d5a">Currency</p>
                <select class="p-[12px] w-[139px] rounded-[6px] mt-[6px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908d; border: 1px solid #dce3e3">
                  <option>UZS</option>
                  <option>RUB</option>
                  <option>USD</option>
                  <option>EUR</option>
                </select>
              </div>
              <div>
                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3f5d5a">Payment type</p>
                <select class="p-[12px] w-[139px] rounded-[6px] mt-[6px] text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908d; border: 1px solid #dce3e3">
                  <option></option>
                  <option>Cash</option>
                  <option>Card</option>
                  <option>P2P</option>
                </select>
              </div>
            </div>

            <div class="flex gap-[12px] pt-[24px] items-center">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3f5d5a">Date: </p>
              <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" v-model="isToggled" class="sr-only peer" />
                <div class="w-[45px] h-[25px] bg-gray-300 rounded-[12px] peer-checked:bg-green-600 transition-colors duration-300"></div>
                <div class="absolute left-[3px] top-[2px] w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
              </label>
            </div>
            <div class="pt-[24px]">
              <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #3f5d5a">Comment</p>
              <input type="text" class="w-[503px] p-[12px] rounded-[6px] mt-[6px] outline-none" style="border: 1px solid #dce3e3" />
            </div>
            <div class="flex pt-[24px] gap-[12px]">
              <input type="checkbox" class="w-[20px] h-[20px]" />
              <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #4f7471">Payment to penny</p>
            </div>
            <div class="mt-[176px]">
              <button
                class="w-[503px] py-[8px] rounded-[8px] text-[16px]"
                style="font-family: Geist; font-weight: 600; color: #ffffff; background: linear-gradient(180deg, #0037ff 0%, #002dd1 100%); border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%)"
              >
                Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import MainSidebar from "../components/MainSidebar.vue";
import axios from "axios";
import { useI18n } from "vue-i18n";
export default {
  name: "ContractsSinglePage",
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
      table_data: null,
      payment_detail: [],
      payment_schedule: [],
      isImageOpen: false,
      isPaymentOPen: false,
      isContractOpen: false,
      isEditing: false,
      isCancelOpen: false,
      isArchiveOpen: false,
      currentPage: 1,
      itemsPerPage: 10,
      Payment: false,
      amountPaid: true,
      selectedTab: "schedule",
      selectedPayment: "standard",
      paymentNumber: "948",
      isSelected: null,
      contractId: null,
    };
  },
  created() {
    // Retrieve the ID from the URL
    this.contractId = this.$route.params.id;
    console.log(this.contractId);
  },
  mounted() {
    this.fetchTableData();
    this.fetchPaymentDetailData();
    this.fetchPaymentScheaduleData();
    // this.contractId = this.$route.params.id;

  },
  computed: {
    paginatedPaymentSchedule() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.payment_schedule.slice(start, start + this.itemsPerPage);
    },
    totalPages() {
      return Math.ceil(this.payment_schedule.length / this.itemsPerPage);
    },
  },
  methods: {
    changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
    selectTab(tab) {
      this.selectedTab = tab;
    },
    selectPayment(tab) {
      this.selectedPayment = tab;
    },
    selectSchedule(index) {
      this.isSelected = index;
    },
    openPaymentInfo() {
      this.Payment = true;
    },
    closePaymentInfo() {
      this.Payment = false;
    },
    openArchive() {
      this.isArchiveOpen = true;
    },
    closeArchive() {
      this.isArchiveOpen = false;
    },
    openCancellation() {
      this.isCancelOpen = true;
    },
    closeCancellation() {
      this.isCancelOpen = false;
    },
    toggleInput() {
      this.isEditing = !this.isEditing;
    },
    openImage() {
      this.isImageOpen = true;
    },
    closeImage() {
      this.isImageOpen = false;
    },
    openPayment() {
      this.isPaymentOPen = true;
    },
    closePayment() {
      this.isPaymentOPen = false;
    },
    openContract() {
      this.isContractOpen = true;
    },
    closeContract() {
      this.isContractOpen = false;
    },
    handleClickOutside(event) {
      if (!this.$refs.panel.contains(event.target)) {
        this.closeImage();
      }
    },
    beforeMount() {
      document.removeEventListener("click", this.handleClickOutside);
    },
    gotoClientBalance() {
      this.$router.push("/Balance");
    },
    async fetchTableData() {
      try {
        const response = await axios.get(`/contracts/${this.contractId}`);
        this.table_data = response.data;
      } catch (error) {
        this.error = "An error occurred while fetching data";
        console.error(error);
      }
    },
    async fetchPaymentDetailData() {
      try {
        const response = await axios.get(`/contracts/${this.contractId}/payments/`);
        this.payment_detail = response.data.results;
      } catch (error) {
        this.error = "An error occurred while fetching data";
        console.error(error);
      }
    },
    async fetchPaymentScheaduleData() {
      try {
        const response = await axios.get(`/contracts/${this.contractId}/payment-schedules/`);
        this.payment_schedule = response.data.results;
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

.paymenr-table th,
.paymenr-table td {
  padding: 7px 7px;
}

.paymenr-table {
  border: 1px solid var(--Line-Container-Line, #edf1f1);
}

.paymenr-table tbody {
  border: 1px solid var(--Line-Container-Line, #edf1f1);
}

.archive-table th,
.archive-table td {
  padding: 10px 10px;
}
.schedule-table {
  border: 1px solid var(--Line-Container-Line, #edf1f1);
}
.schedule-table td,
.schedule-table th {
  border-bottom: 1px solid var(--Line-Container-Line, #edf1f1);
  padding: 10px 10px;
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
.pgn_btn {
  background-color: #00b252;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.pgn_btn:hover {
  background-color: #008a3b;
}


</style>
