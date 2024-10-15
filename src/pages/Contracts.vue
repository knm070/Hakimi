<template>
    <div class="flex bg-[#F4F6F6] h-screen">
        <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
        <div class="w-full  m-[8px] p-[16px] bg-[#FFFFFF] rounded-[14px]" style="border: 1px solid #EDF1F1">
            <div>
                <div class="flex items-center justify-between w-full">
                    <h1>Contract</h1>
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
            </div>
            <div class="bg-[#F4F6F6] rounded-[8px] p-[6px] mt-[12px]">
                    <div class="flex gap-[6px]">
                        <div class="bg-[#FFFFFF] p-[12px] rounded-[12px] flex-grow  ">
                            <div class="flex gap-[12px] pt-[12px]">
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
                        <div class="flex items-center gap-[12px] bg-[#FFFFFF] px-[48px] py-[28px] rounded-[12px]">
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
                    </div>
                    <div class="p-[10px] mt-[6px] bg-[#FFFFFF] rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);">
                        <table class="contract-table">
                            <thead class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #4F7471; border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)">
                                <tr >
                                    <th>№</th>
                                    <th>Client</th>
                                    <th>Date</th>
                                    <th>Residential Complex name</th>
                                    <th>Sum of payment</th>
                                    <th>Sum of payment</th>
                                    <th>Status</th>
                                    <th>Formality</th>
                                    <th>Discount</th>
                                    <th>Responsible</th>
                                </tr>
                            </thead >
                            
                                <tbody class="text-[12px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #000000; border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)">
                                    <tr  >
                                        <td @click="gotoContractsSinglePage">184</td>
                                        <td @click="gotoContractsSinglePage" style="font-family: Geist; font-weight: 600; color: #000000;">XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH</td>
                                        <td>09.08.2024 13:37</td>
                                        <td>Hakimi Towers</td>
                                        <td >2,219,100,000 UZS</td>
                                        <td>2,219,100,000 UZS</td>
                                        <td >
                                            <span class="rounded-[6px] bg-[#C5F7DC4D] text-center py-[10px] px-[50px]" style="color: #008E42;">Active</span>
                                        </td>
                                        <td>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 12L9.99529 16L18 8" stroke="#00B252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </td>
                                        <td>0%</td>
                                        <td>Xusnor Odilova</td>
                                        <td>
                                            <svg class="cursor-pointer" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="5.5" cy="6" r="5.5" fill="#D9D9D9"/>
                                            </svg>
                                        </td>
                                        <td >
                                            <div class="relative">
                                                <button @click="toggleMenu">
                                                    <img class="cursor-pointer" v-if="isOpen" src="/toggleMenu.svg" alt="" width="25" height="25">
                                                    <svg v-else class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="6" cy="12" r="1.5" transform="rotate(90 6 12)" fill="#18181B"/>
                                                        <circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill="#18181B"/>
                                                        <circle cx="18" cy="12" r="1.5" transform="rotate(90 18 12)" fill="#18181B"/>
                                                    </svg>
                                                </button>
                                                <div v-if="isOpen" class="absolute w-[269px] shadow-lg bg-[#FFFFFF] rounded-[8px]  right-0 mt-2">
                                                     <ul class="p-[3px]">
                                                        <router-link to="/update-table"> 
                                                            <li class="hover:bg-gray-100 flex  items-center gap-[10px] p-[10px] rounded-[6px]">
                                                               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M18.3334 10C18.3334 14.6 14.6001 18.3334 10.0001 18.3334C5.40008 18.3334 2.59175 13.7 2.59175 13.7M2.59175 13.7H6.35842M2.59175 13.7V17.8667M1.66675 10C1.66675 5.40002 5.36675 1.66669 10.0001 1.66669C15.5584 1.66669 18.3334 6.30002 18.3334 6.30002M18.3334 6.30002V2.13335M18.3334 6.30002H14.6334" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                               Update table
                                                            </li>
                                                        </router-link>
                                                         <li @click="openChange" class="hover:bg-gray-100 flex  items-center gap-[10px] p-[10px] rounded-[6px]">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M14.5167 3.67501H4.49173L6.0584 2.10835C6.30007 1.86668 6.30007 1.46668 6.0584 1.22501C5.81673 0.983346 5.41673 0.983346 5.17507 1.22501L2.54173 3.85835C2.4834 3.91668 2.44173 3.98335 2.4084 4.05835C2.37507 4.13335 2.3584 4.21668 2.3584 4.30001C2.3584 4.38334 2.37507 4.46668 2.4084 4.54168C2.44173 4.61668 2.4834 4.68335 2.54173 4.74168L5.17507 7.37501C5.30007 7.50001 5.4584 7.55834 5.61673 7.55834C5.77506 7.55834 5.9334 7.50001 6.0584 7.37501C6.30007 7.13335 6.30007 6.73335 6.0584 6.49168L4.49173 4.92501H14.5167C15.5501 4.92501 16.3917 5.76668 16.3917 6.80001V9.56668C16.3917 9.90834 16.6751 10.1917 17.0167 10.1917C17.3584 10.1917 17.6417 9.90834 17.6417 9.56668V6.80001C17.6417 5.07501 16.2417 3.67501 14.5167 3.67501Z" fill="#72908D"/>
                                                            <path d="M17.6417 15.7C17.6417 15.6167 17.6251 15.5333 17.5917 15.4583C17.5584 15.3833 17.5167 15.3167 17.4584 15.2583L14.8251 12.625C14.5834 12.3833 14.1834 12.3833 13.9417 12.625C13.7001 12.8667 13.7001 13.2667 13.9417 13.5083L15.5084 15.075H5.4834C4.45007 15.075 3.6084 14.2333 3.6084 13.2V10.4333C3.6084 10.0917 3.32507 9.80834 2.9834 9.80834C2.64173 9.80834 2.3584 10.0917 2.3584 10.4333V13.2C2.3584 14.925 3.7584 16.325 5.4834 16.325H15.5084L13.9417 17.8917C13.7001 18.1333 13.7001 18.5333 13.9417 18.775C14.0667 18.9 14.2251 18.9583 14.3834 18.9583C14.5417 18.9583 14.7001 18.9 14.8251 18.775L17.4584 16.1417C17.5167 16.0833 17.5584 16.0167 17.5917 15.9417C17.6251 15.8667 17.6417 15.7833 17.6417 15.7Z" fill="#72908D"/>
                                                            </svg>
                                                            Change client
                                                         </li>
                                                         <li @click="openDownload" class="hover:bg-gray-100 flex  items-center gap-[10px] p-[10px] rounded-[6px]">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M7.50008 9.16669V14.1667M7.50008 14.1667L9.16675 12.5M7.50008 14.1667L5.83341 12.5M18.3334 8.33335V12.5C18.3334 16.6667 16.6667 18.3334 12.5001 18.3334H7.50008C3.33341 18.3334 1.66675 16.6667 1.66675 12.5V7.50002C1.66675 3.33335 3.33341 1.66669 7.50008 1.66669H11.6667M18.3334 8.33335H15.0001C12.5001 8.33335 11.6667 7.50002 11.6667 5.00002V1.66669M18.3334 8.33335L11.6667 1.66669" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                            Download action history
                                                         </li>
                                                         <li @click="openCard" class="hover:bg-gray-100 flex  items-center gap-[10px] p-[10px] rounded-[6px]">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.6749 3.33335C15.2916 3.33335 16.5916 4.64169 16.5916 6.25002C16.5916 7.82502 15.3416 9.10835 13.7833 9.16669C13.7166 9.15835 13.6416 9.15835 13.5666 9.16669M15.2833 16.6667C15.8833 16.5417 16.4499 16.3 16.9166 15.9417C18.2166 14.9667 18.2166 13.3584 16.9166 12.3834C16.4583 12.0334 15.8999 11.8 15.3083 11.6667M7.63327 9.05835C7.54993 9.05002 7.44993 9.05002 7.35827 9.05835C5.37493 8.99169 3.79993 7.36669 3.79993 5.36669C3.79993 3.32502 5.44993 1.66669 7.49993 1.66669C9.5416 1.66669 11.1999 3.32502 11.1999 5.36669C11.1916 7.36669 9.6166 8.99169 7.63327 9.05835ZM3.4666 12.1334C1.44993 13.4834 1.44993 15.6834 3.4666 17.025C5.75827 18.5584 9.5166 18.5584 11.8083 17.025C13.8249 15.675 13.8249 13.475 11.8083 12.1334C9.52494 10.6084 5.7666 10.6084 3.4666 12.1334Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                            Add cart
                                                         </li>
                                                         <li @click="toggleRep" class="relative hover:bg-gray-100 flex  items-center gap-[10px] p-[10px] rounded-[6px]">
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M13.6749 3.33335C15.2916 3.33335 16.5916 4.64169 16.5916 6.25002C16.5916 7.82502 15.3416 9.10835 13.7833 9.16669C13.7166 9.15835 13.6416 9.15835 13.5666 9.16669M15.2833 16.6667C15.8833 16.5417 16.4499 16.3 16.9166 15.9417C18.2166 14.9667 18.2166 13.3584 16.9166 12.3834C16.4583 12.0334 15.8999 11.8 15.3083 11.6667M7.63327 9.05835C7.54993 9.05002 7.44993 9.05002 7.35827 9.05835C5.37493 8.99169 3.79993 7.36669 3.79993 5.36669C3.79993 3.32502 5.44993 1.66669 7.49993 1.66669C9.5416 1.66669 11.1999 3.32502 11.1999 5.36669C11.1916 7.36669 9.6166 8.99169 7.63327 9.05835ZM3.4666 12.1334C1.44993 13.4834 1.44993 15.6834 3.4666 17.025C5.75827 18.5584 9.5166 18.5584 11.8083 17.025C13.8249 15.675 13.8249 13.475 11.8083 12.1334C9.52494 10.6084 5.7666 10.6084 3.4666 12.1334Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                            Change of responsible employee
                                                         </li>
                                                         <div v-if="rep" class="absolute right-[275px] bottom-[-37px] bg-[#FFFFFF] w-[269px] rounded-[8px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3); box-shadow: 0px 4px 6px -2px #18232208;box-shadow: 0px 12px 16px -4px #18232214;">
                                                            <ul class="p-[3px]">
                                                                <li class="hover:bg-gray-100 flex  items-center gap-[10px] p-[10px] rounded-[6px]">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                                                                    </svg>
                                                                    Xusnora Odilova
                                                                </li>
                                                                <li class="hover:bg-gray-100 flex  items-center gap-[10px] p-[10px] rounded-[6px]">
                                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <circle cx="12" cy="12" r="12" fill="#D9D9D9"/>
                                                                    </svg>
                                                                    Ahmadjon </li>
                                                            </ul>
                                                         </div>
                                                     </ul>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            
                            <tbody class="text-[12px] cursor-pointer" style="font-family: Geist; font-weight: 400; color: #000000; border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)">
                                <tr  @click="gotoContractsSinglePage">
                                    <td>176</td>
                                    <td style="font-family: Geist; font-weight: 600; color: #000000;">XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH</td>
                                    <td>09.08.2024 13:37</td>
                                    <td>Hakimi Towers</td>
                                    <td>2,219,100,000 UZS</td>
                                    <td>2,219,100,000 UZS</td>
                                    <td><span class="rounded-[6px] bg-[#FBEDE5] text-center py-[10px] px-[40px]" style="color: #DB4F00;">Cancelled</span></td>
                                    <td>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 12L9.99529 16L18 8" stroke="#00B252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </td>
                                    <td>0%</td>
                                    <td>Xusnor Odilova</td>
                                    <td >
                                        <svg class="cursor-pointer" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5.5" cy="6" r="5.5" fill="#D9D9D9"/>
                                        </svg>
                                    </td>
                                    <td>
                                        <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6" cy="12" r="1.5" transform="rotate(90 6 12)" fill="#18181B"/>
                                            <circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill="#18181B"/>
                                            <circle cx="18" cy="12" r="1.5" transform="rotate(90 18 12)" fill="#18181B"/>
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody class="text-[12px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #000000; border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)">
                                <tr  @click="gotoContractsSinglePage">
                                    <td>123</td>
                                    <td style="font-family: Geist; font-weight: 600; color: #000000;">XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH</td>
                                    <td>09.08.2024 13:37</td>
                                    <td>Hakimi Towers</td>
                                    <td >2,219,100,000 UZS</td>
                                    <td>2,219,100,000 UZS</td>
                                    <td >
                                        <span class="rounded-[6px] bg-[#C5F7DC4D] text-center py-[10px] px-[50px]" style="color: #008E42;">Active</span>
                                    </td>
                                    <td>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 12L9.99529 16L18 8" stroke="#00B252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </td>
                                    <td>0%</td>
                                    <td>Xusnor Odilova</td>
                                    <td>
                                        <svg class="cursor-pointer" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5.5" cy="6" r="5.5" fill="#D9D9D9"/>
                                        </svg>
                                    </td>
                                    <td>
                                        <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6" cy="12" r="1.5" transform="rotate(90 6 12)" fill="#18181B"/>
                                            <circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill="#18181B"/>
                                            <circle cx="18" cy="12" r="1.5" transform="rotate(90 18 12)" fill="#18181B"/>
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody class="text-[12px] cursor-pointer" style="font-family: Geist; font-weight: 400; color: #000000; border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)">
                                <tr  @click="gotoContractsSinglePage">
                                    <td>342</td>
                                    <td style="font-family: Geist; font-weight: 600; color: #000000;">XUDAYBERDIYEV ILXOMJON ISMATULLOYEVICH</td>
                                    <td>09.08.2024 13:37</td>
                                    <td>Hakimi Towers</td>
                                    <td>2,219,100,000 UZS</td>
                                    <td>2,219,100,000 UZS</td>
                                    <td><span class="rounded-[6px] bg-[#FBEDE5] text-center py-[10px] px-[40px]" style="color: #DB4F00;">Cancelled</span></td>
                                    <td>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 12L9.99529 16L18 8" stroke="#00B252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </td>
                                    <td>0%</td>
                                    <td>Xusnor Odilova</td>
                                    <td >
                                        <svg class="cursor-pointer" width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5.5" cy="6" r="5.5" fill="#D9D9D9"/>
                                        </svg>
                                    </td>
                                    <td>
                                        <svg class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="6" cy="12" r="1.5" transform="rotate(90 6 12)" fill="#18181B"/>
                                            <circle cx="12" cy="12" r="1.5" transform="rotate(90 12 12)" fill="#18181B"/>
                                            <circle cx="18" cy="12" r="1.5" transform="rotate(90 18 12)" fill="#18181B"/>
                                        </svg>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>

        <div v-if="isChangeOpen" className='fixed inset-0 bg-black opacity-50'></div>
        <transition name="popup">
            <div v-if="isChangeOpen" class="fixed inset-0  flex justify-center items-center">
                <div  class=" bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px]">
                    <div  class="bg-[#FFFFFF] py-[16px] px-[12px] rounded-[6px]">
                            <div class="flex justify-between items-center">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Change client</p>
                                <img class="cursor-pointer" @click="closeChange" src="/closeWhite.svg" alt="">
                            </div>
                            <div class="divide pt-[20px]"></div>
                            <div class="pt-[20px]">
                                <div>
                                    <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;">Transferring the contract to another client</p>
                                    <a-input @click="clientToggle" type="text" class="mt-[12px] p-[10px] w-full"/>
                                    <div v-if="newClient" class="fixed z-50 ">
                                        <button class=" mt-[5px] flex items-center justify-center gap-[8px] bg-[#FFFFFF] w-[564px] h-[80px] rounded-[8px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #335FFF;  border: 1px solid var(--Line-Field-Line, #DCE3E3); box-shadow: 0px 4px 6px -2px #18232208;box-shadow: 0px 12px 16px -4px #18232214; ">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.66675 10H13.3334M10.0001 13.3334V6.66669M7.50008 18.3334H12.5001C16.6667 18.3334 18.3334 16.6667 18.3334 12.5V7.50002C18.3334 3.33335 16.6667 1.66669 12.5001 1.66669H7.50008C3.33341 1.66669 1.66675 3.33335 1.66675 7.50002V12.5C1.66675 16.6667 3.33341 18.3334 7.50008 18.3334Z" stroke="#335FFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                            Create a new client
                                        </button>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="pt-[20px]">
                                <p class="text-[16px] pb-[6px]" style="font-family: Geist; font-weight: 600; color: #72908D;">Client</p>
                                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">KOMILJONOVA GAVHAROY NURMUHAMMAD QIZI</span>
                            </div>
                            <div class="pt-[20px]">
                                <p class="text-[16px] pb-[6px]" style="font-family: Geist; font-weight: 600; color: #72908D;">Cellphone number</p>
                                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">+998998805332</span>
                            </div>
                            <div class="pt-[20px]">
                                <p class="text-[16px] pb-[6px]" style="font-family: Geist; font-weight: 600; color: #72908D;">Passport series, number</p>
                                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">AC 2368889</span>
                            </div>  

                            <div class="pt-[20px] flex items-center gap-[6px]">
                                <a-checkbox v-model:checked="checked1"></a-checkbox>
                                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #000000;">Create a new contract</p>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.99998 1.33337C4.32665 1.33337 1.33331 4.32671 1.33331 8.00004C1.33331 11.6734 4.32665 14.6667 7.99998 14.6667C11.6733 14.6667 14.6666 11.6734 14.6666 8.00004C14.6666 4.32671 11.6733 1.33337 7.99998 1.33337ZM7.49998 5.33337C7.49998 5.06004 7.72665 4.83337 7.99998 4.83337C8.27331 4.83337 8.49998 5.06004 8.49998 5.33337V8.66671C8.49998 8.94004 8.27331 9.16671 7.99998 9.16671C7.72665 9.16671 7.49998 8.94004 7.49998 8.66671V5.33337ZM8.61331 10.92C8.57998 11.0067 8.53331 11.0734 8.47331 11.14C8.40665 11.2 8.33331 11.2467 8.25331 11.28C8.17331 11.3134 8.08665 11.3334 7.99998 11.3334C7.91331 11.3334 7.82665 11.3134 7.74665 11.28C7.66665 11.2467 7.59331 11.2 7.52665 11.14C7.46665 11.0734 7.41998 11.0067 7.38665 10.92C7.35331 10.84 7.33331 10.7534 7.33331 10.6667C7.33331 10.58 7.35331 10.4934 7.38665 10.4134C7.41998 10.3334 7.46665 10.26 7.52665 10.1934C7.59331 10.1334 7.66665 10.0867 7.74665 10.0534C7.90665 9.98671 8.09331 9.98671 8.25331 10.0534C8.33331 10.0867 8.40665 10.1334 8.47331 10.1934C8.53331 10.26 8.57998 10.3334 8.61331 10.4134C8.64665 10.4934 8.66665 10.58 8.66665 10.6667C8.66665 10.7534 8.64665 10.84 8.61331 10.92Z" fill="#335FFF"/>
                                </svg>
                            </div>
                            <div class="pt-[12px] flex items-center gap-[6px]">
                                <a-checkbox v-model:checked="checked2"></a-checkbox>
                                <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #000000;">Change the contract client</p>
                            </div>
                        </div>
                        <div class="bg-[#FFFFFF] p-[12px] mt-[6px] rounded-[6px] flex gap-[20px]">
                            <button @click="closeChange" class="bg-[#F4F6F6] text-center py-[10px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">Close</button>
                            <button class="text-center py-[8px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Confirm</button>
                        </div>
                </div>
            </div>
        </transition>

        <div v-if="isDownloadOpen" className='fixed inset-0 bg-black opacity-50'></div>
        <transition name="popup">
            <div  v-if="isDownloadOpen" class="fixed inset-0  flex justify-center items-center">
                <div class=" bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px]">
                    <div class="bg-[#FFFFFF] pt-[16px] pb-[32px] px-[12px] rounded-[6px]">
                        <div class="flex justify-between items-center">
                            <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Download</p>
                            <img class="cursor-pointer" @click="closeDownload" src="/closeWhite.svg" alt="">
                        </div>
                        <div class="divide pt-[20px]"></div>
                        <div class="pt-[32px] flex justify-between">
                            <div>
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Date</p>
                                <a-date-picker class="mt-[12px] h-[41px] w-[272px]"/>
                            </div>
                            <div>
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;">Language</p>
                                <a-select class="mt-[12px]"
                                v-model:value="value1"
                                :size="size"
                                style="width: 272px"
                                :options="options"
                                ></a-select>
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <button class="mt-[32px] text-center py-[8px] w-[141px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

        <div v-if="isCardOpen" className='fixed inset-0 bg-black opacity-50'></div>
        <transition name="popup">
            <div v-if="isCardOpen" class="fixed inset-0  flex justify-center items-center">
                <div class=" bg-[#F4F6F6] p-[6px] rounded-[8px] w-[588px]">
                    <div class="bg-[#FFFFFF] pt-[16px] pb-[32px] px-[12px] rounded-[6px]">
                        <div class="flex justify-between items-center">
                            <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Card settings</p>
                            <img class="cursor-pointer" @click="closeCard" src="/closeWhite.svg" alt="">
                        </div>
                        <div class="divide pt-[20px]"></div>
                        <div class="pt-[32px] flex flex-col items-center">
                            <img src="/noDataIcon.svg" alt="">
                            <p class="">Cards do not exist!</p>
                        </div>
                        <div class="pt-[32px] flex justify-center">
                            <button class="flex items-center justify-center gap-[12px] text-center py-[8px] w-[141px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);"> 
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.16663 10.4182H13.8333M10.5 13.7515V7.08484M7.99996 18.7515H13C17.1666 18.7515 18.8333 17.0848 18.8333 12.9182V7.91817C18.8333 3.75151 17.1666 2.08484 13 2.08484H7.99996C3.83329 2.08484 2.16663 3.75151 2.16663 7.91817V12.9182C2.16663 17.0848 3.83329 18.7515 7.99996 18.7515Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Add card
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
    
