<template>
  <div  class="bg-[#F4F6F6] h-full">
    <div class="flex w-full min-h-screen">
      <Sidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
      <div class=" bg-[#FFFFFF] w-full rounded-[14px] my-[8px] mr-[6px] p-[16px] " style="border: 1px solid #EDF1F1">
        <div class="flex items-center justify-between">
          <div>
              <p class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000;">Payment</p>
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
          <div class="flex justify-between items-center pt-[16px]">
            <ul class="flex items-center">
              <li v-for="(tab , index) in tabs" :key="index" class="flex gap-[10px] pr-[20px] cursor-pointer text-[14px]" style="font-family: Geist; font-weight: 500; color: #000000;" >
                <img :src="tab.image" alt="">
                {{ tab.name }}
                <span class="h-[16px] pl-[10px]" style="border-right: 2px solid #EDF1F1;"></span>
              </li>
            </ul>
            <div class="search py-[12px] px-[20px] flex items-center rounded-[12px] w-[398px] cursor-pointer">
              <input type="text" placeholder="Search..." class="outline-none w-full">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.6668 14.6666L13.3335 13.3333M14.0002 7.66659C14.0002 11.1644 11.1646 13.9999 7.66683 13.9999C4.16903 13.9999 1.3335 11.1644 1.3335 7.66659C1.3335 4.16878 4.16903 1.33325 7.66683 1.33325C11.1646 1.33325 14.0002 4.16878 14.0002 7.66659Z" stroke="#72908D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="flex justify-center">
              <router-link to="/add-payment">
                <button class="text-[16px] py-[11px] w-[200px] rounded-[8px] flex gap-[8px] justify-center" style="font-family: Geist; font-weight: 600; color: #FFFFFF; background: linear-gradient(180deg, #0037FF 0%, #002DD1 100%); border: 1px solid;border-image-source: linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%);">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66675 10.0001H13.3334M10.0001 13.3334V6.66675M10.0001 18.3334C14.5834 18.3334 18.3334 14.5834 18.3334 10.0001C18.3334 5.41675 14.5834 1.66675 10.0001 1.66675C5.41675 1.66675 1.66675 5.41675 1.66675 10.0001C1.66675 14.5834 5.41675 18.3334 10.0001 18.3334Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  Add Payment
                </button>
              </router-link>
            </div>
          </div>
          <div class="mt-[16px] p-[6px] bg-[#F4F6F6] rounded-[8px]">
            <div class="flex gap-[6px]">
              <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center    w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <span class="w-[4px] h-full bg-[#335C67] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                <div>
                  <p class="text-[12px] pb-[4px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Today's receipts</p>
                  <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                </div>
              </div>

              <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <span class="w-[4px] h-full bg-[#00A389] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                <div>
                  <p class="text-[12px] pb-[4px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Cash</p>
                  <span class="text-[20px] " style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                </div>
              </div>

              <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <span class="w-[4px] h-full  bg-[#4F1F9F] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                <div>
                  <p class="text-[12px] pb-[4px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Terminal</p>
                  <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                </div>
              </div>

              <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <span class="w-[4px] h-full  bg-[#FE6D73] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                <div>
                  <p class="text-[12px] pb-[4px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Money transfer (P2P)</p>
                  <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                </div>
              </div>

              <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <span class="w-[4px] h-full  bg-[#FFBB53] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                <div>
                  <p class="text-[12px] pb-[4px]" style="font-family: Geist; font-weight: 500; color: #72908D;">Bank</p>
                  <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                </div>
              </div>
              
              <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex gap-[16px] items-center w-full" style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <span class="w-[4px] h-full  bg-[#FFBB53] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                <div>
                  <p class="text-[12px] pb-[4px] " style="font-family: Geist; font-weight: 500; color: #72908D;" >From the customer's balance</p>
                  <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                </div>
              </div>

              <div class="p-[8px] rounded-[6px] bg-[#FFFFFF] flex items-center gap-[16px] w-full " style="border: 1px solid var(--Line-Container-Line, #EDF1F1);box-shadow: 0px 1px 2px 0px #1823220D;">
                <span class="w-[4px] h-full  bg-[#6927DA] rounded-full" style="box-shadow: 2px 0px 4px 0px #00000014;"></span>
                <div class="">
                  <p class="text-[12px] pb-[4px] line-clamp-2" style="font-family: Geist; font-weight: 500; color: #72908D;">Other</p>
                  <span class="text-[20px]" style="font-family: Geist; font-weight: 600; color: #000000">0 UZS</span>
                </div>
              </div>
            </div>

            <div class="pt-[6px]">
              <table class="payment-table">
                <thead>
                  <tr v-for="(head, index) in tableHead" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 500; color: #4F7471;">
                    <th><a-checkbox/> </th>
                    <th>{{ head.number }}</th>
                    <th>{{ head.basis }}</th>
                    <th>{{ head.client }}</th>
                    <th>{{ head.contract }}</th>
                    <th>{{ head.date }}</th>
                    <th>{{ head.amount }}</th>
                    <th>{{ head.paymentType }}</th>
                    <th>{{ head.responsible }}</th>
                    <th>{{ head.complexName }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(body , index) in tableBody" :key="index" class="text-[14px]" style="font-family: Geist; font-weight: 600; color: #000000;">
                    <td> <a-checkbox/> </td>
                    <td>{{ body.number }}</td>
                    <td>
                      <div class="flex items-center gap-[6px]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.99307 6.28413L3.99307 12.007L9.71592 12.007M12.0069 3.99311L4.07321 11.9268" stroke="#00B252" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p style="color: #008E42;">{{ body.basis }}</p>
                      </div>
                    </td>
                    <td>
                      <div class="flex items-center gap-[12px]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" rx="12" fill="#00B252"/>
                        <path d="M7.336 7.48H8.992L12.064 16H10.672L9.904 13.78H6.424L5.644 16H4.264L7.336 7.48ZM9.496 12.604L8.164 8.716L6.832 12.604H9.496ZM12.9714 7.48H14.2434V12.772L17.1114 9.616H18.7194L16.2234 12.304L18.8154 16H17.3514L15.3714 13.096L14.2434 14.296V16H12.9714V7.48Z" fill="white"/>
                        </svg>
                        <div>
                          <p>{{ body.clientName }}</p>
                          <span class="text-[12px] text-[#72908D]" >{{ body.clientPhone }}</span>
                        </div>
                      </div>
                    </td>
                    <td>{{ body.contract }}</td>
                    <td>{{ body.date }}</td>
                    <td>{{ body.amount }}</td>
                    <td>
                      <div class="flex items-center justify-center w-fit px-[8px] py-[2px] gap-[8px] bg-[#C5F7DC] rounded-full">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="6" height="6" rx="3" fill="#2CC171"/>
                        </svg>
                        <p class="text-[12px] text-[#008E42]">{{ body.paymentType }}</p>
                      </div>
                      
                    </td>
                    <td>{{ body.responsible }}</td>
                    <td>{{ body.complexName }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '../components/Sidebar.vue';
import Filter from '/paymetnsFilter.svg'
import Download from '/paymentsDownload.svg'
import Table from '/paymentsTable.svg'
import Bank from '/paymentsBank.svg'
import Information from '/paymentsInformation.svg'
export default {
  name: "Payments",
  components: {Sidebar},
  data() {
    return {
      tabs :[ 
        {
          name: 'Filter',
          image : Filter
        },
        {
          name:'Download',
          image: Download
        },
        {
          name:'Table settings',
          image : Table
        },
        {
          name: 'Bank',
          image: Bank
        },
        {
          name: 'Information',
          image : Information
        }
      ],
      tableHead : [
        {
          number: '№',
          basis : 'Basis',
          client : 'Client',
          contract : 'Contract',
          date : 'Date',
          amount : 'Amount',
          paymentType : 'Payment type',
          responsible : 'Responsible',
          complexName: 'Residential Complex name'
        }
      ],
      tableBody : [
        {
          number :'942',
          basis : 'Contract',
          clientName : 'Akbarali Khasanov',
          clientPhone: '+998911234567',
          contract : '186',
          date : '12.08.2024 18:35',
          amount : '15 400 000 UZS',
          paymentType : 'P2P',
          responsible : 'Xusnor Odilova',
          complexName: 'Hakimi Towers'
        },
        {
          number :'942',
          basis : 'Contract',
          clientName : 'Akbarali Khasanov',
          clientPhone: '+998911234567',
          contract : '186',
          date : '12.08.2024 18:35',
          amount : '15 400 000 UZS',
          paymentType : 'P2P',
          responsible : 'Xusnor Odilova',
          complexName: 'Hakimi Towers'
        },
        {
          number :'942',
          basis : 'Contract',
          clientName : 'Akbarali Khasanov',
          clientPhone: '+998911234567',
          contract : '186',
          date : '12.08.2024 18:35',
          amount : '15 400 000 UZS',
          paymentType : 'P2P',
          responsible : 'Xusnor Odilova',
          complexName: 'Hakimi Towers'
        },
        {
          number :'942',
          basis : 'Contract',
          clientName : 'Akbarali Khasanov',
          clientPhone: '+998911234567',
          contract : '186',
          date : '12.08.2024 18:35',
          amount : '15 400 000 UZS',
          paymentType : 'P2P',
          responsible : 'Xusnor Odilova',
          complexName: 'Hakimi Towers'
        },
        {
          number :'942',
          basis : 'Contract',
          clientName : 'Akbarali Khasanov',
          clientPhone: '+998911234567',
          contract : '186',
          date : '12.08.2024 18:35',
          amount : '15 400 000 UZS',
          paymentType : 'P2P',
          responsible : 'Xusnor Odilova',
          complexName: 'Hakimi Towers'
        },
        {
          number :'942',
          basis : 'Contract',
          clientName : 'Akbarali Khasanov',
          clientPhone: '+998911234567',
          contract : '186',
          date : '12.08.2024 18:35',
          amount : '15 400 000 UZS',
          paymentType : 'P2P',
          responsible : 'Xusnor Odilova',
          complexName: 'Hakimi Towers'
        },
        {
          number :'942',
          basis : 'Contract',
          clientName : 'Akbarali Khasanov',
          clientPhone: '+998911234567',
          contract : '186',
          date : '12.08.2024 18:35',
          amount : '15 400 000 UZS',
          paymentType : 'P2P',
          responsible : 'Xusnor Odilova',
          complexName: 'Hakimi Towers'
        },
        {
          number :'942',
          basis : 'Contract',
          clientName : 'Akbarali Khasanov',
          clientPhone: '+998911234567',
          contract : '186',
          date : '12.08.2024 18:35',
          amount : '15 400 000 UZS',
          paymentType : 'P2P',
          responsible : 'Xusnor Odilova',
          complexName: 'Hakimi Towers'
        },
        {
          number :'942',
          basis : 'Contract',
          clientName : 'Akbarali Khasanov',
          clientPhone: '+998911234567',
          contract : '186',
          date : '12.08.2024 18:35',
          amount : '15 400 000 UZS',
          paymentType : 'P2P',
          responsible : 'Xusnor Odilova',
          complexName: 'Hakimi Towers'
        },
        {
          number :'942',
          basis : 'Contract',
          clientName : 'Akbarali Khasanov',
          clientPhone: '+998911234567',
          contract : '186',
          date : '12.08.2024 18:35',
          amount : '15 400 000 UZS',
          paymentType : 'P2P',
          responsible : 'Xusnor Odilova',
          complexName: 'Hakimi Towers'
        },

      ]
    }
  },
}
</script>

<style scoped>
  .divide {
    border-bottom: 1px dashed #95ACAA;
  }
  .search {
    border: 1px solid #B9C7C6;
  }

  .payment-table {
    width: 100%;
    background: #FFFFFF;
    border: 1px solid var(--Line-Container-Line, #EDF1F1)
  }

  .payment-table th, 
  .payment-table td {
    padding: 16px 16px;
    border-bottom: 1px solid var(--Line-Container-Line, #EDF1F1)
  }

  .payment-table tbody tr:hover {
    background: #EDF1F1;
    transition: all 300ms;
  }

  /* .search:hover {
    border: 1px solid #0035f7;
    transition: all 300ms;
  } */
</style>
