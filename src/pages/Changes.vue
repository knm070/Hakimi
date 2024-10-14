<template>
  <div class="bg-[#F4F6F6] flex  h-full">
    <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
      <div class="m-[8px] bg-[#FFFFFF] p-[16px] rounded-[14px] w-full h-full" style="border: 1px solid #EDF1F1">
        <div class="flex items-center justify-between">
                <div>
                    <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">Changes</p>
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
      <div>
        <ul class="flex pt-[16px]">
          <li v-for="(tab, index) in tabs" :key="index"
          class="cursor-pointer px-[24px] py-[12px] text-[14px] relative"   @click="setActiveTab(index)"
          :style="{fontFamily:'Geist', fontWeight:'600', color: activeTab === index ? '#335FFF' : '#000000', borderBottom : activeTab === index  ? '1px solid #335FFF' : 'none' }">
            {{ tab }}
            <span v-if="index !== tabs.length - 1" class="absolute right-0  h-[16px]" style="border-right: 2px solid #EDF1F1;"></span>
          </li>
        </ul>
      </div>

      <div class="bg-[#F4F6F6] mt-[16px] p-[6px] rounded-[8px] ">
        <div v-if="activeTab === 0" class="flex gap-[6px]">
          <div class="bg-[#FFFFFF] py-[24px] px-[12px] rounded-[6px]  w-full h-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
            <div class="bg-[#F4F6F6] rounded-[8px] p-[4px] w-[220px] flex gap-[4px]">
              <button @click="selectButton('individuals')" :class="['py-[4px] px-[12px] rounded-[6px] text-[14px] transition-all duration-300', selectedButton === 'individuals' ? 'bg-[#FFFFFF]' : 'bg-[#F4F6F6]']" :style="{fontFamily: 'Geist', fontWeight: '600', color: selectedButton === 'individuals' ?  '#000000' : '#72908D' , boxShadow: selectedButton === 'individuals' ? '0px 1px 2px 0px #0000001F' : 'none'}">Individuals</button>
              <button @click="selectButton('legalEntities')" :class="[' py-[4px] px-[12px] rounded-[6px] text-[14px]', selectedButton === 'legalEntities' ?  'bg-[#FFFFFF]' : 'bg-[#F4F6F6]']" :style="{fontFamily: 'Geist', fontWeight: '600', color: selectedButton === 'legalEntities' ?  '#000000' : '#72908D', boxShadow: selectedButton === 'legalEntities' ? '0px 1px 2px 0px #0000001F' : 'none', transition:'color 0.3s, background-color 0.3s, box-shadow 0.3s'}">Legal entities</button>   
            </div>
            <div v-if="selectedButton === 'individuals'">
              <div class="pt-[32px] flex gap-[24px] items-end">
                  <div>
                      <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Passport series and number</p>
                      <div class="flex gap-[12px] mt-[12px] ">
                          <input type="text" class="w-[80px] rounded-[8px] p-[10px] border-none outline-none" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                          <input type="text" class="w-[250px] rounded-[8px] p-[10px] border-none outline-none" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                      </div>
                  </div>
                  <div class="">
                      <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Date of birth</p>
                      <a-date-picker :format="dateFormatList" placeholder="dd.mm.yyyy" class="w-[260px] p-[10px] mt-[12px] "/>
                  </div>
                  <div>
                       <button class="py-[12px] w-[161px] text-[16px] rounded-[8px]" style=" font-family: Geist; font-weight: 600; color: #FFFFFF ; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Search</button>
                  </div>
              </div>
              <div class="pt-[36px]">
                          <h2 class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A">Client information</h2>
                          <div class="divide pt-[16px]"></div>
                          <div class="pt-[12px] flex justify-between">
                              <div>
                                  <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Cellphone number</p>
                                  <div class="pt-[12px] flex items-end">
                                      <div class="w-[80px] py-[10px] px-[14px] flex items-center gap-[10px]" style="border-radius: 8px 0 0 8px; border: 1px solid var(--Line-Field-Line, #DCE3E3)">  
                                          <img src="/uzIcon.svg" alt="">
                                          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M12.9207 0.180176H6.69072H1.08072C0.120725 0.180176 -0.359275 1.34018 0.320725 2.02018L5.50072 7.20018C6.33072 8.03018 7.68073 8.03018 8.51073 7.20018L10.4807 5.23018L13.6907 2.02018C14.3607 1.34018 13.8807 0.180176 12.9207 0.180176Z" fill="#72908D"/>
                                          </svg>
                                      </div>
                                      <div class="w-[240px] flex items-center py-[13px] px-[14px]" style="border-radius: 0 8px 8px 0; border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                          <input v-model="searchQueryNumder" type="text" class=" w-[240px] border-none outline-none text-[16px]" style="font-family: Geist; font-weight: 400; color: #000000;">
                                      </div>
                                          <input type="checkbox" class="w-[24px] h-[24px] border-none outline-none ml-[12px]" >
                                  </div>
                                      <p class="pt-[12px] text-right text-[16px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #0037FF;">Add phone number</p>
                              </div>
                              <div>
                                  <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>First name</p>
                                  <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                  
                                  <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Last name</p>
                                  <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                  
                                  <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Middle name</p>
                                  <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                              </div>
                          </div>
  
                        <div>
                            <h2 class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">Passport information</h2>
                            <div class="divide pt-[12px]"></div>
                            <div class="flex justify-between pt-[12px]">
                          <div>
                          <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Given date</p>
                          <a-date-picker :format="dateFormatList" placeholder="dd.mm.yyyy" class="w-[400px] p-[12px] rounded-[8px] mt-[12px]"/>
                          
                          <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Validity period</p>
                          <a-date-picker :format="dateFormatList" placeholder="dd.mm.yyyy" class="w-[400px] p-[12px] rounded-[8px] mt-[12px]"/>
                          
                      </div>
                      <div>
                              <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span> Given place</p>
                              <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                      </div>
                      </div>
                  </div>
                  <div class="pt-[32px]">
                      <h2 class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">Residential address information</h2>
                      <div class="divide pt-[12px]"></div>
                      <div class="flex gap-[24px] pt-[12px]">
                          <div class="">
                              <p class=" text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D">Country</p>
                              <div >
                                  <a-select class="mt-[12px]"
                                      v-model:value="value"
                                      :size="size"
                                      show-search
                                      placeholder="Select a country"
                                      style="width: 260px "
                                      :options="countryOptions"
                                      :filter-option="filterOption">
                                  </a-select>
                              </div>
                          </div>
                          <div>
                              <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Province  </p>
                              <div >
                                  <a-select class="mt-[12px]"
                                      v-model:value="value"
                                      :size="size"
                                      show-search
                                      placeholder="Select an area"
                                      style="width: 260px "
                                      :options="cityOptions"
                                      :filter-option="filterOption">
                                  </a-select>
                              </div>
                          </div>
                          <div>
                              <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>City/district</p>
                              <div >
                                  <a-select class="mt-[12px]"
                                      v-model:value="value"
                                      show-search
                                            placeholder="Select an area"
                                            :size="size"
                                            style="width: 255px "
                                            :options="options"
                                            :filter-option="filterOption">
                                    </a-select>
                              </div>
                          </div>
                      </div>
                      <div class="flex gap-[24px] pt-[12px]">
                          <div>
                              <p class="text-[16px] " style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>MFY, street, house</p>
                              <textarea class="w-[400px] h-[48px] rounded-[8px] resize-none mt-[12px] outline-none border-none p-[8px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
                          </div>
                          <div>
                              <p class="text-[16px] " style="font-family: Geist; font-weight: 600; color: #72908D;">Work place</p>
                              <textarea class="w-[400px] h-[48px] rounded-[8px] resize-none mt-[12px] outline-none border-none p-[8px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
                          </div>
                      </div>
                      <div class="flex gap-[24px] pt-[12px]">
                        <div>
                          <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;">INN</p>
                          <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                        </div>
                        <div>
                          <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;">PIN</p>
                          <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                        </div>
                      </div>
                  </div>
              </div>
            </div>
            <div v-if="selectedButton === 'legalEntities'">
                <div class="pt-[36px]">
                  <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">Initial information</p>
                  <div class="divide pt-[12px]"></div>
                  <div class="pt-[12px] flex justify-between">
                    <div>
                        <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span> Enterprise name</p>
                        <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                        <div class="pt-[24px]">
                            <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Cellphone number</p>
                            <div class="pt-[12px] flex items-end">
                                <div class="w-[80px] py-[12px] px-[14px] flex items-center gap-[10px]" style="border-radius: 8px 0 0 8px; border: 1px solid var(--Line-Field-Line, #DCE3E3)">  
                                    <img src="/uzIcon.svg" alt="">
                                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.9207 0.180176H6.69072H1.08072C0.120725 0.180176 -0.359275 1.34018 0.320725 2.02018L5.50072 7.20018C6.33072 8.03018 7.68073 8.03018 8.51073 7.20018L10.4807 5.23018L13.6907 2.02018C14.3607 1.34018 13.8807 0.180176 12.9207 0.180176Z" fill="#72908D"/>
                                    </svg>
                                </div>
                                <div class="w-[240px] flex items-center py-[13px] px-[14px]" style="border-radius: 0 8px 8px 0; border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                                    <input v-model="searchQueryNumder" type="text" class=" w-[240px] border-none outline-none">
                                </div>
                                    <input type="checkbox" class="w-[24px] h-[24px] border-none outline-none ml-[12px]" >
                                </div>
                                <p class="pt-[12px] w-[358px] text-right text-[16px] cursor-pointer" style="font-family: Geist; font-weight: 500; color: #0037FF">Add phone number</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Country</p>
                        <select v-model="selected"  class="w-[400px] p-[12px] rounded-[8px] mt-[10px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <option disabled >Please select one</option>
                            <option>Uzbekistan</option>
                            <option>Russia</option>
                            <option>USA</option>
                        </select>            
                        <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Province</p>
                        <select v-model="selected"  class="w-[400px] p-[12px] rounded-[8px] mt-[10px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <option disabled >Please select one</option>
                            <option>Uzbekistan</option>
                            <option>Russia</option>
                            <option>USA</option>
                        </select>            
                        <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>City/district</p>
                        <select v-model="selected"  class="w-[400px] p-[12px] rounded-[8px] mt-[10px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <option disabled >Please select one</option>
                            <option>Uzbekistan</option>
                            <option>Russia</option>
                            <option>USA</option>
                        </select>            
                        <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>House</p>
                        <select v-model="selected"  class="w-[400px] p-[12px] rounded-[8px] mt-[10px]" style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <option disabled >Please select one</option>
                            <option>Uzbekistan</option>
                            <option>Russia</option>
                            <option>USA</option>
                        </select>            
                                  
                    </div>
                </div>
                <div>
                    <p class="pt-[36px] text-[16px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">Legal information</p>
                    <div class="divide pt-[12px]"></div>
                    <div class="flex gap-[24px]">
                        <div>
                            <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>INN</p>
                            <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>MFO</p>
                            <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Account number</p>
                            <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                        </div>
                        <div>
                            <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>OKED</p>
                            <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Bank name</p>
                            <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                            <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Director</p>
                            <input type="text" class="rounded-[8px] w-[400px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="flex justify-center pt-[32px]">
              <button class="text-[16px] py-[8px] w-[220px] rounded-[8px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%); border: 1px solid;border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Create</button>
            </div>
          </div>
          <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] w-full h-[252px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
            <div class="flex gap-[12px] items-center py-[12px] pl-[20px] rounded-[12px] focus-within:border-blue-400" style="border: 1px solid #B9C7C6">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6668 14.6663L13.3335 13.333M14.0002 7.66634C14.0002 11.1641 11.1646 13.9997 7.66683 13.9997C4.16903 13.9997 1.3335 11.1641 1.3335 7.66634C1.3335 4.16854 4.16903 1.33301 7.66683 1.33301C11.1646 1.33301 14.0002 4.16854 14.0002 7.66634Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <input type="text" placeholder="Search client" class="text-[14px] outline-none" style="font-family: Geist; font-weight: 500; color: #B9C7C6;">
            </div>
            <div class="pt-[48px]  flex flex-col items-center">
              <h2 class="text-[14px]" style="font-family: Geist; font-weight: 600; color:  #000000;">Client is not selected...</h2>
              <p class="text-[14px] pt-[8px] text-center" style="font-family: Geist; font-weight: 400; color: #4F7471;">Search for and select a customer from the search section</p>
            </div>
            <div class="pt-[16px] pb-[24px]">
              <button class="p-[12px] w-full rounded-[8px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%); border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%); box-shadow: 0px 4px 12px -2px #001B7EB8;box-shadow: 0px 0px 0px 1px #0025AD;">Next step</button>
            </div>
          </div>
        </div>
        <div v-if="activeTab === 1" class="flex gap-[6px]">
          <div class="bg-[#FFFFFF] py-[24px] px-[12px] rounded-[6px]  w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
            <h2 class="text-[16px]" style="font-family: Geist; font-weight: 600; color:#3F5D5A;">Contact informations</h2>
            <div class="divide pt-[12px]"></div>
            <div class="flex gap-[24px]">
              <div>
                <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Contract number</p>
                <input type="text" class="rounded-[8px] w-[289px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
              </div>
              <div>
                <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Contract amount</p>
                <input type="text" class="rounded-[8px] w-[289px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
              </div>
              <div>
                <p class="text-[16px] pt-[24px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Valyuta</p>
                <!-- <input type="text" class="rounded-[8px] w-[289px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"> -->
                 <select class="rounded-[8px] w-[289px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                  <option disabled></option>
                  <option value="">UZS</option>
                  <option value="">RUB</option>
                  <option value="">USD</option>
                  <option value="">EUR</option>
                 </select>
              </div>
            </div>
            <div class="flex gap-[24px]">
              <div>
                <p class="text-[16px] pt-[32px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span> Initial payment</p>
                <input type="text" class="rounded-[8px] w-[289px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
              </div>
              <div>
                <p class="text-[16px] pt-[32px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Discount</p>
                <input type="text" class="rounded-[8px] w-[289px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
              </div>
              <div>
                <p class="text-[16px] pt-[32px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Responsible employee</p>
                <!-- <input type="text" class="rounded-[8px] w-[289px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"> -->
                 <select class="rounded-[8px] w-[289px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
                  <option disabled></option>
                  <option value="">REZAMANOV SHUKURALI</option>
                  <option value="">REZAMANOV SHUKURALI</option>
                  <option value="">REZAMANOV SHUKURALI</option>
                  <option value="">REZAMANOV SHUKURALI  </option>
                 </select>
              </div>
            </div>
            <div class="pt-[32px]">
              <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Discount explanation</p>
              <textarea type="text" class="rounded-[8px] resize-none w-full p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
            </div>
            <div class="flex gap-[24px] pt-[32px]">
              <div>
                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Contract period (month)</p>
                <input type="text" class="rounded-[8px] w-[445px] p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)">
              </div>
              <div>
                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Date of creation of the contract</p>
                <a-date-picker :format="dateFormatList" placeholder="dd.mm.yyyy" class="w-[445px] p-[12px] mt-[12px] "/>
              </div>
            </div>
            <div class="pt-[32px]">
              <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Contract period (month)</p>
              <a-date-picker :format="dateFormatList" placeholder="dd.mm.yyyy" class="w-full p-[12px] mt-[12px] "/>
            </div>
            <div class="pt-[32px]">
              <p class="text-[16px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Contract explanation</p>
              <textarea type="text" class="rounded-[8px] resize-none w-full p-[12px] outline-none mt-[12px]"  style="border: 1px solid var(--Line-Field-Line, #DCE3E3)"></textarea>
            </div>
            <div class="pt-[32px]">
              <h2 class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A">Apartment informations</h2>
              <p class="text-[12px] pt-[2px]" style="font-family: Geist; font-weight: 500; color: #72908D;">1-The apartment</p>
              <div class="divide pt-[12px]"></div>
              <div class="pt-[12px] flex flex-wrap gap-[24px]">
                <div>
                  <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>RC</p>
                  <a-select class="mt-[12px]"
                    v-model:value="value"
                    :size="size"
                    show-search
                    style="width: 440px "
                    :options="countryOptions"
                    :filter-option="filterOption">
                  </a-select>
                </div>
                <div>
                  <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>Building</p>
                  <a-select class="mt-[12px]"
                    v-model:value="value"
                    :size="size"
                    show-search
                    style="width: 440px "
                    :options="countryOptions"
                    :filter-option="filterOption">
                  </a-select>
                </div>
                <div>
                  <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #72908D;"><span style="color: #FF004D;">* </span>House</p>
                  <a-select class="mt-[12px]"
                    v-model:value="value"
                    :size="size"
                    show-search
                    style="width: 440px "
                    :options="countryOptions"
                    :filter-option="filterOption">
                  </a-select>
                </div>
              </div>
              <div class="pt-[12px]">
                <p>Contract explanation</p>
                <div class="flex gap-[12px] pt-[12px]">
                  <button @click="selectTab('repaired')" :class="['py-[27px] px-[57px] text-[16px] rounded-[8px]']"  :style="{fontFamily:'Geist', fontWeight:'600', color : selectedTab === 'repaired' ? '#335FFF' : '#72908D',border: selectedTab === 'repaired' ? '1px solid #335FFF' : ' 1px solid var(--Line-Field-Line, #DCE3E3)' ,transition: 'color 0.3s ease, border 0.3s ease'}">Repaired</button>
                  <button @click="selectTab('notRepaired')" :class="['py-[27px] px-[57px] text-[16px] rounded-[8px]']"  :style="{fontFamily:'Geist', fontWeight:'600', color : selectedTab === 'notRepaired' ? '#335FFF' : '#72908D',border: selectedTab === 'notRepaired' ? '1px solid #335FFF' : ' 1px solid var(--Line-Field-Line, #DCE3E3)',transition: 'color 0.3s ease, border 0.3s ease' }">Not repaired</button>
                </div>
                <p class="cursor-pointer text-[16px] pt-[12px]" style="font-family: Geist; font-weight: 600; color: #0037FF;">Add an apartment</p>
              </div>
            </div>
            <div class="pt-[32px] flex justify-end">
              <button class="text-[16px] py-[12px] px-[24px] rounded-[8px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%); border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Next step</button>
            </div>
          </div>
          <div class="h-full w-full">
            <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
              <h2 class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">Client informations</h2>
              <div class="mt-[16px] py-[20px] px-[16px] rounded-[6px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <div class="flex justify-between">
                  <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #72908D">Client</p>
                  <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">REZAMANOV SHUKURALI SARDOR O‘G‘LI</span>
                </div>
                <div class="flex justify-between pt-[12px]">
                  <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #72908D">Telephone</p>
                  <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">+998919037389</span>
                </div>
              </div>
            </div>
            <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] mt-[6px] w-full " style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;"> 
                <p class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">Contracts</p>
                <div class="bg-[#E5EBFF] py-[20px] px-[16px] rounded-[6px] mt-[16px] flex justify-between gap-[12px]" style="border: 1px solid #335FFF;box-shadow: 0px 1px 2px 0px #1823220D;">
                  <div class="w-full">
                    <div class="flex justify-between">
                      <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #0037FF">Contract number</p>
                      <span class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #0037FF">H-33</span>
                    </div>
                    <div class="flex justify-between pt-[12px]">
                      <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #0037FF">Created</p>
                      <span class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #0037FF">12.12.2024</span>
                    </div>
                    <div class="flex justify-between pt-[12px]">
                      <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #0037FF">Period</p>
                      <span class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #0037FF">12 month</span>
                    </div>
                    <div class="flex justify-between pt-[12px]">
                      <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #0037FF">Contract amount</p>
                      <span class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #0037FF">12 000 000 UZS</span>
                    </div>
                  </div>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="18" r="1.5" fill="#18181B"/>
                    <circle cx="12" cy="12" r="1.5" fill="#18181B"/>
                    <circle cx="12" cy="6" r="1.5" fill="#18181B"/>
                  </svg>
                </div>
                <div class="pt-[16px]">
                  <button class="text-[16px] py-[12px] w-full rounded-[8px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">Next step</button>
                </div>
            </div>
          </div>
        </div>



        <div v-if="activeTab === 2" class="flex gap-[6px]">
          <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] w-full h-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
            <div class="flex gap-[12px]">
              <div class="py-[12px] px-[16px] rounded-[6px] w-full flex items-center gap-[20px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <img src="/cardHolderIcon.svg" alt="">
                <div>
                  <p class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Remaining amount</p>
                  <span class="text-[16px] pt-[4px]" style="font-family: Geist; font-weight: 600; color: #000000;">0 UZS</span>
                </div>
              </div>
              <div class="py-[12px] px-[16px] rounded-[6px] w-full flex items-center gap-[20px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <img src="/cardHolderPurple.svg" alt="">
                <div>
                  <p class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Remaining amount</p>
                  <span class="text-[16px] pt-[4px]" style="font-family: Geist; font-weight: 600; color: #000000;">0 UZS</span>
                </div>
              </div>
            </div>
            <div class="flex gap-[12px] pt-[12px]"> 
              <button class="bg-[#E5EBFF] text-[14px] py-[6px] rounded-[6px] w-full" style="font-family: Geist; font-weight: 600; color: #335FFF">Add a payment schedule</button>
              <button class="bg-[#E5EBFF] text-[14px] py-[6px] rounded-[6px] w-full" style="font-family: Geist; font-weight: 600; color: #335FFF">Change dates at the same time</button>
              <button class="bg-[#E5EBFF] text-[14px] py-[6px] rounded-[6px] w-full" style="font-family: Geist; font-weight: 600; color: #335FFF">Clear the table</button>
            </div>
            <div class="pt-[12px]">
              <table class="schedule-table" style=""> 
                <thead>
                  <tr class="bg-[#F4F6F6] text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">
                    <th>№</th>
                    <th>Payment date</th>
                    <th>Sum of payment</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in schedules" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">
                    <td>{{ index + 1 }}</td>
                    <td><a-date-picker :format="dateFormatList" v-model="item.paymentDate" class="w-[149px]"/></td>
                    <td> <input type="text" v-model="item.sumOfPayment" class="rounded-[8px] p-[4px] w-[125px] text-center outline-none" style="border: 2px solid #EDF1F1"></td>
                    <td >
                      <svg class="cursor-pointer" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.333 4.98366C15.558 4.70866 12.7663 4.56699 9.98301 4.56699C8.33301 4.56699 6.68301 4.65033 5.03301 4.81699L3.33301 4.98366M7.91634 4.14199L8.09967 3.05033C8.23301 2.25866 8.33301 1.66699 9.74134 1.66699H11.9247C13.333 1.66699 13.4413 2.29199 13.5663 3.05866L13.7497 4.14199M16.5413 7.61699L15.9997 16.0087C15.908 17.317 15.833 18.3337 13.508 18.3337H8.15801C5.83301 18.3337 5.75801 17.317 5.66634 16.0087L5.12467 7.61699M9.44134 13.7503H12.2163M8.74967 10.417H12.9163" stroke="#DB4F00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pt-[12px] flex justify-end">
              <button class="w-[180px] p-[12px] rounded-[8px] text-[16px]" style="font-family: Geist; font-weight: 600; color: #FFFFFF;  background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%);border: 1px solid; border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%); box-shadow: 0px 4px 12px -2px #001B7EB8;box-shadow: 0px 0px 0px 1px #0025AD;">Save</button>
            </div>
          </div>
          <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] w-full h-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
              <h2 class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">Client informations</h2>
              <div class="py-[20px] px-[16px] rounded-[6px] mt-[16px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <div class="flex justify-between">
                  <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #72908D;">Client</p>
                  <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">REZAMANOV SHUKURALI SARDOR O‘G‘LI</span>
                </div>
                <div class="flex justify-between pt-[12px]">
                  <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #72908D;">Telephone</p>
                  <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">+998919037389</span>
                </div>
                <div class="flex justify-between pt-[12px]">
                  <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #72908D;">Contract number</p>
                  <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">H-33</span>
                </div>
                <div class="flex justify-between pt-[12px]">
                  <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #72908D;">Sum of contract</p>
                  <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">12 000 000 UZS</span>
                </div>
              </div>
            </div>
        </div>




        <div v-if="activeTab === 3" class="flex gap-[6px] ">
          <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] w-full h-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
              <div class="flex gap-[12px] items-end">
                <div class="py-[12px] px-[16px] rounded-[6px] w-full h-full flex items-center gap-[20px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <img src="/cardHolderIcon.svg" alt="">
                <div>
                  <p class="text-[12px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Remaining amount</p>
                  <span class="text-[16px] pt-[4px]" style="font-family: Geist; font-weight: 600; color: #000000;">0 UZS</span>
                </div>
              </div >
              <button class="bg-[#E5EBFF] text-[14px] py-[6px] rounded-[6px] w-full h-full" style="font-family: Geist; font-weight: 600; color: #335FFF">Enter payment</button>
              </div>
              <div class="pt-[12px]">
                <table class="setting-table">
                  <thead class="bg-[#F4F6F6]">
                    <tr class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">
                      <th>№</th>
                      <th>Payment date</th>
                      <th>Payment number</th>
                      <th>Sum of payment</th>
                      <th>Payment type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(setting, index) in settings" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000">
                      <td>{{ index + 1 }}</td>
                      <td><a-date-picker :format="dateFormatList" v-model="paymentDate" class="w-[149px]"/></td>
                      <td> <input type="text" v-model="setting.paymentNumber" class="rounded-[8px] p-[4px] w-[125px] text-center outline-none" style="border: 2px solid #EDF1F1"></td>
                      <td> <input type="text" v-model="setting.sumOfPayment" class="rounded-[8px] p-[4px] w-[125px] text-center outline-none" style="border: 2px solid #EDF1F1"></td>
                      <td> <input type="text" v-model="setting.paymentType" class="rounded-[8px] p-[4px] w-[125px] text-center outline-none" style="border: 2px solid #EDF1F1"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
          </div>

            <div class="bg-[#FFFFFF] p-[12px] rounded-[6px] w-full h-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1); box-shadow: 0px 1px 2px 0px #1823220D;">
                <h2 class="text-[16px]" style="font-family: Geist; font-weight: 600; color: #3F5D5A;">Client informations</h2>
                <div class="py-[20px] px-[16px] rounded-[6px] mt-[16px]" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                  <div class="flex justify-between">
                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #72908D;">Client</p>
                    <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">REZAMANOV SHUKURALI SARDOR O‘G‘LI</span>
                  </div>
                  <div class="flex justify-between pt-[12px]">
                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #72908D;">Telephone</p>
                    <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">+998919037389</span>
                  </div>
                  <div class="flex justify-between pt-[12px]">
                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #72908D;">Contract number</p>
                    <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">H-33</span>
                  </div>
                  <div class="flex justify-between pt-[12px]">
                    <p class="text-[14px]" style="font-family: Geist; font-weight: 400; color: #72908D;">Sum of contract</p>
                    <span class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;">12 000 000 UZS</span>
                  </div>
                </div>
            </div>
        </div>
      </div>  

      </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import Sidebar from "../components/Sidebar.vue";

