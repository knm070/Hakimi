/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import TableContainer from "../components/TableContainer.vue";
import Sidebar from "../components/Sidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
import { useI18n } from "vue-i18n";
// import { byPrefixAndName } from "@awesome.me/kit-KIT_CODE/icons";
export default (await import('vue')).defineComponent({
    name: "Contract",
    components: { Sidebar, TableContainer, apexchart: VueApexCharts },
    data() {
        return {
            languages: {
                en: "English",
                uz: "Uzbek",
                ru: "Russian",
                fa: "Persian",
            },
            currentLanguage: "en",
            payingClients: [], // List of paying clients
            nonPayingClients: [], // List of non-paying clients
            payingClientsCount: 0, // Count for pie chart
            nonPayingClientsCount: 0, // Count for pie chart
            openClient: null, // Track which client details are open
            openType: "", // Track if it's 'paying' or 'nonpaying'
            clients: [], // Stores the client and contract data from the API
            isOpenClient: [], // Tracks open/closed state for each client's contracts
            isOpenContract: [], // Tracks open/closed state for individual contract details
            pie_series: [],
            contracts: {
                "0_24_months": { count: 0, contracts: [] },
                "24_60_months": { count: 0, contracts: [] },
                "60_plus_months": { count: 0, contracts: [] }, // Placeholder for future data
            },
            isOpen: {
                "0_24_months": false,
                "24_60_months": false,
                "60_plus_months": false, // Dropdown states
            },
            isOpenContracts: {
                "0_24_months": {},
                "24_60_months": {},
                "60_plus_months": {},
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                show: false,
            },
            pie_Options: {
                chart: {
                    type: "donut",
                },
                pie_colors: ["#008FFB", "#00E396"], // Colors for each series
                pie_series: [],
                labels: ["Paying clients", "Non paying clients"],
                legend: {
                    show: false,
                },
                dataLabels: {
                    enabled: false,
                    formatter: function (val, opts) {
                        return opts.w.config.series[opts.seriesIndex];
                    }, // Display the raw value
                    style: {
                        fontSize: "14px",
                        colors: ["#fff"],
                    },
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: "100%", // Adjust the width of the chart
                                height: "300px", // Adjust the height of the chart
                            },
                            legend: {
                                show: true,
                            },
                            dataLabels: {
                                enabled: false,
                            },
                        },
                    },
                ],
            },
        };
    },
    methods: {
        changeLanguage(event) {
            this.currentLanguage = event.target.value;
            this.$i18n.locale = this.currentLanguage;
        },
        async fetchClients() {
            try {
                const response = await axios.get("/contract/client-contracts/");
                this.clients = response.data;
                // Initialize isOpenClient and isOpenContract arrays based on the fetched data
                this.isOpenClient = new Array(this.clients.length).fill(false);
                this.isOpenContract = this.clients.map(() => []);
            }
            catch (error) {
                console.error("Error fetching client contracts:", error);
            }
        },
        // Toggle client contract list visibility
        toggleClientContracts(clientIndex) {
            console.log("Clicked client index:", clientIndex); // Debugging
            // Directly update the array element by index
            this.isOpenClient[clientIndex] = !this.isOpenClient[clientIndex];
        },
        // Toggle individual contract details
        toggleContractDetails2(clientIndex, contractIndex) {
            console.log(`Toggle details for client ${clientIndex}, contract ${contractIndex}`); // Debugging
            // Check if the contract list for the client is initialized
            if (!this.isOpenContract[clientIndex]) {
                this.isOpenContract[clientIndex] = [];
            }
            // Directly update the nested array element
            this.isOpenContract[clientIndex][contractIndex] = !this.isOpenContract[clientIndex][contractIndex];
        },
        // Format phone number for display
        formatPhoneNumber(phoneNumber) {
            return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 5)} ${phoneNumber.slice(5, 8)} ${phoneNumber.slice(8)}`;
        },
        async fetchContracts() {
            try {
                const response = await axios.get("/contract/contracts/period/");
                this.contracts = response.data;
            }
            catch (error) {
                console.error("Error fetching contracts:", error);
            }
        },
        toggleDropdown(period) {
            this.isOpen[period] = !this.isOpen[period];
        },
        toggleContractDetails(period, index) {
            if (!this.isOpenContracts[period]) {
                this.isOpenContracts[period] = {}; // Ensure the period object exists
            }
            this.isOpenContracts[period][index] = !this.isOpenContracts[period][index];
        },
        formatCurrency(value) {
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "UZS",
                minimumFractionDigits: 0,
            }).format(value);
        },
        toggleDetails(index, type) {
            if (this.openClient === index && this.openType === type) {
                this.openClient = null;
                this.openType = "";
            }
            else {
                this.openClient = index;
                this.openType = type;
            }
        },
        fetchClientStats() {
            // Simulated API call to fetch data
            fetch("https://api.hakimi.itic.uz/contract/payment-summary/")
                .then((response) => response.json())
                .then((data) => {
                this.payingClients = data.paying_clients.paying_client_contracts;
                this.nonPayingClients = data.non_paying_clients.non_paying_client_contracts;
                this.payingClientsCount = data.paying_clients.number_of_paid_clients;
                this.nonPayingClientsCount = data.non_paying_clients.number_of_non_paying_clients;
                this.pie_series = [this.payingClientsCount, this.nonPayingClientsCount];
            });
        },
    },
    mounted() {
        this.fetchContracts();
        this.fetchClients();
        this.fetchClientStats();
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ Sidebar, TableContainer, apexchart: VueApexCharts },
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-page") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Sidebar;
    /** @type { [typeof __VLS_components.Sidebar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ image: ("../image@2x.png"), home: ("../home.svg"), accountBalanceWallet: ("../account-balance-wallet1.svg"), creditCardClock: ("../credit-card-clock.svg"), locationCity: ("../location-city.svg"), contractEdit: ("../contract-edit.svg"), homeLinksTextDecoration: ("unset"), }));
    const __VLS_2 = __VLS_1({ image: ("../image@2x.png"), home: ("../home.svg"), accountBalanceWallet: ("../account-balance-wallet1.svg"), creditCardClock: ("../credit-card-clock.svg"), locationCity: ("../location-city.svg"), contractEdit: ("../contract-edit.svg"), homeLinksTextDecoration: ("unset"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inner") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    (__VLS_ctx.$t("contract"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("monitor_projects"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("language-switcher") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.changeLanguage) }, value: ((__VLS_ctx.currentLanguage)), });
    for (const [label, lang] of __VLS_getVForSourceType((__VLS_ctx.languages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((lang)), value: ((lang)), });
        (label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("nav nav-tabs mb-3") }, id: ("myTab"), role: ("tablist"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("nav-link active") }, id: ("home-tab"), "data-bs-toggle": ("tab"), "data-bs-target": ("#home"), type: ("button"), role: ("tab"), "aria-controls": ("home"), "aria-selected": ("true"), });
    (__VLS_ctx.$t("general"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("nav-link") }, id: ("profile-tab"), "data-bs-toggle": ("tab"), "data-bs-target": ("#profile"), type: ("button"), role: ("tab"), "aria-controls": ("profile"), "aria-selected": ("false"), });
    (__VLS_ctx.$t("discounts"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-content") }, id: ("myTabContent"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane fade show active") }, id: ("home"), role: ("tabpanel"), "aria-labelledby": ("home-tab"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.$t("contract_period"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inner-tab mt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("nav nav-tabs") }, id: ("myTab"), role: ("tablist"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("nav-link active") }, id: ("all-tab1"), "data-bs-toggle": ("tab"), "data-bs-target": ("#alltab"), type: ("button"), role: ("tab"), "aria-controls": ("home"), "aria-selected": ("true"), });
    (__VLS_ctx.$t("all"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("nav-link") }, id: ("hakimi-tab1"), "data-bs-toggle": ("tab"), "data-bs-target": ("#hakimitab"), type: ("button"), role: ("tab"), "aria-controls": ("profile"), "aria-selected": ("false"), });
    (__VLS_ctx.$t("hakimi_towers"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-content") }, id: ("myTabContent"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane fade show active") }, id: ("alltab"), role: ("tabpanel"), "aria-labelledby": ("home-tab"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("contract-cards") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("card yellow") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.$t("months_0_24"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('0_24_months');
            } }, ...{ class: ("arrow-btn") }, });
    (__VLS_ctx.contracts["0_24_months"].count);
    (__VLS_ctx.$t("contract"));
    if (__VLS_ctx.isOpen['0_24_months']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    if (__VLS_ctx.isOpen['0_24_months']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("contract-list") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [contract, index] of __VLS_getVForSourceType((__VLS_ctx.contracts['0_24_months'].contracts))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((contract.contract_number)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isOpen['0_24_months'])))
                            return;
                        __VLS_ctx.toggleContractDetails('0_24_months', index);
                    } }, ...{ class: ("contract-header") }, });
            (__VLS_ctx.$t("contract"));
            (contract.contract_number);
            (__VLS_ctx.$t("client"));
            (contract.client);
            if (__VLS_ctx.isOpenContracts['0_24_months'][index]) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            }
            else {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            }
            if (__VLS_ctx.isOpenContracts['0_24_months'][index]) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("client-info") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("contract_number"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.contract_number);
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("client"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.client);
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("staff"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.employee || "Null");
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("contract_amount"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (__VLS_ctx.formatCurrency(contract.total_payment_sum));
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("monthly_payment"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (__VLS_ctx.formatCurrency(contract.monthly_payment));
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("status"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.status);
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("initial_payment_date"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.initial_payment_date);
            }
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("card green") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.$t("months_24_60"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('24_60_months');
            } }, ...{ class: ("arrow-btn") }, });
    (__VLS_ctx.contracts["24_60_months"].count);
    (__VLS_ctx.$t("contract"));
    if (__VLS_ctx.isOpen['24_60_months']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    if (__VLS_ctx.isOpen['24_60_months']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("contract-list") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [contract, index] of __VLS_getVForSourceType((__VLS_ctx.contracts['24_60_months'].contracts))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((contract.contract_number)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isOpen['24_60_months'])))
                            return;
                        __VLS_ctx.toggleContractDetails('24_60_months', index);
                    } }, ...{ class: ("contract-header") }, });
            (__VLS_ctx.$t("contract"));
            (contract.contract_number);
            (__VLS_ctx.$t("client"));
            (contract.client);
            if (__VLS_ctx.isOpenContracts['24_60_months'][index]) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            }
            else {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            }
            if (__VLS_ctx.isOpenContracts['24_60_months'][index]) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("client-info") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("contract_number"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.contract_number);
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("client"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.client);
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("staff"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.employee || "Null");
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("contract_amount"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (__VLS_ctx.formatCurrency(contract.total_payment_sum));
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("monthly_payment"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (__VLS_ctx.formatCurrency(contract.monthly_payment));
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("status"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.status);
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("initial_payment_date"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.initial_payment_date);
            }
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("#"), ...{ class: ("card red") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    (__VLS_ctx.$t("more_than_60_months"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.toggleDropdown('60_plus_months');
            } }, ...{ class: ("arrow-btn") }, });
    (__VLS_ctx.contracts["60_plus_months"].count);
    (__VLS_ctx.$t("contract"));
    if (__VLS_ctx.isOpen['60_plus_months']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    if (__VLS_ctx.isOpen['60_plus_months']) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("contract-list") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [contract, index] of __VLS_getVForSourceType((__VLS_ctx.contracts['60_plus_months'].contracts))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((contract.contract_number)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.isOpen['60_plus_months'])))
                            return;
                        __VLS_ctx.toggleContractDetails('60_plus_months', index);
                    } }, ...{ class: ("contract-header") }, });
            (__VLS_ctx.$t("contract"));
            (contract.contract_number);
            (__VLS_ctx.$t("client"));
            (contract.client);
            if (__VLS_ctx.isOpenContracts['60_plus_months'][index]) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            }
            else {
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            }
            if (__VLS_ctx.isOpenContracts['60_plus_months'][index]) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("client-info") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("contract_number"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.contract_number);
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("client"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.client);
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("staff"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.employee || "Null");
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("contract_amount"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (__VLS_ctx.formatCurrency(contract.total_payment_sum));
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("monthly_payment"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (__VLS_ctx.formatCurrency(contract.monthly_payment));
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("status"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.status);
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("initial_payment_date"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (contract.initial_payment_date);
            }
        }
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane fade") }, id: ("hakimitab"), role: ("tabpanel"), "aria-labelledby": ("profile-tab"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.$t("payment_according_to_charts"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inner-tab mt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("nav nav-tabs") }, id: ("myTab"), role: ("tablist"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("nav-link active") }, id: ("all-tab2"), "data-bs-toggle": ("tab"), "data-bs-target": ("#alltab2"), type: ("button"), role: ("tab"), "aria-controls": ("home"), "aria-selected": ("true"), });
    (__VLS_ctx.$t("all"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("nav-link") }, id: ("hakimi-tab2"), "data-bs-toggle": ("tab"), "data-bs-target": ("#hakimitab2"), type: ("button"), role: ("tab"), "aria-controls": ("profile"), "aria-selected": ("false"), });
    (__VLS_ctx.$t("hakimi_towers"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-content") }, id: ("myTabContent"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane fade show active") }, id: ("alltab2"), role: ("tabpanel"), "aria-labelledby": ("home-tab"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("chart"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-header text-center mt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.$t("total_number_of_payers"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.payingClientsCount + __VLS_ctx.nonPayingClientsCount);
    (__VLS_ctx.$t("clients"));
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("donut"), options: ((__VLS_ctx.pie_Options)), series: (([__VLS_ctx.payingClientsCount, __VLS_ctx.nonPayingClientsCount])), height: ("400"), legend: ((__VLS_ctx.legend)), }));
    const __VLS_8 = __VLS_7({ type: ("donut"), options: ((__VLS_ctx.pie_Options)), series: (([__VLS_ctx.payingClientsCount, __VLS_ctx.nonPayingClientsCount])), height: ("400"), legend: ((__VLS_ctx.legend)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-legend mb-2") }, });
    for (const [value, index] of __VLS_getVForSourceType((__VLS_ctx.pie_series))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((index)), sytle: ("list-style:none;"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: (({ backgroundColor: __VLS_ctx.pie_Options.pie_colors[index] })) }, ...{ class: ("color-box") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label") }, });
        (__VLS_ctx.pie_Options.labels[index]);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("value") }, });
        (value);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("client-list") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.$t("paying_clients"));
    if (__VLS_ctx.payingClients.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [client, index] of __VLS_getVForSourceType((__VLS_ctx.payingClients))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.payingClients.length > 0)))
                            return;
                        __VLS_ctx.toggleDetails(index, 'paying');
                    } }, ...{ class: ("client-summary") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (client.client);
            (__VLS_ctx.$t("contract"));
            (client.contract_number);
            if (__VLS_ctx.openClient === index && __VLS_ctx.openType === 'paying') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("client-info") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("client"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (client.client);
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("staff"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (client.employee || __VLS_ctx.$t("na"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("contract_amount"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (client.total_payment_sum.toLocaleString());
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("residential_complex"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (__VLS_ctx.$t("hakimi_towers"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("contract_number"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (client.contract_number);
            }
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.$t("no_paying_clients"));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("client-list") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.$t("non_paying_clients"));
    if (__VLS_ctx.nonPayingClients.length > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [client, index] of __VLS_getVForSourceType((__VLS_ctx.nonPayingClients))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                        if (!((__VLS_ctx.nonPayingClients.length > 0)))
                            return;
                        __VLS_ctx.toggleDetails(index, 'nonpaying');
                    } }, ...{ class: ("client-summary") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
            (client.client);
            (__VLS_ctx.$t("contract"));
            (client.contract_number);
            if (__VLS_ctx.openClient === index && __VLS_ctx.openType === 'nonpaying') {
                __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("client-info") }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("client"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (client.client);
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("staff"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (client.employee || __VLS_ctx.$t("na"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("contract_amount"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (client.total_payment_sum.toLocaleString());
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("residential_complex"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (__VLS_ctx.$t("hakimi_towers"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                (__VLS_ctx.$t("contract_number"));
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                (client.contract_number);
            }
        }
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.$t("no_non_paying_clients"));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane fade") }, id: ("hakimitab2"), role: ("tabpanel"), "aria-labelledby": ("profile-tab"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.$t("discount_statistics_ac"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.$t("client_contracts"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    for (const [client, clientIndex] of __VLS_getVForSourceType((__VLS_ctx.clients))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((clientIndex)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.toggleClientContracts(clientIndex);
                } }, ...{ class: ("client-info p-3 d-flex") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("/assets/img/phone-call.png"), alt: ((__VLS_ctx.$t('phone_call_alt'))), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("black") }, });
        (__VLS_ctx.formatPhoneNumber(client.phone_number));
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("contracts_count") }, });
        (client.contracts.length);
        const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.transition;
        /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ name: ("slide-fade"), }));
        const __VLS_14 = __VLS_13({ name: ("slide-fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
        if (__VLS_ctx.isOpenClient[clientIndex]) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("client-contracts") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
            for (const [contract, contractIndex] of __VLS_getVForSourceType((client.contracts))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ onClick: (...[$event]) => {
                            if (!((__VLS_ctx.isOpenClient[clientIndex])))
                                return;
                            __VLS_ctx.toggleContractDetails2(clientIndex, contractIndex);
                        } }, key: ((contractIndex)), ...{ class: ("client-info black") }, ...{ style: ({}) }, });
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
                __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
                (__VLS_ctx.$t("contract"));
                (contract.contract_number);
                __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: ({}) }, });
                (contract.status);
                const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.transition;
                /** @type { [typeof __VLS_components.Transition, typeof __VLS_components.transition, typeof __VLS_components.Transition, typeof __VLS_components.transition, ] } */
                // @ts-ignore
                const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ name: ("fade"), }));
                const __VLS_20 = __VLS_19({ name: ("fade"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
                if (__VLS_ctx.isOpenContract[clientIndex] && __VLS_ctx.isOpenContract[clientIndex][contractIndex]) {
                    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("client-info") }, });
                    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
                    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                    (__VLS_ctx.$t("contract_number"));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                    (contract.contract_number);
                    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                    (__VLS_ctx.$t("client"));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                    (contract.client);
                    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                    (__VLS_ctx.$t("staff"));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                    (contract.employee || "N/A");
                    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                    (__VLS_ctx.$t("contract_amount"));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                    (contract.total_payment_sum.toLocaleString());
                    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                    (__VLS_ctx.$t("monthly_payment"));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                    (contract.monthly_payment.toLocaleString());
                    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                    (__VLS_ctx.$t("initial_payment_date"));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                    (contract.initial_payment_date);
                    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_info") }, });
                    (__VLS_ctx.$t("status"));
                    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("c_data") }, });
                    (contract.status);
                }
                __VLS_nonNullable(__VLS_23.slots).default;
                const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
            }
        }
        __VLS_nonNullable(__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane fade") }, id: ("profile"), role: ("tabpanel"), "aria-labelledby": ("profile-tab"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({});
    __VLS_styleScopedClasses['main-page'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['inner'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['language-switcher'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['nav'];
    __VLS_styleScopedClasses['nav-tabs'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['tab-content'];
    __VLS_styleScopedClasses['tab-pane'];
    __VLS_styleScopedClasses['fade'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['col-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['inner-tab'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['nav'];
    __VLS_styleScopedClasses['nav-tabs'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['tab-content'];
    __VLS_styleScopedClasses['tab-pane'];
    __VLS_styleScopedClasses['fade'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['contract-cards'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['yellow'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['arrow-btn'];
    __VLS_styleScopedClasses['contract-list'];
    __VLS_styleScopedClasses['contract-header'];
    __VLS_styleScopedClasses['client-info'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['green'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['arrow-btn'];
    __VLS_styleScopedClasses['contract-list'];
    __VLS_styleScopedClasses['contract-header'];
    __VLS_styleScopedClasses['client-info'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['red'];
    __VLS_styleScopedClasses['card-header'];
    __VLS_styleScopedClasses['arrow-btn'];
    __VLS_styleScopedClasses['contract-list'];
    __VLS_styleScopedClasses['contract-header'];
    __VLS_styleScopedClasses['client-info'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['tab-pane'];
    __VLS_styleScopedClasses['fade'];
    __VLS_styleScopedClasses['col-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['inner-tab'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['nav'];
    __VLS_styleScopedClasses['nav-tabs'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['tab-content'];
    __VLS_styleScopedClasses['tab-pane'];
    __VLS_styleScopedClasses['fade'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['chart-header'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['chart-legend'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['color-box'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['value'];
    __VLS_styleScopedClasses['client-list'];
    __VLS_styleScopedClasses['client-summary'];
    __VLS_styleScopedClasses['client-info'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['client-list'];
    __VLS_styleScopedClasses['client-summary'];
    __VLS_styleScopedClasses['client-info'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['tab-pane'];
    __VLS_styleScopedClasses['fade'];
    __VLS_styleScopedClasses['col-4'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['client-info'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['black'];
    __VLS_styleScopedClasses['contracts_count'];
    __VLS_styleScopedClasses['client-contracts'];
    __VLS_styleScopedClasses['client-info'];
    __VLS_styleScopedClasses['black'];
    __VLS_styleScopedClasses['client-info'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['c_info'];
    __VLS_styleScopedClasses['c_data'];
    __VLS_styleScopedClasses['tab-pane'];
    __VLS_styleScopedClasses['fade'];
    __VLS_styleScopedClasses['border'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
//# sourceMappingURL=Contract.vue.js.map