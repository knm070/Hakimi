/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { defineProps } from "vue";
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps(["params"]);
const { params } = __VLS_props;
const onRemoveClick = () => {
    const rowData = params.node.data;
    params.api.applyTransaction({ remove: [rowData] });
};
const onStopSellingClick = () => {
    const rowData = params.node.data;
    const isPaused = rowData.status === "paused";
    const isOutOfStock = rowData.available <= 0;
    // Modify the status property
    rowData.status = !isPaused
        ? "paused"
        : !isOutOfStock
            ? "active"
            : "outOfStock";
    // Refresh the row to reflect the changes
    params.api.applyTransaction({ update: [rowData] });
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: ["params"],
});
;
let __VLS_functionalComponentProps;
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("buttonCell") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.onRemoveClick) }, ...{ class: ("button-secondary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("icon") }, src: ("/assets/img/delete.svg"), alt: ("delete"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.onStopSellingClick) }, ...{ class: ("button-secondary") }, });
    __VLS_styleScopedClasses['buttonCell'];
    __VLS_styleScopedClasses['button-secondary'];
    __VLS_styleScopedClasses['icon'];
    __VLS_styleScopedClasses['button-secondary'];
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
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
            onRemoveClick: onRemoveClick,
            onStopSellingClick: onStopSellingClick,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
        };
    },
});
;
//# sourceMappingURL=actionsCellRenderer.vue.js.map