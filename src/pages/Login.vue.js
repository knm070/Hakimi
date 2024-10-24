/// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
import axios from "axios";
export default (await import('vue')).defineComponent({
    data() {
        return {
            username: "",
            password: "",
            errorMessage: null,
        };
    },
    methods: {
        async loginUser() {
            try {
                const response = await this.$http.post("/account/api/login/", // Proxy path
                {
                    username: this.username,
                    password: this.password,
                });
                console.log("Login successful:", response.data);
                // Store the access token
                localStorage.setItem("access_token", response.data.access);
                // Redirect to the main page
                this.$router.push("/mainpage");
            }
            catch (error) {
                console.error("Error during login:", error);
                this.errorMessage =
                    error.response && error.response.data
                        ? error.response.data.message
                        : "Login failed. Please try again.";
            }
        }
    },
});
;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
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
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['btn-login'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("login-page") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("login-container") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.loginUser) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("username"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("username"), value: ((__VLS_ctx.username)), placeholder: ("Enter your username"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("password"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("password"), id: ("password"), placeholder: ("Enter your password"), required: (true), });
    (__VLS_ctx.password);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("btn-login") }, });
    if (__VLS_ctx.errorMessage) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("error-message") }, });
        (__VLS_ctx.errorMessage);
    }
    __VLS_styleScopedClasses['login-page'];
    __VLS_styleScopedClasses['login-container'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['form-group'];
    __VLS_styleScopedClasses['btn-login'];
    __VLS_styleScopedClasses['error-message'];
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
//# sourceMappingURL=Login.vue.js.map