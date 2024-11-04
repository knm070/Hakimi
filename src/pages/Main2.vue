<template>
    <div class="bg-[#F4F6F6] h-full">
        <div class="flex w-full min-h-screen">
            <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
        
        <div class="bg-[#FFFFFF] my-[8px] w-full p-[16px] rounded-[16px]">
            <div class="flex items-start justify-between ">
                <div>
                    <h1 class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">Hakimi Towers</h1>
                    <p class="text-[10px]" style="font-family: Geist; font-weight: 400; color: #B9C7C6;">Main page > <span>Hakimi Towers</span></p>
                </div>
    
                    <div class="flex">
                        <svg class="cursor-pointer" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
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

      <div class="bg-[#EDF1F1] mt-[16px] pt-[16px] px-[6px] py-[6px] rounded-[8px]">
        <div class="bg-[#FFFFFF] p-[6px] rounded-[6px]">
          <h2 class="p-[12px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">House information</h2>
        </div>

                <div class="py-[6px] flex gap-[6px]">
                    <div class="p-[12px] rounded-[6px] bg-[#FFFFFF] w-full">
                        <div  class="flex items-center justify-center pb-[12px]">
                            <img src="/assets/img/HakimiPagePlan2.jpg" alt="" width="200px" height="200px">
                        </div>
                        <div class="flex items-center gap-[6px]">
                            <p class="text-[12px] bg-[#00B252] rounded-[6px] py-[8px] px-[12px]" style="font-family: Geist; font-weight: 500; color: #FFFFFF;">3 xonali</p>
                            <div class="bg-[#F4F6F6] p-[6px] rounded-[8px] flex gap-[10px] items-center">
                                <button class="pl-[10px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">
                                    Ta’mirsiz 
                                </button>
                                <button class="bg-[#FFFFFF] py-[4px] px-[12px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000; box-shadow: 0px 1px 2px 0px #0000001F;">
                                    Ta’mirli
                                </button>
                            </div>
                        </div>
                        <div class="divide pt-[12px]"></div>

            <div class="mt-[12px] bg-[#E5EBFF] p-[12px] flex flex-col items-start rounded-[4px]">
              <div class="flex gap-[9px]">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="20" height="20" rx="6" fill="white" />
                  <mask id="mask0_53_1502" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="16" height="16">
                    <rect x="2" y="2" width="16" height="16" fill="#D9D9D9" />
                  </mask>
                  <g mask="url(#mask0_53_1502)">
                    <path
                      d="M4.66667 14C4.47778 14 4.31944 13.9361 4.19167 13.8083C4.06389 13.6806 4 13.5222 4 13.3333C4 13.1444 4.06389 12.9861 4.19167 12.8583C4.31944 12.7306 4.47778 12.6667 4.66667 12.6667H11.3333C11.5222 12.6667 11.6806 12.7306 11.8083 12.8583C11.9361 12.9861 12 13.1444 12 13.3333C12 13.5222 11.9361 13.6806 11.8083 13.8083C11.6806 13.9361 11.5222 14 11.3333 14H4.66667ZM4.66667 10.6667C4.47778 10.6667 4.31944 10.6028 4.19167 10.475C4.06389 10.3472 4 10.1889 4 10C4 9.81111 4.06389 9.65278 4.19167 9.525C4.31944 9.39722 4.47778 9.33333 4.66667 9.33333H15.3333C15.5222 9.33333 15.6806 9.39722 15.8083 9.525C15.9361 9.65278 16 9.81111 16 10C16 10.1889 15.9361 10.3472 15.8083 10.475C15.6806 10.6028 15.5222 10.6667 15.3333 10.6667H4.66667ZM4.66667 7.33333C4.47778 7.33333 4.31944 7.26944 4.19167 7.14167C4.06389 7.01389 4 6.85556 4 6.66667C4 6.47778 4.06389 6.31944 4.19167 6.19167C4.31944 6.06389 4.47778 6 4.66667 6H15.3333C15.5222 6 15.6806 6.06389 15.8083 6.19167C15.9361 6.31944 16 6.47778 16 6.66667C16 6.85556 15.9361 7.01389 15.8083 7.14167C15.6806 7.26944 15.5222 7.33333 15.3333 7.33333H4.66667Z"
                      fill="#1C1B1F"
                    />
                  </g>
                </svg>
                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #000000">{{ data.project }}</p>
                <span class="text-[16px]" style="font-family: Geist; font-weight: 400; color: #2cc171">{{ data.house }}</span>
                <span class="text-[16px]" style="font-family: Geist; font-weight: 400; color: #00000099">{{data.number}}</span>
              </div>
              <div class="pt-[8px] flex flex-col">
                <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #002ccc">{{data.total_price.toLocaleString()}} UZS</span>
                <div class="flex gap-[4px]">
                  <span class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #000000">{{data.area}} m² •</span>
                  <span class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #002ccc">
 {{ condition === 'unrepaired' ? unrepaired_price : repaired_price }} UZS
