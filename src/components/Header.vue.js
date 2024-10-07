/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
export default (await import('vue')).defineComponent({
    name: "Header",
    data() {
        return {
            selectedLocation: "",
            selectedBuilding: "",
            searchQuery: "",
            roomCount: "",
            sizeFrom: "",
            sizeTo: "",
            priceFrom: "",
            priceTo: "",
            floorFrom: "",
            floorTo: "",
            viewMode: "list",
            statusFilter: "",
            pagination: [1, 2, 3, 4, 5],
            blocks: [
                { number: 1, status: "bosh" },
                { number: 2, status: "band" },
                { number: 3, status: "sotilgan" },
                { number: 4, status: "sotilmaydi" },
            ],
        };
    },
    methods: {
        close() {
            // Close logic here
        },
        showDetails() {
            // Show details logic here
        },
        setView(view) {
            this.viewMode = view;
        },
        setStatus(status) {
            this.statusFilter = status;
        },
    },
    // Add any props or methods here as needed
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
    __VLS_styleScopedClasses['table-container'];
    __VLS_styleScopedClasses['shaxmatka'];
    __VLS_styleScopedClasses['text-input-container1'];
    __VLS_styleScopedClasses['text-input-container2'];
    __VLS_styleScopedClasses['horizontal-container1'];
    __VLS_styleScopedClasses['pagination'];
    __VLS_styleScopedClasses['table'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("shaxmatka") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({ ...{ class: ("text-input") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("horizontal-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("image-icon") }, loading: ("lazy"), alt: (""), src: ("/image@2x.png"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-input-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hakimi-towers") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dropdown-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.selectedLocation)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("3"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("segmented-picker") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("bino") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dropdown-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.selectedBuilding)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("1"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("2"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("3"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("vertical-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("vertical-container1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (__VLS_ctx.close) }, ...{ class: ("close-icon") }, loading: ("lazy"), alt: (""), src: ("/close.svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("horizontal-container1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-input-container1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("workspace") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-input2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("vertical-container-icon") }, alt: (""), src: ("/vertical-container.svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("qidirish") }, placeholder: ("Qidirish"), type: ("text"), value: ((__VLS_ctx.searchQuery)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-input-container2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("workspace1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-input3") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("xonalar-soni") }, placeholder: ("Xonalar soni"), type: ("number"), });
    (__VLS_ctx.roomCount);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("segmented-picker1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("m2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.sup, __VLS_intrinsicElements.sup)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-input4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("dan") }, placeholder: ("dan"), type: ("text"), value: ((__VLS_ctx.sizeFrom)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-input5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("gacha") }, placeholder: ("gacha"), type: ("text"), value: ((__VLS_ctx.sizeTo)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("segmented-picker1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("m2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-input4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("dan") }, placeholder: ("dan"), type: ("text"), value: ((__VLS_ctx.priceFrom)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-input5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("gacha") }, placeholder: ("gacha"), type: ("text"), value: ((__VLS_ctx.priceTo)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("segmented-picker1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("button") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("m2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-input4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("dan") }, placeholder: ("dan"), type: ("text"), value: ((__VLS_ctx.floorFrom)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-input5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ class: ("gacha") }, placeholder: ("gacha"), type: ("text"), value: ((__VLS_ctx.floorTo)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.showDetails) }, ...{ class: ("button5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("slider-container-icon") }, alt: (""), src: ("/slider-container@2x.png"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ ...{ class: ("batafsil") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ class: ("text-input-icon") }, alt: (""), src: ("/batafsil.svg"), });
    __VLS_styleScopedClasses['shaxmatka'];
    __VLS_styleScopedClasses['text-input'];
    __VLS_styleScopedClasses['horizontal-container'];
    __VLS_styleScopedClasses['image-icon'];
    __VLS_styleScopedClasses['text-input-container'];
    __VLS_styleScopedClasses['hakimi-towers'];
    __VLS_styleScopedClasses['dropdown-container'];
    __VLS_styleScopedClasses['segmented-picker'];
    __VLS_styleScopedClasses['bino'];
    __VLS_styleScopedClasses['dropdown-container'];
    __VLS_styleScopedClasses['vertical-container'];
    __VLS_styleScopedClasses['vertical-container1'];
    __VLS_styleScopedClasses['close-icon'];
    __VLS_styleScopedClasses['horizontal-container1'];
    __VLS_styleScopedClasses['text-input-container1'];
    __VLS_styleScopedClasses['workspace'];
    __VLS_styleScopedClasses['text-input2'];
    __VLS_styleScopedClasses['vertical-container-icon'];
    __VLS_styleScopedClasses['qidirish'];
    __VLS_styleScopedClasses['text-input-container2'];
    __VLS_styleScopedClasses['workspace1'];
    __VLS_styleScopedClasses['text-input3'];
    __VLS_styleScopedClasses['xonalar-soni'];
    __VLS_styleScopedClasses['segmented-picker1'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['m2'];
    __VLS_styleScopedClasses['text-input4'];
    __VLS_styleScopedClasses['dan'];
    __VLS_styleScopedClasses['text-input5'];
    __VLS_styleScopedClasses['gacha'];
    __VLS_styleScopedClasses['segmented-picker1'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['m2'];
    __VLS_styleScopedClasses['text-input4'];
    __VLS_styleScopedClasses['dan'];
    __VLS_styleScopedClasses['text-input5'];
    __VLS_styleScopedClasses['gacha'];
    __VLS_styleScopedClasses['segmented-picker1'];
    __VLS_styleScopedClasses['button'];
    __VLS_styleScopedClasses['m2'];
    __VLS_styleScopedClasses['text-input4'];
    __VLS_styleScopedClasses['dan'];
    __VLS_styleScopedClasses['text-input5'];
    __VLS_styleScopedClasses['gacha'];
    __VLS_styleScopedClasses['button5'];
    __VLS_styleScopedClasses['slider-container-icon'];
    __VLS_styleScopedClasses['batafsil'];
    __VLS_styleScopedClasses['text-input-icon'];
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
//# sourceMappingURL=Header.vue.js.map