/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import TableContainer from "../components/TableContainer.vue";
import Sidebar from "../components/Sidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import dayjs from "dayjs"; // For handling date formatting
import axios from "axios";
import { useI18n } from "vue-i18n";
export default (await import('vue')).defineComponent({
    name: "Payments",
    components: { Sidebar, TableContainer, apexchart: VueApexCharts, VueDatePicker },
    data() {
        const startDate = new Date();
        const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
        return {
            languages: {
                en: "English",
                uz: "Uzbek",
                ru: "Russian",
                fa: "Persian",
            },
            currentLanguage: "en",
            month: new Date().getMonth(),
            year: new Date().getFullYear(),
            selectedDate: [startDate, endDate],
            barSeries: [
                {
                    name: "Plan (monthly payment schedule)",
                    data: [],
                },
                {
                    name: "Payments",
                    data: [],
                },
            ],
            barOptions: {
                chart: {
                    type: "bar",
                    stacked: false,
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "50%",
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                colors: ["#FECB48", "#00BA34"],
                xaxis: {
                    categories: [],
                    title: {
                        text: "Months",
                    },
                },
                yaxis: {
                    title: {
                        text: "Amount (soum)",
                    },
                },
                legend: {
                    position: "top",
                },
                title: {
                    text: "Monthly Payments (2023-2024)",
                },
            },
            donut_series: [],
            donut_Options: {
                labels: ["On Time", "Late (1 Month)", "Late (3 Months)", "Late (1 Year)", "Late (More than a Year)", "Not Paid"],
                chart: {
                    type: "polarArea",
                },
                pie_colors2: ["#00E396", "#FF4560", "#FEB019", "#775DD0", "#008FFB", "#FF6347"],
                dataLabels: {
                    enabled: false,
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: "100%",
                                height: "300px",
                            },
                            legend: {
                                show: false,
                            },
                            dataLabels: {
                                enabled: false,
                            },
                        },
                    },
                ],
            },
            series: [
                {
                    name: "Payment",
                    data: [],
                },
                {
                    name: "Terminal",
                    data: [],
                },
                {
                    name: "Cash",
                    data: [],
                },
                {
                    name: "P2P",
                    data: [],
                },
                {
                    name: "Bank",
                    data: [],
                },
                {
                    name: "Other",
                    data: [],
                },
            ],
            chartOptions: {
                chart: {
                    id: "bar-chart",
                },
                xaxis: {
                    categories: [], // Full dates (YYYY-MM-DD)
                    labels: {
                        show: true,
                        rotate: -45, // Rotate labels to avoid overlap
                    },
                    tickAmount: "dataPoints", // Ensures that a tick is placed for each data point
                },
                dataLabels: {
                    enabled: false,
                },
                yaxis: {
                    labels: {
                        style: {
                            colors: ["#000000"], // Y-axis label color set to black
                            fontSize: "12px",
                        },
                    },
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "55%",
                        endingShape: "rounded",
                    },
                },
                fill: {
                    opacity: 1,
                },
                title: {
                    text: "Payments Statistics",
                    align: "center",
                },
            },
            currentPage: 1,
            perPage: 5,
            expecting_payments: [],
            deadline: [],
            statistic_payment: [],
            paymentData: [],
            date: null,
        };
    },
    setup() {
        const { locale } = useI18n();
        return { locale };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.paymentData.length / this.perPage);
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = this.currentPage * this.perPage;
            return this.paymentData.slice(start, end);
        },
    },
    methods: {
        changeLanguage(event) {
            this.currentLanguage = event.target.value;
            this.$i18n.locale = this.currentLanguage;
        },
        goToPage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },
        changeItemsPerPage() {
            this.currentPage = 1;
        },
        async fetchPaymentDeadlineStats() {
            try {
                const response = await axios.get("/contract/payment/deadline");
                const data = response.data;
                this.donut_series = [data.on_time, data.late_one_month, data.late_three_months, data.late_one_year, data.late_more_than_year, data.not_paid];
                // this.donut_Options.labels = ["On Time", "Late (1 Month)", "Late (3 Months)", "Late (1 Year)", "Late (More than a Year)", "Not Paid"];
            }
            catch (error) {
                console.error("Error fetching payment data:", error);
            }
        },
        async fetchPaymentData() {
            try {
                const response = await axios.get("/contract/payment/monthly/2023/2024");
                const data = response.data;
                const expectingPayments = [];
                const paidPayments = [];
                const months = [];
                data.forEach((entry) => {
                    const monthYear = dayjs()
                        .month(entry.month - 1)
                        .year(entry.year)
                        .format("MMM YYYY");
                    months.push(monthYear);
                    expectingPayments.push(entry.expecting_payment || 0);
                    paidPayments.push(entry.paid || 0);
                });
                this.barSeries[0].data = expectingPayments;
                this.barSeries[1].data = paidPayments;
                this.barOptions.xaxis.categories = months;
            }
            catch (error) {
                console.error("Error fetching payment data:", error);
            }
        },
        async fetchData() {
            try {
                const currentDate = dayjs(); // Get current date
                const year = currentDate.year(); // Get current year
                const month = currentDate.month() + 1; // Get current month (months are 0-based in dayjs, so add 1)
                // Fetch data from the API
                const response = await axios.get(`/contract/payment/statistic/?year=${year}&month=${month}`);
                this.paymentData = response.data.detail;
                const daysInMonth = currentDate.daysInMonth();
                // Create an array of all days in the month
                const allDays = Array.from({ length: daysInMonth }, (_, index) => dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"));
                // Initialize series arrays
                let paymentSeries = Array(daysInMonth).fill(0);
                let terminalSeries = Array(daysInMonth).fill(0);
                let cashSeries = Array(daysInMonth).fill(0);
                let p2pSeries = Array(daysInMonth).fill(0);
                let bankSeries = Array(daysInMonth).fill(0);
                let otherSeries = Array(daysInMonth).fill(0);
                let totalPaymentSeries = Array(daysInMonth).fill(0);
                // Populate the series arrays
                this.paymentData.forEach((item) => {
                    const index = allDays.indexOf(item.datetime__date);
                    if (index !== -1) {
                        paymentSeries[index] = item.payment || 0;
                        terminalSeries[index] = item.terminal || 0;
                        cashSeries[index] = item.cash || 0;
                        p2pSeries[index] = item.p2p || 0;
                        bankSeries[index] = item.bank || 0;
                        otherSeries[index] = item.other || 0;
                        // Calculate total payment for each day
                        totalPaymentSeries[index] = item.payment + item.terminal + item.cash + item.p2p + item.bank + item.other;
                    }
                });
                // Directly update the chart with the total payment series data
                this.series = [
                    {
                        name: "Total Payment", // Series name
                        data: totalPaymentSeries,
                    },
                ];
                // Update the chart x-axis categories with the days of the month
                this.chartOptions.xaxis.categories = allDays;
                // Configure the tooltip to display all categories on hover
                this.chartOptions.tooltip = {
                    shared: true,
                    intersect: false,
                    custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                        const total = totalPaymentSeries[dataPointIndex];
                        const payment = paymentSeries[dataPointIndex];
                        const terminal = terminalSeries[dataPointIndex];
                        const cash = cashSeries[dataPointIndex];
                        const p2p = p2pSeries[dataPointIndex];
                        const bank = bankSeries[dataPointIndex];
                        const other = otherSeries[dataPointIndex];
                        return `
          <div class="tooltip-container">
            <strong>Date: ${w.globals.categoryLabels[dataPointIndex]}</strong><br/>
            <strong>Total Payment: ${total}</strong><br/>
            <strong>Details:</strong><br/>
            Payment: ${payment}<br/>
            Terminal: ${terminal}<br/>
            Cash: ${cash}<br/>
            P2P: ${p2p}<br/>
            Bank: ${bank}<br/>
            Other: ${other}
          </div>
        `;
                    },
                };
            }
            catch (error) {
                console.error("Error fetching data:", error);
            }
        },
    },
    mounted() {
        this.fetchPaymentData();
        this.fetchData();
        this.fetchPaymentDeadlineStats();
        axios
            .get("/contract/payment/expecting/?year=2024&month=9", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => {
            this.expecting_payments = res.data;
        })
            .catch((error) => {
            console.error("Error fetching expecting payments:", error);
        });
    },
    watch: {
        donut_series: {
            deep: true,
            handler(newValue) {
                if (this.$refs.apexchart && newValue.length > 0) {
                    this.$refs.apexchart.updateSeries(newValue);
                }
            },
        },
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ Sidebar, TableContainer, apexchart: VueApexCharts, VueDatePicker },
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
    __VLS_styleScopedClasses['filter-buttons'];
    __VLS_styleScopedClasses['pay-btn'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['top'];
    __VLS_styleScopedClasses['blocks'];
    __VLS_styleScopedClasses['color-box'];
    __VLS_styleScopedClasses['chart-legend'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("payments-page") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Sidebar;
    /** @type { [typeof __VLS_components.Sidebar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ image: ("../logo.svg"), home: ("../home.svg"), accountBalanceWallet: ("../account-balance-wallet1.svg"), creditCardClock: ("../credit-card-clock.svg"), locationCity: ("../location-city.svg"), contractEdit: ("../contract-edit.svg"), homeLinksTextDecoration: ("unset"), }));
    const __VLS_2 = __VLS_1({ image: ("../logo.svg"), home: ("../home.svg"), accountBalanceWallet: ("../account-balance-wallet1.svg"), creditCardClock: ("../credit-card-clock.svg"), locationCity: ("../location-city.svg"), contractEdit: ("../contract-edit.svg"), homeLinksTextDecoration: ("unset"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inner") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    (__VLS_ctx.$t("payments"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("monitor_projects"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("language-switcher") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.changeLanguage) }, value: ((__VLS_ctx.currentLanguage)), });
    for (const [label, lang] of __VLS_getVForSourceType((__VLS_ctx.languages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((lang)), value: ((lang)), });
        (label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("payments-data") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("nav nav-tabs") }, role: ("tablist"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("nav-link active") }, id: ("simple-tab-0"), "data-bs-toggle": ("tab"), href: ("#simple-tabpanel-0"), role: ("tab"), "aria-controls": ("simple-tabpanel-0"), "aria-selected": ("true"), });
    (__VLS_ctx.$t("payments"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("nav-link") }, id: ("simple-tab-1"), "data-bs-toggle": ("tab"), href: ("#simple-tabpanel-1"), role: ("tab"), "aria-controls": ("simple-tabpanel-1"), "aria-selected": ("false"), });
    (__VLS_ctx.$t("payment_period"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("nav-link") }, id: ("simple-tab-2"), "data-bs-toggle": ("tab"), href: ("#simple-tabpanel-2"), role: ("tab"), "aria-controls": ("simple-tabpanel-2"), "aria-selected": ("false"), });
    (__VLS_ctx.$t("monthly_payment_schedule"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-content pt-2") }, id: ("tab-content"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane active") }, id: ("simple-tabpanel-0"), role: ("tabpanel"), "aria-labelledby": ("simple-tab-0"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("chart"), });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("bar"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), height: ("350"), }));
    const __VLS_8 = __VLS_7({ type: ("bar"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.series)), height: ("350"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("styled-table") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("date"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("payment"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("terminal"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("cash"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("money_transfer"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("bank"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("other"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.paymentData))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.datetime__date);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.payment);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.terminal);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.cash);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.p2p);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.bank);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (item.other);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pagination-container") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("perPage"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.changeItemsPerPage) }, id: ("perPage"), value: ((__VLS_ctx.perPage)), });
    for (const [option] of __VLS_getVForSourceType(([5, 10, 15, 20]))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((option)), value: ((option)), });
        (option);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pagination-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.goToPage(__VLS_ctx.currentPage - 1);
            } }, ...{ class: ("pagination-btn") }, disabled: ((__VLS_ctx.currentPage === 1)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.currentPage);
    (__VLS_ctx.totalPages);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.goToPage(__VLS_ctx.currentPage + 1);
            } }, ...{ class: ("pagination-btn") }, disabled: ((__VLS_ctx.currentPage === __VLS_ctx.totalPages)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane") }, id: ("simple-tabpanel-1"), role: ("tabpanel"), "aria-labelledby": ("simple-tab-1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row pt-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6 border") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({});
    (__VLS_ctx.$t("payment_period"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.br)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("chart-legend") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [value, index] of __VLS_getVForSourceType((__VLS_ctx.donut_series))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ style: (({ backgroundColor: __VLS_ctx.donut_Options.pie_colors2[index] })) }, ...{ class: ("color-box") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("label") }, });
        (__VLS_ctx.donut_Options.labels[index]);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("value") }, });
        (value);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6 border") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("top d-flex justify-content-space-between") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({ ...{ class: ("pt-2") }, });
    (__VLS_ctx.$t("expected_payments"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("form-select") }, "aria-label": ("Default select example"), ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ selected: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("1"), });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.VueDatePicker;
    /** @type { [typeof __VLS_components.VueDatePicker, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ modelValue: ((__VLS_ctx.month)), monthPicker: (true), }));
    const __VLS_14 = __VLS_13({ modelValue: ((__VLS_ctx.month)), monthPicker: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("form-select") }, "aria-label": ("Default select example"), ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ selected: (true), });
    (__VLS_ctx.$t("all_residential_complexes"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({ ...{ class: ("pt-2 mb-2") }, });
    (__VLS_ctx.$t("expected_payments"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("block gray mt-3") }, });
    ((__VLS_ctx.expecting_payments.full_payment ?? 0).toLocaleString());
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("blocks mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("block purple") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("block orange") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex text-bold mt-2") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-purple") }, });
    ((__VLS_ctx.expecting_payments.paid ?? 0).toLocaleString());
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-orange") }, });
    ((__VLS_ctx.expecting_payments.expecting_payment ?? 0).toLocaleString());
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({ ...{ class: ("pt-2 mb-2") }, });
    (__VLS_ctx.$t("overdue_payments_schedule"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("block gray mt-3") }, });
    ((__VLS_ctx.expecting_payments.overdue_payments ?? 0).toLocaleString());
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("blocks mt-3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("block purple") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("block orange") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex text-bold mt-2") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-purple") }, });
    (__VLS_ctx.expecting_payments.overdue_paid ?? 0);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-orange") }, });
    ((__VLS_ctx.expecting_payments.overdue_expecting_payments ?? 0).toLocaleString());
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("info d-flex mt-4") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("Ellipse1") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("payments"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("Ellipse1 ml-2") }, ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_ctx.$t("expected_payments"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane") }, id: ("simple-tabpanel-2"), role: ("tabpanel"), "aria-labelledby": ("simple-tab-2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.VueDatePicker;
    /** @type { [typeof __VLS_components.VueDatePicker, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.date)), range: (true), multiCalendars: ((true)), }));
    const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.date)), range: (true), multiCalendars: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ style: ({}) }, });
    (__VLS_ctx.date);
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ class: ("form-select ml-5") }, "aria-label": ("Default select example"), ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ selected: (true), });
    (__VLS_ctx.$t("all_residential_complexes"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("1"), });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ type: ("bar"), height: ("350"), options: ((__VLS_ctx.barOptions)), series: ((__VLS_ctx.barSeries)), }));
    const __VLS_26 = __VLS_25({ type: ("bar"), height: ("350"), options: ((__VLS_ctx.barOptions)), series: ((__VLS_ctx.barSeries)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    __VLS_styleScopedClasses[''];
    __VLS_styleScopedClasses['payments-page'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['inner'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['language-switcher'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['payments-data'];
    __VLS_styleScopedClasses['nav'];
    __VLS_styleScopedClasses['nav-tabs'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['tab-content'];
    __VLS_styleScopedClasses['pt-2'];
    __VLS_styleScopedClasses['tab-pane'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['pagination-container'];
    __VLS_styleScopedClasses['pagination-container'];
    __VLS_styleScopedClasses['pagination-btn'];
    __VLS_styleScopedClasses['pagination-btn'];
    __VLS_styleScopedClasses['tab-pane'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['pt-2'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['chart-legend'];
    __VLS_styleScopedClasses['color-box'];
    __VLS_styleScopedClasses['label'];
    __VLS_styleScopedClasses['value'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['top'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-content-space-between'];
    __VLS_styleScopedClasses['pt-2'];
    __VLS_styleScopedClasses['form-select'];
    __VLS_styleScopedClasses['form-select'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['pt-2'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['gray'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['blocks'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['purple'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['orange'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['text-bold'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-purple'];
    __VLS_styleScopedClasses['text-orange'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['pt-2'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['gray'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['blocks'];
    __VLS_styleScopedClasses['mt-3'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['purple'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['orange'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['text-bold'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['text-purple'];
    __VLS_styleScopedClasses['text-orange'];
    __VLS_styleScopedClasses['info'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['Ellipse1'];
    __VLS_styleScopedClasses['Ellipse1'];
    __VLS_styleScopedClasses['ml-2'];
    __VLS_styleScopedClasses['tab-pane'];
    __VLS_styleScopedClasses['form-select'];
    __VLS_styleScopedClasses['ml-5'];
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
//# sourceMappingURL=Payments.vue.js.map