</span>

                </div>
              </div>
            </div>
          </div>
          <div class="bg-[#FFFFFF] rounded-[6px] p-[12px]">
            <p class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #3f5d5a">To’lov shartlari</p>
            <div class="divide pt-[12px]"></div>
            <div class="flex justify-end w-full h-full pt-[12px] gap-[12px]">
              <div style="border: 1px solid #edf1f1" class="flex flex-col justify-between rounded-[6px] py-[20px] pl-[20px] w-[218px] h-[318px]">
                <div>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="4" fill="#22C55E" fill-opacity="0.1" />
                    <path
                      d="M18 17C17.1667 17 16.4583 16.7083 15.875 16.125C15.2917 15.5417 15 14.8333 15 14C15 13.1667 15.2917 12.4583 15.875 11.875C16.4583 11.2917 17.1667 11 18 11C18.8333 11 19.5417 11.2917 20.125 11.875C20.7083 12.4583 21 13.1667 21 14C21 14.8333 20.7083 15.5417 20.125 16.125C19.5417 16.7083 18.8333 17 18 17ZM11 20C10.45 20 9.97917 19.8042 9.5875 19.4125C9.19583 19.0208 9 18.55 9 18V10C9 9.45 9.19583 8.97917 9.5875 8.5875C9.97917 8.19583 10.45 8 11 8H25C25.55 8 26.0208 8.19583 26.4125 8.5875C26.8042 8.97917 27 9.45 27 10V18C27 18.55 26.8042 19.0208 26.4125 19.4125C26.0208 19.8042 25.55 20 25 20H11ZM13 18H23C23 17.45 23.1958 16.9792 23.5875 16.5875C23.9792 16.1958 24.45 16 25 16V12C24.45 12 23.9792 11.8042 23.5875 11.4125C23.1958 11.0208 23 10.55 23 10H13C13 10.55 12.8042 11.0208 12.4125 11.4125C12.0208 11.8042 11.55 12 11 12V16C11.55 16 12.0208 16.1958 12.4125 16.5875C12.8042 16.9792 13 17.45 13 18ZM24 24H7C6.45 24 5.97917 23.8042 5.5875 23.4125C5.19583 23.0208 5 22.55 5 22V11H7V22H24V24Z"
                      fill="#22C55E"
                    />
                  </svg>
                  <p class="text-[16px] pt-[12px]" style="font-family: Geist; font-weight: 500; color: #3f5d5a">Umumiy summa</p>
                </div>
                <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">{{data.total_price}} UZS</span>
              </div>

              <div style="border: 1px solid #edf1f1" class="rounded-[6px] flex flex-col justify-between py-[20px] pl-[20px] w-[218px] h-[318px]">
                <div>
                  <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.333252" width="32" height="32" rx="4" fill="#0EA5E9" fill-opacity="0.1" />
                    <mask id="mask0_53_1533" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="25" height="24">
                      <rect x="4.33325" y="4" width="24" height="24" fill="#D9D9D9" />
                    </mask>
                    <g mask="url(#mask0_53_1533)">
                      <path
                        d="M8.33325 12H24.3333V10H8.33325V12ZM6.33325 10C6.33325 9.45 6.52909 8.97917 6.92075 8.5875C7.31242 8.19583 7.78325 8 8.33325 8H24.3333C24.8833 8 25.3541 8.19583 25.7458 8.5875C26.1374 8.97917 26.3333 9.45 26.3333 10V16H8.33325V22H12.4333V24H8.33325C7.78325 24 7.31242 23.8042 6.92075 23.4125C6.52909 23.0208 6.33325 22.55 6.33325 22V10ZM19.2833 26L15.0333 21.75L16.4333 20.35L19.2833 23.15L24.9333 17.5L26.3333 18.95L19.2833 26ZM8.33325 10V22V17.5V20.325V10Z"
                        fill="#0EA5E9"
                      />
                    </g>
                  </svg>
                  <p class="text-[16px] pt-[12px]" style="font-family: Geist; font-weight: 500; color: #3f5d5a">Boshlang’ich to’lov (0%)</p>
                </div>
                <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">{{data.initial_payment.toLocaleString()}} % </span>
              </div>

                            
                            <div style="border: 1px solid #EDF1F1 " class="flex flex-col justify-between py-[20px] rounded-[6px] pt-[20px] pl-[20px] w-[218px] h-[318px]">
                                <div>
                                    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.666748" width="32" height="32" rx="4" fill="#F59E0B" fill-opacity="0.1"/>
                                        <mask id="mask0_53_1541" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="25" height="24">
                                        <rect x="4.66675" y="4" width="24" height="24" fill="#D9D9D9"/>
                                        </mask>
                                        <g mask="url(#mask0_53_1541)">
                                        <path d="M8.66675 22V14V14.325V10V22ZM8.66675 12H24.6667V10H8.66675V12ZM16.3417 24H8.66675C8.11675 24 7.64591 23.8042 7.25425 23.4125C6.86258 23.0208 6.66675 22.55 6.66675 22V10C6.66675 9.45 6.86258 8.97917 7.25425 8.5875C7.64591 8.19583 8.11675 8 8.66675 8H24.6667C25.2167 8 25.6876 8.19583 26.0792 8.5875C26.4709 8.97917 26.6667 9.45 26.6667 10V15.25C26.0667 14.8333 25.4167 14.5208 24.7167 14.3125C24.0167 14.1042 23.3001 14 22.5667 14C21.6667 14 20.8001 14.175 19.9667 14.525C19.1334 14.875 18.4001 15.3667 17.7667 16H8.66675V22H15.7417C15.7917 22.35 15.8667 22.6917 15.9667 23.025C16.0667 23.3583 16.1917 23.6833 16.3417 24ZM24.3417 23.375L25.0417 22.675L23.1667 20.8V18H22.1667V21.2L24.3417 23.375ZM22.6917 26C21.2917 26 20.1042 25.5167 19.1292 24.55C18.1542 23.5833 17.6667 22.4 17.6667 21C17.6667 19.6 18.1542 18.4167 19.1292 17.45C20.1042 16.4833 21.2917 16 22.6917 16C24.0751 16 25.2501 16.4875 26.2167 17.4625C27.1834 18.4375 27.6667 19.6167 27.6667 21C27.6667 22.3833 27.1834 23.5625 26.2167 24.5375C25.2501 25.5125 24.0751 26 22.6917 26Z" fill="#F59E0B"/>
                                        </g>
                                    </svg>
                                    <p class="text-[16px] pt-[12px]" style="font-family: Geist; font-weight: 500; color: #3F5D5A;">Umumiy summa</p>
                                </div>
                                <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">61 580 025 UZS</span>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="bg-[#FFFFFF] rounded-[6px] p-[12px]">
                        <h2 class="">Ixtiyoriy boshlang’ich to’lov</h2>
                        <div class="divide pt-[12px]"></div>

          <div class="flex mt-[12px] gap-[12px]">
            <div class="bg-[#F4F6F6] rounded-[6px] px-[20px] py-[28px] max-w-[305px]">
              <p>
                <span style="color: #ff004d">*</span>
                Boshlang’ich to’lov
              </p>
              <input :value="`${data.initial_payment_sum} UZS`"  type="text" class="border-none outline-none rounded-[8px] p-[13px] my-[16px] w-[265px]" style="border: 1px solid var(--Line-Field-Line, #dce3e3)" />
              <p>
                <span style="color: #ff004d">*</span>
                Muddati (oy)
              </p>
              <input :value="`${data.installment_payment} oy`"  type="text" class="border-none outline-none rounded-[8px] p-[13px] my-[16px] w-[265px]" style="border: 1px solid var(--Line-Field-Line, #dce3e3)" />
              <div>
                <button class="text-white py-[8px] rounded-[8px] max-w-[265px] w-full" style="background: linear-gradient(180deg, #0037ff 0%, #002dd1 100%)">Hisoblash</button>
              </div>
            </div>

                            <div class="w-full">
                                <table class="main-table rounded-[6px]" style="border: 1px solid #EDF1F1;" >
                                    <thead>
                                        <tr>
                                            <th>Boshlang’ich to’lov</th>
                                            <th>Chegirma summasi</th>
                                            <th>Sotuv summasi</th>
                                            <th>Muddat</th>
                                            <th>Oylik to’lov</th>

                                        </tr>
                                    </thead>

                <tbody>
                  <tr>
                    <td>{{data.initial_payment_sum}} ({{ data.initial_payment }})</td>
                    <td>0 (0%)</td>
                    <td>{{ data.total_price.toLocaleString() }}</td>
                    <td>{{data.installment_payment.toLocaleString()}}</td>
                    <td>{{data.monthly_payment.toLocaleString()}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="p-[12px] my-[6px] bg-[#FFFFFF] rounded-[6px] flex justify-between">
          <div class="flex gap-[12px]">
            <button class="flex items-center px-[12px] py-[10px] gap-[8px] rounded-[6px] bg-[#FFFFFF]" style="border: 1px solid #edf1f1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_53_1602" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_53_1602)">
                  <path
                    d="M8 21C7.45 21 6.97917 20.8042 6.5875 20.4125C6.19583 20.0208 6 19.55 6 19V17H4C3.45 17 2.97917 16.8042 2.5875 16.4125C2.19583 16.0208 2 15.55 2 15V11C2 10.15 2.29167 9.4375 2.875 8.8625C3.45833 8.2875 4.16667 8 5 8H19C19.85 8 20.5625 8.2875 21.1375 8.8625C21.7125 9.4375 22 10.15 22 11V15C22 15.55 21.8042 16.0208 21.4125 16.4125C21.0208 16.8042 20.55 17 20 17H18V19C18 19.55 17.8042 20.0208 17.4125 20.4125C17.0208 20.8042 16.55 21 16 21H8ZM4 15H6C6 14.45 6.19583 13.9792 6.5875 13.5875C6.97917 13.1958 7.45 13 8 13H16C16.55 13 17.0208 13.1958 17.4125 13.5875C17.8042 13.9792 18 14.45 18 15H20V11C20 10.7167 19.9042 10.4792 19.7125 10.2875C19.5208 10.0958 19.2833 10 19 10H5C4.71667 10 4.47917 10.0958 4.2875 10.2875C4.09583 10.4792 4 10.7167 4 11V15ZM16 8V5H8V8H6V5C6 4.45 6.19583 3.97917 6.5875 3.5875C6.97917 3.19583 7.45 3 8 3H16C16.55 3 17.0208 3.19583 17.4125 3.5875C17.8042 3.97917 18 4.45 18 5V8H16ZM18 12.5C18.2833 12.5 18.5208 12.4042 18.7125 12.2125C18.9042 12.0208 19 11.7833 19 11.5C19 11.2167 18.9042 10.9792 18.7125 10.7875C18.5208 10.5958 18.2833 10.5 18 10.5C17.7167 10.5 17.4792 10.5958 17.2875 10.7875C17.0958 10.9792 17 11.2167 17 11.5C17 11.7833 17.0958 12.0208 17.2875 12.2125C17.4792 12.4042 17.7167 12.5 18 12.5ZM16 19V15H8V19H16Z"
                    fill="#4F7471"
                  />
                </g>
              </svg>
              Chop etish (reja)
            </button>

            <button class="flex items-center px-[12px] py-[10px] gap-[8px] rounded-[6px] bg-[#FFFFFF]" style="border: 1px solid #edf1f1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_53_1602" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_53_1602)">
                  <path
                    d="M8 21C7.45 21 6.97917 20.8042 6.5875 20.4125C6.19583 20.0208 6 19.55 6 19V17H4C3.45 17 2.97917 16.8042 2.5875 16.4125C2.19583 16.0208 2 15.55 2 15V11C2 10.15 2.29167 9.4375 2.875 8.8625C3.45833 8.2875 4.16667 8 5 8H19C19.85 8 20.5625 8.2875 21.1375 8.8625C21.7125 9.4375 22 10.15 22 11V15C22 15.55 21.8042 16.0208 21.4125 16.4125C21.0208 16.8042 20.55 17 20 17H18V19C18 19.55 17.8042 20.0208 17.4125 20.4125C17.0208 20.8042 16.55 21 16 21H8ZM4 15H6C6 14.45 6.19583 13.9792 6.5875 13.5875C6.97917 13.1958 7.45 13 8 13H16C16.55 13 17.0208 13.1958 17.4125 13.5875C17.8042 13.9792 18 14.45 18 15H20V11C20 10.7167 19.9042 10.4792 19.7125 10.2875C19.5208 10.0958 19.2833 10 19 10H5C4.71667 10 4.47917 10.0958 4.2875 10.2875C4.09583 10.4792 4 10.7167 4 11V15ZM16 8V5H8V8H6V5C6 4.45 6.19583 3.97917 6.5875 3.5875C6.97917 3.19583 7.45 3 8 3H16C16.55 3 17.0208 3.19583 17.4125 3.5875C17.8042 3.97917 18 4.45 18 5V8H16ZM18 12.5C18.2833 12.5 18.5208 12.4042 18.7125 12.2125C18.9042 12.0208 19 11.7833 19 11.5C19 11.2167 18.9042 10.9792 18.7125 10.7875C18.5208 10.5958 18.2833 10.5 18 10.5C17.7167 10.5 17.4792 10.5958 17.2875 10.7875C17.0958 10.9792 17 11.2167 17 11.5C17 11.7833 17.0958 12.0208 17.2875 12.2125C17.4792 12.4042 17.7167 12.5 18 12.5ZM16 19V15H8V19H16Z"
                    fill="#4F7471"
                  />
                </g>
              </svg>
              Chop etish
              <svg width="51" height="24" viewBox="0 0 51 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="51" height="24" rx="12" fill="#00B252" />
                <path
                  d="M10.96 7.48H14.152C15.2 7.48 15.992 7.668 16.528 8.044C17.064 8.42 17.332 9 17.332 9.784C17.332 10.144 17.256 10.46 17.104 10.732C16.96 10.996 16.744 11.204 16.456 11.356C16.168 11.508 15.828 11.592 15.436 11.608L15.424 11.584C16.144 11.608 16.7 11.804 17.092 12.172C17.492 12.54 17.692 13.036 17.692 13.66C17.692 14.428 17.424 15.012 16.888 15.412C16.352 15.804 15.584 16 14.584 16H10.96V7.48ZM14.512 14.68C15.008 14.68 15.396 14.58 15.676 14.38C15.956 14.172 16.096 13.876 16.096 13.492C16.096 13.1 15.956 12.8 15.676 12.592C15.404 12.384 15.016 12.28 14.512 12.28H12.52V14.68H14.512ZM14.104 11.056C14.624 11.056 15.024 10.96 15.304 10.768C15.592 10.568 15.736 10.288 15.736 9.928C15.736 9.552 15.596 9.272 15.316 9.088C15.044 8.896 14.64 8.8 14.104 8.8H12.52V11.056H14.104ZM19.0314 7.48H24.7674V8.836H20.5914V11.056H24.6234V12.4H20.5914V14.644H24.8634V16H19.0314V7.48ZM28.2382 8.836H25.6582V7.48H32.3902V8.836H29.7982V16H28.2382V8.836ZM34.7849 7.48H36.6929L39.7649 16H38.1329L37.4249 13.984H34.0529L33.3449 16H31.7129L34.7849 7.48ZM36.9689 12.652L35.7449 9.052L34.5089 12.652H36.9689Z"
                  fill="white"
                />
              </svg>
            </button>

            <button class="flex items-center px-[12px] py-[10px] gap-[8px] rounded-[6px] bg-[#FFFFFF]" style="border: 1px solid #edf1f1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_53_1602" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                  <rect width="24" height="24" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_53_1602)">
                  <path
                    d="M8 21C7.45 21 6.97917 20.8042 6.5875 20.4125C6.19583 20.0208 6 19.55 6 19V17H4C3.45 17 2.97917 16.8042 2.5875 16.4125C2.19583 16.0208 2 15.55 2 15V11C2 10.15 2.29167 9.4375 2.875 8.8625C3.45833 8.2875 4.16667 8 5 8H19C19.85 8 20.5625 8.2875 21.1375 8.8625C21.7125 9.4375 22 10.15 22 11V15C22 15.55 21.8042 16.0208 21.4125 16.4125C21.0208 16.8042 20.55 17 20 17H18V19C18 19.55 17.8042 20.0208 17.4125 20.4125C17.0208 20.8042 16.55 21 16 21H8ZM4 15H6C6 14.45 6.19583 13.9792 6.5875 13.5875C6.97917 13.1958 7.45 13 8 13H16C16.55 13 17.0208 13.1958 17.4125 13.5875C17.8042 13.9792 18 14.45 18 15H20V11C20 10.7167 19.9042 10.4792 19.7125 10.2875C19.5208 10.0958 19.2833 10 19 10H5C4.71667 10 4.47917 10.0958 4.2875 10.2875C4.09583 10.4792 4 10.7167 4 11V15ZM16 8V5H8V8H6V5C6 4.45 6.19583 3.97917 6.5875 3.5875C6.97917 3.19583 7.45 3 8 3H16C16.55 3 17.0208 3.19583 17.4125 3.5875C17.8042 3.97917 18 4.45 18 5V8H16ZM18 12.5C18.2833 12.5 18.5208 12.4042 18.7125 12.2125C18.9042 12.0208 19 11.7833 19 11.5C19 11.2167 18.9042 10.9792 18.7125 10.7875C18.5208 10.5958 18.2833 10.5 18 10.5C17.7167 10.5 17.4792 10.5958 17.2875 10.7875C17.0958 10.9792 17 11.2167 17 11.5C17 11.7833 17.0958 12.0208 17.2875 12.2125C17.4792 12.4042 17.7167 12.5 18 12.5ZM16 19V15H8V19H16Z"
                    fill="#4F7471"
                  />
                </g>
              </svg>
              Chop etish
              <svg width="51" height="24" viewBox="0 0 51 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="51" height="24" rx="12" fill="#00B252" />
                <path
                  d="M10.96 7.48H14.152C15.2 7.48 15.992 7.668 16.528 8.044C17.064 8.42 17.332 9 17.332 9.784C17.332 10.144 17.256 10.46 17.104 10.732C16.96 10.996 16.744 11.204 16.456 11.356C16.168 11.508 15.828 11.592 15.436 11.608L15.424 11.584C16.144 11.608 16.7 11.804 17.092 12.172C17.492 12.54 17.692 13.036 17.692 13.66C17.692 14.428 17.424 15.012 16.888 15.412C16.352 15.804 15.584 16 14.584 16H10.96V7.48ZM14.512 14.68C15.008 14.68 15.396 14.58 15.676 14.38C15.956 14.172 16.096 13.876 16.096 13.492C16.096 13.1 15.956 12.8 15.676 12.592C15.404 12.384 15.016 12.28 14.512 12.28H12.52V14.68H14.512ZM14.104 11.056C14.624 11.056 15.024 10.96 15.304 10.768C15.592 10.568 15.736 10.288 15.736 9.928C15.736 9.552 15.596 9.272 15.316 9.088C15.044 8.896 14.64 8.8 14.104 8.8H12.52V11.056H14.104ZM19.0314 7.48H24.7674V8.836H20.5914V11.056H24.6234V12.4H20.5914V14.644H24.8634V16H19.0314V7.48ZM28.2382 8.836H25.6582V7.48H32.3902V8.836H29.7982V16H28.2382V8.836ZM34.7849 7.48H36.6929L39.7649 16H38.1329L37.4249 13.984H34.0529L33.3449 16H31.7129L34.7849 7.48ZM36.9689 12.652L35.7449 9.052L34.5089 12.652H36.9689Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          <div class="flex gap-[20px]">
            <button class="bg-[#F4F6F6] py-[10px] px-[12px] rounded-[6px]">Buyutma berish</button>
            <button class="text-white py-[8px] px-[12px] rounded-[8px]" style="background: linear-gradient(180deg, #0037ff 0%, #002dd1 100%)">Shartnoma yaratish</button>
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
  name: "Main2",
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
      id:null,
      data:[],
      locale: this.$i18n.locale,
      searchQueryPay: "2 219 100",
      searchQueryMonth: "24",
    };
  },
  created() {
    // Retrieve the ID from the URL
    this.id = this.$route.params.id;
    this.fetchData();
  },
  mounted() {
  },
  methods: {
    changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
    async fetchData() {
      try {
        const response = await axios.get(`/projects/apartments/${this.id}`);
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

    .main-table th,
    .main-table td{
        padding: 16px 16px ;
    }

.main-table thead {
  background: #edf1f1;
}

    .main-table {
        width: 100%;
    }

    /*
    .main-table {
        border-radius: 6px;
        overflow: hidden; This ensures the radius cuts off the content 
        border: 1px solid #EDF1F1; Optional border for table }*/
</style>
