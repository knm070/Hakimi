/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import TableContainer from "../components/TableContainer.vue";
import Sidebar from "../components/Sidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import { useI18n } from "vue-i18n";
import axios from "axios";
export default (await import('vue')).defineComponent({
    name: "Sale",
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
            series: [], // This will hold contract numbers
            chartOptions: {
                chart: {
                    type: "donut",
                    events: {}, // You can define chart events here if needed
                },
                labels: [], // This will hold region names
                colors: [], // Dynamic colors
                legend: {
                    position: "right", // Position the legend to the right of the chart
                    horizontalAlign: "center", // Center align the legend vertically
                    formatter: (label, opts) => {
                        return `${label}: ${this.series[opts.seriesIndex].toLocaleString()}`;
                    },
                },
                tooltip: {
                    y: {
                        formatter: (value) => {
                            // Format series values as numbers with commas
                            return value.toLocaleString();
                        },
                    },
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 300,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
            barseries: [
                {
                    name: "Room Sales",
                    data: [],
                },
            ],
            barOptions: {
                chart: {
                    type: "bar",
                    height: 350,
                },
                xaxis: {
                    categories: [], // Will hold the months
                    title: {
                        text: "Months",
                    },
                },
                yaxis: {
                    title: {
                        text: "Number of Rooms",
                    },
                },
                title: {
                    text: "Monthly Room Sales",
                    align: "center",
                },
            },
        };
    },
    mounted() {
        this.fetchData();
        this.fetchBarData();
    },
    methods: {
        changeLanguage(event) {
            this.currentLanguage = event.target.value;
            this.$i18n.locale = this.currentLanguage;
        },
        fetchData() {
            axios
                .get("https://api.hakimi.itic.uz/contract/address")
                .then((response) => {
                const data = response.data;
                const series = data.map((item) => item.number_of_contract); // Extract contract numbers
                const labels = data.map((item) => item.region); // Extract region names
                const colors = this.generateColors(labels.length);
                this.series = series;
                this.chartOptions = {
                    ...this.chartOptions, // Preserve other options
                    labels: labels, // Set the region labels
                    colors: colors, // Set the dynamically generated colors
                };
                console.log(this.chartOptions.labels);
            })
                .catch((error) => {
                console.error("Error fetching data:", error);
            });
        },
        generateColors(count) {
            const colors = [];
            for (let i = 0; i < count; i++) {
                colors.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`); // Generate random hex color
            }
            return colors;
        },
        fetchBarData() {
            axios
                .get("contract/apartments/roomsale/?sales_matric=room_numbers")
                .then((response) => {
                const data = response.data;
                const months = data.map((item) => this.getMonthName(item.month)); // Map month numbers to names
                const roomNumbers = data.map((item) => item.room_numbers); // Extract room numbers
                // Update chart data
                this.barseries[0].data = roomNumbers;
                this.barOptions.xaxis.categories = months;
            })
                .catch((error) => {
                console.error("Error fetching data:", error);
            });
        },
        getMonthName(month) {
            const monthNames = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
            ];
            return monthNames[month - 1];
        },
    },
    setup() {
        const { locale } = useI18n();
        return { locale };
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
    (__VLS_ctx.$t("Sale"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("monitor_projects"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("language-switcher") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.changeLanguage) }, value: ((__VLS_ctx.currentLanguage)), });
    for (const [label, lang] of __VLS_getVForSourceType((__VLS_ctx.languages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((lang)), value: ((lang)), });
        (label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-5 c") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("donut"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), width: ("500"), height: ("400"), }));
    const __VLS_8 = __VLS_7({ type: ("donut"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), width: ("500"), height: ("400"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-5 border") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-12 border mt-5") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ type: ("bar"), options: ((__VLS_ctx.barOptions)), series: ((__VLS_ctx.barseries)), }));
    const __VLS_14 = __VLS_13({ type: ("bar"), options: ((__VLS_ctx.barOptions)), series: ((__VLS_ctx.barseries)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_styleScopedClasses['main-page'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['inner'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['language-switcher'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['col-5'];
    __VLS_styleScopedClasses['c'];
    __VLS_styleScopedClasses['col-5'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['col-12'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['mt-5'];
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
//# sourceMappingURL=Sale.vue.js.map