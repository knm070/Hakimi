/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { defineComponent } from "vue";
import TableContainer from "../components/TableContainer.vue";
import MainSidebar from "../components/MainSidebar.vue";
import VueApexCharts from "vue3-apexcharts";
import axios from "axios";
import { useI18n } from "vue-i18n";
export default defineComponent({
    name: "MainPage",
    components: { MainSidebar, TableContainer, apexchart: VueApexCharts },
    data() {
        return {
            languages: {
                en: "English",
                uz: "Uzbek",
                ru: "Russian",
                fa: "Persian",
            },
            currentLanguage: "en",
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
    },
    mounted() {
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ MainSidebar, TableContainer, apexchart: VueApexCharts },
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-page") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.MainSidebar;
    /** @type { [typeof __VLS_components.MainSidebar, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ image: ("../image@2x.png"), home: ("../home.svg"), accountBalanceWallet: ("../account-balance-wallet1.svg"), creditCardClock: ("../credit-card-clock.svg"), locationCity: ("../location-city.svg"), contractEdit: ("../contract-edit.svg"), homeLinksTextDecoration: ("unset"), }));
    const __VLS_2 = __VLS_1({ image: ("../image@2x.png"), home: ("../home.svg"), accountBalanceWallet: ("../account-balance-wallet1.svg"), creditCardClock: ("../credit-card-clock.svg"), locationCity: ("../location-city.svg"), contractEdit: ("../contract-edit.svg"), homeLinksTextDecoration: ("unset"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inner") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({});
    (__VLS_ctx.$t("main_page"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("language-switcher") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.changeLanguage) }, value: ((__VLS_ctx.currentLanguage)), });
    for (const [label, lang] of __VLS_getVForSourceType((__VLS_ctx.languages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((lang)), value: ((lang)), });
        (label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_styleScopedClasses['main-page'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['inner'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['language-switcher'];
    __VLS_styleScopedClasses['divider'];
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
//# sourceMappingURL=Order.vue.js.map