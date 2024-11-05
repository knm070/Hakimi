<template>
  <div class="bg-[#F4F6F6] h-screen pb-[16px]">
    <div class="bg-[#FFFFFF] py-[12px] px-[24px] flex items-center justify-between">
      <div class="flex items-center gap-[24px]">
        <img src="/hakimiIcon.svg" alt="" />
        <div class="flex items-center gap-[12px]">
          <h2>{{ selectedProjectName || "Select Project" }}:</h2>
          <!-- Project Dropdown -->
          <a-select v-model="selectedProject" :size="size" show-search style="width: 296px" :options="projectOptions" :filter-option="filterOption" @change="fetchHouses"></a-select>
        </div>

        <div class="flex items-center gap-[12px]">
          <h2>{{ selectedHouseName || "Select House" }}:</h2>
          <!-- House Dropdown -->
          <a-select v-model="selectedHouse" :size="size" show-search style="width: 296px" :options="houseOptions" @change="fetchApartments"></a-select>
        </div>
      </div>
      <div>
        <img class="cursor-pointer" src="/circlecCloseIcon.svg" alt="" />
      </div>
    </div>
    <div class="bg-[#FFFFFF] mt-[8px] py-[12px] px-[24px] flex gap-[16px]">
      <div class="flex items-center gap-[8px] border rounded-[8px] py-[13px] px-[14px] w-full max-w-[323px]">
        <svg class="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#72908D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17.5 17.5L13.875 13.875" stroke="#72908D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <input type="text" placeholder="Qidirish" class="outline-none w-full" />
      </div>
      <div class="gap-[8px] border rounded-[8px] py-[13px] px-[14px] w-full max-w-[323px]">
        <input type="text" placeholder="Xonalar soni" class="outline-none w-full" />
      </div>
      <div class="flex">
        <p class="py-[13px] px-[14px] bg-[#F4F6F6]" style="border-radius: 8px 0 0 8px; border: 1px solid var(--Line-Field-Line, #dce3e3)">m2</p>
        <input type="text" placeholder="dan" class="py-[13px] px-[14px] w-full outline-none" style="border: 1px solid var(--Line-Field-Line, #dce3e3)" />
        <input type="text" placeholder="gacha" class="py-[13px] px-[14px] w-full outline-none" style="border-radius: 0 8px 8px 0; border: 1px solid var(--Line-Field-Line, #dce3e3)" />
      </div>
      <div class="flex">
        <p class="py-[13px] px-[14px] bg-[#F4F6F6]" style="border-radius: 8px 0 0 8px; border: 1px solid var(--Line-Field-Line, #dce3e3)">UZS</p>
        <input type="text" placeholder="dan" class="py-[13px] px-[14px] w-full outline-none" style="border: 1px solid var(--Line-Field-Line, #dce3e3)" />
        <input type="text" placeholder="gacha" class="py-[13px] px-[14px] w-full outline-none" style="border-radius: 0 8px 8px 0; border: 1px solid var(--Line-Field-Line, #dce3e3)" />
      </div>
      <div class="flex">
        <p class="py-[13px] px-[14px] bg-[#F4F6F6]" style="border-radius: 8px 0 0 8px; border: 1px solid var(--Line-Field-Line, #dce3e3)">Qavat</p>
        <input type="text" placeholder="dan" class="py-[13px] px-[14px] w-full outline-none" style="border: 1px solid var(--Line-Field-Line, #dce3e3)" />
        <input type="text" placeholder="gacha" class="py-[13px] px-[14px] w-full outline-none" style="border-radius: 0 8px 8px 0; border: 1px solid var(--Line-Field-Line, #dce3e3)" />
      </div>
      <div>
        <button class="flex gap-[12px] py-[12px] px-[18px] bg-[#E5EBFF] rounded-[8px]">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_2_23512" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="24" height="24">
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_2_23512)">
              <path
                d="M11 18C10.7167 18 10.4792 17.9042 10.2875 17.7125C10.0958 17.5208 10 17.2833 10 17C10 16.7167 10.0958 16.4792 10.2875 16.2875C10.4792 16.0958 10.7167 16 11 16H13C13.2833 16 13.5208 16.0958 13.7125 16.2875C13.9042 16.4792 14 16.7167 14 17C14 17.2833 13.9042 17.5208 13.7125 17.7125C13.5208 17.9042 13.2833 18 13 18H11ZM7 13C6.71667 13 6.47917 12.9042 6.2875 12.7125C6.09583 12.5208 6 12.2833 6 12C6 11.7167 6.09583 11.4792 6.2875 11.2875C6.47917 11.0958 6.71667 11 7 11H17C17.2833 11 17.5208 11.0958 17.7125 11.2875C17.9042 11.4792 18 11.7167 18 12C18 12.2833 17.9042 12.5208 17.7125 12.7125C17.5208 12.9042 17.2833 13 17 13H7ZM4 8C3.71667 8 3.47917 7.90417 3.2875 7.7125C3.09583 7.52083 3 7.28333 3 7C3 6.71667 3.09583 6.47917 3.2875 6.2875C3.47917 6.09583 3.71667 6 4 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.28333 20.9042 7.52083 20.7125 7.7125C20.5208 7.90417 20.2833 8 20 8H4Z"
                fill="#002CCC"
              />
            </g>
          </svg>
          Batafsil
        </button>
      </div>
    </div>

    <div class="bg-[#FFFFFF] mt-[8px] py-[16px] px-[24px]">
      <div class="p-[16px] rounded-[14px]" style="border: 1px solid #edf1f1">
        <div class="flex justify-between">
          <div>
            <div class="flex gap-[6px]">
              <div v-for="(button, index) in buttons" :key="index">
                <button
                  class="flex items-center gap-[8px] bg-[#E5EBFF] py-[6px] px-[12px] rounded-[6px]"
                  @click="setActiveButton(index)"
                  :class="['flex items-center gap-[8px] py-[6px] px-[12px] rounded-[6px]', activeButton === index ? 'bg-[#E5EBFF]' : 'bg-[#F4F6F6]']"
                  :style="{ fontFamily: 'Geist', fontWeight: '600', color: activeButton === index ? '#0037FF' : '#72908D' }"
                >
                  <img :src="activeButton === index ? button.img2 : button.img" alt="" />
                  {{ button.name }}
                </button>
              </div>
            </div>
          </div>
          <div v-if="activeButton === 0" class="flex gap-[8px]">
            <img src="/showroomSettings.svg" alt="" />
            <img src="/showroomDownload.svg" alt="" />
          </div>
          <div v-if="activeButton === 1" class="flex gap-[32px]">
            <button @click="selectButton" class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
              {{ selectedButton }}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_2_27365" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2_27365)">
                  <path
                    d="M9.99992 17.5003C8.1527 17.5003 6.57978 16.858 5.28117 15.5732C3.98256 14.2885 3.33325 12.7364 3.33325 10.917C3.33325 10.0003 3.50686 9.1531 3.85409 8.37533C4.20131 7.59755 4.68047 6.9031 5.29159 6.29199L9.99992 1.66699L14.7083 6.29199C15.3194 6.9031 15.7985 7.59755 16.1458 8.37533C16.493 9.1531 16.6666 10.0003 16.6666 10.917C16.6666 12.7364 16.0173 14.2885 14.7187 15.5732C13.4201 16.858 11.8471 17.5003 9.99992 17.5003ZM9.99992 15.8337V4.00033L6.45825 7.50033C5.97214 7.95866 5.60756 8.47602 5.3645 9.05241C5.12145 9.6288 4.99992 10.2503 4.99992 10.917C4.99992 12.2642 5.48603 13.4205 6.45825 14.3857C7.43047 15.351 8.61103 15.8337 9.99992 15.8337Z"
                    fill="#0037FF"
                  />
                </g>
              </svg>
            </button>
            <div v-if="selectedButton === 'Murakkab'" class="flex gap-[24px] items-center">
              <p>Xonadon:</p>
              <div class="flex gap-[12px]">
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#00B252" />
                  </svg>
                  Bo’sh
                </button>
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#FFD800" />
                  </svg>
                  Band qilingan
                </button>
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#DB4F00" />
                  </svg>
                  Sotilgan
                </button>
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#B9C7C6" />
                  </svg>
                  Sotilmaydi
                </button>
                <button>
                  <img src="/showroomBurgerMenu.svg" alt="" />
                </button>
              </div>
            </div>

            <div v-if="selectedButton === 'Oddiy'" class="flex gap-[24px] items-center">
              <p>Xonadon:</p>
              <div class="flex gap-[12px]">
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#00B252" />
                  </svg>
                  Bo’sh
                </button>
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#FFD800" />
                  </svg>
                  Band qilingan
                </button>
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#B9C7C6" />
                  </svg>
                  Sotilmaydi
                </button>
              </div>

              <p>Shartnoma:</p>
              <div class="flex gap-[12px]">
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#0EA5E9" />
                  </svg>
                  Faol
                </button>
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#FFD800" />
                  </svg>
                  Boshlang’ich
                </button>
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#EF4444" />
                  </svg>
                  Tugallangan
                </button>
                <button>
                  <img src="/showroomBurgerMenu.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div v-if="activeButton === 2" class="flex gap-[32px]">
            <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
              Oddiy
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_2_27365" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
                  <rect width="20" height="20" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_2_27365)">
                  <path
                    d="M9.99992 17.5003C8.1527 17.5003 6.57978 16.858 5.28117 15.5732C3.98256 14.2885 3.33325 12.7364 3.33325 10.917C3.33325 10.0003 3.50686 9.1531 3.85409 8.37533C4.20131 7.59755 4.68047 6.9031 5.29159 6.29199L9.99992 1.66699L14.7083 6.29199C15.3194 6.9031 15.7985 7.59755 16.1458 8.37533C16.493 9.1531 16.6666 10.0003 16.6666 10.917C16.6666 12.7364 16.0173 14.2885 14.7187 15.5732C13.4201 16.858 11.8471 17.5003 9.99992 17.5003ZM9.99992 15.8337V4.00033L6.45825 7.50033C5.97214 7.95866 5.60756 8.47602 5.3645 9.05241C5.12145 9.6288 4.99992 10.2503 4.99992 10.917C4.99992 12.2642 5.48603 13.4205 6.45825 14.3857C7.43047 15.351 8.61103 15.8337 9.99992 15.8337Z"
                    fill="#0037FF"
                  />
                </g>
              </svg>
            </button>
            <div class="flex gap-[24px] items-center">
              <p>Xonadon:</p>
              <div class="flex gap-[12px]">
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#00B252" />
                  </svg>
                  Bo’sh
                </button>
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#FFD800" />
                  </svg>
                  Band qilingan
                </button>
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#B9C7C6" />
                  </svg>
                  Sotilmaydi
                </button>
              </div>
            </div>
            <div class="flex gap-[24px] items-center">
              <p>Shartnoma:</p>
              <div class="flex gap-[12px]">
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#0EA5E9" />
                  </svg>
                  Faol
                </button>
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#FFD800" />
                  </svg>
                  Boshlang’ich
                </button>
                <button class="flex items-center gap-[8px] rounded-[6px] py-[6px] px-[12px]" style="border: 1px solid #edf1f1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#EF4444" />
                  </svg>
                  Tugallangan
                </button>
                <button>
                  <img src="/showroomBurgerMenu.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="divide pt-[16px]"></div>
        <div :class="[isBlockInfoOpen ? 'flex' : 'block']">
          <div v-if="activeButton === 0" class="pt-[16px]">
            <table class="showroom-table">
              <thead>
                <tr v-for="(head, index) in tableHead" :key="index" class="bg-[#EDF1F1] text-[14px]" style="font-family: Geist; font-weight: 500; color: #4f7471">
                  <th>
                    <p>ID</p>
                  </th>
                  <th>
                    <p>{{ head.tjm }}</p>
                  </th>
                  <th>
                    <p>{{ head.blok }}</p>
                  </th>
                  <th>
                    <p>{{ head.roomNumber }}</p>
                  </th>
                  <th>
                    <p>{{ head.floor }}</p>
                  </th>
                  <th>
                    <p>{{ head.roomAmount }}</p>
                  </th>
                  <th>
                    <p>{{ head.square }}</p>
                  </th>
                  <th>
                    <p class="w-[80px]">{{ head.notRepaired }}</p>
                  </th>
                  <th>
                    <p class="w-[78px]">{{ head.repaired }}</p>
                  </th>
                  <th>
                    <p>{{ head.notRepAmount }}</p>
                  </th>
                  <th>
                    <p class="w-[100px]">{{ head.repAmount }}</p>
                  </th>
                  <th>
                    <p>{{ head.position }}</p>
                  </th>
                  <th>
                    <p>{{ head.equipped }}</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(body, index) in paginatedData" :key="index" :class="['text-[14px]', index % 2 == 1 ? 'bg-[#F4F6F6]' : 'bg-[#FFFFFF]']" style="font-family: Geist; font-weight: 600; color: #000000">
                  <td class="w-[260px]">{{ body.id }}</td>
                  <td class="w-[260px]">{{ body.project_name }}</td>
                  <td class="w-[148px]">{{ body.house_number }}</td>
                  <td class="w-[128px]">{{ body.number }}</td>
                  <td class="w-[148px]">{{ body.floor_number }}</td>
                  <td class="w-[148px]">
                    <p class="bg-[#C5F7DC] rounded-full w-[24px] text-center py-[2px] pr-[1px]">{{ body.room_numbers }}</p>
                  </td>
                  <td class="w-[148px]">{{ body.area }}</td>
                  <td class="w-[148px]">{{ body.unrepaired_price.toLocaleString() }}</td>
                  <td class="w-[148px]">{{ body.repaired_price.toLocaleString() }}</td>
                  <td class="w-[148px]">{{ body.unrepaired_total_price.toLocaleString() }}</td>
                  <td class="w-[120px]">{{ body.repaired_total_price.toLocaleString() }}</td>
                  <td class="w-[120px]">{{ body.condition }}</td>
                  <td class="w-[120px]">
                    <p :class="['w-[100] rounded-full text-center py-[2px]', body.sale_type === 'for_sale' ? 'bg-[#58D18F]' : '', body.sale_type === 'sold_out' ? 'bg-[#FF6347]' : '', body.sale_type === 'not_for_sale' ? 'bg-[#B0B0B0]' : '']">
                      {{ body.sale_type }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- Pagination Controls -->
            <div class="pagination-controls">
              <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
              <span>Page {{ currentPage }} of {{ totalPages }}</span>
              <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
            </div>
          </div>

          <div class="overflow-auto">
            <div v-if="activeButton === 1" class="">
              <div class="pt-[16px] px-[16px] flex items-center gap-[24px]">
                <div class="flex flex-col-reverse pt-[30px]">
                  <div v-for="row in rows" :key="row" class="pt-[10px] pb-[9px] text-[14px]">
                    {{ row - 1 }}
                  </div>
                </div>
                <div class="flex items-center gap-[64px] overflow-auto">
                  <div class="flex flex-col items-start">
                    <div>
                      <p>1</p>
                      <p class="pt-[12px]">1- podez</p>
                    </div>
                    <div class="flex flex-col gap-[9px] pt-[16px]">
                      <div v-for="(row, rowIndex) in blocks" :key="rowIndex" class="flex gap-[9px]">
                        <div v-for="(block, blockIndex) in row" :key="blockIndex" :style="getClass(block)" @click="openBlock(block)" class="flex w-[40px] h-[40px] items-center justify-center rounded-[6px] text-[14px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #ffffff">
                          {{ block }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-start">
                    <div>
                      <p>1</p>
                      <p class="pt-[12px]">2 - podez</p>
                    </div>
                    <div class="flex flex-col gap-[9px] pt-[16px]">
                      <div v-for="(row, rowIndex) in second" :key="rowIndex" class="flex gap-[9px]">
                        <div v-for="(block, blockIndex) in row" :key="blockIndex" :style="getClass(block)" class="flex w-[40px] h-[40px] items-center justify-center rounded-[6px] text-[14px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #ffffff">
                          {{ block }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-start">
                    <div>
                      <p>1</p>
                      <p class="pt-[12px]">1- podez</p>
                    </div>
                    <div class="flex flex-col gap-[9px] pt-[16px]">
                      <div v-for="(row, rowIndex) in blocks" :key="rowIndex" class="flex gap-[9px]">
                        <div v-for="(block, blockIndex) in row" :key="blockIndex" :style="getClass(block)" class="flex w-[40px] h-[40px] items-center justify-center rounded-[6px] text-[14px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #ffffff">
                          {{ block }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-start">
                    <div>
                      <p>1</p>
                      <p class="pt-[12px]">2 - podez</p>
                    </div>
                    <div class="flex flex-col gap-[9px] pt-[16px]">
                      <div v-for="(row, rowIndex) in second" :key="rowIndex" class="flex gap-[9px]">
                        <div v-for="(block, blockIndex) in row" :key="blockIndex" :style="getClass(block)" class="flex w-[40px] h-[40px] items-center justify-center rounded-[6px] text-[14px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #ffffff">
                          {{ block }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-start">
                    <div>
                      <p>1</p>
                      <p class="pt-[12px]">1- podez</p>
                    </div>
                    <div class="flex flex-col gap-[9px] pt-[16px]">
                      <div v-for="(row, rowIndex) in blocks" :key="rowIndex" class="flex gap-[9px]">
                        <div v-for="(block, blockIndex) in row" :key="blockIndex" :style="getClass(block)" class="flex w-[40px] h-[40px] items-center justify-center rounded-[6px] text-[14px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #ffffff">
                          {{ block }}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col items-start">
                    <div>
                      <p>1</p>
                      <p class="pt-[12px]">2 - podez</p>
                    </div>
                    <div class="flex flex-col gap-[9px] pt-[16px]">
                      <div v-for="(row, rowIndex) in second" :key="rowIndex" class="flex gap-[9px]">
                        <div v-for="(block, blockIndex) in row" :key="blockIndex" :style="getClass(block)" class="flex w-[40px] h-[40px] items-center justify-center rounded-[6px] text-[14px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #ffffff">
                          {{ block }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col-reverse pt-[30px]">
                  <div v-for="row in rows" :key="row" class="pt-[10px] pb-[9px] text-[14px]">
                    {{ row - 1 }}
                  </div>
                </div>
              </div>
            </div>

            <div v-if="activeButton === 2" class="pt-[16px]">
              <div class="pl-[70px] pb-[16px]">
                <p>1</p>
                <p class="pt-[12px]">1- podez</p>
              </div>
              <div class="flex gap-[64px] overflow-auto max-h-screen overflow-y-auto">
                <div class="flex flex-col gap-[8px]">
                  <div class="flex gap-[64px] items-center">
                    <span>9</span>
                    <div class="flex gap-[8px] w-full">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>8</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>7</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>6</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>5</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>4</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>3</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>2</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>1</span>

                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-[8px]">
                  <div class="flex gap-[64px] items-center">
                    <span>9</span>
                    <div class="flex gap-[8px] w-full">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>8</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>7</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>6</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>5</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>4</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>3</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>2</span>
                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-[64px] items-center">
                    <span>1</span>

                    <div class="flex gap-[8px]">
                      <div v-for="(shaxmatka2, index) in shaxmatka2" :key="index" class="p-[12px] rounded-[8px] bg-[#00B252] w-[280px]" style="border: 1px solid #00b252">
                        <div class="flex justify-between">
                          <p class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.room }}</p>
                          <span class="text-[12px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.number }}</span>
                        </div>
                        <div class="w-full py-[4px] px-[12px] mt-[10px] rounded-[8px] bg-[#FFFFFF26]">
                          <span class="text-[18px]" style="font-family: Geist; font-weight: 600; color: #ffffff">{{ shaxmatka2.amount }}</span>
                          <p class="pt-[2px] text-[16px]" style="font-family: Geist; font-weight: 400; color: #ffffff">{{ shaxmatka2.perSquare }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="isBlockInfoOpen" class="bg-[#F4F6F6] max-w-[373px] w-full p-[6px] my-[16px] mr-[16px] rounded-[8px]">
            <div class="bg-[#FFFFFF] p-[12px] rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1); box-shadow: 0px 1px 2px 0px #1823220d">
              <div class="flex justify-between items-start">
                <p>Guruh</p>
                <img @click="closeBlock" src="/closeWhite.svg" alt="" width="32px" height="32px" />
              </div>
              <div class="flex gap-[8px] pt-[12px]">
                <span class="w-[32px] h-[32px] flex items-center justify-center rounded-[6px] text-[14px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #ffffff" :style="getClass(selecetedBlock)">
                  {{ selecetedBlock }}
                </span>
                <img src="/addWhite.svg" alt="" />
              </div>

              <button class="py-[8px] w-full rounded-[8px] text-white mt-[12px]" style="background: linear-gradient(180deg, #0037ff 0%, #002dd1 100%); border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%)">Batafsil</button>
            </div>

            <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] mt-[6px]" style="border: 1px solid var(--Line-Container-Line, #edf1f1); box-shadow: 0px 1px 2px 0px #1823220d">
              <div class="flex justify-between items-center">
                <p>
                  Xonadon №
                  <span>{{ selecetedBlock }}</span>
                </p>
                <div class="bg-[#FEF2F2] flex gap-[8px] py-[6px] px-[10px] rounded-[6px]">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 2.5H3.75C3.05964 2.5 2.5 3.05964 2.5 3.75V16.25C2.5 16.9404 3.05964 17.5 3.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V3.75C17.5 3.05964 16.9404 2.5 16.25 2.5Z" fill="#EF4444" />
                  </svg>
                  Tugallangan
                </div>
              </div>

              <div class="divide pt-[12px]"></div>

              <div class="pt-[12px] flex items-center justify-center">
                <img src="/assets/img/housePlan.jpg" alt="" />
              </div>
              <div class="divide pt-[12px]"></div>

              <div class="bg-[#E5EBFF] rounded-[4px] p-[12px] mt-[12px] flex justify-between items-center">
                <p>Narxi</p>
                <div>
                  <span>656 000 000 UZS</span>
                  <p>8 000 000 UZS/m²</p>
                </div>
              </div>
              <div>
                <p class="text-center">Xonadon ma’lumotlari</p>
                <div class="flex justify-between mt-[12px] p-[6px] rounded-[6px] bg-[#EDF1F1]">
                  <p>Bino</p>
                  <span>4</span>
                </div>
                <div class="flex justify-between p-[6px] rounded-[6px]">
                  <p>Qavat</p>
                  <span>4</span>
                </div>
                <div class="flex justify-between p-[6px] rounded-[6px] bg-[#EDF1F1]">
                  <p>Xonadon raqami</p>
                  <span>20</span>
                </div>
                <div class="flex justify-between p-[6px] rounded-[6px]">
                  <p>Xonalar soni</p>
                  <span>2</span>
                </div>
                <div class="flex justify-between p-[6px] rounded-[6px] bg-[#EDF1F1]">
                  <p>Umumiy maydoni</p>
                  <span>82 m2</span>
                </div>
                <div class="flex justify-between p-[6px] rounded-[6px]">
                  <p>Boshlang'ich to'lov (0.1%)</p>
                  <span>656 000 UZS</span>
                </div>
                <div class="flex justify-between p-[6px] rounded-[6px] bg-[#EDF1F1]">
                  <p>To'lov muddati</p>
                  <span>48 oy</span>
                </div>
                <div class="flex justify-between p-[6px] rounded-[6px]">
                  <p>Oylik to'lov</p>
                  <span>13 653 000 UZS</span>
                </div>
                <div class="flex justify-between p-[6px] rounded-[6px] bg-[#EDF1F1]">
                  <p>Holati</p>
                  <span>Ta'mirsiz</span>
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
import { ref } from "vue";
import showRoomMenuBlue from "/showRoomMenuBlue.svg";
import showRoomMenuGray from "/showroomMenuGray.svg";
import showRoomShaxmatkaBlue from "/showroomShaxmatkaBlue.svg";
import showRoomShaxmatkaGray from "/showroomShaxmatkaGray.svg";
import showRoomShaxmatkaGray2 from "/showroomShaxmatkaGray.svg";
import showRoomShaxmatkaBlue2 from "/showroomShaxmatkaBlue.svg";
import axios from "axios";
import { useI18n } from "vue-i18n";

export default {
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
      table_data: [],
      selectedProject: null, // Holds the selected project ID
      projects: [], // Stores raw project data
      regionOptions: [], // Stores the formatted options for the select
      selectedProjectName: "", // Stores the selected project name      houses: [],
      selectedHouse: null,
      projectOptions: [],
      houseOptions: [],
      selectedHouseName: "",
      apartments: [],
      currentPage: 1,
      itemsPerPage: 10,
      size: ref("middle"),
      activeButton: 0,
      buttons: [
        {
          name: "Ro’yxat",
          img: showRoomMenuGray,
          img2: showRoomMenuBlue,
        },
        {
          name: "Shaxmatka",
          img: showRoomShaxmatkaGray,
          img2: showRoomShaxmatkaBlue,
        },
        {
          name: "Shaxmatka +",
          img: showRoomShaxmatkaGray2,
          img2: showRoomShaxmatkaBlue2,
        },
      ],
      tableHead: [
        {
          tjm: "TJM nomi",
          blok: "Blok",
          roomNumber: "Xonadon raqami",
          floor: "Qavat",
          roomAmount: "Xonalar soni",
          square: "Maydoni",
          notRepaired: "Ta’mirsiz (1m² uchun)",
          repaired: "Ta’mirli (1m² uchun)",
          notRepAmount: "Ta’mirsiz (Umumiy narx)",
          repAmount: "Ta’mirli (Umumiy narx)",
          position: "Tamirli holati",
          equipped: "Holati",
        },
      ],
   
      shaxmatka2: [
        {
          room: "3 xonali",
          number: "№ 50",
          amount: "690 900 000 UZS",
          perSquare: "98.7 m2 - 7 000 000 UZS/m2",
        },
        {
          room: "3 xonali",
          number: "№ 50",
          amount: "690 900 000 UZS",
          perSquare: "98.7 m2 - 7 000 000 UZS/m2",
        },
        {
          room: "3 xonali",
          number: "№ 50",
          amount: "690 900 000 UZS",
          perSquare: "98.7 m2 - 7 000 000 UZS/m2",
        },
        {
          room: "3 xonali",
          number: "№ 50",
          amount: "690 900 000 UZS",
          perSquare: "98.7 m2 - 7 000 000 UZS/m2",
        },
        {
          room: "3 xonali",
          number: "№ 50",
          amount: "690 900 000 UZS",
          perSquare: "98.7 m2 - 7 000 000 UZS/m2",
        },
        {
          room: "3 xonali",
          number: "№ 50",
          amount: "690 900 000 UZS",
          perSquare: "98.7 m2 - 7 000 000 UZS/m2",
        },
        {
          room: "3 xonali",
          number: "№ 50",
          amount: "690 900 000 UZS",
          perSquare: "98.7 m2 - 7 000 000 UZS/m2",
        },
      ],
      selectedButton: "Murakkab",
      rows: 10,
      blocks: [
        [93, 10, 15, 27, 83, 45], // Row 9
        [67, 45, 23, 93, 7, 71], // Row 8
        [97, 48, 88, 28, 59, 58], // Row 7
        [96, 93, 96, 62, 68, 82], // Row 6
        [18, 54, 51, 2, 89, 54], // Row 5
        [26, 56, 78, 21, 49, 9], // Row 4
        [84, 61, 28, 25, 43, 20], // Row 3
        [4, 56, 56, 25, 40, ""], // Row 2
        [],
        [],
        [], // Empty Rows for Row 0, 1, 2
      ],
      second: [
        [93, 10, 15, 27, 83, 45, 84, 61], // Row 9
        [67, 45, 23, 93, 7, 71, 10, 15], // Row 8
        [97, 48, 88, 28, 59, 58, 93, 10], // Row 7
        [96, 93, 96, 62, 68, 82, 25, 40], // Row 6
        [18, 54, 51, 2, 89, 54, 18, 2], // Row 5
        [26, 56, 78, 21, 49, 9, 84, 61], // Row 4
        [84, 61, 28, 25, 43, 20, 84, 61], // Row 3
        [4, 56, 56, 25, 40, 83, 45], // Row 2
        [],
        [],
        [], // Empty Rows for Row 0, 1, 2
      ],

      selecetedBlock: null,
      isBlockInfoOpen: false,
    };
  },
  mounted() {
    this.fetchTableData();
    this.fetchProjects();
  },
  methods: {
    changeLanguage(event) {
      this.currentLanguage = event.target.value;
      this.$i18n.locale = this.currentLanguage;
    },
    selectButton(button) {
      this.selectedButton = this.selectedButton === "Murakkab" ? "Oddiy" : "Murakkab";
    },
    setActiveButton(index) {
      this.activeButton = index;
    },

    openBlock(block) {
      this.selecetedBlock = block;
      this.isBlockInfoOpen = true;
    },

    closeBlock(block) {
      this.selecetedBlock = block;
      this.isBlockInfoOpen = false;
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
    // Navigate to the next page
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    async fetchTableData() {
      try {
        const response = await axios.get("/projects/apartments/list/?limit=1000&offset=100");
        this.table_data = response.data.results;
      } catch (error) {
        this.error = "An error occurred while fetching data";
        console.error(error);
      }
    },
    async fetchProjects() {
      try {
        const response = await axios.get("/projects");
        this.projects = response.data.results;
        this.projectOptions = this.projects.map((project) => ({
          value: project.id,
          label: project.name,
        }));
      } catch (error) {
        console.error("An error occurred while fetching projects:", error);
      }
    },
    async fetchHouses(projectId) {
        this.selectedProject=projectId;
      this.selectedProjectName = this.projectOptions.find((option) => option.value === projectId)?.label;
      this.selectedHouse = null;
      this.houseOptions = [];
      this.apartments = [];

      try {
        const response = await axios.get(`/projects/houses/?project_id=${projectId}`);
        this.houseOptions = response.data.results.map((house) => ({
          value: house.id,
          label: house.name,
        }));
      } catch (error) {
        console.error("An error occurred while fetching houses:", error);
      }
    },
    async fetchApartments(houseId) {
        this.selectedHouseName = this.houseOptions.find((option) => option.value === houseId)?.label;
      this.selectedHouse = houseId;
      console.log("Selected Project:", this.selectedProject);
      console.log("Selected House:", this.selectedHouse);
      if (this.selectedProject && this.selectedHouse) {
        try {
          const response = await axios.get(`/projects/apartments/shaxmatka/?project_id=${this.selectedProject}&house_id=${this.selectedHouse}`);
          this.apartments = response.data.results;
          console.log("Fetched Apartments:", this.apartments); // Debugging log
        } catch (error) {
          console.error("An error occurred while fetching apartments:", error);
        }
      } else {
        console.warn("Both project and house must be selected before fetching apartments.");
      }
    },
    filterOption(input, option) {
      return option.label.toLowerCase().includes(input.toLowerCase());
    }

  },
  computed: {
    // Calculate total pages based on data length and items per page
    totalPages() {
      return Math.ceil(this.table_data.length / this.itemsPerPage);
    },
    // Slice the data array for the current page
    paginatedData() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.table_data.slice(start, end);
    },

    getClass() {
      return (block) => {
        if (this.selectedButton === "Murakkab") {
          if (block > 40) {
            return "background: #00B252";
          } else if (block < 20) {
            return "background :#DB4F00";
          } else if (block < 10) {
            return "background: #B9C7C6";
          } else {
            return "background: #FFFFF; border: 1px solid #00B252";
          }
        } else if (this.selectedButton === "Oddiy") {
          if (block > 40) {
            return "background: #0EA5E9";
          } else if (block < 20) {
            return "background :#EF4444";
          } else if (block < 10) {
            return "background: #B9C7C6";
          } else {
            return "background: #FFFFF; border: 1px solid #00B252";
          }
        }
      };
    },
  },
};
</script>

<style scoped>
.divide {
  border-bottom: 1px dashed #95acaa;
}
.showroom-table {
  width: 100%;
  border: 1px solid var(--Line-Container-Line, #edf1f1);
}

.showroom-table th,
.showroom-table td {
  padding: 16px 16px;
}
.showroom-table td {
  border-bottom: 1px solid var(--Line-Container-Line, #edf1f1);
  padding: 16px 16px;
}

.showroom-table tbody tr:hover {
  background: #edf1f1;
  transition: all 200ms;
}
.pagination-controls {
  display: flex;
  justify-content: center;
  margin-top: 16px;
}

button {
  margin: 0 8px;
}
</style>
