<template>
  <div class="shaxmatka">
    <Header />

    <main class="table-container">
      <section class="table">
        <div class="horizontal-container2">
          <div class="segmented-picker3">
            <button class="button6" @click="setView('list')">
              <img class="card-icon" alt="" src="/card.svg" />

              <div class="royxat">Ro’yxat</div>
            </button>
            <button class="button7" @click="setView('grid')">
              <img class="container-icon" alt="" src="/container.svg" />

              <div class="shaxmatka1">Shaxmatka</div>
            </button>
            <button class="button8" @click="setView('gridPlus')">
              <img class="space-dashboard-icon" alt="" src="/space-dashboard.svg" />

              <div class="shaxmatka2">Shaxmatka +</div>
            </button>
          </div>
          <div class="horizontal-container3">
            <div class="button9">
              <div class="murakkab">Murakkab</div>
              <img class="vertical-container-icon1" alt="" src="/vertical-container.svg" />
            </div>
            <div class="horizontal-container4">
              <div class="xonadon">Xonadon:</div>
              <div class="horizontal-container5">
                <button class="button-container" @click="setStatus('bosh')">
                  <img class="button-container-icon" alt="" src="/button-container.svg" />

                  <div class="bosh">Bo’sh</div>
                </button>
                <button class="button-container1" @click="setStatus('band')">
                  <img class="button-container-icon1" alt="" src="/button-container-1.svg" />

                  <div class="band-qilingan">Band qilingan</div>
                </button>
                <button class="button-container2" @click="setStatus('sotilgan')">
                  <img class="button-container-icon2" alt="" src="/button-container-2.svg" />

                  <div class="sotilgan">Sotilgan</div>
                </button>
                <button class="button10" @click="setStatus('sotilmaydi')">
                  <img class="container-icon1" alt="" src="/container-1.svg" />

                  <div class="sotilmaydi">Sotilmaydi</div>
                </button>
                <div class="button11">
                  <img class="container-icon2" alt="" src="/container-2.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-input8"></div>
        <div class="pagination">
          <div class="container1">
            <div class="slider">
              <div class="page-navigation">9</div>
            </div>
            <div class="slider">
              <div class="previous-month">8</div>
            </div>
            <div class="slider">
              <div class="div">7</div>
            </div>
            <div class="slider">
              <div class="div1">6</div>
            </div>
            <div class="slider">
              <div class="div2">5</div>
            </div>
            <div class="slider">
              <div class="div3">4</div>
            </div>
            <div class="slider">
              <div class="div4">3</div>
            </div>
            <div class="slider">
              <div class="div5">2</div>
            </div>
            <div class="slider">
              <div class="div6">1</div>
            </div>
            <div class="slider">
              <div class="div7">0</div>
            </div>
          </div>
          <div class="calendar-container">
            <div class="paragraph-container">
              <div class="placeholder">1</div>
              <div class="podez">1- podez</div>
            </div>
            <div class="calendar row">
              <div class="col-2 yellow">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 yellow">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 yellow">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 yellow">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 red">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 red">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 red">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 yellow">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 yellow">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 yellow">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 yellow">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 red">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 yellow">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 yellow">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 yellow">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 red">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 red">
                <div class="block-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
              <div class="col-2 empty">
                <div class="empty-text">93</div>
              </div>
            </div>
          </div>

          <div class="container1">
            <div class="slider">
              <div class="page-navigation">9</div>
            </div>
            <div class="slider">
              <div class="previous-month">8</div>
            </div>
            <div class="slider">
              <div class="div">7</div>
            </div>
            <div class="slider">
              <div class="div1">6</div>
            </div>
            <div class="slider">
              <div class="div2">5</div>
            </div>
            <div class="slider">
              <div class="div3">4</div>
            </div>
            <div class="slider">
              <div class="div4">3</div>
            </div>
            <div class="slider">
              <div class="div5">2</div>
            </div>
            <div class="slider">
              <div class="div6">1</div>
            </div>
            <div class="slider">
              <div class="div7">0</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style >
.royxat {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 600;
  display: inline-block;
  min-width: 3.188rem;
}

.button6 {
  border-radius: var(--br-7xs);
  background-color: var(--background-background-gray);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-7xs) var(--padding-xs);
  gap: var(--gap-5xs);
}

.container-icon {
  height: 1rem;
  width: 1rem;
  position: relative;
}