</template>

<script>
import Sidebar from '../components/Sidebar.vue';


    export default {
        name: 'Contracts',
        components:{Sidebar},
        data() {
            return {
                isOpen: false,
                isChangeOpen: false,
                checked1: false,
                checked2: false,
                newClient: false,
                isDownloadOpen: false,
                isCardOpen : false,
                size: 'large',
                rep: false,
                // options: ['Uzbek', 'Russian', 'English']
            }
        },
        methods: {
            openCard() {
                this.isCardOpen = true;
            },
            closeCard() {
                this.isCardOpen = false;
            },
            clientToggle() {
                this.newClient = !this.newClient;
            },
            closeClientToggle() {
                this.newClient = false;
            },
            openDownload() {
                this.isDownloadOpen = true;
            },
            closeDownload() {
                this.isDownloadOpen = false;
            },
            openChange() {
                this.isChangeOpen = true;
            },
            closeChange() {
                this.isChangeOpen = false;
            },
            gotoContractsSinglePage() {
                this.$router.push('/Contracts/single')
            },
            toggleMenu() {
                this.isOpen = !this.isOpen;
            },
            toggleRep() {
                this.rep = !this.rep;
            }
        }
    }
</script>

<style scoped>
    .divide {
        border-bottom: 1px dashed #95ACAA;
    }
    .contract-table th, .contract-table td{
        padding: 10px 10px;
    }

    .active {
        padding: 0;
        margin-top: 16px;
        margin-bottom: 16px;
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