<template>
    <div class="bg-[#F4F6F6] h-screen">
        <div class="bg-[#FFFFFF] py-[12px] px-[24px] flex items-center justify-between">
            <div class="flex items-center gap-[24px]">
                <img src="/hakimiIcon.svg" alt="">
                <div class="flex items-center gap-[12px]">
                    <h2>Hakimi Towers:</h2>
                    <a-select 
                    v-model:value="value"
                    :size="size"
                    show-search
                    style="width: 296px;"
                    :options="regionOptions"
                    :filter-option="filterOption">
                    </a-select>
                </div>
                <div class="flex items-center gap-[12px]">
                    <p>Bino:</p>
                    <a-select
                    :size="size"
                    style="width: 120px;"
                    :options="options"
                    >
                    </a-select>
                </div>
            </div>
            <div>
                <img class="cursor-pointer" src="/circlecCloseIcon.svg" alt="">
            </div>
        </div>
        <div class="bg-[#FFFFFF] mt-[8px] py-[12px] px-[24px] flex gap-[16px] ">
            <div class="flex items-center gap-[8px] border rounded-[8px] py-[13px] px-[14px] w-full max-w-[323px]">
                <svg class="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#72908D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.5 17.5L13.875 13.875" stroke="#72908D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <input type="text" placeholder="Qidirish" class="outline-none w-full">
            </div>
            <div  class="gap-[8px] border rounded-[8px]  py-[13px] px-[14px] w-full max-w-[323px]">
                <input type="text" placeholder="Xonalar soni" class="outline-none w-full">
            </div>
            <div class="flex">
                <p class="py-[13px] px-[14px] bg-[#F4F6F6]" style="border-radius: 8px 0 0 8px; border: 1px solid var(--Line-Field-Line, #DCE3E3)">m2</p>
                <input type="text" placeholder="dan" class="py-[13px] px-[14px] w-full outline-none" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                <input type="text" placeholder="gacha" class="py-[13px] px-[14px] w-full outline-none"  style="border-radius: 0 8px 8px 0; border: 1px solid var(--Line-Field-Line, #DCE3E3)">
            </div>
            <div class="flex ">
                <p class="py-[13px] px-[14px] bg-[#F4F6F6]" style="border-radius: 8px 0 0 8px; border: 1px solid var(--Line-Field-Line, #DCE3E3)">UZS</p>
                <input type="text" placeholder="dan" class="py-[13px] px-[14px] w-full outline-none" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                <input type="text" placeholder="gacha" class="py-[13px] px-[14px] w-full outline-none" style="border-radius: 0 8px 8px 0; border: 1px solid var(--Line-Field-Line, #DCE3E3)">
            </div>
            <div class="flex ">
                <p class="py-[13px] px-[14px] bg-[#F4F6F6]" style="border-radius: 8px 0 0 8px; border: 1px solid var(--Line-Field-Line, #DCE3E3)">Qavat</p>
                <input type="text" placeholder="dan" class="py-[13px] px-[14px] w-full outline-none" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                <input type="text" placeholder="gacha" class="py-[13px] px-[14px] w-full outline-none" style="border-radius: 0 8px 8px 0; border: 1px solid var(--Line-Field-Line, #DCE3E3)">
            </div>
            <div>
                <button class="flex gap-[12px] py-[12px] px-[18px] bg-[#E5EBFF] rounded-[8px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="mask0_2_23512" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
                    <rect width="24" height="24" fill="#D9D9D9"/>
                    </mask>
                    <g mask="url(#mask0_2_23512)">
                    <path d="M11 18C10.7167 18 10.4792 17.9042 10.2875 17.7125C10.0958 17.5208 10 17.2833 10 17C10 16.7167 10.0958 16.4792 10.2875 16.2875C10.4792 16.0958 10.7167 16 11 16H13C13.2833 16 13.5208 16.0958 13.7125 16.2875C13.9042 16.4792 14 16.7167 14 17C14 17.2833 13.9042 17.5208 13.7125 17.7125C13.5208 17.9042 13.2833 18 13 18H11ZM7 13C6.71667 13 6.47917 12.9042 6.2875 12.7125C6.09583 12.5208 6 12.2833 6 12C6 11.7167 6.09583 11.4792 6.2875 11.2875C6.47917 11.0958 6.71667 11 7 11H17C17.2833 11 17.5208 11.0958 17.7125 11.2875C17.9042 11.4792 18 11.7167 18 12C18 12.2833 17.9042 12.5208 17.7125 12.7125C17.5208 12.9042 17.2833 13 17 13H7ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z" fill="#002CCC"/>
                    </g>
                    </svg>
                    Batafsil
                </button>
            </div>
        </div>

        <div class="bg-[#FFFFFF] mt-[8px] py-[16px] px-[24px]">
            <div class="border p-[16px] rounded-[14px]">
                <div class="flex justify-between">
                    <div>
                        <div class="flex gap-[6px]">
                            <div v-for="(button, index) in buttons" :key="index" >
                                <button class="flex items-center gap-[8px] bg-[#E5EBFF] py-[6px] px-[12px] rounded-[6px]"
                                @click="setActiveButton(index)"
                                :class="['flex items-center gap-[8px] py-[6px] px-[12px] rounded-[6px]', activeButton === index ? 'bg-[#E5EBFF]' : 'bg-[#F4F6F6]']"
                                :style="{fontFamily: 'Geist' , fontWeight: '600', color: activeButton === index ? '#0037FF' : '#72908D'}"
                                >
                                    <img :src="activeButton  === index ?  button.img2 : button.img"  alt="">
                                    {{ button.name }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-if="activeButton === 0" class="flex gap-[8px]">
                        <img src="/showroomSettings.svg" alt="">
                        <img src="/showroomDownload.svg" alt="">
                    </div>
                    <div v-if="activeButton === 1" class="flex gap-[32px]">
                        <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                            Murakkab     
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_2_27365" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                            <rect width="20" height="20" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_2_27365)">
                            <path d="M9.99992 17.5003C8.1527 17.5003 6.57978 16.858 5.28117 15.5732C3.98256 14.2885 3.33325 12.7364 3.33325 10.917C3.33325 10.0003 3.50686 9.1531 3.85409 8.37533C4.20131 7.59755 4.68047 6.9031 5.29159 6.29199L9.99992 1.66699L14.7083 6.29199C15.3194 6.9031 15.7985 7.59755 16.1458 8.37533C16.493 9.1531 16.6666 10.0003 16.6666 10.917C16.6666 12.7364 16.0173 14.2885 14.7187 15.5732C13.4201 16.858 11.8471 17.5003 9.99992 17.5003ZM9.99992 15.8337V4.00033L6.45825 7.50033C5.97214 7.95866 5.60756 8.47602 5.3645 9.05241C5.12145 9.6288 4.99992 10.2503 4.99992 10.917C4.99992 12.2642 5.48603 13.4205 6.45825 14.3857C7.43047 15.351 8.61103 15.8337 9.99992 15.8337Z" fill="#0037FF"/>
                            </g>
                            </svg>
                        </button>
                        <div class="flex gap-[24px] items-center">
                            <p>Xonadon:</p>
                            <div class="flex gap-[12px]">
                                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#00B252"/>
                                    </svg>
                                    Bo’sh
                                </button>
                                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#FFD800"/>
                                    </svg>
                                    Band qilingan
                                </button>
                                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#DB4F00"/>
                                    </svg>
                                    Sotilgan
                                </button>
                                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#B9C7C6"/>
                                    </svg>
                                    Sotilmaydi
                                </button>
                                <button>
                                    <img src="/showroomBurgerMenu.svg" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                    <div v-if="activeButton === 2" class="flex gap-[32px]">
                        <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                            Oddiy 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0_2_27365" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                            <rect width="20" height="20" fill="#D9D9D9"/>
                            </mask>
                            <g mask="url(#mask0_2_27365)">
                            <path d="M9.99992 17.5003C8.1527 17.5003 6.57978 16.858 5.28117 15.5732C3.98256 14.2885 3.33325 12.7364 3.33325 10.917C3.33325 10.0003 3.50686 9.1531 3.85409 8.37533C4.20131 7.59755 4.68047 6.9031 5.29159 6.29199L9.99992 1.66699L14.7083 6.29199C15.3194 6.9031 15.7985 7.59755 16.1458 8.37533C16.493 9.1531 16.6666 10.0003 16.6666 10.917C16.6666 12.7364 16.0173 14.2885 14.7187 15.5732C13.4201 16.858 11.8471 17.5003 9.99992 17.5003ZM9.99992 15.8337V4.00033L6.45825 7.50033C5.97214 7.95866 5.60756 8.47602 5.3645 9.05241C5.12145 9.6288 4.99992 10.2503 4.99992 10.917C4.99992 12.2642 5.48603 13.4205 6.45825 14.3857C7.43047 15.351 8.61103 15.8337 9.99992 15.8337Z" fill="#0037FF"/>
                            </g>
                            </svg>
                        </button>
                        <div class="flex gap-[24px] items-center ">
                            <p>Xonadon:</p>
                            <div class="flex gap-[12px]">
                                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#00B252"/>
                                    </svg>
                                    Bo’sh
                                </button>
                                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#FFD800"/>
                                    </svg>
                                    Band qilingan
                                </button>
                                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#B9C7C6"/>
                                    </svg>
                                    Sotilmaydi
                                </button>
                            </div>
                        </div>
                        <div class="flex gap-[24px] items-center">
                            <p>Shartnoma:</p>
                            <div class="flex gap-[12px]">
                                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#0EA5E9"/>
                                    </svg>
                                    Faol
                                </button>
                                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#FFD800"/>
                                    </svg>
                                    Boshlang’ich
                                </button>
                                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #EDF1F1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#EF4444"/>
                                    </svg>
                                    Tugallangan
                                </button>
                                <button>
                                    <img src="/showroomBurgerMenu.svg" alt="">
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="divide pt-[16px]"></div>
                <div v-if="activeButton === 0" class="pt-[16px]">
                    <table class="showroom-table">
                        <thead>
                            <tr v-for="(head, index) in tableHead" :key="index" class="bg-[#EDF1F1] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471">
                                <th><p>{{ head.tjm }}</p></th>
                                <th><p>{{ head.blok }}</p></th>
                                <th><p>{{ head.roomNumber}}</p></th>
                                <th><p>{{ head.floor}}</p></th>
                                <th><p>{{ head.roomAmount}}</p></th>
                                <th><p>{{ head.square}}</p></th>
                                <th><p class="w-[80px]">{{ head.notRepaired}}</p></th>
                                <th><p class="w-[78px]"> {{ head.repaired}}</p></th>
                                <th><p>{{ head.notRepAmount}}</p></th>
                                <th> <p class=" w-[100px]">{{ head.repAmount }}</p></th>
                                <th><p>{{ head.position }}</p></th>
                                <th><p>{{ head.equipped }}</p></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(body, index) in tableBody" :key="index" :class="[ 'text-[14px]', index % 2 == 1 ? 'bg-[#F4F6F6]' : 'bg-[#FFFFFF]']"
                            style="font-family: Geist; font-weight: 600; color: #000000;"
                            >
                                <td class="w-[260px]">{{ body.tjm }}</td>
                                <td class="w-[148px]">{{ body.blok }}</td>
                                <td class="w-[128px]">{{ body.roomNumber}}</td>
                                <td class="w-[148px]">{{ body.floor}}</td>
                                <td class="w-[148px] "><p class="bg-[#C5F7DC] rounded-full w-[24px] text-center py-[2px] pr-[1px]">{{ body.roomAmount}}</p></td>
                                <td class="w-[148px]">{{ body.square}}</td>
                                <td class="w-[148px]">{{ body.notRepaired}}</td>
                                <td class="w-[148px]">{{ body.repaired}}</td>
                                <td class="w-[148px]">{{ body.notRepAmount}}</td>
                                <td class="w-[120px]">{{ body.repAmount }}</td>
                                <td class="w-[120px]">{{ body.position }}</td>
                                <td class="w-[120px]"><p class="w-[48px] bg-[#58D18F] rounded-full text-center py-[2px]">{{ body.equipped }}</p></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div v-if="activeButton === 2" class="pt-[16px]">
                    <div class="pl-[70px] pb-[16px]">
                        <p>1</p>
                        <p class="pt-[12px]">1- podez</p>
                    </div>
                    <div class="flex flex-col gap-[8px]">
                        <div class="flex gap-[64px] items-center">
                            <span>9</span>
                            <div class="flex gap-[8px]">
                                <div class="p-[12px] rounded-[8px] bg-[#00B252] w-full" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#0EA5E9] w-full" style="border: 1px solid #0EA5E9">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full  py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252] w-full" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#0EA5E9] w-full" style="border: 1px solid #0EA5E9">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full ] py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252] w-full" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full  py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#0EA5E9] w-full" style="border: 1px solid #0EA5E9">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full  py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="flex gap-[64px] items-center">
                            <span>8</span>
                            <div class="flex gap-[8px] ">
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#0EA5E9]" style="border: 1px solid #0EA5E9">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#0EA5E9]" style="border: 1px solid #0EA5E9">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                        <div class="flex gap-[64px] items-center">
                            <span>7</span>
                            <div class="flex gap-[8px] ">
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#0EA5E9]" style="border: 1px solid #0EA5E9">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#0EA5E9]" style="border: 1px solid #0EA5E9">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#0EA5E9]" style="border: 1px solid #0EA5E9">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div class="flex gap-[64px] items-center">
                            <span>6</span>
                            <div class="flex gap-[8px] ">
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-[64px] items-center">
                            <span>5</span>
                            <div class="flex gap-[8px] ">
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-[64px] items-center">
                            <span>4</span>
                            <div class="flex gap-[8px] ">
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-[64px] items-center">
                            <span>3</span>
                            <div class="flex gap-[8px] ">
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-[64px] items-center">
                            <span>2</span>
                            <div class="flex gap-[8px] ">
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex gap-[64px] items-center">
                            <span>1</span>
                            <div class="flex gap-[8px] ">
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
                                </div>
                                <div class="p-[12px] rounded-[8px] bg-[#00B252]" style="border: 1px solid #00B252">
                                    <div class="flex justify-between">
                                        <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">3 xonali</p>
                                        <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">№ 50</span>
                                    </div>
                                    <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                                        <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;">690 900 000 UZS</span>
                                        <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #FFFFFF;">98.7 m2 - 7 000 000 UZS/m2</p>
                                    </div>
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
import { ref } from 'vue';
import showRoomMenuBlue from '/showRoomMenuBlue.svg'
import showRoomMenuGray from '/showroomMenuGray.svg'
import showRoomShaxmatkaBlue from '/showroomShaxmatkaBlue.svg'
import showRoomShaxmatkaGray from '/showroomShaxmatkaGray.svg'
import showRoomShaxmatkaGray2 from '/showroomShaxmatkaGray.svg'
import showRoomShaxmatkaBlue2 from '/showroomShaxmatkaBlue.svg'

    export default {
        data() {
            return {
                size: ref('middle'),
                regionOptions: ref([
                {
                    value: 'Samarqand viloyati, Samarqand tumani, улица...',
                    label: 'Samarqand viloyati, Samarqand tumani, улица...',
                },
                {
                    value: 'Samarqand region, Samarqand district, улица...',
                    label: 'Samarqand viloyati, Samarqand tumani, улица...',
                },
                {
                    value: 'Samarqand область, Samarqand район, улица...',
                    label: 'Samarqand viloyati, Samarqand tumani, улица...',    
                },
                ]),
                value: ref(undefined),
                activeButton : 0,
                buttons: [
                    {
                        name:'Ro’yxat',
                        img:  showRoomMenuGray,
                        img2 : showRoomMenuBlue,
                    },
                    {
                        name:'Shaxmatka',
                        img:  showRoomShaxmatkaGray,
                        img2 : showRoomShaxmatkaBlue,
                    },
                    {
                        name:'Shaxmatka +',
                        img:  showRoomShaxmatkaGray2,
                        img2 : showRoomShaxmatkaBlue2,
                    },
                    
                    
                ],
                tableHead :[
                    {
                        tjm : 'TJM nomi',
                        blok : 'Blok',
                        roomNumber : 'Xonadon raqami',
                        floor: 'Qavat',
                        roomAmount :'Xonalar soni',
                        square :'Maydoni',
                        notRepaired : 'Ta’mirsiz (1m² uchun)',
                        repaired: 'Ta’mirli (1m² uchun)',
                        notRepAmount: 'Ta’mirsiz (Umumiy narx)',
                        repAmount : 'Ta’mirli (Umumiy narx)',
                        position: 'Tamirli holati',
                        equipped : 'Holati'
                    }
                ],
                tableBody : [
                    {
                        tjm : 'Hakimi Towers',
                        blok :'4',
                        roomNumber : 'P3',
                        floor: '0',
                        roomAmount : '4',
                        square : '35.4 m²',
                        notRepaired : '35.4 m²',
                        repaired:'35.4 m²',
                        notRepAmount: '159 300 000 UZS',
                        repAmount : '159 300 000 UZS',
                        position: "Ta'mirsiz",
                        equipped : "Bo'sh"
                    },
                    {
                        tjm : 'Hakimi Towers',
                        blok :'4',
                        roomNumber : 'P3',
                        floor: '0',
                        roomAmount : '4',
                        square : '35.4 m²',
                        notRepaired : '35.4 m²',
                        repaired:'35.4 m²',
                        notRepAmount: '159 300 000 UZS',
                        repAmount : '159 300 000 UZS',
                        position: "Ta'mirsiz",
                        equipped : "Bo'sh"
                    },
                    {
                        tjm : 'Hakimi Towers',
                        blok :'4',
                        roomNumber : 'P3',
                        floor: '0',
                        roomAmount : '4',
                        square : '35.4 m²',
                        notRepaired : '35.4 m²',
                        repaired:'35.4 m²',
                        notRepAmount: '159 300 000 UZS',
                        repAmount : '159 300 000 UZS',
                        position: "Ta'mirsiz",
                        equipped : "Bo'sh"
                    },
                    {
                        tjm : 'Hakimi Towers',
                        blok :'4',
                        roomNumber : 'P3',
                        floor: '0',
                        roomAmount : '4',
                        square : '35.4 m²',
                        notRepaired : '35.4 m²',
                        repaired:'35.4 m²',
                        notRepAmount: '159 300 000 UZS',
                        repAmount : '159 300 000 UZS',
                        position: "Ta'mirsiz",
                        equipped : "Bo'sh"
                    },
                    {
                        tjm : 'Hakimi Towers',
                        blok :'4',
                        roomNumber : 'P3',
                        floor: '0',
                        roomAmount : '4',
                        square : '35.4 m²',
                        notRepaired : '35.4 m²',
                        repaired:'35.4 m²',
                        notRepAmount: '159 300 000 UZS',
                        repAmount : '159 300 000 UZS',
                        position: "Ta'mirsiz",
                        equipped : "Bo'sh"
                    },
                    {
                        tjm : 'Hakimi Towers',
                        blok :'4',
                        roomNumber : 'P3',
                        floor: '0',
                        roomAmount : '4',
                        square : '35.4 m²',
                        notRepaired : '35.4 m²',
                        repaired:'35.4 m²',
                        notRepAmount: '159 300 000 UZS',
                        repAmount : '159 300 000 UZS',
                        position: "Ta'mirsiz",
                        equipped : "Bo'sh"
                    },
                    {
                        tjm : 'Hakimi Towers',
                        blok :'4',
                        roomNumber : 'P3',
                        floor: '0',
                        roomAmount : '4',
                        square : '35.4 m²',
                        notRepaired : '35.4 m²',
                        repaired:'35.4 m²',
                        notRepAmount: '159 300 000 UZS',
                        repAmount : '159 300 000 UZS',
                        position: "Ta'mirsiz",
                        equipped : "Bo'sh"
                    },
                    {
                        tjm : 'Hakimi Towers',
                        blok :'4',
                        roomNumber : 'P3',
                        floor: '0',
                        roomAmount : '4',
                        square : '35.4 m²',
                        notRepaired : '35.4 m²',
                        repaired:'35.4 m²',
                        notRepAmount: '159 300 000 UZS',
                        repAmount : '159 300 000 UZS',
                        position: "Ta'mirsiz",
                        equipped : "Bo'sh"
                    },
                ]
            }
        },
        methods: {
            selectButton(button) {
                this.buttons = button;
            },
            setActiveButton(index) {
                this.activeButton = index;
            }
        },
    }
</script>

<style  scoped>
    .divide {
            border-bottom: 1px dashed #95ACAA;
    }
    .showroom-table {
        width: 100%;
        border: 1px solid var(--Line-Container-Line, #EDF1F1);
    }

     
    .showroom-table th,
    .showroom-table td {
        padding: 16px 16px;
    }
    .showroom-table td{
        border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1);
        padding: 16px 16px;
    }
</style>