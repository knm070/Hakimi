<script setup lang="ts">
import { ref, shallowRef } from "vue";
import {
  type ColDef,
  type ValueFormatterFunc,
  GridReadyEvent,
} from "@ag-grid-community/core";
import { ModuleRegistry } from "@ag-grid-community/core";
import { AgGridVue } from "@ag-grid-community/vue3";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { MultiFilterModule } from "@ag-grid-enterprise/multi-filter";
import StatusCellRenderer from "./cell-renderers/statusCellRenderer.vue";

const { gridTheme, isDarkMode } = defineProps({
  gridTheme: {
    type: String,
    default: "ag-theme-quartz",
  },
  isDarkMode: {
    type: Boolean,
  },
});

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
type Status = keyof typeof statuses;

const statusFormatter: ValueFormatterFunc = ({ value }) =>
  statuses[value as keyof typeof statuses] ?? "";

const columnDefs = ref<ColDef<any, any>[]>([
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
function onGridReady(params: GridReadyEvent) {
  gridApi.value = params.api;
  params.api.autoSizeAllColumns();
}

// Active tab state
const activeTab = ref<Status>("all");

function handleTabClick(status: Status) {
  if (!gridApi.value) return;

  gridApi.value.setColumnFilterModel(
    "status",
    status === "all" ? null : { values: [status] }
  );
  gridApi.value.onFilterChanged();
  activeTab.value = status;
}

const quickFilterText = ref('');

const onFilterTextBoxChanged = (event: Event) => {
  const target = event.target as HTMLInputElement;
  quickFilterText.value = target.value;
};

const themeClass = `${gridTheme}${isDarkMode ? "-dark" : ""}`;
</script>



<template>
  <div class="wrapper">
    <div class="container">
      <div class="exampleHeader">
        <div class="tabs">
          <button v-for="[key, displayValue] in Object.entries(statuses)" :class="{ tabButton: true, active: activeTab === key }" @click="handleTabClick(key as 'active' | 'all' | 'paused' | 'outOfStock')">
            {{ displayValue }}
          </button>
        </div>
        <div class="inputWrapper">
          <svg class="searchIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.5014 7.00039C11.5014 7.59133 11.385 8.1765 11.1588 8.72246C10.9327 9.26843 10.6012 9.7645 10.1833 10.1824C9.76548 10.6002 9.2694 10.9317 8.72344 11.1578C8.17747 11.384 7.59231 11.5004 7.00136 11.5004C6.41041 11.5004 5.82525 11.384 5.27929 11.1578C4.73332 10.9317 4.23725 10.6002 3.81938 10.1824C3.40152 9.7645 3.07005 9.26843 2.8439 8.72246C2.61776 8.1765 2.50136 7.59133 2.50136 7.00039C2.50136 5.80691 2.97547 4.66232 3.81938 3.81841C4.6633 2.97449 5.80789 2.50039 7.00136 2.50039C8.19484 2.50039 9.33943 2.97449 10.1833 3.81841C11.0273 4.66232 11.5014 5.80691 11.5014 7.00039ZM10.6814 11.7404C9.47574 12.6764 7.95873 13.1177 6.43916 12.9745C4.91959 12.8314 3.51171 12.1145 2.50211 10.9698C1.49252 9.8251 0.957113 8.33868 1.0049 6.81314C1.05268 5.28759 1.68006 3.83759 2.75932 2.75834C3.83857 1.67908 5.28856 1.0517 6.81411 1.00392C8.33966 0.956136 9.82608 1.49154 10.9708 2.50114C12.1154 3.51073 12.8323 4.91862 12.9755 6.43819C13.1187 7.95775 12.6773 9.47476 11.7414 10.6804L14.5314 13.4704C14.605 13.539 14.6642 13.6218 14.7051 13.7138C14.7461 13.8058 14.7682 13.9052 14.77 14.0059C14.7717 14.1066 14.7532 14.2066 14.7155 14.3C14.6778 14.3934 14.6216 14.4782 14.5504 14.5494C14.4792 14.6206 14.3943 14.6768 14.301 14.7145C14.2076 14.7522 14.1075 14.7708 14.0068 14.769C13.9061 14.7672 13.8068 14.7452 13.7148 14.7042C13.6228 14.6632 13.54 14.6041 13.4714 14.5304L10.6814 11.7404Z"
              fill="currentColor"
            />
          </svg>

          <input type="text" placeholder="Search product..." @input="onFilterTextBoxChanged" />
        </div>
        <button class="btn btn-success" id="download-btn">Download Excel</button>
        <router-link to="/addclient" class="btn btn-primary">+ Add Client</router-link>
      </div>
      <div class="grid" :class="themeClass">
        <ag-grid-vue
          :style="{ height: '100%', widht: '100%' }"
          @grid-ready="onGridReady"
          :rowData="rowData"
          :columnDefs="columnDefs"
          :defaultColDef="defaultColDef"
          :paginationPageSizeSelector="paginationPageSizeSelector"
          :pagination="pagination"
          :paginationPageSize="paginationPageSize"
          :masterDetail="masterDetail"
          :detailRowAutoHeight="detailRowAutoHeight"
          :autoSizeStrategy="gridOptions"
          :quickFilterText="quickFilterText"
        ></ag-grid-vue>
      </div>
    </div>
  </div>
</template>

<style>
@import "@ag-grid-community/styles/ag-grid.css";
@import "@ag-grid-community/styles/ag-theme-quartz.css";
:root {
  --layout-grid-header-height: 32px;
  --layout-grid-margin: 32px;
  --ag-row-border: 1px solid #c41717;
}

body {
  margin: 0;
}

@media screen and (max-width: 720px) {
  div.ag-theme-quartz,
  div.ag-theme-quartz-dark {
    --ag-font-size: 12px;
    --ag-grid-size: 6px;
  }
}

.ag-theme-quartz .ag-body-viewport,
.ag-theme-quartz-dark .ag-body-viewport {
  padding-top: 8px;
}

.ag-theme-quartz .ag-row-group .ag-icon,
.ag-theme-quartz-dark .ag-row-group .ag-icon {
  opacity: 0.5;
}

.ag-theme-quartz .ag-row,
.ag-theme-quartz-dark .ag-row {
  border-bottom: none;
}

.ag-theme-quartz .ag-row:not(.ag-row-level-1),
.ag-theme-quartz-dark .ag-row:not(.ag-row-level-1) {
  border-radius: 8px;
  overflow: hidden;
}

/* Required to transition background color for row hover */
.ag-theme-quartz .ag-row:not(.ag-row-level-1)::before,
.ag-theme-quartz-dark .ag-row:not(.ag-row-level-1)::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  transition: background-color 0.33s ease-in-out;
}

.ag-theme-quartz .ag-cell-expandable,
.ag-theme-quartz-dark .ag-cell-expandable {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ag-theme-quartz .ag-cell,
.ag-theme-quartz-dark .ag-cell {
  display: flex;
  align-items: center;
}

.ag-theme-quartz .ag-cell:first-child,
.ag-theme-quartz-dark .ag-cell:first-child {
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}

.ag-theme-quartz .ag-cell:last-child,
.ag-theme-quartz-dark .ag-cell:last-child {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.ag-theme-quartz .ag-right-aligned-cell,
.ag-theme-quartz-dark .ag-right-aligned-cell {
  justify-content: flex-end;
}

.ag-theme-quartz-dark .ag-header {
  background-color: #28313e;
  border-radius: 8px;
  border: none;
}

.ag-theme-quartz .ag-header {
  background-color: #f9fafb;
  color: #39485d;
  border-radius: 8px;
  border: 1px solid #eff0f1;
}

.ag-theme-quartz .ag-header-cell-text,
.ag-theme-quart-dark .ag-header-cell-text {
  color: #1f383c;
  display: flex;
  align-items: center;
}

.ag-theme-quartz-dark .ag-header-cell-text {
  color: #c9d0da;
}

.ag-theme-quartz .ag-root-wrapper,
.ag-theme-quartz-dark .ag-root-wrapper {
  border: none;
}

.ag-theme-quartz .ag-full-width-container .ag-row,
.ag-theme-quartz-dark .ag-full-width-container .ag-row,
.ag-theme-quartz .ag-full-width-container .ag-details-row,
.ag-theme-quartz-dark .ag-full-width-container .ag-details-row {
  background-color: transparent;
}

.ag-theme-quartz .ag-details-row,
.ag-theme-quartz-dark .ag-details-row {
  padding: 16px;
}

.ag-theme-quartz .ag-paging-panel {
  height: 40px;
}

.ag-theme-quartz .ag-paging-panel > span:last-child {
  margin-right: 0;
}

.ag-center-cols-viewport {
  min-height: unset !important;
}

.grid {
  --ag-header-background-color: transparent !important;

  height: calc(100vh - var(--layout-grid-header-height) - 62px - var(--layout-grid-margin));
  margin: 0 var(--layout-grid-margin) var(--layout-grid-margin);
}

.exampleHeader {
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  padding-top: 8px;
  margin: var(--layout-grid-margin) var(--layout-grid-margin) 0;
}

.exampleHeader {
  padding-bottom: 16px;
  padding-top: 8px;
}

.exampleHeader span {
  margin-right: 12px;
  font-size: 14px;
}

.inputWrapper {
  position: relative;
  display: flex;
  align-items: center;
  overflow: visible;
}

.inputWrapper svg {
  position: absolute;
  left: 8px;
  pointer-events: none;
}

.inputWrapper input {
  font-size: 14px;
  padding: 0.375em 0.75em 0.375em 2.4em;
  line-height: 1.4;
  border-radius: 6px;
  border: 1px solid var(--color-input-border, #d0d5dd);
  background-color: transparent;
  outline: none;
}

.price {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.price span {
  line-height: 100%;
}

.increase {
  opacity: 0.7;
}

.tabs {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
  padding: 4px;
  background-color: var(--color-bg-secondary, #f9fafb);
  border: 1px solid var(--color-border-secondary, #eff0f1);
  color: #39485d;
  border-radius: 8px;
}

.tabButton {
  appearance: none;
  display: inline-block;
  padding: 0.375em 1em 0.5em;
  font-size: 14px;
  font-weight: 500;
  border-radius: 6px;
  border: none;
  background-color: var(--color-bg-secondary, #f9fafb);
  color: var(--color-text-secondary, #39485d);
  cursor: pointer;
  box-shadow: none;
  transition: background 0.3s, color 0.3s;
}

.tabButton:hover {
  background: #7c7c7c23;
  color: rgba(37, 37, 37, 0.6);
}

.tabButton.active {
  background: #fff;
  color: #000;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-status .ag-header-cell-text:before {
  content: url("/assets/img/product.svg");
  padding-right: 8px;
  opacity: 0.3;
}

.header-price .ag-header-cell-text:before {
  content: url("/assets/img/price.svg");
  padding-right: 8px;
  opacity: 0.3;
}

.header-sku .ag-header-cell-text:before {
  content: url("/assets/img/sku.svg");
  padding-right: 8px;
  opacity: 0.3;
}

.header-inventory .ag-header-cell-text:before {
  content: url("/assets/img/inventory.svg");
  padding-right: 8px;
  opacity: 0.3;
}

.header-product .ag-header-cell-text:before {
  content: url("/assets/img/product.svg");
  padding-right: 8px;
  opacity: 0.3;
}

.header-status .ag-header-cell-text:before {
  content: url("/assets/img/status.svg");
  padding-right: 8px;
  opacity: 0.3;
}

.header-calendar .ag-header-cell-text:before {
  content: url("/assets/img/calendar.svg");
  padding-right: 8px;
  opacity: 0.3;
}

.header-percentage .ag-header-cell-text:before {
  content: url("/assets/img/percentage.svg");
  padding-right: 8px;
  opacity: 0.3;
}

.ag-theme-quartz-dark .ag-header-cell-text:before {
  filter: invert(1);
}

.stockText {
  opacity: 0.7;
}

.variantsText {
  opacity: 0.7;
}
.ag-grid .ag-cell {
  overflow-wrap: break-word !important; /* Ensure words break when needed */
  word-wrap: break-word !important; /* For older browsers */
  white-space: normal !important;
  text-wrap: wrap !important; /* Allow wrapping */
}
</style>
