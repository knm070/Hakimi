<template>
    
    <div class="bg-[#F4F6F6] h-full">
        <div class="flex w-full min-h-screen">

        <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
        <div  class=" bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px] " style="border: 1px solid #EDF1F1" >
            <div>
            <div class="flex items-center justify-between pb-[16px]">
                <h1 class="text-[20px]" style="font-family: Geist; font-weight: 600; color: rgba(0, 0, 0, 1);">Main page</h1>
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
            <div class="divide"></div>
            <div class="flex gap-[64px] pt-[14px]" >
                <div>
                    <h2 class="text-[14px]" style="font-family: Geist; font-weight: 600; color: rgba(0, 0, 0, 1);">Residential complexes</h2>
                    <p class="text-[10px]" style="font-family: Geist; font-weight: 400; color: rgba(63, 93, 90, 1);">Select an apartment complex</p>
                </div>
                <div class="rounded-full  w-[257px] flex justify-between items-center px-[20px] " style="border: 1px solid rgba(185, 199, 198, 1);">
                    <input type="text" placeholder="Search by house name..." class="border-none outline-none text-[10px]">
                    <svg class="cursor-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6668 14.6668L13.3335 13.3335M14.0002 7.66683C14.0002 11.1646 11.1646 14.0002 7.66683 14.0002C4.16903 14.0002 1.3335 11.1646 1.3335 7.66683C1.3335 4.16903 4.16903 1.3335 7.66683 1.3335C11.1646 1.3335 14.0002 4.16903 14.0002 7.66683Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <router-link to="/main/Hakimi">
                <div class="bg-[#F4F6F6] rounded-[12px] p-[12px] w-[220px] my-[16px] cursor-pointer">
                    <span>Hakimi Towers</span>
                    <div class="bg-[#FFFFFF] w-full h-[4px] rounded-full mt-[4px]">
                        <div class="bg-[#2CC171] h-full rounded-full" :style="{width: progress  + '%'}"></div>
                    </div>
                    <div class="pt-[12px]">
                        <div class="flex items-center justify-between">
                            <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Apartments</p>
                            <span class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908D;">252</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Free apartments</p>
                            <span class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908D;">130</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <p class="text-[10px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Orders</p>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="">
            <Filter/>
        </div>

        <div class="mt-[16px] w-full">
            <table class="styled-table w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); ">
                <thead class="bg-[#EDF1F1] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471;">
                    <tr>
                        <th>Residential Complex name</th>
                        <th>Blok</th>
                        <th>Apartment number</th>
                        <th>Floor</th>
                        <th>Number of rooms</th>
                        <th>Area</th>
                        <th>home.1_m2_uchun</th>
                        <th>Total price</th>
                        <th>Repaired condition</th>
                        <th>Apartment class</th>
                        <th>Condition</th>  
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Hakimi Towers</td>
                        <td>4</td>
                        <td>P3</td>
                        <td>0</td>
                        <td><span class="rounded-full bg-[#C5F7DC] px-[10px] py-[7px] text-center" style="font-family: Geist; font-weight: 600; color: #000000;">4</span></td>
                        <td>35.4 m²</td>
                        <td>159 300 000 UZS</td>
                        <td>159 300 000 UZS</td>
                        <td>Out of repair</td>
                        <td>  </td>
                        <td ><p class="bg-[#58D18F] rounded-[30px] text-center text-[12px] px-[8px] py-[8px]" style="font-family: Geist; font-weight: 600; color: #000000;">Bo'sh</p></td>
                    </tr>
                </tbody>
            </table>
        </div>

        </div>

         <!-- Message -->
          <div v-show="isMessageOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-end" ></div>
         <transition 
            name="slide"
            enter-active-class="transition-transform duration-300 ease-out"
            leave-active-class="transition-transform duration-300 ease-in"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
         >
                <div v-show="isMessageOpen" ref="settingPanel" class=" fixed inset-0  flex justify-end" @click.self="closeMessage">
                    <div class="bg-[#F4F6F6] p-[6px] max-w-[539px] w-full m-[8px] rounded-[8px] flex flex-col ">
                        <div class="bg-[#FFFFFF] flex justify-between items-center rounded-[6px] p-[12px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1)">
                            <p class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">Notifications</p>
                            <div class="flex gap-[12px]">
                                <svg class="cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_233_2323)">
                                    <rect x="2" y="1" width="32" height="32" rx="6" fill="white"/>
                                    <rect x="2.5" y="1.5" width="31" height="31" rx="5.5" stroke="#EDF1F1"/>
                                    <path d="M13 18.9998L16.3294 22.3332L23 15.6665" stroke="#95ACAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13 14.9998L16.3294 18.3332L23 11.6665" stroke="#95ACAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_233_2323" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.137255 0 0 0 0 0.133333 0 0 0 0.05 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_233_2323"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_233_2323" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                                <svg class="cursor-pointer" @click="closeMessage" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_233_2327)">
                                    <rect x="2" y="1" width="32" height="32" rx="6" fill="white"/>
                                    <rect x="2.5" y="1.5" width="31" height="31" rx="5.5" stroke="#EDF1F1"/>
                                    <mask id="mask0_233_2327" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="8" y="7" width="20" height="20">
                                    <rect x="8" y="7" width="20" height="20" fill="#4F7471"/>
                                    </mask>
                                    <g mask="url(#mask0_233_2327)">
                                    <path d="M13.3332 22.8332L12.1665 21.6665L16.8332 16.9998L12.1665 12.3332L13.3332 11.1665L17.9998 15.8332L22.6665 11.1665L23.8332 12.3332L19.1665 16.9998L23.8332 21.6665L22.6665 22.8332L17.9998 18.1665L13.3332 22.8332Z" fill="#95ACAA"/>
                                    </g>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_233_2327" x="0" y="0" width="36" height="36" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="1"/>
                                    <feGaussianBlur stdDeviation="1"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0941176 0 0 0 0 0.137255 0 0 0 0 0.133333 0 0 0 0.05 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_233_2327"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_233_2327" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] mt-[6px]">
                            <div class="bg-[#F4F6F6] rounded-[8px] p-[4px]">
                                <ul class="flex items-center gap-[4px]">
                                    <li class="py-[8px] px-[32px] rounded-[6px] bg-[#FFFFFF] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">Unreads</li>
                                    <li class="py-[8px] px-[32px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Security</li>
                                    <li class="py-[8px] px-[32px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Contract</li>
                                    <li class="py-[8px] px-[32px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">All</li>
                                </ul>
                            </div>
                        </div>
                        <div class="bg-[#FFFFFF] p-[12px] mt-[6px] rounded-[6px] flex-grow">
                            <div>
                                <div class="flex items-center gap-[16px]">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="6" fill="#F59E0B" fill-opacity="0.1"/>
                                        <path d="M23.5099 9.85L17.5699 6.42C16.5999 5.86 15.3999 5.86 14.4199 6.42L8.48992 9.85C7.51992 10.41 6.91992 11.45 6.91992 12.58V19.42C6.91992 20.54 7.51992 21.58 8.48992 22.15L14.4299 25.58C15.3999 26.14 16.5999 26.14 17.5799 25.58L23.5199 22.15C24.4899 21.59 25.0899 20.55 25.0899 19.42V12.58C25.0799 11.45 24.4799 10.42 23.5099 9.85ZM15.2499 11.75C15.2499 11.34 15.5899 11 15.9999 11C16.4099 11 16.7499 11.34 16.7499 11.75V17C16.7499 17.41 16.4099 17.75 15.9999 17.75C15.5899 17.75 15.2499 17.41 15.2499 17V11.75ZM16.9199 20.63C16.8699 20.75 16.7999 20.86 16.7099 20.96C16.5199 21.15 16.2699 21.25 15.9999 21.25C15.8699 21.25 15.7399 21.22 15.6199 21.17C15.4899 21.12 15.3899 21.05 15.2899 20.96C15.1999 20.86 15.1299 20.75 15.0699 20.63C15.0199 20.51 14.9999 20.38 14.9999 20.25C14.9999 19.99 15.0999 19.73 15.2899 19.54C15.3899 19.45 15.4899 19.38 15.6199 19.33C15.9899 19.17 16.4299 19.26 16.7099 19.54C16.7999 19.64 16.8699 19.74 16.9199 19.87C16.9699 19.99 16.9999 20.12 16.9999 20.25C16.9999 20.38 16.9699 20.51 16.9199 20.63Z" fill="#F59E0B"/>
                                    </svg>
                                    <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">Signed in to your account</p>
                                </div>
                                <div class="flex  items-end justify-end gap-[12px] pl-[48px]">
                                    <p class="w-[353px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471">To your account on the website Uysot.uzat WINDOWS_10, CHROME12 127 devices have been signed in</p>
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #4F7471">15.08.2024 13:15</span>
                                </div>
                            </div>
                            <div class="divide my-[20px] w-[503px]"></div>
                            <div>
                                <div class="flex items-center gap-[16px]">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="6" fill="#F59E0B" fill-opacity="0.1"/>
                                        <path d="M23.5099 9.85L17.5699 6.42C16.5999 5.86 15.3999 5.86 14.4199 6.42L8.48992 9.85C7.51992 10.41 6.91992 11.45 6.91992 12.58V19.42C6.91992 20.54 7.51992 21.58 8.48992 22.15L14.4299 25.58C15.3999 26.14 16.5999 26.14 17.5799 25.58L23.5199 22.15C24.4899 21.59 25.0899 20.55 25.0899 19.42V12.58C25.0799 11.45 24.4799 10.42 23.5099 9.85ZM15.2499 11.75C15.2499 11.34 15.5899 11 15.9999 11C16.4099 11 16.7499 11.34 16.7499 11.75V17C16.7499 17.41 16.4099 17.75 15.9999 17.75C15.5899 17.75 15.2499 17.41 15.2499 17V11.75ZM16.9199 20.63C16.8699 20.75 16.7999 20.86 16.7099 20.96C16.5199 21.15 16.2699 21.25 15.9999 21.25C15.8699 21.25 15.7399 21.22 15.6199 21.17C15.4899 21.12 15.3899 21.05 15.2899 20.96C15.1999 20.86 15.1299 20.75 15.0699 20.63C15.0199 20.51 14.9999 20.38 14.9999 20.25C14.9999 19.99 15.0999 19.73 15.2899 19.54C15.3899 19.45 15.4899 19.38 15.6199 19.33C15.9899 19.17 16.4299 19.26 16.7099 19.54C16.7999 19.64 16.8699 19.74 16.9199 19.87C16.9699 19.99 16.9999 20.12 16.9999 20.25C16.9999 20.38 16.9699 20.51 16.9199 20.63Z" fill="#F59E0B"/>
                                    </svg>
                                    <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">Signed in to your account</p>
                                </div>
                                <div class="flex  items-end justify-end gap-[12px] pl-[48px]">
                                    <p class="w-[353px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471">To your account on the website Uysot.uzat WINDOWS_10, CHROME12 127 devices have been signed in</p>
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #4F7471">15.08.2024 13:15</span>
                                </div>
                            </div>
                            <div class="divide my-[20px] w-[503px]"></div>
                            <div>
                                <div class="flex items-center gap-[16px]">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="6" fill="#F59E0B" fill-opacity="0.1"/>
                                        <path d="M23.5099 9.85L17.5699 6.42C16.5999 5.86 15.3999 5.86 14.4199 6.42L8.48992 9.85C7.51992 10.41 6.91992 11.45 6.91992 12.58V19.42C6.91992 20.54 7.51992 21.58 8.48992 22.15L14.4299 25.58C15.3999 26.14 16.5999 26.14 17.5799 25.58L23.5199 22.15C24.4899 21.59 25.0899 20.55 25.0899 19.42V12.58C25.0799 11.45 24.4799 10.42 23.5099 9.85ZM15.2499 11.75C15.2499 11.34 15.5899 11 15.9999 11C16.4099 11 16.7499 11.34 16.7499 11.75V17C16.7499 17.41 16.4099 17.75 15.9999 17.75C15.5899 17.75 15.2499 17.41 15.2499 17V11.75ZM16.9199 20.63C16.8699 20.75 16.7999 20.86 16.7099 20.96C16.5199 21.15 16.2699 21.25 15.9999 21.25C15.8699 21.25 15.7399 21.22 15.6199 21.17C15.4899 21.12 15.3899 21.05 15.2899 20.96C15.1999 20.86 15.1299 20.75 15.0699 20.63C15.0199 20.51 14.9999 20.38 14.9999 20.25C14.9999 19.99 15.0999 19.73 15.2899 19.54C15.3899 19.45 15.4899 19.38 15.6199 19.33C15.9899 19.17 16.4299 19.26 16.7099 19.54C16.7999 19.64 16.8699 19.74 16.9199 19.87C16.9699 19.99 16.9999 20.12 16.9999 20.25C16.9999 20.38 16.9699 20.51 16.9199 20.63Z" fill="#F59E0B"/>
                                    </svg>
                                    <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">Signed in to your account</p>
                                </div>
                                <div class="flex  items-end justify-end gap-[12px] pl-[48px]">
                                    <p class="w-[353px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471">To your account on the website Uysot.uzat WINDOWS_10, CHROME12 127 devices have been signed in</p>
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #4F7471">15.08.2024 13:15</span>
                                </div>
                            </div>
                            <div class="divide my-[20px] w-[503px]"></div>
                            <div>
                                <div class="flex items-center gap-[16px]">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="32" height="32" rx="6" fill="#F59E0B" fill-opacity="0.1"/>
                                        <path d="M23.5099 9.85L17.5699 6.42C16.5999 5.86 15.3999 5.86 14.4199 6.42L8.48992 9.85C7.51992 10.41 6.91992 11.45 6.91992 12.58V19.42C6.91992 20.54 7.51992 21.58 8.48992 22.15L14.4299 25.58C15.3999 26.14 16.5999 26.14 17.5799 25.58L23.5199 22.15C24.4899 21.59 25.0899 20.55 25.0899 19.42V12.58C25.0799 11.45 24.4799 10.42 23.5099 9.85ZM15.2499 11.75C15.2499 11.34 15.5899 11 15.9999 11C16.4099 11 16.7499 11.34 16.7499 11.75V17C16.7499 17.41 16.4099 17.75 15.9999 17.75C15.5899 17.75 15.2499 17.41 15.2499 17V11.75ZM16.9199 20.63C16.8699 20.75 16.7999 20.86 16.7099 20.96C16.5199 21.15 16.2699 21.25 15.9999 21.25C15.8699 21.25 15.7399 21.22 15.6199 21.17C15.4899 21.12 15.3899 21.05 15.2899 20.96C15.1999 20.86 15.1299 20.75 15.0699 20.63C15.0199 20.51 14.9999 20.38 14.9999 20.25C14.9999 19.99 15.0999 19.73 15.2899 19.54C15.3899 19.45 15.4899 19.38 15.6199 19.33C15.9899 19.17 16.4299 19.26 16.7099 19.54C16.7999 19.64 16.8699 19.74 16.9199 19.87C16.9699 19.99 16.9999 20.12 16.9999 20.25C16.9999 20.38 16.9699 20.51 16.9199 20.63Z" fill="#F59E0B"/>
                                    </svg>
                                    <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000">Signed in to your account</p>
                                </div>
                                <div class="flex  items-end justify-end gap-[12px] pl-[48px]">
                                    <p class="w-[353px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471">To your account on the website Uysot.uzat WINDOWS_10, CHROME12 127 devices have been signed in</p>
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #4F7471">15.08.2024 13:15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
        </transition>

    </div>
    </div>
</template>

<script >
    import MainSidebar from "../components/MainSidebar.vue";
    import Filter from "../components/Filter.vue";
    import axios from "axios";
import { useI18n } from "vue-i18n";
    export default{
        name: 'Main',
        components: {MainSidebar,Filter},
        data(){
            return {
                languages: {
        en: "English",
        uz: "Uzbek",
        ru: "Russian",
        fa: "Persian",
      },
      currentLanguage: "en",
      locale: this.$i18n.locale,
                progress : 48,
                filter: {
                    date :"",
                    status: []
                },

                isFilterOpen : false,
                isSettingsOpen : false ,
                isMessageOpen : false
            };
        },
        methods: {
            changeLanguage(event) {
              this.currentLanguage = event.target.value;
              this.$i18n.locale = this.currentLanguage;
            },
            openMessage() {
                this.isMessageOpen = true
            },

            closeMessage () {
                this.isMessageOpen = false
            }
        }
    }
</script>

<style scoped>
    .divide {
        border-top: 1px dashed #95ACAA;
    }

    .styled-table th, 
    .styled-table td {
        padding: 10px 10px;
        
    }
    

    
        
</style>