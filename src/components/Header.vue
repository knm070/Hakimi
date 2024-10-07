<template>
  <div class="shaxmatka">
  <header class="text-input">
    <div class="horizontal-container">
      <img class="image-icon" loading="lazy" alt="" src="/image@2x.png" />
      <div class="text-input-container">
        <div class="hakimi-towers">Hakimi Towers:</div>
        <div class="dropdown-container">
          <select v-model="selectedLocation">
            <option value="">Samarqand viloyati, Samarqand tumani</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
      </div>
      <div class="segmented-picker">
        <a class="bino">Bino:</a>
        <div class="dropdown-container">
          <select v-model="selectedBuilding">
            <option value="">Barchasi</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
        </div>
      </div>
    </div>
    <div class="vertical-container">
      <div class="vertical-container1">
        <img class="close-icon" loading="lazy" alt="" src="/close.svg" @click="close" />
      </div>
    </div>
  </header>
  <div class="horizontal-container1">
    <div class="text-input-container1">
      <div class="workspace">Workspace</div>
      <div class="text-input2">
        <img class="vertical-container-icon" alt="" src="/vertical-container.svg" />

        <input class="qidirish" placeholder="Qidirish" type="text" v-model="searchQuery" />
      </div>
    </div>
    <div class="text-input-container2">
      <div class="workspace1">Xonalar soni</div>
      <div class="text-input3">
        <input class="xonalar-soni" placeholder="Xonalar soni" type="number" v-model="roomCount" />
      </div>
    </div>
    <div class="segmented-picker1">
      <div class="button">
        <a class="m2">
          m
          <sup>2</sup>
        </a>
      </div>
      <div class="text-input4">
        <input class="dan" placeholder="dan" type="text" v-model="sizeFrom" />
      </div>
      <div class="text-input5">
        <input class="gacha" placeholder="gacha" type="text" v-model="sizeTo" />
      </div>
    </div>
    <div class="segmented-picker1">
      <div class="button">
        <a class="m2">UZS</a>
      </div>
      <div class="text-input4">
        <input class="dan" placeholder="dan" type="text" v-model="priceFrom" />
      </div>
      <div class="text-input5">
        <input class="gacha" placeholder="gacha" type="text" v-model="priceTo" />
      </div>
    </div>
    <div class="segmented-picker1">
      <div class="button">
        <a class="m2">Qavat</a>
      </div>
      <div class="text-input4">
        <input class="dan" placeholder="dan" type="text" v-model="floorFrom" />
      </div>
      <div class="text-input5">
        <input class="gacha" placeholder="gacha" type="text" v-model="floorTo" />
      </div>
    </div>
    <button class="button5" @click="showDetails">
      <img class="slider-container-icon" alt="" src="/slider-container@2x.png" />

      <a class="batafsil">Batafsil</a>
      <img class="text-input-icon" alt=""  src="/batafsil.svg" />
    </button>
  </div>
</div>
</template>
<script>
export default {
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
};
</script>
<style scoped>
.shaxmatka,
.table,
.table-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
}

.table-container {
  align-self: stretch;
  background-color: var(--background-background);
  padding: var(--padding-base) var(--padding-5xl);
  max-width: 100%;
}

.shaxmatka {
  width: 100%;
  position: relative;
  background-color: var(--background-background-gray);
  overflow: hidden;
  padding: 0 0 var(--padding-5xl);
  gap: var(--gap-5xs);
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  font-size: var(--font-size-base);
  color: var(--text-text-gray-3-placeholder);
  font-family: var(--font-geist);
}

@media screen and (max-width: 1525px) {
  .text-input-container1,
  .text-input-container2 {
    align-self: stretch;
    width: auto;
  }

  .horizontal-container1 {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 850px) {
  .text-input-container {
    display: none;
  }

  .horizontal-container {
    width: 15.813rem;
  }

  .qidirish {
    min-width: 100%;
  }

  .text-input-container1 {
    flex: unset;
    align-self: stretch;
  }

  .xonalar-soni {
    min-width: 100%;
  }

  .text-input-container2 {
    flex: unset;
    align-self: stretch;
  }

  .dan,
  .dan1,
  .dan2,
  .gacha,
  .gacha1,
  .gacha2 {
    flex: 1;
    min-width: 100%;
  }

  .button5 {
    text-align: center;
    align-self: stretch;
    width: auto;
    min-width: 132;
  }

  .horizontal-container1 {
    flex-direction: column;
  }

  .horizontal-container4,
  .horizontal-container5 {
    flex-wrap: wrap;
  }

  .horizontal-container3 {
    flex-wrap: wrap;
    gap: var(--gap-base);
  }

  .container1 {
    padding-top: 2.75rem;
    box-sizing: border-box;
  }

  .pagination {
    gap: var(--gap-13xl);
  }
}

@media screen and (max-width: 450px) {
  .segmented-picker1,
  .segmented-picker2,
  .segmented-picker3,
  .text-input-container3 {
    flex-wrap: wrap;
  }

  .pagination {
    gap: var(--gap-base);
  }

  .table {
    padding-bottom: 6.875rem;
    box-sizing: border-box;
  }
}

button {
  border: none;
  cursor: pointer;
}
</style>
