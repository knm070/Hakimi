<template>
  <div class="bg-[#F4F6F6] h-full">
    <div class="flex w-full min-h-screen">
      <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
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
                  <select class="w-[100px] pl-[5px]">
                      <option >English</option>
                      <option >Uzbek</option>
                      <option >Russian</option>
                      <option >Persian</option>
                  </select>
          </div>
        </div>
        <div class="divide pt-[16px]"></div>
        <div class="bg-[#F4F6F6] rounded-[8px] p-[6px] mt-[16px]">
          <div class="flex gap-[6px]">
              <div class="bg-[#FFFFFF] p-[14px] rounded-[12px] flex-grow ">
                <div class="flex gap-[12px]">
                  <!-- Filter button -->
                  <button @click="openFilter" class="flex items-center gap-[12px] py-[14px] px-[22px] rounded-full" style="border: 1px solid #B9C7C6;">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.67602 13.3712L8.66939 13.3751L8.66289 13.3793L7.73415 13.9764C7.17559 14.3163 6.43327 13.9111 6.43327 13.2666V9.73324C6.43327 9.4145 6.34474 9.08228 6.23084 8.79754C6.11587 8.51011 5.95945 8.23224 5.79037 8.02089L5.77633 8.00334L5.76078 7.98712L5.4498 7.66291C5.39406 7.60246 5.39033 7.52112 5.42754 7.46307L5.42758 7.46309L5.43101 7.45759L8.84434 1.97759L8.84476 1.97692C8.87333 1.93089 8.92579 1.8999 8.9866 1.8999H12.3999C12.8571 1.8999 13.2333 2.27604 13.2333 2.73324V4.1999C13.2333 4.37222 13.1765 4.59985 13.0698 4.83467C12.9666 5.06163 12.8358 5.25351 12.7227 5.36986L9.8738 7.88752C9.59887 8.11879 9.39314 8.44044 9.25631 8.76296C9.11756 9.09001 9.03327 9.45634 9.03327 9.7999V12.6666C9.03327 12.7671 8.99592 12.9213 8.91466 13.0776C8.8318 13.2369 8.7367 13.3347 8.67602 13.3712ZM4.10906 5.94857L4.10906 5.94857L4.10797 5.95033C4.05522 6.03565 3.92459 6.05368 3.84826 5.97464C3.84809 5.97447 3.84792 5.97429 3.84776 5.97412L3.22929 5.32239L3.22941 5.32227L3.22016 5.31302C3.10643 5.19929 2.98778 5.02097 2.89786 4.82037C2.806 4.61546 2.7666 4.43775 2.7666 4.33324V2.7999C2.7666 2.25993 3.15859 1.8999 3.59993 1.8999H6.33327C6.45811 1.8999 6.54442 2.04088 6.47423 2.15764L4.10906 5.94857Z" fill="#101717" stroke="#101717"/>
                      </svg>
                      Filter
                  </button>
                  <!-- Search -->
                  <div class="rounded-full  w-[257px] flex justify-between items-center px-[20px]" style="border: 1px solid rgba(185, 199, 198, 1);">
                      <input type="text" placeholder="Search..." class="border-none outline-none bg-[#FFFFFF]">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.6668 14.6668L13.3335 13.3335M14.0002 7.66683C14.0002 11.1646 11.1646 14.0002 7.66683 14.0002C4.16903 14.0002 1.3335 11.1646 1.3335 7.66683C1.3335 4.16903 4.16903 1.3335 7.66683 1.3335C11.1646 1.3335 14.0002 4.16903 14.0002 7.66683Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                  </div> 
                </div>
              </div>
              <div class="flex items-center gap-[12px] bg-[#FFFFFF] p-[14px] rounded-[12px]">
                    <!-- Refresh Icon -->
                    <div class="p-[12px] bg-white rounded-[12px] w-[48px] flex items-center cursor-pointer" style="border: 1px solid #EDF1F1; box-shadow: 0px 1px 2px 0px #1823220D;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.6 11.23C6.77 10.04 7.3 8.97 8.13 8.13C10.13 6.14 13.28 6.03 15.42 7.77V6.82C15.42 6.41 15.76 6.07 16.17 6.07C16.58 6.07 16.92 6.41 16.92 6.82V9.49C16.92 9.9 16.58 10.24 16.17 10.24H13.5C13.09 10.24 12.75 9.9 12.75 9.49C12.75 9.08 13.09 8.74 13.5 8.74H14.25C12.7 7.66 10.56 7.81 9.18 9.19C8.58 9.79 8.2 10.57 8.07 11.44C8.02 11.81 7.7 12.08 7.33 12.08C7.29 12.08 7.26 12.08 7.22 12.07C6.83 12.02 6.54 11.64 6.6 11.23ZM15.87 15.87C14.8 16.94 13.4 17.47 12 17.47C10.78 17.47 9.57 17.04 8.57 16.23V17.17C8.57 17.58 8.23 17.92 7.82 17.92C7.41 17.92 7.07 17.58 7.07 17.17V14.5C7.07 14.09 7.41 13.75 7.82 13.75H10.49C10.9 13.75 11.24 14.09 11.24 14.5C11.24 14.91 10.9 15.25 10.49 15.25H9.74C11.29 16.33 13.43 16.18 14.81 14.8C15.41 14.2 15.79 13.42 15.92 12.55C15.98 12.14 16.35 11.85 16.77 11.91C17.18 11.97 17.46 12.35 17.41 12.76C17.23 13.97 16.7 15.04 15.87 15.87Z" fill="#72908D"/>
                        </svg>
                    </div>
                    <!-- Upload Icon -->
                    <div  class="p-[12px] bg-white rounded-[12px] w-[48px] flex items-center cursor-pointer" style="border: 1px solid #EDF1F1; box-shadow: 0px 1px 2px 0px #1823220D;" >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM12.28 15.78L10.28 17.78C10.21 17.85 10.12 17.91 10.03 17.94C9.94 17.98 9.85 18 9.75 18C9.65 18 9.56 17.98 9.47 17.94C9.39 17.91 9.31 17.85 9.25 17.79C9.24 17.78 9.23 17.78 9.23 17.77L7.23 15.77C6.94 15.48 6.94 15 7.23 14.71C7.52 14.42 8 14.42 8.29 14.71L9 15.44V11.25C9 10.84 9.34 10.5 9.75 10.5C10.16 10.5 10.5 10.84 10.5 11.25V15.44L11.22 14.72C11.51 14.43 11.99 14.43 12.28 14.72C12.57 15.01 12.57 15.49 12.28 15.78Z" fill="#72908D"/>
                            <path d="M17.43 8.81C18.38 8.82 19.7 8.82 20.83 8.82C21.4 8.82 21.7 8.15 21.3 7.75C19.86 6.3 17.28 3.69 15.8 2.21C15.39 1.8 14.68 2.08 14.68 2.65V6.14C14.68 7.6 15.92 8.81 17.43 8.81Z" fill="#72908D"/>
                        </svg>
                    </div>
                    <!-- Settings Icon -->
                    <div @click="openSettings" class="p-[12px] bg-white rounded-[12px] w-[48px] flex items-center cursor-pointer" style="border: 1px solid #EDF1F1; box-shadow: 0px 1px 2px 0px #1823220D;">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1 9.21994C18.29 9.21994 17.55 7.93994 18.45 6.36994C18.97 5.45994 18.66 4.29994 17.75 3.77994L16.02 2.78994C15.23 2.31994 14.21 2.59994 13.74 3.38994L13.63 3.57994C12.73 5.14994 11.25 5.14994 10.34 3.57994L10.23 3.38994C9.78 2.59994 8.76 2.31994 7.97 2.78994L6.24 3.77994C5.33 4.29994 5.02 5.46994 5.54 6.37994C6.45 7.93994 5.71 9.21994 3.9 9.21994C2.86 9.21994 2 10.0699 2 11.1199V12.8799C2 13.9199 2.85 14.7799 3.9 14.7799C5.71 14.7799 6.45 16.0599 5.54 17.6299C5.02 18.5399 5.33 19.6999 6.24 20.2199L7.97 21.2099C8.76 21.6799 9.78 21.3999 10.25 20.6099L10.36 20.4199C11.26 18.8499 12.74 18.8499 13.65 20.4199L13.76 20.6099C14.23 21.3999 15.25 21.6799 16.04 21.2099L17.77 20.2199C18.68 19.6999 18.99 18.5299 18.47 17.6299C17.56 16.0599 18.3 14.7799 20.11 14.7799C21.15 14.7799 22.01 13.9299 22.01 12.8799V11.1199C22 10.0799 21.15 9.21994 20.1 9.21994ZM12 15.2499C10.21 15.2499 8.75 13.7899 8.75 11.9999C8.75 10.2099 10.21 8.74994 12 8.74994C13.79 8.74994 15.25 10.2099 15.25 11.9999C15.25 13.7899 13.79 15.2499 12 15.2499Z" fill="#72908D"/>
                        </svg> 
                    </div>
              </div>

              <div class="bg-[#FFFFFF] flex items-center rounded-[12px] p-[14px]" style="border: 1px solid #EDF1F1;box-shadow: 0px 1px 2px 0px #1823220D;">
                <img @click="openNotification" class="cursor-pointer" src="/debtGreenMessage.svg" alt="">
              </div>
          </div>
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
  import Sidebar from '../components/Sidebar.vue';
  import markedWhite from '/circleMarkedWhite.svg'
  import markedBlue from '/circleMarkedBlue.svg'
import { ref } from 'vue';
  export default {
    name:'SMS',
    components : {Sidebar},
    data() {
      return {
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
