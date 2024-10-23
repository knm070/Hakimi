<template>
    <div class="bg-[rgb(244,246,246)] h-full">   
        <div class="flex w-full min-h-screen">
            <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
            <div class=" bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px] " style="border: 1px solid #EDF1F1">
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
                <div class="flex gap-[12px] pt-[16px]">
                    <button @click="selectButton('personalInformation')" :class="['py-[10px] px-[12px] flex items-center gap-[13px] rounded-[6px]' ,selectedButton === 'personalInformation' ? 'bg-[#E5EBFF]' : 'bg-[#EDF1F1]']" :style="{fontFamily:'Geist', fontWeight:'500', color: selectedButton === 'personalInformation' ? '#335FFF' : '#72908D', border: selectedButton === 'personalInformation' ? 'none' : '1px solid #EDF1F1'}">
                        <svg v-if="selectedButton === 'personalInformation'" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.7935 0.333008H4.20683C1.78016 0.333008 0.333496 1.77967 0.333496 4.20634V9.79301C0.333496 11.6663 1.1935 12.953 2.70683 13.4397C3.14683 13.593 3.6535 13.6663 4.20683 13.6663H9.7935C10.3468 13.6663 10.8535 13.593 11.2935 13.4397C12.8068 12.953 13.6668 11.6663 13.6668 9.79301V4.20634C13.6668 1.77967 12.2202 0.333008 9.7935 0.333008ZM12.6668 9.79301C12.6668 11.2197 12.1068 12.1197 10.9802 12.493C10.3335 11.2197 8.80016 10.313 7.00016 10.313C5.20016 10.313 3.6735 11.213 3.02016 12.493H3.0135C1.90016 12.133 1.3335 11.2263 1.3335 9.79967V4.20634C1.3335 2.32634 2.32683 1.33301 4.20683 1.33301H9.7935C11.6735 1.33301 12.6668 2.32634 12.6668 4.20634V9.79301Z" fill="#335FFF"/>
                        <path d="M7.00019 4.33301C5.68019 4.33301 4.61353 5.39967 4.61353 6.71967C4.61353 8.03967 5.68019 9.11301 7.00019 9.11301C8.32019 9.11301 9.38686 8.03967 9.38686 6.71967C9.38686 5.39967 8.32019 4.33301 7.00019 4.33301Z" fill="#335FFF"/>
                        </svg>
                        <svg v-else width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.79325 0.333008H4.20659C1.77992 0.333008 0.333252 1.77967 0.333252 4.20634V9.79301C0.333252 11.6663 1.19325 12.953 2.70659 13.4397C3.14659 13.593 3.65325 13.6663 4.20659 13.6663H9.79325C10.3466 13.6663 10.8533 13.593 11.2933 13.4397C12.8066 12.953 13.6666 11.6663 13.6666 9.79301V4.20634C13.6666 1.77967 12.2199 0.333008 9.79325 0.333008ZM12.6666 9.79301C12.6666 11.2197 12.1066 12.1197 10.9799 12.493C10.3333 11.2197 8.79992 10.313 6.99992 10.313C5.19992 10.313 3.67325 11.213 3.01992 12.493H3.01325C1.89992 12.133 1.33325 11.2263 1.33325 9.79967V4.20634C1.33325 2.32634 2.32659 1.33301 4.20659 1.33301H9.79325C11.6733 1.33301 12.6666 2.32634 12.6666 4.20634V9.79301Z" fill="#95ACAA"/>
                        <path d="M6.99995 4.33301C5.67995 4.33301 4.61328 5.39967 4.61328 6.71967C4.61328 8.03967 5.67995 9.11301 6.99995 9.11301C8.31995 9.11301 9.38661 8.03967 9.38661 6.71967C9.38661 5.39967 8.31995 4.33301 6.99995 4.33301Z" fill="#95ACAA"/>
                        </svg>

                        Personal information
                    </button>
                    <button @click="selectButton('security')" :class="['flex items-center gap-[13px] rounded-[6px] py-[12px] px-[16px]', selectedButton === 'security' ? 'bg-[#E5EBFF]' : 'bg-[#EDF1F1]']" :style="{fontFamily:'Geist', fontWeight:'500', color: selectedButton === 'security' ? '#335FFF' : '#72908D', border: selectedButton === 'security' ? 'none' : '1px solid #EDF1F1'}">
                        <svg v-if="selectedButton === 'security'" width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.16677 6.8337V7.4537C7.16677 7.68703 7.04678 7.90703 6.84011 8.02703L6.33344 8.3337M5.99343 1.48703L2.66677 2.7337C1.9001 3.02036 1.27344 3.92703 1.27344 4.74703V9.70036C1.27344 10.487 1.79344 11.5204 2.42678 11.9937L5.29344 14.1337C6.23344 14.8404 7.78009 14.8404 8.72009 14.1337L11.5868 11.9937C12.2201 11.5204 12.7401 10.487 12.7401 9.70036V4.74703C12.7401 3.92703 12.1134 3.02036 11.3468 2.7337L8.0201 1.48703C7.45343 1.28036 6.54676 1.28036 5.99343 1.48703ZM9.66677 7.66703C9.66677 9.13979 8.47286 10.3337 7.0001 10.3337C5.52734 10.3337 4.33344 9.13979 4.33344 7.66703C4.33344 6.19427 5.52734 5.00036 7.0001 5.00036C8.47286 5.00036 9.66677 6.19427 9.66677 7.66703Z" stroke="#335FFF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <svg v-else width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.16677 6.8337V7.4537C7.16677 7.68703 7.04678 7.90703 6.84011 8.02703L6.33344 8.3337M5.99343 1.48703L2.66677 2.7337C1.9001 3.02036 1.27344 3.92703 1.27344 4.74703V9.70036C1.27344 10.487 1.79344 11.5204 2.42678 11.9937L5.29344 14.1337C6.23344 14.8404 7.78009 14.8404 8.72009 14.1337L11.5868 11.9937C12.2201 11.5204 12.7401 10.487 12.7401 9.70036V4.74703C12.7401 3.92703 12.1134 3.02036 11.3468 2.7337L8.0201 1.48703C7.45343 1.28036 6.54676 1.28036 5.99343 1.48703ZM9.66677 7.66703C9.66677 9.13979 8.47286 10.3337 7.0001 10.3337C5.52734 10.3337 4.33344 9.13979 4.33344 7.66703C4.33344 6.19427 5.52734 5.00036 7.0001 5.00036C8.47286 5.00036 9.66677 6.19427 9.66677 7.66703Z" stroke="#95ACAA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        Security
                    </button>
                </div>
                <div class="bg-[#F4F6F6] p-[6px] rounded-[8px] mt-[16px] ">
                    <div v-if="selectedButton === 'personalInformation'" class="flex gap-[6px]">
                        <div class="bg-[#FFFFFF] w-full p-[12px] rounded-[6px]">
                            <h2 class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;">Client informations</h2>
                            <div class="divide pt-[12px]"></div>
                            <div class="p-[12px] rounded-[12px] mt-[20px] flex items-center justify-between" style="border: 1px solid #EDF1F1">
                                <div class="flex items-center gap-[12px]">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="48" height="48" rx="24" fill="#00B252"/>
                                    <path d="M15.58 16.8H18.76L23.88 31H21.16L19.98 27.64H14.36L13.18 31H10.46L15.58 16.8ZM19.22 25.42L17.18 19.42L15.12 25.42H19.22ZM25.3211 16.8H27.8811V25.14L32.2611 20.32H35.4211L31.2411 24.76L35.5611 31H32.6811L29.5611 26.28L27.8811 28.06V31H25.3211V16.8Z" fill="white"/>
                                    </svg>
                                    <div>
                                        <p class="text-[14px] pb-[6px]" style="font-family: Geist; font-weight: 400; color: #72908D;">Full name</p>
                                        <span class=" text-[16px]" style="font-family: Geist; font-weight: 500; color: #000000;">Akbarali Khasanov</span>
                                    </div>
                                </div>
                                <svg @click="openChange" class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.89 5.05022C12.32 7.81022 14.56 9.92022 17.34 10.2002M3 22.0002H21M13.26 3.60022L5.05 12.2902C4.74 12.6202 4.44 13.2702 4.38 13.7202L4.01 16.9602C3.88 18.1302 4.72 18.9302 5.88 18.7302L9.1 18.1802C9.55 18.1002 10.18 17.7702 10.49 17.4302L18.7 8.74022C20.12 7.24022 20.76 5.53022 18.55 3.44022C16.35 1.37022 14.68 2.10022 13.26 3.60022Z" stroke="#95ACAA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div class="p-[12px] rounded-[12px] mt-[20px]" style="border: 1px solid #EDF1F1">
                                <div class="flex justify-between">
                                    <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;">Additional informations</p>
                                    <svg @click="openInformation" class="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.89 5.05022C12.32 7.81022 14.56 9.92022 17.34 10.2002M3 22.0002H21M13.26 3.60022L5.05 12.2902C4.74 12.6202 4.44 13.2702 4.38 13.7202L4.01 16.9602C3.88 18.1302 4.72 18.9302 5.88 18.7302L9.1 18.1802C9.55 18.1002 10.18 17.7702 10.49 17.4302L18.7 8.74022C20.12 7.24022 20.76 5.53022 18.55 3.44022C16.35 1.37022 14.68 2.10022 13.26 3.60022Z" stroke="#95ACAA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div class="flex pt-[12px]">
                                    <div class="w-[371px]">
                                        <p class="pb-[6px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Cellphone number</p>
                                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">+998931529506</span>
                                    </div>
                                    <div class="w-[371px]">
                                        <p class="pb-[6px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Username</p>
                                        <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">+998931529506</span>
                                    </div>
                                </div>
                                <div class="pt-[12px]">
                                    <p class="pb-[6px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Address</p>
                                    <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">Samarqand viloyati, Samarqand shahar, X</span>
                                </div>
                            </div>
                            <div class="p-[12px] rounded-[12px] mt-[20px] bg-[#F4F6F6] flex justify-between items-center">
                                <div>
                                    <p class="pb-[6px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Password</p>
                                    <input type="password" class="bg-[#F4F6F6] w-full border-none outline-none">
                                </div>
                                <button @click="openPassword" class="text-[14px] bg-[#E5EBFF] py-[8px] px-[14px] rounded-[6px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #335FFF;">Change</button>
                            </div>
                            <div class="p-[12px] rounded-[12px] mt-[20px] bg-[#F4F6F6]">
                                <p class="pb-[6px] text-[14px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Position</p>
                                <span class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">Super admin</span>
                            </div>
                        </div>
                        <div class="bg-[#FFFFFF] w-full p-[12px] rounded-[6px]">
                            <h2>Current balance</h2>
                            <div class="divide pt-[12px] mb-[20px]"></div>
                            <span class="text-[32px] " style="font-family: Geist; font-weight: 700; color: #00B252;">124 000 UZS</span>
                            <div class="mt-[20px] p-[12px] rounded-[12px] flex justify-between" style="border: 1px solid #EDF1F1">
                                <div>
                                    <div class="">
                                        <p class="pb-[6px] text-[14px]" style="font-family: Geist; font-weight:500; color: #72908D;">Number of apartments sold</p>
                                        <span class="text-[24px]" style="font-family: Geist; font-weight: 600; color: #000000;">6</span>
                                    </div>
                                    <div class="pt-[20px]">
                                        <p class="pb-[6px] text-[14px]" style="font-family: Geist; font-weight:500; color: #72908D;">Calculated prize money</p>
                                        <span class="text-[24px]" style="font-family: Geist; font-weight: 600; color: #000000;">6</span>
                                    </div>
                                </div>
                                <div class="pr-[90px]">
                                    <div class="">
                                        <p class="pb-[6px] text-[14px]" style="font-family: Geist; font-weight:500; color: #72908D;">Number of contracts with initial fees</p>
                                        <span class="text-[24px]" style="font-family: Geist; font-weight: 600; color: #000000;">6</span>
                                    </div>
                                    <div class="pt-[20px]">
                                        <p class="pb-[6px] text-[14px]" style="font-family: Geist; font-weight:500; color: #72908D;">The amount of received prize money</p>
                                        <span class="text-[24px]" style="font-family: Geist; font-weight: 600; color: #000000;">6</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <table class="profile-table">
                                    <thead>
                                        <tr class="bg-[#F4F6F6] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471;" >
                                            <th>№</th>
                                            <th>Date</th>
                                            <th>Payment amount</th>
                                            <th>Responsible</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(table, index) in profile" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #000000;">
                                            <td>{{ table.number }}</td>
                                            <td>{{ table.date }}</td>
                                            <td>{{ table.paymentAmount }}</td>
                                            <td>{{ table.responsible }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div v-if="selectedButton === 'security'">
                        <div>
                            <table class="security-table">
                                <thead>
                                    <tr class="bg-[#FFFBE5] text-[16px]" style="font-family: Geist; font-weight: 500; color: #000000;">
                                        <th>№</th> 
                                        <th>Last Activity</th>
                                        <th>Device</th>
                                        <th>Application</th>
                                        <th>IP address</th>
                                        <th>Geoposition</th>
                                        <th>Active</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-[#FFFFFF] text-[14px]" style="font-family: Geist; font-weight: 400; color: #000000;">
                                    <tr v-for="(tab, index) in security" :key="index">    
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ tab.lastActivity }}</td>
                                        <td>{{ tab.device }}</td>
                                        <td>{{ tab.application }}</td>
                                        <td>{{ tab.adress }}</td>
                                        <td>{{ tab.geoposition }}</td>
                                        <td>{{ tab.active }}</td>
                                        <td>
                                            <div v-if="index === 0">
                                                <button class="py-[10px] px-[12px] rounded-[6px] bg-[#FBEDE5] text-[14px]" style="font-family: Geist; font-weight: 600; color: #DB4F00">End all other sessions</button>
                                            </div>
                                            <svg v-else class="cursor-pointer" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21.9271 5.23C20.3171 5.07 18.7071 4.95 17.0871 4.86V4.85L16.8671 3.55C16.7171 2.63 16.4971 1.25 14.1571 1.25H11.5371C9.20709 1.25 8.98709 2.57 8.82709 3.54L8.61709 4.82C7.68709 4.88 6.75709 4.94 5.82709 5.03L3.78709 5.23C3.36709 5.27 3.06709 5.64 3.10709 6.05C3.14709 6.46 3.50709 6.76 3.92709 6.72L5.96709 6.52C11.2071 6 16.4871 6.2 21.7871 6.73C21.8171 6.73 21.8371 6.73 21.8671 6.73C22.2471 6.73 22.5771 6.44 22.6171 6.05C22.6471 5.64 22.3471 5.27 21.9271 5.23Z" fill="#DB4F00"/>
                                            <path d="M20.0871 8.14C19.8471 7.89 19.5171 7.75 19.1771 7.75H6.53708C6.19708 7.75 5.85708 7.89 5.62708 8.14C5.39708 8.39 5.26708 8.73 5.28708 9.08L5.90709 19.34C6.01709 20.86 6.15709 22.76 9.64709 22.76H16.0671C19.5571 22.76 19.6971 20.87 19.8071 19.34L20.4271 9.09C20.4471 8.73 20.3171 8.39 20.0871 8.14ZM14.5171 17.75H11.1871C10.7771 17.75 10.4371 17.41 10.4371 17C10.4371 16.59 10.7771 16.25 11.1871 16.25H14.5171C14.9271 16.25 15.2671 16.59 15.2671 17C15.2671 17.41 14.9271 17.75 14.5171 17.75ZM15.3571 13.75H10.3571C9.94709 13.75 9.60709 13.41 9.60709 13C9.60709 12.59 9.94709 12.25 10.3571 12.25H15.3571C15.7671 12.25 16.1071 12.59 16.1071 13C16.1071 13.41 15.7671 13.75 15.3571 13.75Z" fill="#DB4F00"/>
                                            </svg>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div v-if="isChangeOpen" className='fixed inset-0 bg-black opacity-50'></div>
            <transition name="popup">
                <div v-if="isChangeOpen" class="fixed inset-0  flex justify-center items-center ">
                    <div class="bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px]">
                        <div class="bg-[#FFFFFF] py-[16px] px-[12px] rounded-[6px]">
                            <div class="flex justify-between items-center">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Change</p>
                                <img @click="closeChange" src="/closeWhite.svg" alt="">
                            </div>
                            <div class="divide pt-[20px]"></div>
                            <div class="pt-[20px] flex items-center gap-[12px]">
                                <svg  width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="64" height="64" rx="32" fill="#00B252"/>
                                <path d="M23.58 24.8H26.76L31.88 39H29.16L27.98 35.64H22.36L21.18 39H18.46L23.58 24.8ZM27.22 33.42L25.18 27.42L23.12 33.42H27.22ZM33.3211 24.8H35.8811V33.14L40.2611 28.32H43.4211L39.2411 32.76L43.5611 39H40.6811L37.5611 34.28L35.8811 36.06V39H33.3211V24.8Z" fill="white"/>
                                </svg>
                                <div class="flex gap-[12px]">
                                    <button class="py-[6px] px-[12px] bg-[#E5EBFF] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #335FFF">Change picture</button>
                                    <button class="py-[6px] px-[12px] bg-[#F4F6F6] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #DB4F00;">Delete picture</button>
                                </div>
                            </div>
                            <p class="pt-[20px]">Full name</p>
                            <input type="text" class="w-full h-[48px] rounded-[8px] mt-[12px] pl-[10px] outline-none" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                        </div>
                        <div class="bg-[#FFFFFF] p-[12px] mt-[6px] rounded-[6px] flex gap-[20px]">
                            <button @click="closeChange" class="bg-[#F4F6F6] text-center py-[10px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">Close</button>
                            <button class="text-center py-[8px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Confirm</button>
                        </div>
                    </div>  
                </div>
            </transition>   

            <div v-if="isPasswordOpen" className='fixed inset-0 bg-black opacity-50'></div>
            <transition name="popup">
                <div v-if="isPasswordOpen" class="fixed inset-0 flex justify-center items-center ">
                    <div  class="bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px]">
                        <div  class="bg-[#FFFFFF] py-[16px] px-[12px] rounded-[6px]">
                            <div class="flex justify-between items-center">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Change password</p>
                                <img @click="closePassword" src="/closeWhite.svg" alt="">
                            </div>
                            <div class="divide pt-[20px]"></div>
                            <div class="pt-[20px]">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Enter the current password</p>
                                <a-input-password class="p-[12px] mt-[12px]"/>
                            </div>
                            <div class="pt-[20px]">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Enter the new password</p>
                                <a-input-password class="p-[12px] mt-[12px]"/>
                            </div>
                            <div class="pt-[20px]">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Re-enter the new password</p>
                                <a-input-password class="p-[12px] mt-[12px]"/>
                            </div>
                        </div>
                        <div class="bg-[#FFFFFF] p-[12px] mt-[6px] rounded-[6px] flex gap-[20px]">
                            <button @click="closePassword" class="bg-[#F4F6F6] text-center py-[10px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">Close</button>
                            <button class="text-center py-[8px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Confirm</button>
                        </div>
                    </div>
                </div>
            </transition>

            <div v-if="isInformationOpen" className='fixed inset-0 bg-black opacity-50'></div>
            <transition name="popup">
                <div v-if="isInformationOpen" class="fixed inset-0 flex justify-center items-center ">
                    <div class="bg-[#F4F6F6] p-[6px] rounded-[8px] w-[600px] shadow-lg z-50">
                        <div class="bg-[#FFFFFF] py-[16px] px-[12px] rounded-[6px]">
                            <div class="flex justify-between items-center">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #000000;">Change additional information</p>
                                <img @click="closeInformation" src="/closeWhite.svg" alt="">
                            </div>
                            <div class="divide pt-[20px]"></div>
                            <div class="pt-[20px]">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Enter the current password</p>
                                <input v-model="cellPhone" type="text"  class="py-[13px] px-[14px] w-full rounded-[8px] outline-none mt-[12px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #000000; border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            </div>
                            <div class="pt-[20px]">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Username</p>
                                <input v-model="email" type="text"  class="py-[13px] px-[14px] w-full rounded-[8px] outline-none mt-[12px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #000000; border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            </div>
                            <div class="pt-[20px]">
                                <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Address</p>
                                <input v-model="address" type="text"  class="py-[13px] px-[14px] w-full rounded-[8px] outline-none mt-[12px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #000000; border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            </div>
                        </div>
                        <div class="bg-[#FFFFFF] p-[12px] mt-[6px] rounded-[6px] flex gap-[20px]">
                            <button @click="closeInformation" class="bg-[#F4F6F6] text-center py-[10px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000">Close</button>
                            <button class="text-center py-[8px] w-[272px] rounded-[6px] text-[14px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Confirm</button>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';
    export default {
        name:'Profile',
        components: {Sidebar},
        data() {
            return {
                isChangeOpen : false,
                isPasswordOpen : false,
                isInformationOpen: false,
                selectedButton: 'personalInformation',
                cellPhone : '+998991249299',
                email:'@hakimi9299',
                address: 'Samarqand viloyati, Samarqand shahar, X',
                profile : [
                    {
                        number : '184',
                        date: '09.08.2024 13:37',
                        paymentAmount : '2,219,100,000 UZS',
                        responsible: 'Card'
                    },
                    {
                        number : '184',
                        date: '09.08.2024 13:37',
                        paymentAmount : '2,219,100,000 UZS',
                        responsible: 'Card'
                    },
                    {
                        number : '184',
                        date: '09.08.2024 13:37',
                        paymentAmount : '2,219,100,000 UZS',
                        responsible: 'Card'
                    },
                    {
                        number : '184',
                        date: '09.08.2024 13:37',
                        paymentAmount : '2,219,100,000 UZS',
                        responsible: 'Card'
                    },
                    {
                        number : '184',
                        date: '09.08.2024 13:37',
                        paymentAmount : '2,219,100,000 UZS',
                        responsible: 'Card'
                    },
                    {
                        number : '184',
                        date: '09.08.2024 13:37',
                        paymentAmount : '2,219,100,000 UZS',
                        responsible: 'Card'
                    },
                    {
                        number : '184',
                        date: '09.08.2024 13:37',
                        paymentAmount : '2,219,100,000 UZS',
                        responsible: 'Card'
                    },
                    {
                        number : '184',
                        date: '09.08.2024 13:37',
                        paymentAmount : '2,219,100,000 UZS',
                        responsible: 'Card'
                    },
                ],
                security : [
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                    {
                        lastActivity : '09.08.2024 13:37',
                        device: 'MAC_OS_X, CHROME12 127',
                        application : 'Uysot Web',
                        adress: '84.54.74.130',
                        geoposition: 'Asia,Uzbekistan,Tashkent',
                        active: 'Active',
                    },
                ]
            }
        },
        methods: {
            selectButton(button) {
                this.selectedButton = button;
            },
            openChange() {
                this.isChangeOpen = true;
            },
            closeChange() {
                this.isChangeOpen = false;
            },
            openPassword() {
                this.isPasswordOpen = true;
            },
            closePassword() {
                this.isPasswordOpen = false
            },
            openInformation() {
                this.isInformationOpen = true
            },
            closeInformation(){
                this.isInformationOpen = false;
            }
        },
    }
</script>

<style scoped>
    .divide {
        border-bottom: 1px dashed #95ACAA;
    }
    .profile-table td, 
    .profile-table th {
        padding: 20px 20px;
        border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)    
    }

    .profile-table td {
        width: 228px;
    }
    .profile-table{
        width: 100%;
        border: 1px solid var(--Line-Container-Line, #EDF1F1)    
    }

    .security-table th,
    .security-table td {
        padding: 20px 10px;
        border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)   
    }

    .security-table {
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