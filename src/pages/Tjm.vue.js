/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import TableContainer from "../components/TableContainer.vue";
import Sidebar from "../components/Sidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
import { useI18n } from "vue-i18n";
export default (await import('vue')).defineComponent({
    name: "TJM",
    components: {
        Sidebar,
        TableContainer,
        apexchart: VueApexCharts,
    },
    data() {
        return {
            languages: {
                en: "English",
                uz: "Uzbek",
                ru: "Russian",
                fa: "Persian",
            },
            currentLanguage: "en",
            isModalOpen: false,
            projectData: null,
            bardata: 0,
            total_initial_payments: 0,
            project_statistics: [],
            initial_payments: [],
            average: 0,
            for_apartments_for_sale: 0,
            for_sold_apartments: 0,
            series: [15, 28, 47], // Series data for the donut chart
            chartOptions: {
                chart: {
                    type: "donut",
                },
                title: {
                    text: "Total price of houses", // Chart title
                    align: "center",
                    margin: 10,
                    offsetY: 10,
                    style: {
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "#263238",
                    },
                },
                labels: ["On Sale", "Sold Out", "Ordered"], // Labels for the donut chart
                colors: ["#FF4560", "#00E396", "#008FFB"], // Customize colors if needed
                legend: {
                    position: "bottom",
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
                                width: 300,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
            barSeries: [
                {
                    name: "Hakimi Towers",
                    data: [], // Single data point for the category
                },
            ],
            barOptions: {
                chart: {
                    type: "bar",
                    height: 350,
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "50%",
                        endingShape: "rounded",
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                xaxis: {
                    categories: ["Hakimi Towers"], // Single category
                },
                yaxis: {
                    title: {
                        text: "Sales",
                    },
                },
            },
            donutSeries: [],
            donutOptions: {
                chart: {
                    type: "donut",
                    title: {
                        text: 'Total Initial Payments by House',
                    },
                },
                labels: ["№1", "№2", "№3", "№4", "№5"],
                plotOptions: {
                    pie: {
                        donut: {
                            size: "65%",
                        },
                    },
                },
                colors: [],
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    position: "bottom", // Position the legend to the right of the chart
                    horizontalAlign: "center", // Center align the legend vertically
                    formatter: (label, opts) => {
                        return `${label}: ${this.donutSeries[opts.seriesIndex].toLocaleString()}`;
                    },
                },
            },
            pieSeries: [],
            pieOptions: {
                chart: {
                    type: "donut",
                },
                // labels: this.getLabels(),
                labels: ["1 room", "3 rooms", "2 rooms"],
                plotOptions: {
                    pie: {
                        donut: {
                            size: "65%",
                        },
                    },
                },
                // colors: ["#FF4560"],
                dataLabels: {
                    enabled: false,
                    formatter: function (val, opts) {
                        return opts.w.config.series[opts.seriesIndex];
                    },
                },
                legend: {
                    position: "bottom",
                },
            },
        };
    },
    setup() {
        const { locale } = useI18n();
        return { locale };
    },
    async created() {
        await this.fetchData();
        await this.fetchInitialPayments();
        await this.fetchInittialData();
        await this.fetchAverageData();
        this.$refs.apexChart.updateOptions(this.donutOptions); // Update options to ensure they are applied
    },
    methods: {
        openModal() {
            this.isModalOpen = true;
            this.fetchProjectData();
        },
        async fetchProjectData() {
            try {
                const response = await axios.get("/contract/projects/statistics/");
                this.projectData = response.data[0];
            }
            catch (error) {
                console.error("Error fetching project data", error);
            }
        },
        async fetchInitialPayments() {
            try {
                const response = await axios.get("/contract/apartments/stats/total_initial_payments/");
                const houses = response.data[0].houses; // Assuming the data structure you provided
                this.donutSeries = houses.map(house => house.total_initial_payment);
                this.donutOptions.labels = houses.map(house => house.name);
                // console.log(this.donutOptions.labels); // Should show the names of the houses
                console.log('Series:', this.donutSeries);
                console.log('Labels:', this.donutOptions.labels);
            }
            catch (error) {
                console.error("Error fetching project data", error);
            }
        },
        changeLanguage(event) {
            this.currentLanguage = event.target.value;
            this.$i18n.locale = this.currentLanguage;
        },
        async fetchData() {
            try {
                const response = await axios.get("/contract/projects/total-statistics/");
                const data = response.data;
                this.total_initial_payments = data.contracted_paid_apartments_amount.toLocaleString();
                this.bardata = data.apartments_total_amount_in_sale + data.contracted_paid_apartments_amount + data.contracted_not_paid_apartments_amount;
                this.barSeries[0].data = [this.bardata];
                this.series = [data.apartments_total_amount_in_sale, data.contracted_paid_apartments_amount, data.contracted_not_paid_apartments_amount];
                this.chartOptions.labels = ["On Sale", "Sold Out", "Ordered"];
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        async fetchInittialData() {
            try {
                const response = await axios.get("/contract/apartments/stats/for-sale/");
                const data = response.data;
                this.project_statistics = data;
                // this.pieOptions.labels.value = data.map(item => `Room ${item.room_numbers}`);
                this.pieSeries = data.map((item) => item.total_apartments);
                // Update series and labels based on the fetched data
                // this.series = [data.on_sale, data.sold_out, data.ordered];
                // this.chartOptions.labels = ["On Sale", "Sold Out", "Ordered"];
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        async fetchAverageData() {
            try {
                const response = await axios.get("/contract/average-prices/");
                const data = response.data[0];
                this.for_sold_apartments = data.for_sold_apartments;
                this.for_apartments_for_sale = data.for_apartments_for_sale;
                this.average = data.average;
                // Update series and labels based on the fetched data
                // this.series = [data.on_sale, data.sold_out, data.ordered];
                // this.chartOptions.labels = ["On Sale", "Sold Out", "Ordered"];
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            Sidebar,
            TableContainer,
            apexchart: VueApexCharts,
        },
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
    __VLS_styleScopedClasses['details'];
    __VLS_styleScopedClasses['details'];
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
    (__VLS_ctx.$t("tjm"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("language-switcher") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.changeLanguage) }, value: ((__VLS_ctx.currentLanguage)), });
    for (const [label, lang] of __VLS_getVForSourceType((__VLS_ctx.languages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((lang)), value: ((lang)), });
        (label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tjm row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border col-6 p-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({});
    (__VLS_ctx.$t("general_statistics"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("donut"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), height: ("350"), }));
    const __VLS_8 = __VLS_7({ type: ("donut"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), height: ("350"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border mt-3 p-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.$t("sale_of_apartments"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("blue-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({});
    (__VLS_ctx.$t("number_of_houses_sold"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (__VLS_ctx.openModal) }, ...{ class: ("blue-card") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({ ...{ style: ({}) }, });
    (__VLS_ctx.$t("sold_out"));
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.BModal;
    /** @type { [typeof __VLS_components.BModal, typeof __VLS_components.bModal, typeof __VLS_components.BModal, typeof __VLS_components.bModal, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ modelValue: ((__VLS_ctx.isModalOpen)), title: ("Project Statistics"), hideFooter: (true), }));
    const __VLS_14 = __VLS_13({ modelValue: ((__VLS_ctx.isModalOpen)), title: ("Project Statistics"), hideFooter: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    if (__VLS_ctx.projectData) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        for (const [house] of __VLS_getVForSourceType((__VLS_ctx.projectData.total_amount))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((house.house_id)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (house.house_id);
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (house.total_amount.toLocaleString());
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (house.for_sale_amount.toLocaleString());
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (house.sold_amount.toLocaleString());
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (house.paid_amount.toLocaleString());
            __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
            (house.not_paid_amount.toLocaleString());
            __VLS_elementAsFunction(__VLS_intrinsicElements.hr)({});
        }
    }
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border mt-2 p-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.$t("average_price_per_m2"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("blue-card") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("details") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("for_sold_apartments"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    (this.for_sold_apartments.toLocaleString());
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("for_apartments_for_sale"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    (this.for_apartments_for_sale.toLocaleString());
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    (__VLS_ctx.$t("average"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    (this.average.toLocaleString());
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({});
    (__VLS_ctx.$t("according_to_residential_complexes"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border") }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ type: ("bar"), options: ((__VLS_ctx.barOptions)), series: ((__VLS_ctx.barSeries)), }));
    const __VLS_20 = __VLS_19({ type: ("bar"), options: ((__VLS_ctx.barOptions)), series: ((__VLS_ctx.barSeries)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border mt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.small, __VLS_intrinsicElements.small)({});
    (__VLS_ctx.$t("total_initial_payments"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    (this.total_initial_payments);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ type: ("donut"), options: ((__VLS_ctx.donutOptions)), series: ((__VLS_ctx.donutSeries)), height: ("250"), }));
    const __VLS_26 = __VLS_25({ type: ("donut"), options: ((__VLS_ctx.donutOptions)), series: ((__VLS_ctx.donutSeries)), height: ("250"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("border mt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.b, __VLS_intrinsicElements.b)({});
    (__VLS_ctx.$t("houses_on_sale"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ type: ("donut"), options: ((__VLS_ctx.pieOptions)), series: ((__VLS_ctx.pieSeries)), height: ("350"), }));
    const __VLS_32 = __VLS_31({ type: ("donut"), options: ((__VLS_ctx.pieOptions)), series: ((__VLS_ctx.pieSeries)), height: ("350"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_styleScopedClasses['main-page'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['inner'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['language-switcher'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['tjm'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['blue-card'];
    __VLS_styleScopedClasses['blue-card'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['p-3'];
    __VLS_styleScopedClasses['blue-card'];
    __VLS_styleScopedClasses['details'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['mt-2'];
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
//# sourceMappingURL=Tjm.vue.js.map