.shaxmatka1 {
  flex: 1;
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  font-family: var(--font-geist);
  color: var(--color-mediumblue-100);
  text-align: left;
}

.button7 {
  cursor: pointer;
  border: 0;
  padding: var(--padding-7xs) var(--padding-xs);
  background-color: var(--color-lavender);
  flex: 1;
  border-radius: var(--br-7xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  gap: var(--gap-5xs);
  min-width: 5rem;
}

.button7:hover {
  background-color: var(--color-lightsteelblue);
}

.space-dashboard-icon {
  height: 0.75rem;
  width: 0.75rem;
  position: relative;
}

.shaxmatka2 {
  flex: 1;
  position: relative;
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 500;
}

.button8,
.segmented-picker3 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}
.segmented-picker1 {
  width: 20%;
}
.button8 {
  flex: 1;
  border-radius: var(--br-7xs);
  background-color: var(--background-background-gray);
  padding: var(--padding-7xs) var(--padding-xs);
  box-sizing: border-box;
  gap: var(--gap-5xs);
  min-width: 5.25rem;
  white-space: nowrap;
  color: var(--text-text-gray-3-placeholder);
}

.segmented-picker3 {
  width: 22.75rem;
  gap: var(--gap-7xs);
  max-width: 100%;
}

.murakkab {
  flex: 1;
  position: relative;
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vertical-container-icon1 {
  height: 1.25rem;
  width: 1.25rem;
  position: relative;
  min-height: 1.25rem;
}

.button9 {
  width: 7.313rem;
  border-radius: var(--br-7xs);
  background-color: var(--background-background);
  border: 1px solid var(--line-container-line);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-9xs) var(--padding-2xs);
  gap: var(--gap-5xs);
}

.xonadon {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  display: inline-block;
  min-width: 3.75rem;
}

.button-container-icon {
  height: 1.25rem;
  width: 1.25rem;
  position: relative;
  min-height: 1.25rem;
}

.bosh {
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  font-family: var(--font-geist);
  color: var(--color-darkslategray-100);
  text-align: left;
  display: inline-block;
  min-width: 2.313rem;
}

.button-container {
  cursor: pointer;
  border: 1px solid var(--line-container-line);
  padding: var(--padding-9xs) var(--padding-4xs);
  background-color: transparent;
  width: 5.313rem;
  border-radius: var(--br-7xs);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
}

.button-container1:hover,
.button-container2:hover,
.button-container:hover,
.button10:hover {
  background-color: var(--color-gainsboro-200);
  border: 1px solid var(--color-gainsboro-100);
  box-sizing: border-box;
}

.button-container-icon1 {
  height: 1.25rem;
  width: 1.25rem;
  position: relative;
  min-height: 1.25rem;
}

.band-qilingan {
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  font-family: var(--font-geist);
  color: var(--color-darkslategray-100);
  text-align: left;
  display: inline-block;
  min-width: 5.563rem;
}

