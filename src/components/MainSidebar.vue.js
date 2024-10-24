/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { defineComponent } from "vue";
export default defineComponent({
    name: "Sidebar",
    props: {
        image: { type: String },
        home: { type: String },
        accountBalanceWallet: { type: String },
        creditCardClock: { type: String },
        locationCity: { type: String },
        contractEdit: { type: String },
        homeLinksTextDecoration: { type: String },
    },
    computed: {
        debtStyle() {
            return {
                textDecoration: this.homeLinksTextDecoration,
            };
        },
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    __VLS_styleScopedClasses['sidebar3'];
    __VLS_styleScopedClasses['hakimi-towers1'];
    __VLS_styleScopedClasses['logo1'];
    __VLS_styleScopedClasses['home-links'];
    __VLS_styleScopedClasses['home-links1'];
    __VLS_styleScopedClasses['home-links2'];
    __VLS_styleScopedClasses['home-links3'];
    __VLS_styleScopedClasses['home-links4'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sidebar2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("logo1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("image-icon1") }, loading: ("lazy"), alt: (""), src: ((__VLS_ctx.image)), });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/mainpage"), ...{ class: ("hakimi-towers1") }, }));
    const __VLS_2 = __VLS_1({ to: ("/mainpage"), ...{ class: ("hakimi-towers1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("sidebar3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-links") }, ...{ class: (({ active: __VLS_ctx.$route.path === '/home' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("home-icon1") }, loading: ("lazy"), alt: (""), src: ((__VLS_ctx.home)), });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/home"), ...{ class: ("main-page3") }, }));
    const __VLS_8 = __VLS_7({ to: ("/home"), ...{ class: ("main-page3") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    (__VLS_ctx.$t('main_page'));
    __VLS_nonNullable(__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-links1") }, ...{ class: (({ active: __VLS_ctx.$route.path === '/order' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("account-balance-wallet-icon1") }, alt: (""), src: ((__VLS_ctx.accountBalanceWallet)), });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ to: ("/order"), ...{ class: ("payment5") }, }));
    const __VLS_14 = __VLS_13({ to: ("/order"), ...{ class: ("payment5") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    (__VLS_ctx.$t('Order'));
    __VLS_nonNullable(__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-links2") }, ...{ class: (({ active: __VLS_ctx.$route.path === '/main_contract' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("credit-card-clock-icon1") }, loading: ("lazy"), alt: (""), src: ((__VLS_ctx.creditCardClock)), });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ to: ("/main_contract"), ...{ class: ("debt1") }, ...{ style: ((__VLS_ctx.debtStyle)) }, }));
    const __VLS_20 = __VLS_19({ to: ("/main_contract"), ...{ class: ("debt1") }, ...{ style: ((__VLS_ctx.debtStyle)) }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    (__VLS_ctx.$t('Contract'));
    __VLS_nonNullable(__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-links3") }, ...{ class: (({ active: __VLS_ctx.$route.path === '/main_payment' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("location-city-icon1") }, loading: ("lazy"), alt: (""), src: ((__VLS_ctx.locationCity)), });
    const __VLS_24 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ to: ("/main_payment"), ...{ class: ("tjm1") }, }));
    const __VLS_26 = __VLS_25({ to: ("/main_payment"), ...{ class: ("tjm1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    (__VLS_ctx.$t('payment'));
    __VLS_nonNullable(__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-links4") }, ...{ class: (({ active: __VLS_ctx.$route.path === '/clients' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("contract-edit-icon1") }, loading: ("lazy"), alt: (""), src: ((__VLS_ctx.contractEdit)), });
    const __VLS_30 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ to: ("/clients"), ...{ class: ("contract1") }, }));
    const __VLS_32 = __VLS_31({ to: ("/clients"), ...{ class: ("contract1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    (__VLS_ctx.$t('clients'));
    __VLS_nonNullable(__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-links4") }, ...{ class: (({ active: __VLS_ctx.$route.path === '/main_debt' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("contract-edit-icon1") }, loading: ("lazy"), alt: (""), src: ((__VLS_ctx.contractEdit)), });
    const __VLS_36 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ to: ("/main_debt"), ...{ class: ("contract1") }, }));
    const __VLS_38 = __VLS_37({ to: ("/main_debt"), ...{ class: ("contract1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    (__VLS_ctx.$t('Debt'));
    __VLS_nonNullable(__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-links4") }, ...{ class: (({ active: __VLS_ctx.$route.path === '/sms' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("contract-edit-icon1") }, loading: ("lazy"), alt: (""), src: ((__VLS_ctx.contractEdit)), });
    const __VLS_42 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ to: ("/sms"), ...{ class: ("contract1") }, }));
    const __VLS_44 = __VLS_43({ to: ("/sms"), ...{ class: ("contract1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    (__VLS_ctx.$t('SMS'));
    __VLS_nonNullable(__VLS_47.slots).default;
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-links4") }, ...{ class: (({ active: __VLS_ctx.$route.path === '/changes' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("contract-edit-icon1") }, loading: ("lazy"), alt: (""), src: ((__VLS_ctx.contractEdit)), });
    const __VLS_48 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ to: ("/changes"), ...{ class: ("contract1") }, }));
    const __VLS_50 = __VLS_49({ to: ("/changes"), ...{ class: ("contract1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    (__VLS_ctx.$t('Changes'));
    __VLS_nonNullable(__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-links4") }, ...{ class: (({ active: __VLS_ctx.$route.path === '/mainpage' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("contract-edit-icon1") }, loading: ("lazy"), alt: (""), src: ((__VLS_ctx.contractEdit)), });
    const __VLS_54 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ to: ("/mainpage"), ...{ class: ("contract1") }, }));
    const __VLS_56 = __VLS_55({ to: ("/mainpage"), ...{ class: ("contract1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    (__VLS_ctx.$t('Statistics'));
    __VLS_nonNullable(__VLS_59.slots).default;
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-links4") }, ...{ class: (({ active: __VLS_ctx.$route.path === '/shaxmatka' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("contract-edit-icon1") }, loading: ("lazy"), alt: (""), src: ((__VLS_ctx.contractEdit)), });
    const __VLS_60 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ to: ("/shaxmatka"), ...{ class: ("contract1") }, }));
    const __VLS_62 = __VLS_61({ to: ("/shaxmatka"), ...{ class: ("contract1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    (__VLS_ctx.$t('Showroom'));
    __VLS_nonNullable(__VLS_65.slots).default;
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("home-links4") }, ...{ class: (({ active: __VLS_ctx.$route.path === '/settings' })) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("contract-edit-icon1") }, loading: ("lazy"), alt: (""), src: ((__VLS_ctx.contractEdit)), });
    const __VLS_66 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ to: ("/settings"), ...{ class: ("contract1") }, }));
    const __VLS_68 = __VLS_67({ to: ("/settings"), ...{ class: ("contract1") }, }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    (__VLS_ctx.$t('Settings'));
    __VLS_nonNullable(__VLS_71.slots).default;
    const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    __VLS_styleScopedClasses['sidebar2'];
    __VLS_styleScopedClasses['logo1'];
    __VLS_styleScopedClasses['image-icon1'];
    __VLS_styleScopedClasses['hakimi-towers1'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['sidebar3'];
    __VLS_styleScopedClasses['home-links'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['home-icon1'];
    __VLS_styleScopedClasses['main-page3'];
    __VLS_styleScopedClasses['home-links1'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['account-balance-wallet-icon1'];
    __VLS_styleScopedClasses['payment5'];
    __VLS_styleScopedClasses['home-links2'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['credit-card-clock-icon1'];
    __VLS_styleScopedClasses['debt1'];
    __VLS_styleScopedClasses['home-links3'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['location-city-icon1'];
    __VLS_styleScopedClasses['tjm1'];
    __VLS_styleScopedClasses['home-links4'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['contract-edit-icon1'];
    __VLS_styleScopedClasses['contract1'];
    __VLS_styleScopedClasses['home-links4'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['contract-edit-icon1'];
    __VLS_styleScopedClasses['contract1'];
    __VLS_styleScopedClasses['home-links4'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['contract-edit-icon1'];
    __VLS_styleScopedClasses['contract1'];
    __VLS_styleScopedClasses['home-links4'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['contract-edit-icon1'];
    __VLS_styleScopedClasses['contract1'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['home-links4'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['contract-edit-icon1'];
    __VLS_styleScopedClasses['contract1'];
    __VLS_styleScopedClasses['home-links4'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['contract-edit-icon1'];
    __VLS_styleScopedClasses['contract1'];
    __VLS_styleScopedClasses['home-links4'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['contract-edit-icon1'];
    __VLS_styleScopedClasses['contract1'];
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
//# sourceMappingURL=MainSidebar.vue.js.map