export default defineComponent({
  name: "Changes",
  components: { Sidebar},

  data() {
    return {
      size : ref('large'),
      selectedButton: 'individuals',
      activeTab: 0,
      selectedTab : 'repaired',
      tabs : [
        'Client settings',
        'Contract settings',
        'Payment schedule settings',
        'Payment settings',
      ],
      schedules : [
        {
          paymentDate: "21.09.2024",
          sumOfPayment: '12 878 775'
        },
        {
          paymentDate: "21.09.2024",
          sumOfPayment: '12 878 775'
        },
        {
          paymentDate: "21.09.2024",
          sumOfPayment: '12 878 775'
        },
        {
          paymentDate: "21.09.2024",
          sumOfPayment: '12 878 775'
        },
        {
          paymentDate: "21.09.2024",
          sumOfPayment: '12 878 775'
        },
        {
          paymentDate: "21.09.2024",
          sumOfPayment: '12 878 775'
        },
        {
          paymentDate: "21.09.2024",
          sumOfPayment: '12 878 775'
        },
        {
          paymentDate: "21.09.2024",
          sumOfPayment: '12 878 775'
        },
        {
          paymentDate: "21.09.2024",
          sumOfPayment: '12 878 775'
        },
        {
          paymentDate: "21.09.2024",
          sumOfPayment: '12 878 775'
        },
      ],
      settings : [
        {
          paymentDate : '21.09.2024',
          paymentNumber : '12 878 775',
          sumOfPayment: '12 878 775',
          paymentType: '12 878 775'
        },
        {
          paymentDate : '21.09.2024',
          paymentNumber : '12 878 775',
          sumOfPayment: '12 878 775',
          paymentType: '12 878 775'
        },
        {
          paymentDate : '21.09.2024',
          paymentNumber : '12 878 775',
          sumOfPayment: '12 878 775',
          paymentType: '12 878 775'
        },
        {
          paymentDate : '21.09.2024',
          paymentNumber : '12 878 775',
          sumOfPayment: '12 878 775',
          paymentType: '12 878 775'
        },
        {
          paymentDate : '21.09.2024',
          paymentNumber : '12 878 775',
          sumOfPayment: '12 878 775',
          paymentType: '12 878 775'
        },
        {
          paymentDate : '21.09.2024',
          paymentNumber : '12 878 775',
          sumOfPayment: '12 878 775',
          paymentType: '12 878 775'
        },
        {
          paymentDate : '21.09.2024',
          paymentNumber : '12 878 775',
          sumOfPayment: '12 878 775',
          paymentType: '12 878 775'
        },
        {
          paymentDate : '21.09.2024',
          paymentNumber : '12 878 775',
          sumOfPayment: '12 878 775',
          paymentType: '12 878 775'
        },
        {
          paymentDate : '21.09.2024',
          paymentNumber : '12 878 775',
          sumOfPayment: '12 878 775',
          paymentType: '12 878 775'
        },
      ]
    };
  },

  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },

    setActiveTab(index) {
      this.activeTab = index;
    },
    selectButton(button) {
      this.selectedButton = button;
    },
  },

});
</script>

<style scoped>
.schedule-table td, 
.schedule-table th {
  padding:16px 64px 16px 32px;
  border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1);
  text-align: center;
}
.schedule-table {
  border: 1px solid var(--Line-Container-Line, #EDF1F1);
  width: 100%;
}
 .setting-table {
  border: 1px solid var(--Line-Container-Line, #EDF1F1);
  width: 100%;
 }

 .setting-table td {
  padding: 20px 20px;
  text-align: center;
  border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1);
 }
 .setting-table th{
  padding: 16px 16px;
  text-align: center;   
 }
.divide {
     border-bottom: 1px dashed #95ACAA;
 }
</style>