.button-container1 {
  cursor: pointer;
  border: 1px solid var(--line-container-line);
  padding: var(--padding-9xs) var(--padding-4xs);
  background-color: transparent;
  border-radius: var(--br-7xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  white-space: nowrap;
}

.button-container-icon2 {
  height: 1.25rem;
  width: 1.25rem;
  position: relative;
  min-height: 1.25rem;
}

.sotilgan {
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  font-family: var(--font-geist);
  color: var(--color-darkslategray-100);
  text-align: left;
  display: inline-block;
  min-width: 3.438rem;
}

.button-container2 {
  cursor: pointer;
  border: 1px solid var(--line-container-line);
  padding: var(--padding-9xs) var(--padding-4xs);
  background-color: transparent;
  border-radius: var(--br-7xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
}

.container-icon1 {
  height: 1.25rem;
  width: 1.25rem;
  position: relative;
  min-height: 1.25rem;
}

.sotilmaydi {
  position: relative;
  font-size: var(--font-size-sm);
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  font-family: var(--font-geist);
  color: var(--color-darkslategray-100);
  text-align: left;
  display: inline-block;
  min-width: 4.313rem;
}

.button10 {
  cursor: pointer;
  border: 1px solid var(--line-container-line);
  padding: var(--padding-9xs) var(--padding-4xs);
  background-color: transparent;
  border-radius: var(--br-7xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-5xs);
}

.container-icon2 {
  height: 1.25rem;
  width: 1.25rem;
  position: relative;
}

.button11,
.horizontal-container5 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.button11 {
  width: 2rem;
  box-shadow: 0 1px 2px rgba(24, 35, 34, 0.05);
  border-radius: var(--br-7xs);
  background-color: var(--background-background);
  border: 1px solid var(--line-container-line);
  box-sizing: border-box;
  overflow: hidden;
  flex-shrink: 0;
  align-items: flex-start;
  padding: var(--padding-9xs) var(--padding-8xs);
}

.horizontal-container5 {
  align-items: center;
  gap: var(--gap-xs);
  max-width: 100%;
}

.horizontal-container4 {
  justify-content: flex-start;
  gap: var(--gap-5xl);
  color: var(--line-dotted-line-2);
}

.horizontal-container2,
.horizontal-container3,
.horizontal-container4 {
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 100%;
}

.horizontal-container3 {
  justify-content: center;
  gap: var(--gap-13xl);
  color: var(--text-text-black);
}

.horizontal-container2 {
  align-self: stretch;
  justify-content: space-between;
  flex-shrink: 0;
  gap: var(--gap-xl);
}

.text-input8 {
  align-self: stretch;
  height: 0.063rem;
  position: relative;
  border-top: 1px dashed var(--line-dotted-line-2);
  box-sizing: border-box;
}

.page-navigation {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  display: inline-block;
  min-width: 0.563rem;
}

.slider {
  align-self: stretch;
  box-shadow: 0 1px 2px rgba(24, 35, 34, 0.05);
  border-radius: var(--br-7xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-mini);
}

.container2 {
  align-self: stretch;
  box-shadow: 0 1px 2px rgba(24, 35, 34, 0.05);
  border-radius: var(--br-7xs);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-mini);
}

.div {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  display: inline-block;
  min-width: 0.563rem;
}

.container1 {
  width: 2.5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-49xl) 0 0;
  box-sizing: border-box;
  gap: var(--gap-5xs);
  color: var(--text-text-gray-1);
}

.placeholder,
.podez {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 500;
}

.placeholder {
  align-self: stretch;
}

.podez {
  display: inline-block;
  min-width: 3.5rem;
}

.paragraph-container {
  width: 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
}

.calendar,
.calendar-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}

.calendar {
  align-self: stretch;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem 0.45rem;
  color: var(--background-background);
}

.calendar-container {
  height: 33.75rem;
  width: 17.5rem;
  flex-shrink: 0;
  flex-direction: column;
  gap: var(--gap-base);
}

.pagination {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-shrink: 0;
}

.pagination {
  width: 115rem;
  overflow-x: auto;
  flex-direction: row;
  position: relative;
  gap: 4rem;
  max-width: 100%;
  color: var(--text-text-gray-3-placeholder);
}

.table {
  align-self: stretch;
  border-radius: var(--br-sm);
  background-color: var(--background-background);
  border: 1px solid var(--line-container-line);
  overflow: hidden;
  padding: var(--padding-sm) var(--padding-mini) 16.375rem;
  gap: var(--gap-base);
  max-width: 100%;
  text-align: left;
  font-size: var(--font-size-sm);
  color: var(--color-cadetblue-100);
  font-family: var(--font-geist);
}

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

@media screen and (max-width: 1225px) {
  .horizontal-container2 {
    flex-wrap: wrap;
  }

  .table {
    padding-top: var(--padding-xl);
    padding-bottom: 10.625rem;
    box-sizing: border-box;
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

/* ****************************************** */

button {
  border: none;
  cursor: pointer;
}

.yellow {
  box-shadow: 0 1px 2px rgba(24, 35, 34, 0.05);
  border-radius: var(--br-7xs);
  background-color: var(--color-forestgreen);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-2xs);
}

.red {
  box-shadow: 0 1px 2px rgba(24, 35, 34, 0.05);
  border-radius: var(--br-7xs);
  background-color: #db4f00;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: var(--padding-3xs) var(--padding-2xs);
}

.empty {
  box-shadow: 0 1px 2px rgba(24, 35, 34, 0.05);
  border-radius: var(--br-7xs);
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid var(--color-forestgreen);
  padding: var(--padding-3xs) var(--padding-2xs);
}

.block-text {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  display: inline-block;
  min-width: 1.125rem;
}

.empty-text {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 1.25rem;
  font-weight: 500;
  display: inline-block;
  /* min-width: 1.125rem; */
  color: #3f5d5a;
}
</style>
