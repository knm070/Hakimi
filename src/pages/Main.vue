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
                <div class="bg-[#F4F6F6] rounded-[12px] p-[12px] w-[220px] m-[16px] cursor-pointer">
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
            <div class=" flex gap-[16px]">
                <div class="bg-[#F4F6F6] p-[16px] rounded-[12px] flex-grow  ">
                    <div class="flex gap-[12px] ">
                        <!-- Filter button -->
                        <button @click="openFilter" class="flex items-center gap-[12px] py-[14px] px-[22px] rounded-full" style="border: 1px solid #B9C7C6;">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.67602 13.3712L8.66939 13.3751L8.66289 13.3793L7.73415 13.9764C7.17559 14.3163 6.43327 13.9111 6.43327 13.2666V9.73324C6.43327 9.4145 6.34474 9.08228 6.23084 8.79754C6.11587 8.51011 5.95945 8.23224 5.79037 8.02089L5.77633 8.00334L5.76078 7.98712L5.4498 7.66291C5.39406 7.60246 5.39033 7.52112 5.42754 7.46307L5.42758 7.46309L5.43101 7.45759L8.84434 1.97759L8.84476 1.97692C8.87333 1.93089 8.92579 1.8999 8.9866 1.8999H12.3999C12.8571 1.8999 13.2333 2.27604 13.2333 2.73324V4.1999C13.2333 4.37222 13.1765 4.59985 13.0698 4.83467C12.9666 5.06163 12.8358 5.25351 12.7227 5.36986L9.8738 7.88752C9.59887 8.11879 9.39314 8.44044 9.25631 8.76296C9.11756 9.09001 9.03327 9.45634 9.03327 9.7999V12.6666C9.03327 12.7671 8.99592 12.9213 8.91466 13.0776C8.8318 13.2369 8.7367 13.3347 8.67602 13.3712ZM4.10906 5.94857L4.10906 5.94857L4.10797 5.95033C4.05522 6.03565 3.92459 6.05368 3.84826 5.97464C3.84809 5.97447 3.84792 5.97429 3.84776 5.97412L3.22929 5.32239L3.22941 5.32227L3.22016 5.31302C3.10643 5.19929 2.98778 5.02097 2.89786 4.82037C2.806 4.61546 2.7666 4.43775 2.7666 4.33324V2.7999C2.7666 2.25993 3.15859 1.8999 3.59993 1.8999H6.33327C6.45811 1.8999 6.54442 2.04088 6.47423 2.15764L4.10906 5.94857Z" fill="#101717" stroke="#101717"/>
                            </svg>
                            Filter
                        </button>
                        <!-- Search -->
                        <div class="rounded-full  w-[257px] flex justify-between items-center px-[20px]" style="border: 1px solid rgba(185, 199, 198, 1);">
                            <input type="text" placeholder="Search..." class="border-none outline-none bg-[#F4F6F6]">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.6668 14.6668L13.3335 13.3335M14.0002 7.66683C14.0002 11.1646 11.1646 14.0002 7.66683 14.0002C4.16903 14.0002 1.3335 11.1646 1.3335 7.66683C1.3335 4.16903 4.16903 1.3335 7.66683 1.3335C11.1646 1.3335 14.0002 4.16903 14.0002 7.66683Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div> 
                    </div>

                    <p class="text-[10px] pt-[16px]" style="font-family: Geist; font-weight: 400; color: #72908D;">Simplify your search by filtering! </p>
                </div>
                <div class="flex items-center gap-[12px] bg-[#F4F6F6] px-[48px] py-[28px] rounded-[12px]">
                    <!-- Refresh Icon -->
                    <div class="p-[12px] bg-white rounded-[12px] w-[48px] flex items-center cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM6.6 11.23C6.77 10.04 7.3 8.97 8.13 8.13C10.13 6.14 13.28 6.03 15.42 7.77V6.82C15.42 6.41 15.76 6.07 16.17 6.07C16.58 6.07 16.92 6.41 16.92 6.82V9.49C16.92 9.9 16.58 10.24 16.17 10.24H13.5C13.09 10.24 12.75 9.9 12.75 9.49C12.75 9.08 13.09 8.74 13.5 8.74H14.25C12.7 7.66 10.56 7.81 9.18 9.19C8.58 9.79 8.2 10.57 8.07 11.44C8.02 11.81 7.7 12.08 7.33 12.08C7.29 12.08 7.26 12.08 7.22 12.07C6.83 12.02 6.54 11.64 6.6 11.23ZM15.87 15.87C14.8 16.94 13.4 17.47 12 17.47C10.78 17.47 9.57 17.04 8.57 16.23V17.17C8.57 17.58 8.23 17.92 7.82 17.92C7.41 17.92 7.07 17.58 7.07 17.17V14.5C7.07 14.09 7.41 13.75 7.82 13.75H10.49C10.9 13.75 11.24 14.09 11.24 14.5C11.24 14.91 10.9 15.25 10.49 15.25H9.74C11.29 16.33 13.43 16.18 14.81 14.8C15.41 14.2 15.79 13.42 15.92 12.55C15.98 12.14 16.35 11.85 16.77 11.91C17.18 11.97 17.46 12.35 17.41 12.76C17.23 13.97 16.7 15.04 15.87 15.87Z" fill="#72908D"/>
                        </svg>
                    </div>
                    <!-- Upload Icon -->
                    <div  class="p-[12px] bg-white rounded-[12px] w-[48px] flex items-center cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.5 10.19H17.61C15.24 10.19 13.31 8.26 13.31 5.89V3C13.31 2.45 12.86 2 12.31 2H8.07C4.99 2 2.5 4 2.5 7.57V16.43C2.5 20 4.99 22 8.07 22H15.93C19.01 22 21.5 20 21.5 16.43V11.19C21.5 10.64 21.05 10.19 20.5 10.19ZM12.28 15.78L10.28 17.78C10.21 17.85 10.12 17.91 10.03 17.94C9.94 17.98 9.85 18 9.75 18C9.65 18 9.56 17.98 9.47 17.94C9.39 17.91 9.31 17.85 9.25 17.79C9.24 17.78 9.23 17.78 9.23 17.77L7.23 15.77C6.94 15.48 6.94 15 7.23 14.71C7.52 14.42 8 14.42 8.29 14.71L9 15.44V11.25C9 10.84 9.34 10.5 9.75 10.5C10.16 10.5 10.5 10.84 10.5 11.25V15.44L11.22 14.72C11.51 14.43 11.99 14.43 12.28 14.72C12.57 15.01 12.57 15.49 12.28 15.78Z" fill="#72908D"/>
                            <path d="M17.43 8.81C18.38 8.82 19.7 8.82 20.83 8.82C21.4 8.82 21.7 8.15 21.3 7.75C19.86 6.3 17.28 3.69 15.8 2.21C15.39 1.8 14.68 2.08 14.68 2.65V6.14C14.68 7.6 15.92 8.81 17.43 8.81Z" fill="#72908D"/>
                        </svg>
                    </div>
                    <!-- Settings Icon -->
                    <div @click="openSettings" class="p-[12px] bg-white rounded-[12px] w-[48px] flex items-center cursor-pointer">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1 9.21994C18.29 9.21994 17.55 7.93994 18.45 6.36994C18.97 5.45994 18.66 4.29994 17.75 3.77994L16.02 2.78994C15.23 2.31994 14.21 2.59994 13.74 3.38994L13.63 3.57994C12.73 5.14994 11.25 5.14994 10.34 3.57994L10.23 3.38994C9.78 2.59994 8.76 2.31994 7.97 2.78994L6.24 3.77994C5.33 4.29994 5.02 5.46994 5.54 6.37994C6.45 7.93994 5.71 9.21994 3.9 9.21994C2.86 9.21994 2 10.0699 2 11.1199V12.8799C2 13.9199 2.85 14.7799 3.9 14.7799C5.71 14.7799 6.45 16.0599 5.54 17.6299C5.02 18.5399 5.33 19.6999 6.24 20.2199L7.97 21.2099C8.76 21.6799 9.78 21.3999 10.25 20.6099L10.36 20.4199C11.26 18.8499 12.74 18.8499 13.65 20.4199L13.76 20.6099C14.23 21.3999 15.25 21.6799 16.04 21.2099L17.77 20.2199C18.68 19.6999 18.99 18.5299 18.47 17.6299C17.56 16.0599 18.3 14.7799 20.11 14.7799C21.15 14.7799 22.01 13.9299 22.01 12.8799V11.1199C22 10.0799 21.15 9.21994 20.1 9.21994ZM12 15.2499C10.21 15.2499 8.75 13.7899 8.75 11.9999C8.75 10.2099 10.21 8.74994 12 8.74994C13.79 8.74994 15.25 10.2099 15.25 11.9999C15.25 13.7899 13.79 15.2499 12 15.2499Z" fill="#72908D"/>
                        </svg> 
                    </div>
                </div>
            </div>
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

                <!-- Filter -->

            <transition
                name="slide"
                enter-active-class="transition-transform duration-300 ease-in"
                leave-active-class="transition-transform duration-300 ease-in"
                enter-from-class="-translate-x-full"
                enter-to-class="translate-x-0"
                leave-from-class="translate-x-0"
                leave-to-class="-translate-x-full"
                
            >
            <div v-show="isFilterOpen" class="fixed inset-0 bg-black bg-opacity-50 " @click.self="closeFilter">
                <div ref="filerPanel" class="bg-[#F4F6F6]  max-w-[312px] w-full rounded-[8px] p-[8px] m-[8px] relative">
                    <div class="flex justify-between bg-[#FFFFFF] p-[12px] m-[6px] rounded-[6px]">
                        <p class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">Filter</p>
                        <span class="text-[14px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #FF004D;">Clear</span>
                    </div>
        
                    <div class=" m-[6px] bg-[#FFFFFF] rounded-[6px] p-[12px] h-[630px]">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-[8px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.33333 1.3335V3.3335M10.6667 1.3335V3.3335M2.33333 6.06016H13.6667M7.99699 9.1335H8.00298M5.52954 9.1335H5.53553M5.52954 11.1335H5.53553M14 5.66683V11.3335C14 13.3335 13 14.6668 10.6667 14.6668H5.33333C3 14.6668 2 13.3335 2 11.3335V5.66683C2 3.66683 3 2.3335 5.33333 2.3335H10.6667C13 2.3335 14 3.66683 14 5.66683Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p class="text-[13px]" style="font-family: Geist; font-weight: 600; color: #000000;">Date</p>
                            </div>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.95998 7.54492L6.69998 4.28492C6.31498 3.89992 5.68498 3.89992 5.29998 4.28492L2.03998 7.54492" stroke="#95ACAA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
        
                        <div class="flex gap-[12px] pt-[8px]">
                            <div class="flex items-center pl-[12px] pr-[8px] py-[6px] rounded-[6px] gap-[14px]" style="border: 1px solid #DCE3E3">
                                <input type="text" placeholder="dd.mm.yyyy" class="border-none outline-none w-full text-[12px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.33333 1.3335V3.3335M10.6667 1.3335V3.3335M2.33333 6.06016H13.6667M7.99699 9.1335H8.00298M5.52954 9.1335H5.53553M5.52954 11.1335H5.53553M14 5.66683V11.3335C14 13.3335 13 14.6668 10.6667 14.6668H5.33333C3 14.6668 2 13.3335 2 11.3335V5.66683C2 3.66683 3 2.3335 5.33333 2.3335H10.6667C13 2.3335 14 3.66683 14 5.66683Z" stroke="#95ACAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="flex items-center pl-[12px] pr-[8px] gap-[14px] py-[6px] rounded-[6px]  " style="border: 1px solid #DCE3E3">
                                <input type="text" placeholder="dd.mm.yyyy" class="border-none outline-none w-full text-[12px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.33333 1.3335V3.3335M10.6667 1.3335V3.3335M2.33333 6.06016H13.6667M7.99699 9.1335H8.00298M5.52954 9.1335H5.53553M5.52954 11.1335H5.53553M14 5.66683V11.3335C14 13.3335 13 14.6668 10.6667 14.6668H5.33333C3 14.6668 2 13.3335 2 11.3335V5.66683C2 3.66683 3 2.3335 5.33333 2.3335H10.6667C13 2.3335 14 3.66683 14 5.66683Z" stroke="#95ACAA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
        
                        </div>
        
                        <div class="py-[8px]">
                            <div class="flex justify-between items-center">
                                <div class="flex items-center gap-[10px]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5.44004 4.4335H10.5534C10.98 4.4335 11.3267 4.78016 11.3267 5.20683V6.06016C11.3267 6.3735 11.1334 6.76016 10.94 6.9535L9.27337 8.42683C9.04004 8.62016 8.88671 9.00683 8.88671 9.32016V10.9868C8.88671 11.2202 8.73337 11.5268 8.54004 11.6468L8.00004 11.9868C7.49337 12.3002 6.80004 11.9468 6.80004 11.3268V9.2735C6.80004 9.00016 6.64671 8.6535 6.48671 8.46016L5.01337 6.90683C4.82004 6.72016 4.66671 6.36683 4.66671 6.1335V5.24683C4.66671 4.78016 5.01337 4.4335 5.44004 4.4335Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6.00004 14.6668H10C13.3334 14.6668 14.6667 13.3335 14.6667 10.0002V6.00016C14.6667 2.66683 13.3334 1.3335 10 1.3335H6.00004C2.66671 1.3335 1.33337 2.66683 1.33337 6.00016V10.0002C1.33337 13.3335 2.66671 14.6668 6.00004 14.6668Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #000000;">Status</span>
                                </div>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.95998 7.54492L6.69998 4.28492C6.31498 3.89992 5.68498 3.89992 5.29998 4.28492L2.03998 7.54492" stroke="#95ACAA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
        
                            <div class="pt-[8px] flex flex-col gap-[12px]">
                                <div class="flex items-center gap-[6px]">
                                    <input type="checkbox" class="w-[16px] h-[16px] rounded-[4px]" style="border: 1px solid #D0D5DD">
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #000000;">Was sent</span>
                                </div>
                                <div class="flex items-center gap-[6px]">
                                    <input type="checkbox" class="w-[16px] h-[16px] " style="border: 1px solid #D0D5DD">
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #000000;">Failed to send</span>
                                </div>
                                <div class="flex items-center gap-[6px]">
                                    <input type="checkbox" class="w-[16px] h-[16px] " style="border: 1px solid #D0D5DD">
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #000000;">Will be sent</span>
                                </div>
                                <div class="flex items-center gap-[6px]">
                                    <input type="checkbox" class="w-[16px] h-[16px] " style="border: 1px solid #D0D5DD">
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #000000;">Unable to send</span>
                                </div>
                                <div class="flex items-center gap-[6px]">
                                    <input type="checkbox" class="w-[16px] h-[16px] " style="border: 1px solid #D0D5DD">
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 400; color: #000000;">Is being sent</span>
                                </div>
                            </div>
                        </div>
                    </div>
        
                </div>
            </div>
        </transition>


        <!-- Table Settings -->
         <transition 
            name="slide"
            enter-active-class="transition-transform duration-300 ease-out"
            leave-active-class="transition-transform duration-300 ease-in"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
         >
            <div v-show="isSettingsOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-end" @click.self="closeSettings">
                    <div  ref="settingPanel" class=" bg-[#F4F6F6] max-w-[312px] w-full rounded-[8px] p-[8px] m-[8px] relative">
                        <div class="flex justify-between bg-[#FFFFFF] rounded-[6px] p-[12px] mb-[6px]">
                            <h2 class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">Table settings</h2>
                            <span class="text-[14px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #FF004D;">Clear</span>
                        </div>
                        <div class="bg-[#FFFFFF] rounded-[6px] p-[12px] h-[645px]">
                            <div class="flex items-center justify-between">
                                <div class="flex gap-[6px]">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="8" cy="14" r="1" fill="#95ACAA"/>
                                        <circle cx="8" cy="10" r="1" fill="#95ACAA"/>
                                        <circle cx="8" cy="6" r="1" fill="#95ACAA"/>
                                        <circle cx="12" cy="14" r="1" fill="#95ACAA"/>
                                        <circle cx="12" cy="10" r="1" fill="#95ACAA"/>
                                        <circle cx="12" cy="6" r="1" fill="#95ACAA"/>
                                    </svg>
                                    <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #000000;">№</span>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" v-model="isToggled" class="sr-only peer" />
                                    <div class="w-[43px] h-[24px] bg-gray-300 rounded-[12px] peer-checked:bg-blue-600 transition-colors duration-300"></div>
                                    <div class="absolute left-[4px] top-[4px] w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                                </label>
                            </div>
    
                            <div class="divide mt-[8px]"></div>
    
                            <div>
                                <div class="flex justify-between items-center pt-[14px]">
                                    <div class="flex gap-[6px]">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="6" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="6" r="1" fill="#95ACAA"/>
                                        </svg>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Client</span>
                                    </div>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" v-model="isToggled" class="sr-only peer" />
                                        <div class="w-[43px] h-[24px] bg-gray-300 rounded-[12px] peer-checked:bg-blue-600 transition-colors duration-300"></div>
                                        <div class="absolute left-[4px] top-[4px] w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                                    </label>
                                </div>

                                <div class="flex justify-between items-center pt-[14px]">
                                    <div class="flex gap-[6px]">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="6" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="6" r="1" fill="#95ACAA"/>
                                        </svg>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Phone number</span>
                                    </div>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" v-model="isToggled" class="sr-only peer" />
                                        <div class="w-[43px] h-[24px] bg-gray-300 rounded-[12px] peer-checked:bg-blue-600 transition-colors duration-300"></div>
                                        <div class="absolute left-[4px] top-[4px] w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                                    </label>
                                </div>

                                <div class="flex justify-between items-center pt-[14px]">
                                    <div class="flex gap-[6px]">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="6" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="6" r="1" fill="#95ACAA"/>
                                        </svg>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Message Text</span>
                                    </div>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" v-model="isToggled" class="sr-only peer" />
                                        <div class="w-[43px] h-[24px] bg-gray-300 rounded-[12px] peer-checked:bg-blue-600 transition-colors duration-300"></div>
                                        <div class="absolute left-[4px] top-[4px] w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                                    </label>
                                </div>

                                <div class="flex justify-between items-center pt-[14px]">
                                    <div class="flex gap-[6px]">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="6" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="6" r="1" fill="#95ACAA"/>
                                        </svg>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Date of sent</span>
                                    </div>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" v-model="isToggled" class="sr-only peer" />
                                        <div class="w-[43px] h-[24px] bg-gray-300 rounded-[12px] peer-checked:bg-blue-600 transition-colors duration-300"></div>
                                        <div class="absolute left-[4px] top-[4px] w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                                    </label>
                                </div>

                                <div class="flex justify-between items-center pt-[14px]">
                                    <div class="flex gap-[6px]">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="6" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="6" r="1" fill="#95ACAA"/>
                                        </svg>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Sent</span>
                                    </div>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" v-model="isToggled" class="sr-only peer" />
                                        <div class="w-[43px] h-[24px] bg-gray-300 rounded-[12px] peer-checked:bg-blue-600 transition-colors duration-300"></div>
                                        <div class="absolute left-[4px] top-[4px] w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                                    </label>
                                </div>

                                <div class="flex justify-between items-center pt-[14px]">
                                    <div class="flex gap-[6px]">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="8" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="8" cy="6" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="14" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="10" r="1" fill="#95ACAA"/>
                                            <circle cx="12" cy="6" r="1" fill="#95ACAA"/>
                                        </svg>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Status</span>
                                    </div>
                                    <label class="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" v-model="isToggled" class="sr-only peer" />
                                        <div class="w-[43px] h-[24px] bg-gray-300 rounded-[12px] peer-checked:bg-blue-600 transition-colors duration-300"></div>
                                        <div class="absolute left-[4px] top-[4px] w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
         </transition>


         <!-- Message -->

         <transition 
            name="slide"
            enter-active-class="transition-transform duration-300 ease-out"
            leave-active-class="transition-transform duration-300 ease-in"
            enter-from-class="translate-x-full"
            enter-to-class="translate-x-0"
            leave-from-class="translate-x-0"
            leave-to-class="translate-x-full"
         >
            <div v-show="isMessageOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-end" @click.self="closeMessage">
                <div ref="settingPanel" class="bg-[#F4F6F6] p-[6px] max-w-[539px] w-full m-[8px] rounded-[8px]">
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

                    <div class="bg-[#FFFFFF] p-[12px] mt-[6px] rounded-[6px] flex flex-col h-[555px]">
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
    import axios from "axios";
import { useI18n } from "vue-i18n";
    export default{
        name: 'Main',
        components: {MainSidebar},
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
                isFilterOpen : false,
                filter: {
                    date :"",
                    status: []
                },

                isSettingsOpen : false ,
                isMessageOpen : false
            };
        },
        methods: {
            changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
            openFilter() {
                this.isFilterOpen = true;
            },
            closeFilter() {
                this.isFilterOpen = false
            },
            handleClickOutside(event) {
                if(!this.$refs.filterPanel.contains(event.target)){
                    this.closeFilter();
                }
            },
            beforeUnmount() {
                document.removeEventListener("click", this. handleClickOutside);
            }, 
            
            
            openSettings() {
                this.isSettingsOpen = true;
            },

            closeSettings() {
                this.isSettingsOpen = false
            },

            handleSettingClickOutside(event) {
                if(!this.$refs.settingPanel.contains(event.target)){
                    this.closeFilter();
                }
            },
            beforeUnmount() {
                document.removeEventListener("click", this.handleSettingClickOutside);
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