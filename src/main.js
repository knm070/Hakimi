import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import i18n from "./i18n";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";
import BootstrapVue3 from "bootstrap-vue-3";
import VueApexCharts from "vue3-apexcharts";
import MainPage from "./pages/MainPage.vue";
import "./global.css";
import Shaxmatka from "./pages/Shaxmatka.vue";
import Shaxmatka2 from "./pages/Shaxmatka2.vue";
import Payments from "./pages/Payments.vue";
import Debt from "./pages/Debt.vue";
import Tjm from "./pages/Tjm.vue";
import Contract from "./pages/Contract.vue";
import Sale from "./pages/Sale.vue";
import Home from "./pages/Home.vue";
import MainPayments from "./pages/MainPayments.vue";
import MainContract from "./pages/MainContract.vue";
import Clients from "./pages/Clients.vue";
import MainDebt from "./pages/MainDebt.vue";
import Sms from "./pages/Sms.vue";
import Settings from "./pages/Settings.vue";
import Login from "./pages/Login.vue";
import AddClient from "./pages/AddClient.vue";
import axios from "axios";
import Main from "./pages/Main.vue";
import Main2 from './pages/Main2.vue';
import Contracts from './pages/Contracts.vue'
import ConstractsSingle from './pages/ContractsSingle.vue'
import ClientBalance from './pages/ClientBalance.vue'
import ClientInfo from './pages/ClientInfo.vue';
import ApartmentInfo from './pages/ApartmentInfo.vue';
import Changes from "./pages/Changes.vue";
import Profile from './pages/Profile.vue';
import Update from './pages/Update.vue';
import Showroom from './pages/Showroom.vue';
import Order from "./pages/Order.vue";
import OrderSingle from './pages/OrderSingle.vue'
import AddPayment from './pages/AddPayment.vue'
import Antd from 'ant-design-vue';
// import 'ant-design-vue/es/style/index.css';

axios.defaults.baseURL = "https://api.hakimi.itic.uz";

// Function to refresh the access token
async function refreshAccessToken() {
  try {
    const refreshToken = localStorage.getItem("refresh");
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axios.post("/account/api/token/refresh/", {
      refresh: refreshToken,
    });

    // Update access token in localStorage
    const newAccessToken = response.data.access;
    localStorage.setItem("access_token", newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);

    // Clear tokens and redirect to login if refresh token is invalid
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh");
    window.location.href = "/login"; // Or use `this.$router.push('/login')` in Vue context
    return null;
  }
}

// Interceptor for adding token to requests
axios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor to handle token expiration
axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      error.response.data.code === "token_not_valid"
    ) {
      // If token is not valid, try refreshing
      const newToken = await refreshAccessToken();

      if (newToken) {
        // Set the new token in the header for the original request and retry it
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return axios(originalRequest); // Retry the original request with the new token
      }
    }

    if (error.response && error.response.status >= 500) {
      // Handle server errors
      error.response.data.message = "Server Error";
    }

    return Promise.reject(error);
  }
);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/mainpage",
    name: "MainPage",
    component: MainPage,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/main_payment",
    name: "MainPayments",
    component: MainPayments,
  },
  {
    path: "/main_contract",
    name: "MainContract",
    component: MainContract,
  },
  {
    path: "/order",
    name: "Order",
    component: Order,
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/addclient",
    name: "AddClient",
    component: AddClient,
  },
  {
    path: "/main_debt",
    name: "MainDebt",
    component: MainDebt,
  },
  {
    path: "/sms",
    name: "Sms",
    component: Sms,
  },
  {
    path: "/changes",
    name: "Changes",
    component: Changes,
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/payments",
    name: "Payments",
    component: Payments,
  },
  {
    path: "/debt",
    name: "Debt",
    component: Debt,
  },
  {
    path: "/sale",
    name: "Sale",
    component: Sale,
  },
  {
    path: "/tjm",
    name: "TJM",
    component: Tjm,
  },
  {
    path: "/contract",
    name: "Contract",
    component: Contract,
  },
  {
    path: "/shaxmatka",
    name: "Shaxmatka",
    component: Shaxmatka,
  },
  {
    path: "/shaxmatka2",
    name: "Shaxmatka2",
    component: Shaxmatka2,
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/main/Hakimi",
    name: "Main2",
    component: Main2,
  },
  {
    path: "/Contracts",
    name: "Contracts",
    component: Contracts,
  },
  {
    path: "/Contracts/single",
    name: "ContractsSingle",
    component: ConstractsSingle,
  },
  {
    path: "/Balance",
    name: "ClientBalance",
    component: ClientBalance,
  },
  {
    path: "/client-info",
    name: "ClientInfo",
    component: ClientInfo,
  },
  {
    path: "/client-info/apartment-info",
    name: "ApartmentInfo",
    component: ApartmentInfo,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/update-table",
    name: "Update",
    component: Update,
  },
  {
    path: "/showroom",
    name: "Showroom",
    component: Showroom,
  },
  {
    path: "/order-single",
    name: "OrderSingle",
    component: OrderSingle,
  },
  {
    path: "/add-payment",
    name: "AddPayment",
    component: AddPayment,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((toRoute, _, next) => {
  const metaTitle = toRoute?.meta?.title;
  const metaDesc = toRoute?.meta?.description;

  window.document.title = metaTitle || "hakimi-admin-panel";
  if (metaDesc) {
    addMetaTag(metaDesc);
  }
  next();
});

const addMetaTag = (value) => {
  const element = document.querySelector(`meta[name='description']`);
  if (element) {
    element.setAttribute("content", value);
  }
};
const app = createApp(App);

app.config.globalProperties.$http = axios;


app.use(BootstrapVue3);
app.component("apexchart", VueApexCharts);

app.use(router);
app.use(i18n);
app.use(Antd);
app.mount("#app");
