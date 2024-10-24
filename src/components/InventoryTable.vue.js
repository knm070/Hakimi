/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { ref, shallowRef } from "vue";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridVue } from "@ag-grid-community/vue3";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { MultiFilterModule } from "@ag-grid-enterprise/multi-filter";
import StatusCellRenderer from "./cell-renderers/statusCellRenderer.vue";
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const __VLS_props = defineProps({
    gridTheme: {
        type: String,
        default: "ag-theme-quartz",
    },
    isDarkMode: {
        type: Boolean,
    },
});
const { gridTheme, isDarkMode } = __VLS_props;
// Register ag-Grid modules
ModuleRegistry.registerModules([
    ClientSideRowModelModule,
    ExcelExportModule,
    SetFilterModule,
    MultiFilterModule,
    MasterDetailModule,
]);
const gridApi = shallowRef();
const rowData = ref([
    {
        ID: "123",
        Client: "G‘AYBULLAYEVA NARGIZA G‘AYBULLAYEVNA",
        phone: "+998915281069",
        residence: "Samarqand shahar Самаркандская область, Самарканд, ул. Амир Темур, дом 162, кв. 14",
        status: "active",
        balance: "0 UZS",
        responsible: "Xusnora Odilova",
        date: "10.08.2024",
    },
    // ... other row data
]);
const statuses = {
    all: "All",
    paused: "New",
    active: "Active",
    outOfStock: "Not Active",
};
const statusFormatter = ({ value }) => statuses[value] ?? "";
const columnDefs = ref([
    { field: "ID", headerName: "№" },
    {
        field: "Client",
        cellStyle: { whiteSpace: "normal" }, // Enable text wrapping
    },
    { field: "phone", headerName: "Phone number" },
    {
        field: "residence",
        headerName: "Place of residence",
        cellStyle: { whiteSpace: "normal" }, // Enable text wrapping
    },
    { field: "balance", headerName: "Client balance" },
    {
        field: "status",
        valueFormatter: statusFormatter,
        cellRenderer: StatusCellRenderer,
        filter: true,
        filterParams: {
            valueFormatter: statusFormatter,
        },
        headerClass: "header-status",
    },
    { field: "responsible", headerName: "Responsible" },
    { field: "date", headerName: "Date" },
]);
const defaultColDef = {
    resizable: true,
};
const paginationPageSizeSelector = [5, 10, 20];
const pagination = true;
const paginationPageSize = 10;
const masterDetail = false;
const detailRowAutoHeight = false;
const gridOptions = ref({
    defaultColDef,
    pagination,
    paginationPageSize,
    columnDefs,
    rowData,
    onGridReady,
});
// Event handler for when the grid is ready
function onGridReady(params) {
    gridApi.value = params.api;
    params.api.autoSizeAllColumns();
}
// Active tab state
const activeTab = ref("all");
function handleTabClick(status) {
    if (!gridApi.value)
        return;
    gridApi.value.setColumnFilterModel("status", status === "all" ? null : { values: [status] });
    gridApi.value.onFilterChanged();
    activeTab.value = status;
}
const quickFilterText = ref('');
const onFilterTextBoxChanged = (event) => {
    const target = event.target;
    quickFilterText.value = target.value;
};
const themeClass = `${gridTheme}${isDarkMode ? "-dark" : ""}`;
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        gridTheme: {
            type: String,
            default: "ag-theme-quartz",
        },
        isDarkMode: {
            type: Boolean,
        },
    },
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("wrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("exampleHeader") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tabs") }, });
    for (const [[key, displayValue]] of __VLS_getVForSourceType((Object.entries(__VLS_ctx.statuses)))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.handleTabClick(key);
                } }, ...{ class: (({ tabButton: true, active: __VLS_ctx.activeTab === key })) }, });
        (displayValue);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("inputWrapper") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ ...{ class: ("searchIcon") }, width: ("16"), height: ("16"), viewBox: ("0 0 16 16"), fill: ("none"), xmlns: ("http://www.w3.org/2000/svg"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ "fill-rule": ("evenodd"), "clip-rule": ("evenodd"), d: ("M11.5014 7.00039C11.5014 7.59133 11.385 8.1765 11.1588 8.72246C10.9327 9.26843 10.6012 9.7645 10.1833 10.1824C9.76548 10.6002 9.2694 10.9317 8.72344 11.1578C8.17747 11.384 7.59231 11.5004 7.00136 11.5004C6.41041 11.5004 5.82525 11.384 5.27929 11.1578C4.73332 10.9317 4.23725 10.6002 3.81938 10.1824C3.40152 9.7645 3.07005 9.26843 2.8439 8.72246C2.61776 8.1765 2.50136 7.59133 2.50136 7.00039C2.50136 5.80691 2.97547 4.66232 3.81938 3.81841C4.6633 2.97449 5.80789 2.50039 7.00136 2.50039C8.19484 2.50039 9.33943 2.97449 10.1833 3.81841C11.0273 4.66232 11.5014 5.80691 11.5014 7.00039ZM10.6814 11.7404C9.47574 12.6764 7.95873 13.1177 6.43916 12.9745C4.91959 12.8314 3.51171 12.1145 2.50211 10.9698C1.49252 9.8251 0.957113 8.33868 1.0049 6.81314C1.05268 5.28759 1.68006 3.83759 2.75932 2.75834C3.83857 1.67908 5.28856 1.0517 6.81411 1.00392C8.33966 0.956136 9.82608 1.49154 10.9708 2.50114C12.1154 3.51073 12.8323 4.91862 12.9755 6.43819C13.1187 7.95775 12.6773 9.47476 11.7414 10.6804L14.5314 13.4704C14.605 13.539 14.6642 13.6218 14.7051 13.7138C14.7461 13.8058 14.7682 13.9052 14.77 14.0059C14.7717 14.1066 14.7532 14.2066 14.7155 14.3C14.6778 14.3934 14.6216 14.4782 14.5504 14.5494C14.4792 14.6206 14.3943 14.6768 14.301 14.7145C14.2076 14.7522 14.1075 14.7708 14.0068 14.769C13.9061 14.7672 13.8068 14.7452 13.7148 14.7042C13.6228 14.6632 13.54 14.6041 13.4714 14.5304L10.6814 11.7404Z"), fill: ("currentColor"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onInput: (__VLS_ctx.onFilterTextBoxChanged) }, type: ("text"), placeholder: ("Search product..."), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("btn btn-success") }, id: ("download-btn"), });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/addclient"), ...{ class: ("btn btn-primary") }, }));
    const __VLS_2 = __VLS_1({ to: ("/addclient"), ...{ class: ("btn btn-primary") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid") }, ...{ class: ((__VLS_ctx.themeClass)) }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.AgGridVue;
    /** @type { [typeof __VLS_components.AgGridVue, typeof __VLS_components.agGridVue, typeof __VLS_components.AgGridVue, typeof __VLS_components.agGridVue, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onGridReady': {} }, ...{ style: (({ height: '100%', widht: '100%' })) }, rowData: ((__VLS_ctx.rowData)), columnDefs: ((__VLS_ctx.columnDefs)), defaultColDef: ((__VLS_ctx.defaultColDef)), paginationPageSizeSelector: ((__VLS_ctx.paginationPageSizeSelector)), pagination: ((__VLS_ctx.pagination)), paginationPageSize: ((__VLS_ctx.paginationPageSize)), masterDetail: ((__VLS_ctx.masterDetail)), detailRowAutoHeight: ((__VLS_ctx.detailRowAutoHeight)), autoSizeStrategy: ((__VLS_ctx.gridOptions)), quickFilterText: ((__VLS_ctx.quickFilterText)), }));
    const __VLS_8 = __VLS_7({ ...{ 'onGridReady': {} }, ...{ style: (({ height: '100%', widht: '100%' })) }, rowData: ((__VLS_ctx.rowData)), columnDefs: ((__VLS_ctx.columnDefs)), defaultColDef: ((__VLS_ctx.defaultColDef)), paginationPageSizeSelector: ((__VLS_ctx.paginationPageSizeSelector)), pagination: ((__VLS_ctx.pagination)), paginationPageSize: ((__VLS_ctx.paginationPageSize)), masterDetail: ((__VLS_ctx.masterDetail)), detailRowAutoHeight: ((__VLS_ctx.detailRowAutoHeight)), autoSizeStrategy: ((__VLS_ctx.gridOptions)), quickFilterText: ((__VLS_ctx.quickFilterText)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    let __VLS_12;
    const __VLS_13 = {
        onGridReady: (__VLS_ctx.onGridReady)
    };
    let __VLS_9;
    let __VLS_10;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_styleScopedClasses['wrapper'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['exampleHeader'];
    __VLS_styleScopedClasses['tabs'];
    __VLS_styleScopedClasses['tabButton'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['inputWrapper'];
    __VLS_styleScopedClasses['searchIcon'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-success'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['grid'];
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
            AgGridVue: AgGridVue,
            rowData: rowData,
            statuses: statuses,
            columnDefs: columnDefs,
            defaultColDef: defaultColDef,
            paginationPageSizeSelector: paginationPageSizeSelector,
            pagination: pagination,
            paginationPageSize: paginationPageSize,
            masterDetail: masterDetail,
            detailRowAutoHeight: detailRowAutoHeight,
            gridOptions: gridOptions,
            onGridReady: onGridReady,
            activeTab: activeTab,
            handleTabClick: handleTabClick,
            quickFilterText: quickFilterText,
            onFilterTextBoxChanged: onFilterTextBoxChanged,
            themeClass: themeClass,
        };
    },
    props: {
        gridTheme: {
            type: String,
            default: "ag-theme-quartz",
        },
        isDarkMode: {
            type: Boolean,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        gridTheme: {
            type: String,
            default: "ag-theme-quartz",
        },
        isDarkMode: {
            type: Boolean,
        },
    },
});
;
//# sourceMappingURL=InventoryTable.vue.js.map