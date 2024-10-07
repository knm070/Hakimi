/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { defineComponent } from "vue";
export default defineComponent({
    name: "TableContainer",
    props: {
        onSale: { type: String },
        propMinWidth: { type: [Object, Array, String, Number, Boolean] },
        propWidth: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
        onSaleStyle() {
            return {
                minWidth: this.propMinWidth,
                width: this.propWidth,
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
    __VLS_styleScopedClasses['on-sale'];
    __VLS_styleScopedClasses['property-type-details'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['basement-details'];
    __VLS_styleScopedClasses['content1'];
    __VLS_styleScopedClasses['shop-features'];
    __VLS_styleScopedClasses['content2'];
    __VLS_styleScopedClasses['parking-features'];
    __VLS_styleScopedClasses['content3'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("table-container13") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("on-sale") }, ...{ style: ((__VLS_ctx.onSaleStyle)) }, });
    (__VLS_ctx.onSale);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div)({ ...{ class: ("text-input18") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("house") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("property-type-details") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basement") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("basement-details") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("shop") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("shop-features") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("parking") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("parking-features") }, });
    __VLS_styleScopedClasses['table-container13'];
    __VLS_styleScopedClasses['on-sale'];
    __VLS_styleScopedClasses['text-input18'];
    __VLS_styleScopedClasses['content'];
    __VLS_styleScopedClasses['house'];
    __VLS_styleScopedClasses['property-type-details'];
    __VLS_styleScopedClasses['content1'];
    __VLS_styleScopedClasses['basement'];
    __VLS_styleScopedClasses['basement-details'];
    __VLS_styleScopedClasses['content2'];
    __VLS_styleScopedClasses['shop'];
    __VLS_styleScopedClasses['shop-features'];
    __VLS_styleScopedClasses['content3'];
    __VLS_styleScopedClasses['parking'];
    __VLS_styleScopedClasses['parking-features'];
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
//# sourceMappingURL=TableContainer.vue.js.map