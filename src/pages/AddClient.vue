<template>
  <div class="main-page">
    <MainSidebar image="../image@2x.png" home="../home.svg" accountBalanceWallet="../account-balance-wallet1.svg" creditCardClock="../credit-card-clock.svg" locationCity="../location-city.svg" contractEdit="../contract-edit.svg" homeLinksTextDecoration="unset" />
    <main class="container">
      <div class="header">
        <div class="inner">
          <div class="text">
            <h4>{{ $t("add_Client") }}</h4>
          </div>
          <div class="language-switcher">
            <select v-model="currentLanguage" @change="changeLanguage">
              <option v-for="(label, lang) in languages" :key="lang" :value="lang">
                {{ label }}
              </option>
            </select>
          </div>
        </div>
        <div class="divider"></div>
        <div class="bg p-2">
          <div class="mb-2">
            <div class="title">
              <h5 class="mb-0">Client contracts</h5>
            </div>
          </div>
          <div class="toggle">
            <!-- Tab navigation -->
            <ul class="nav nav-tabs mb-3" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                  <h6>{{ $t("Individuals") }}</h6>
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                  <h6>{{ $t("Legal_entities") }}</h6>
                </button>
              </li>
            </ul>

            <!-- Tab content -->
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="client_details">
                 
                  <div class="row">
                    <div class="col-6">
                      <label for="Passport">* Passport series and number</label>
                      <div class="d-flex">
                        <input type="text" id="Passport" maxlength="2" size="2" style="margin-right: 1rem; width: fit-content" />
                        <input type="numbtexter" id="series" maxlength="6" />
                      </div>
                    </div>
                    <div class="col-6">
                      <label for="Passport">* Date of birth</label>
                      <div class="d-flex">
                        <Datepicker v-model="selectedDate" :format="formatDate" placeholder="Pick a date" style="width: 90%; border: none; margin-right: 1rem" />
                        <button class="btn btn-primary">Search</button>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <h6>Client information</h6>
                    <div class="divider"></div>
                    <div class="col-6">
                      <label for="Passport">* Cell phone</label>
                      <input id="phone" type="tel" ref="phoneInput" />
                    </div>
                    <div class="col-6">
                      <label for="Passport">* First name</label>
                      <input id="f_name" type="text" />
                      <label for="Passport">* Last name</label>
                      <input id="f_name" type="text" />
                      <label for="Passport">* Middle name</label>
                      <input id="f_name" type="text" />
                    </div>
                  </div>
                  <div class="row">
                    <h6>Passport information</h6>
                    <div class="divider"></div>
                    <div class="col-6">
                      <label for="Passport">PIN</label>
                      <input id="f_name" type="text" />
                      <label for="Passport">* Given date</label>
                      <Datepicker v-model="selectedDate" :format="formatDate" placeholder="Pick a date" style="width: 100%; border: none" />
                      <label for="Passport">* Validity period</label>
                      <Datepicker v-model="selectedDate" :format="formatDate" placeholder="Pick a date" style="width: 100%; border: none" />

                      <label for="Passport">Passport file (not required)</label>
                      <input type="file" id="file-upload" @change="handleFileUpload" accept=".jpg, .jpeg, .png, .pdf" />
                    </div>
                    <div class="col-6">
                      <label for="Passport">INN</label>
                      <input id="f_name" type="text" />
                      <label for="Passport">* Given place</label>
                      <input id="f_name" type="text" />
                    </div>
                  </div>
                  <div class="row">
                    <h6>Given Country</h6>
                    <div class="divider"></div>
                    <div class="col-4">
                      <label for="Passport">* Select a country</label>

                      <select id="country-select" v-model="selectedCountry" @change="onCountryChange">
                        <option value="" disabled>Select a country</option>
                        <option v-for="country in countries" :key="country.code" :value="country.code">
                          {{ country.name }}
                        </option>
                      </select>
                    </div>
                    <div class="col-4">
                      <label for="Passport">* Province</label>
                      <select id="country-select" v-model="selectedCountry" @change="onCountryChange">
                        <option value="" disabled>Province</option>
                        <option v-for="country in countries" :key="country.code" :value="country.code">
                          {{ country.name }}
                        </option>
                      </select>
                    </div>
                    <div class="col-4">
                      <label for="Passport">* City/district</label>
                      <select id="country-select" v-model="selectedCountry" @change="onCountryChange">
                        <option value="" disabled>City/district</option>
                        <option v-for="country in countries" :key="country.code" :value="country.code">
                          {{ country.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-6">
                      <label for="message" class="textarea-label">* MFY, street, house</label>
                      <textarea id="message" v-model="message" rows="4" cols="50" @input="onInput"></textarea>
                    </div>
                    <div class="col-6">
                      <label for="message" class="textarea-label">Work place</label>
                      <textarea id="message" v-model="message" rows="4" cols="50" @input="onInput"></textarea>
                    </div>
                  </div>
                  <div class="d-flex justify-content-end">
                    <button class="btn btn-default mr-5">Cancel</button>
                    <button class="btn btn-primary ml-2">Next</button>

                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h6>Initial Information</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
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
      } else {
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
</script>

<style scoped>
.main-page {
  display: flex;
  background-color: var(--background-background-gray);
  height: 100%;
  color: inherit;
}
.container {
  width: 100%;
}
.header {
  background-color: white;
  border-radius: 20px;
  margin: 1rem;
  padding: 1.2rem;
  width: auto;
}
.inner {
  display: flex;
}
.header .account-btn {
  color: #72908d;
  border: 2px solid #72908d;
  background-color: #b9c7c6;
  padding: 1rem;
  border-radius: 50%;
  font-weight: bold;
}
.header .text {
  width: 100%;
}

.language-switcher button {
  margin: 0 5px;
}
.bg {
  background-color: #f4f6f6;
  border-radius: 10px;
}
.bg div {
  background-color: white;
  border-radius: 5px;
  padding: 0.3rem 0.5rem;
}
.client_details label {
  font-size: smaller;
  color: gray;
  display: block;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
}
.client_details input,
.v3dp__datepicker,
select,
textarea {
  border: 1px solid lightgray !important;
  border-radius: 5px;
  padding: 5px;
  font-size: 16px;
  text-transform: uppercase;
  color: gray;
  width: 100% !important;
}
.date-picker-custom {
  width: 250px;
}
.btn-default{
  background-color: #f4f6f6;
}
.btn{
  width: 100px;
    margin-right: 1rem;
}
</style>
