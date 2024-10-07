/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { defineComponent } from "vue";
import TableContainer from "../components/TableContainer.vue";
import Sidebar from "../components/Sidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
import { useI18n } from "vue-i18n";
export default defineComponent({
    name: "MainPage",
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
            total_payment: 0,
            balance: 0,
            total_debt: 0,
            monthly_debt: 0,
            apartments_data: {
                on_sale: {
                    House: 0,
                    Basement: 0,
                    Shop: 0,
                    Parking: 0,
                },
                sold_out: {
                    House: 0,
                    Basement: 0,
                    Shop: 0,
                    Parking: 0,
                },
                ordered: {
                    House: 0,
                    Basement: 0,
                    Shop: 0,
                    Parking: 0,
                },
            },
            payment_stats: [],
            pie_series: [],
            // pie_series: [44, 55, 41, 17, 15],
            // pie_labels:  ["Payment", "Terminal", "Cash", "P2P", "Bank", "Other"],
            dataLabels: {
                enabled: false,
            },
            pie_Options: {
                chart: {
                    type: "donut",
                },
                pie_colors: ["#00E396", "#FF4560", "#FEB019", "#775DD0", "#008FFB"],
                // labels: ["Payment", "Terminal", "Cash", "P2P", "Bank", "Other"],
                labels: [],
                legend: {
                    show: false,
                },
                dataLabels: {
                    enabled: false,
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
    setup() {
        const { locale } = useI18n();
        return { locale };
    },
    methods: {
        changeLanguage(event) {
            this.currentLanguage = event.target.value;
            this.$i18n.locale = this.currentLanguage;
        },
        async fetchPaymentStats() {
            try {
                const response = await axios.get("/contract/payment/today", {});
                const data = response.data;
                this.pie_series = [data.terminal, data.cash, data.p2p, data.bank, data.other]; // Remove zero values
                this.pie_labels = ["Terminal", "Cash", "P2P", "Bank", "Other"]; // Filter labels corresponding to non-zero values
                this.total_payment = data.total_payment.toLocaleString();
                this.pie_Options.labels = this.pie_labels; // Update the chart options with new labels
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    },
    mounted() {
        this.fetchPaymentStats();
        axios
            .get("/project/apartment/condition", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
            },
        })
            .then((res) => {
            this.apartments_data = res.data;
        }),
            axios
                .get("/account/balance", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            })
                .then((res) => {
                this.balance = res.data.balance_of_client.toLocaleString();
            }),
            axios
                .get("/contract/debts/total", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                },
            })
                .then((res) => {
                this.monthly_debt = res.data.monthly_debt.toLocaleString();
                this.total_debt = res.data.total_debts.toLocaleString();
            });
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
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['cards'];
    __VLS_styleScopedClasses['cards'];
    __VLS_styleScopedClasses['cards'];
    __VLS_styleScopedClasses['statistics'];
    __VLS_styleScopedClasses['payment_details'];
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
    (__VLS_ctx.$t('main_page'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('monitor_projects'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("language-switcher") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.changeLanguage) }, value: ((__VLS_ctx.currentLanguage)), });
    for (const [label, lang] of __VLS_getVForSourceType((__VLS_ctx.languages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((lang)), value: ((lang)), });
        (label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("statistics") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row cards") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-2 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-3 card orange") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('monthly_arrears'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("amount") }, });
    (this.monthly_debt);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-3 card rad") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('total_arrears'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("amount") }, });
    (this.total_debt);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-3 card green") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t('client_balance'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("amount") }, });
    (this.balance);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("payments mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.$t('payments'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider mt-3 mb-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("details") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-green mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({});
    (__VLS_ctx.$t('today_situation'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    (__VLS_ctx.total_payment);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("chart"), });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("donut"), options: ((__VLS_ctx.pie_Options)), series: ((__VLS_ctx.pie_series)), height: ("400"), legend: ((__VLS_ctx.pie_Options.legend)), }));
    const __VLS_8 = __VLS_7({ type: ("donut"), options: ((__VLS_ctx.pie_Options)), series: ((__VLS_ctx.pie_series)), height: ("400"), legend: ((__VLS_ctx.pie_Options.legend)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-legend") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [value, index] of __VLS_getVForSourceType((__VLS_ctx.pie_series))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: (({ backgroundColor: __VLS_ctx.pie_Options.pie_colors[index] })) }, ...{ class: ("color-box") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label") }, });
        (__VLS_ctx.pie_Options.labels[index]);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("value") }, });
        (value);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("payment_details mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.$t('on_sale'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('house'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.on_sale.House);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('basement'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.on_sale.Basement);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('shop'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.on_sale.Shop);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('parking'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.on_sale.Parking);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("payment_details mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.$t('sold_out'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('house'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.sold_out.House);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('basement'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.sold_out.Basement);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('shop'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.sold_out.Shop);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('parking'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.sold_out.Parking);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("payment_details mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.$t('ordered'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('house'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.ordered.House);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('basement'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.ordered.Basement);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('shop'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.ordered.Shop);
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("w-100") }, });
    (__VLS_ctx.$t('parking'));
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.apartments_data.ordered.Parking);
    __VLS_styleScopedClasses['main-page'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['inner'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['language-switcher'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['statistics'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['cards'];
    __VLS_styleScopedClasses['col-2'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['col-3'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['orange'];
    __VLS_styleScopedClasses['amount'];
    __VLS_styleScopedClasses['col-3'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['rad'];
    __VLS_styleScopedClasses['amount'];
    __VLS_styleScopedClasses['col-3'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['green'];
    __VLS_styleScopedClasses['amount'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['payments'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['details'];
    __VLS_styleScopedClasses['text-green'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['chart-legend'];
    __VLS_styleScopedClasses['color-box'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['value'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['payment_details'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['payment_details'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['payment_details'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['w-100'];
    __VLS_styleScopedClasses['w-100'];
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
//# sourceMappingURL=MainPage.vue.js.map