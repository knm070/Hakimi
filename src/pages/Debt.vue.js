/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import Sidebar from "../components/Sidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { useI18n } from "vue-i18n";
export default (await import('vue')).defineComponent({
    name: "Debt",
    components: { Sidebar, apexchart: VueApexCharts },
    data() {
        return {
            languages: {
                en: "English",
                uz: "Uzbek",
                ru: "Russian",
                fa: "Persian",
            },
            currentLanguage: "en",
            clients_table: [],
            yearly_chart: [],
            daily_chart: [],
            monthly_chart: [],
            currentPage: 1, // Current active page
            perPage: 5, // Items per page
            searchQuery: "",
            timePeriod: "daily",
            currentMonth: new Date(),
            chartSeries: [],
            chartOptions: {
                chart: {
                    type: "bar",
                    height: 400,
                },
                plotOptions: {
                    bar: {
                        borderRadius: 5,
                        horizontal: false,
                        columnWidth: "60%",
                    },
                },
                colors: ["#00BA34"],
                yaxis: {
                    categories: [],
                    title: {
                        text: "Values",
                    },
                },
                xaxis: {},
                title: {
                    text: "Data Overview",
                    align: "left",
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    position: "top",
                },
            },
        };
    },
    setup() {
        const { locale } = useI18n();
        return { locale };
    },
    computed: {
        monthYearDisplay() {
            if (this.timePeriod === "monthly") {
                return this.currentMonth.getFullYear();
            }
            else if (this.timePeriod === "yearly") {
                const startYear = this.currentMonth.getFullYear() - 4;
                const endYear = this.currentMonth.getFullYear();
                return `${startYear} - ${endYear}`;
            }
            const options = { year: "numeric", month: "long" };
            return this.currentMonth.toLocaleDateString(undefined, options);
        },
        totalPages() {
            return Math.ceil(this.clients_table.length / this.perPage);
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.perPage;
            const end = this.currentPage * this.perPage;
            return this.clients_table.slice(start, end);
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
        setTimePeriod(period) {
            this.timePeriod = period;
            this.updateChartData();
        },
        getDaysOfMonth(date) {
            const start = new Date(date.getFullYear(), date.getMonth(), 1);
            const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            const days = [];
            for (let i = start.getDate(); i <= end.getDate(); i++) {
                days.push(`${i}`);
            }
            return days;
        },
        getMonthsOfYear() {
            return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        },
        getYears() {
            const currentYear = this.currentMonth.getFullYear();
            return Array.from({ length: 5 }, (_, i) => `${currentYear - 4 + i}`);
        },
        generateRandomData(count) {
            return Array.from({ length: count }, () => Math.floor(Math.random() * 100) + 1);
        },
        updateChartData() {
            let new_categories = [];
            let data = [];
            if (this.timePeriod === "daily") {
                new_categories = this.daily_chart.map((yearData) => yearData.datetime__date);
                data = this.daily_chart.map((yearData) => yearData.debt_amount);
                this.chartOptions.title.text = "Daily Data Overview";
            }
            else if (this.timePeriod === "monthly") {
                const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                new_categories = this.monthly_chart.map((monthData) => {
                    const monthIndex = monthData.datetime__month - 1; // Month index should be 0-based
                    // Ensure monthIndex is within the range 0-11
                    return monthIndex >= 0 && monthIndex < 12 ? monthNames[monthIndex] : "Unknown";
                });
                // Ensure monthly_chart data exists and is valid
                // if (this.monthly_chart && Array.isArray(this.monthly_chart)) {
                //   this.chartOptions.xaxis.categories = this.monthly_chart.map(
                //     (monthData) => monthNames[monthData.datetime__month - 1] || 'Unknown'
                //   );};
                data = this.monthly_chart.map((monthData) => monthData.debt_amount || 0);
                this.chartOptions.title.text = "Monthly Data Overview";
            }
            else if (this.timePeriod === "yearly") {
                new_categories = this.yearly_chart.map((yearData) => yearData.datetime__year);
                data = this.yearly_chart.map((yearData) => yearData.debt_amount);
                this.chartOptions.title.text = "Yearly Data Overview";
            }
            console.log("Data" + data);
            console.log("Category" + new_categories);
            console.log("Daily chart" + this.yearly_chart.map((yearData) => yearData.debt_amount));
            this.chartOptions.xaxis.categories = new_categories;
            this.chartSeries = [{ name: "Data", data }];
            this.chartOptions = {
                ...this.chartOptions,
                xaxis: {
                    categories: new_categories,
                },
            };
        },
        previousPeriod() {
            if (this.timePeriod === "daily") {
                this.currentMonth.setMonth(this.currentMonth.getMonth() - 1);
            }
            else if (this.timePeriod === "monthly") {
                this.currentMonth.setFullYear(this.currentMonth.getFullYear() - 1);
            }
            else if (this.timePeriod === "yearly") {
                this.currentMonth.setFullYear(this.currentMonth.getFullYear() - 5);
            }
            this.updateChartData();
        },
        nextPeriod() {
            if (this.timePeriod === "daily") {
                this.currentMonth.setMonth(this.currentMonth.getMonth() + 1);
            }
            else if (this.timePeriod === "monthly") {
                this.currentMonth.setFullYear(this.currentMonth.getFullYear() + 1);
            }
            else if (this.timePeriod === "yearly") {
                this.currentMonth.setFullYear(this.currentMonth.getFullYear() + 5);
            }
            this.updateChartData();
        },
        changeItemsPerPage() {
            this.currentPage = 1; // Reset to first page when items per page changes
        },
    },
    mounted() {
        axios
            .get("/contract/debts/statistics/clients/", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
            .then((res) => {
            this.clients_table = res.data;
            this.updateChartData(); // Initialize chart data
        }),
            axios
                .get("https://api.hakimi.itic.uz/contract/debts/statistics/2024/9/yearly", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
                .then((res) => {
                this.yearly_chart = res.data;
                this.updateChartData(); // Initialize chart data
                console.table("YEarly " + this.yearly_chart);
            }),
            axios
                .get("https://api.hakimi.itic.uz/contract/debts/statistics/2024/9/monthly", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
                .then((res) => {
                this.monthly_chart = res.data;
                this.updateChartData(); // Initialize chart data
            }),
            axios
                .get("https://api.hakimi.itic.uz/contract/debts/statistics/2024/9/daily", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
                .then((res) => {
                this.daily_chart = res.data;
                this.updateChartData(); // Initialize chart data
            });
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ Sidebar, apexchart: VueApexCharts },
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
    __VLS_styleScopedClasses['time-period-switch'];
    __VLS_styleScopedClasses['time-period-switch'];
    __VLS_styleScopedClasses['time-period-switch'];
    __VLS_styleScopedClasses['navigation'];
    __VLS_styleScopedClasses['prev-btn'];
    __VLS_styleScopedClasses['next-btn'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['styled-table'];
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
    (__VLS_ctx.$t("debt"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.$t("monitor_projects"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("language-switcher") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.changeLanguage) }, value: ((__VLS_ctx.currentLanguage)), });
    for (const [label, lang] of __VLS_getVForSourceType((__VLS_ctx.languages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((lang)), value: ((lang)), });
        (label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("debt") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("navigation") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.previousPeriod) }, ...{ class: ("prev-btn") }, });
    (__VLS_ctx.$t("prev"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("current-month") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.monthYearDisplay);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.nextPeriod) }, ...{ class: ("next-btn") }, });
    (__VLS_ctx.$t("next"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("time-period-switch") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.setTimePeriod('daily');
            } }, ...{ class: (({ active: __VLS_ctx.timePeriod === 'daily' })) }, });
    (__VLS_ctx.$t("daily"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.setTimePeriod('monthly');
            } }, ...{ class: (({ active: __VLS_ctx.timePeriod === 'monthly' })) }, });
    (__VLS_ctx.$t("monthly"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.setTimePeriod('yearly');
            } }, ...{ class: (({ active: __VLS_ctx.timePeriod === 'yearly' })) }, });
    (__VLS_ctx.$t("yearly"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("chart"), });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.apexchart;
    /** @type { [typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, typeof __VLS_components.Apexchart, typeof __VLS_components.apexchart, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("bar"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.chartSeries)), height: ("400"), }));
    const __VLS_8 = __VLS_7({ type: ("bar"), options: ((__VLS_ctx.chartOptions)), series: ((__VLS_ctx.chartSeries)), height: ("400"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("styled-table") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("first_name"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("last_name"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("company_name"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("payment_date"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("debt_amount"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("delay_period_days"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    (__VLS_ctx.$t("max_delay_period_days"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
    for (const [client, index] of __VLS_getVForSourceType((__VLS_ctx.paginatedData))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((index)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (client.contract__client_individual__first_name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (client.contract__client_individual__last_name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (client.contract__client_legal__company_name || "N/A");
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (client.payment_date);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (client.total_debt.toLocaleString());
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (client.delay_period);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
        (client.max_delay_period);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pagination-container") }, });
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
    __VLS_styleScopedClasses['main-page'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['inner'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['language-switcher'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['debt'];
    __VLS_styleScopedClasses['navigation'];
    __VLS_styleScopedClasses['prev-btn'];
    __VLS_styleScopedClasses['current-month'];
    __VLS_styleScopedClasses['next-btn'];
    __VLS_styleScopedClasses['time-period-switch'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['styled-table'];
    __VLS_styleScopedClasses['pagination-container'];
    __VLS_styleScopedClasses['pagination-container'];
    __VLS_styleScopedClasses['pagination-container'];
    __VLS_styleScopedClasses['pagination-btn'];
    __VLS_styleScopedClasses['pagination-btn'];
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
//# sourceMappingURL=Debt.vue.js.map