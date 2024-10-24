/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import { defineComponent } from "vue";
import MainSidebar from "../components/MainSidebar.vue";
import axios from "axios";
import { useI18n } from "vue-i18n";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";
import Datepicker from "vue3-datepicker";
export default defineComponent({
    name: "MainPage",
    components: { MainSidebar, Datepicker },
    data() {
        return {
            languages: {
                en: "English",
                uz: "Uzbek",
                ru: "Russian",
                fa: "Persian",
            },
            currentLanguage: "en",
            iti: null,
            selectedPhoneNumber: "",
            selectedDate: null,
            selectedCountry: "",
            countries: [
                { code: "US", name: "United States" },
                { code: "CA", name: "Canada" },
                { code: "GB", name: "United Kingdom" },
                { code: "AU", name: "Australia" },
                { code: "IN", name: "India" },
                // Add more countries as needed
            ],
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
        updatePhoneNumber() {
            if (this.iti.isValidNumber()) {
                this.selectedPhoneNumber = this.iti.getNumber();
            }
            else {
                this.selectedPhoneNumber = "Invalid number";
            }
        },
        formatDate(date) {
            return date ? date.toISOString().split("T")[0] : "";
        },
        onCountryChange() {
            console.log("Country selected:", this.selectedCountry);
            // You can handle additional logic here
        },
        handleFileUpload(event) {
            const file = event.target.files[0];
            // Clear previous error message
            this.errorMessage = "";
            if (file) {
                // Check file size (10 MB = 10 * 1024 * 1024 bytes)
                const maxSize = 10 * 1024 * 1024;
                if (file.size > maxSize) {
                    this.errorMessage = "File size exceeds 10 MB.";
                    return;
                }
                // Check file type
                const validTypes = ["image/jpeg", "image/png", "application/pdf"];
                if (!validTypes.includes(file.type)) {
                    this.errorMessage = "Invalid file type. Please upload JPG, PNG, or PDF.";
                    return;
                }
                // If valid, you can process the file (e.g., upload it)
                console.log("File ready for upload:", file);
                // Add your upload logic here
            }
        },
    },
    mounted() {
        // Initialize intl-tel-input
        this.iti = intlTelInput(this.$refs.phoneInput, {
            initialCountry: "auto",
            geoIpLookup: (callback) => {
                fetch("https://ipinfo.io?token=<YOUR_TOKEN>")
                    .then((resp) => resp.json())
                    .then((data) => {
                    const countryCode = data && data.country ? data.country : "UZ";
                    callback(countryCode);
                })
                    .catch(() => {
                    callback("US");
                });
            },
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // for formatting/validation
        });
        // Listen for changes in the input field
        this.$refs.phoneInput.addEventListener("change", this.updatePhoneNumber);
        this.$refs.phoneInput.addEventListener("keyup", this.updatePhoneNumber);
    },
    beforeDestroy() {
        // Clean up the event listeners
        this.$refs.phoneInput.removeEventListener("change", this.updatePhoneNumber);
        this.$refs.phoneInput.removeEventListener("keyup", this.updatePhoneNumber);
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{ MainSidebar, Datepicker },
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
    __VLS_styleScopedClasses['bg'];
    __VLS_styleScopedClasses['client_details'];
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
    (__VLS_ctx.$t("add_Client"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("language-switcher") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.changeLanguage) }, value: ((__VLS_ctx.currentLanguage)), });
    for (const [label, lang] of __VLS_getVForSourceType((__VLS_ctx.languages))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((lang)), value: ((lang)), });
        (label);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg p-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mb-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("title") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h5, __VLS_intrinsicElements.h5)({ ...{ class: ("mb-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("toggle") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("nav nav-tabs mb-3") }, id: ("myTab"), role: ("tablist"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("nav-link active") }, id: ("home-tab"), "data-bs-toggle": ("tab"), "data-bs-target": ("#home"), type: ("button"), role: ("tab"), "aria-controls": ("home"), "aria-selected": ("true"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.$t("Individuals"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ ...{ class: ("nav-item") }, role: ("presentation"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("nav-link") }, id: ("profile-tab"), "data-bs-toggle": ("tab"), "data-bs-target": ("#profile"), type: ("button"), role: ("tab"), "aria-controls": ("profile"), "aria-selected": ("false"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    (__VLS_ctx.$t("Legal_entities"));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-content") }, id: ("myTabContent"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane fade show active") }, id: ("home"), role: ("tabpanel"), "aria-labelledby": ("home-tab"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("client_details") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("Passport"), maxlength: ("2"), size: ("2"), ...{ style: ({}) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("numbtexter"), id: ("series"), maxlength: ("6"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.Datepicker;
    /** @type { [typeof __VLS_components.Datepicker, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ modelValue: ((__VLS_ctx.selectedDate)), format: ((__VLS_ctx.formatDate)), placeholder: ("Pick a date"), ...{ style: ({}) }, }));
    const __VLS_8 = __VLS_7({ modelValue: ((__VLS_ctx.selectedDate)), format: ((__VLS_ctx.formatDate)), placeholder: ("Pick a date"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("btn btn-primary") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("phone"), type: ("tel"), ref: ("phoneInput"), });
    // @ts-ignore navigation for `const phoneInput = ref()`
    __VLS_ctx.phoneInput;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("f_name"), type: ("text"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("f_name"), type: ("text"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("f_name"), type: ("text"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("f_name"), type: ("text"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.Datepicker;
    /** @type { [typeof __VLS_components.Datepicker, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ modelValue: ((__VLS_ctx.selectedDate)), format: ((__VLS_ctx.formatDate)), placeholder: ("Pick a date"), ...{ style: ({}) }, }));
    const __VLS_14 = __VLS_13({ modelValue: ((__VLS_ctx.selectedDate)), format: ((__VLS_ctx.formatDate)), placeholder: ("Pick a date"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    const __VLS_18 = __VLS_resolvedLocalAndGlobalComponents.Datepicker;
    /** @type { [typeof __VLS_components.Datepicker, ] } */
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.selectedDate)), format: ((__VLS_ctx.formatDate)), placeholder: ("Pick a date"), ...{ style: ({}) }, }));
    const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.selectedDate)), format: ((__VLS_ctx.formatDate)), placeholder: ("Pick a date"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ ...{ onChange: (__VLS_ctx.handleFileUpload) }, type: ("file"), id: ("file-upload"), accept: (".jpg, .jpeg, .png, .pdf"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("f_name"), type: ("text"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ id: ("f_name"), type: ("text"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("divider") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.onCountryChange) }, id: ("country-select"), value: ((__VLS_ctx.selectedCountry)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), });
    for (const [country] of __VLS_getVForSourceType((__VLS_ctx.countries))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((country.code)), value: ((country.code)), });
        (country.name);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.onCountryChange) }, id: ("country-select"), value: ((__VLS_ctx.selectedCountry)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), });
    for (const [country] of __VLS_getVForSourceType((__VLS_ctx.countries))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((country.code)), value: ((country.code)), });
        (country.name);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("Passport"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ ...{ onChange: (__VLS_ctx.onCountryChange) }, id: ("country-select"), value: ((__VLS_ctx.selectedCountry)), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: (""), disabled: (true), });
    for (const [country] of __VLS_getVForSourceType((__VLS_ctx.countries))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((country.code)), value: ((country.code)), });
        (country.name);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("message"), ...{ class: ("textarea-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ ...{ onInput: (__VLS_ctx.onInput) }, id: ("message"), value: ((__VLS_ctx.message)), rows: ("4"), cols: ("50"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("col-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("message"), ...{ class: ("textarea-label") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ ...{ onInput: (__VLS_ctx.onInput) }, id: ("message"), value: ((__VLS_ctx.message)), rows: ("4"), cols: ("50"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-content-end") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("btn btn-default mr-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("btn btn-primary ml-2") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("tab-pane fade") }, id: ("profile"), role: ("tabpanel"), "aria-labelledby": ("profile-tab"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({});
    __VLS_styleScopedClasses['main-page'];
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['header'];
    __VLS_styleScopedClasses['inner'];
    __VLS_styleScopedClasses['text'];
    __VLS_styleScopedClasses['language-switcher'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['bg'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['title'];
    __VLS_styleScopedClasses['mb-0'];
    __VLS_styleScopedClasses['toggle'];
    __VLS_styleScopedClasses['nav'];
    __VLS_styleScopedClasses['nav-tabs'];
    __VLS_styleScopedClasses['mb-3'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['nav-item'];
    __VLS_styleScopedClasses['nav-link'];
    __VLS_styleScopedClasses['tab-content'];
    __VLS_styleScopedClasses['tab-pane'];
    __VLS_styleScopedClasses['fade'];
    __VLS_styleScopedClasses['show'];
    __VLS_styleScopedClasses['active'];
    __VLS_styleScopedClasses['client_details'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['divider'];
    __VLS_styleScopedClasses['col-4'];
    __VLS_styleScopedClasses['col-4'];
    __VLS_styleScopedClasses['col-4'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['textarea-label'];
    __VLS_styleScopedClasses['col-6'];
    __VLS_styleScopedClasses['textarea-label'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-content-end'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-default'];
    __VLS_styleScopedClasses['mr-5'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['ml-2'];
    __VLS_styleScopedClasses['tab-pane'];
    __VLS_styleScopedClasses['fade'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {
        "phoneInput": __VLS_nativeElements['input'],
    };
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
//# sourceMappingURL=AddClient.vue.js.map