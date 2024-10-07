<template>
  <div class="navigation">
    <div class="chevron-buttons">
      <div class="chevron-icons">
        <div class="button565">
          <img class="chevron-left-icon" loading="lazy" alt="" src="/chevron-left.svg" />
          <div class="button566">Share</div>
          <img class="icons" alt="" src="/icons.svg" />
        </div>
      </div>
      <div class="currency-label">
        <div class="currency-symbol">2020 - 2024</div>
        <div class="uzs6">14 119 789 660 UZS</div>
      </div>
      <div class="chevron-icons1">
        <div class="button567">
          <img class="chevron-left-icon1" loading="lazy" alt="" src="/chevron-left-1.svg" />
          <div class="button568">Share</div>
          <img class="icons1" alt="" src="/icons.svg" />
        </div>
      </div>
    </div>
    <div class="navigation-inner">
      <div class="frame-parent">
        <div class="frame-wrapper">
          <div class="frame-group">
            <div class="frame-container">
              <textarea class="frame-child" rows="7" cols="9" />
              <div class="empty-items">2020</div>
            </div>
            <div class="frame-div">
              <div class="frame-item" />
              <div class="div686">2021</div>
            </div>
            <div class="frame-parent1">
              <div class="frame-inner" />
              <div class="div687">2022</div>
            </div>
            <div class="frame-parent2">
              <textarea class="frame-textarea" rows="4" cols="9" />
              <div class="div688">2023</div>
            </div>
            <div class="frame-parent3">
              <textarea class="frame-child1" rows="4" cols="9" />
              <div class="div689">2024</div>
            </div>
          </div>
        </div>
        <div class="frame-parent4">
          <div class="b-parent">
            <div class="b">8.0b</div>
            <div class="line-wrapper">
              <div class="line-div" />
            </div>
          </div>
          <div class="b-group">
            <div class="b1">7.0b</div>
            <div class="line-container">
              <div class="frame-child2" />
            </div>
          </div>
          <div class="b-container">
            <div class="b2">6.0b</div>
            <div class="line-frame">
              <div class="frame-child3" />
            </div>
          </div>
          <div class="b-parent1">
            <div class="b3">5.0b</div>
            <div class="line-wrapper1">
              <div class="frame-child4" />
            </div>
          </div>
          <div class="b-parent2">
            <div class="b4">4.0b</div>
            <div class="line-wrapper2">
              <div class="frame-child5" />
            </div>
          </div>
          <div class="b-parent3">
            <div class="b5">3.0b</div>
            <div class="line-wrapper3">
              <div class="frame-child6" />
            </div>
          </div>
          <div class="b-parent4">
            <div class="b6">2.0b</div>
            <div class="line-wrapper4">
              <div class="frame-child7" />
            </div>
          </div>
          <div class="b-parent5">
            <div class="b7">1.0b</div>
            <div class="line-wrapper5">
              <div class="frame-child8" />
            </div>
          </div>
          <div class="m-parent">
            <div class="m5">0 m</div>
            <div class="line-wrapper6">
              <div class="frame-child9" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contract-container-wrapper">
      <div class="contract-container">
        <input class="frame-input" type="checkbox" />
        <div class="contract1">Contract</div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navigation1",
});
</script>
<style scoped>
.chevron-left-icon {
  height: 18px;
  width: 18px;
  position: relative;
}
.button566 {
  width: 39px;
  position: relative;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-weight: 600;
  display: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.icons {
  height: 18px;
  width: 18px;
  position: relative;
  display: none;
  min-height: 18px;
}
.button565 {
  align-self: stretch;
  box-shadow: var(--button-secondary);
  border-radius: var(--br-7xs);
  background-color: var(--background-background);
  border: 1px solid var(--line-field-line);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-6xs);
  gap: var(--gap-9xs);
}
.chevron-icons {
  width: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi-5) 0px 0px;
  box-sizing: border-box;
}
.currency-symbol {
  align-self: stretch;
  position: relative;
  line-height: 28px;
  font-weight: 600;
}
.uzs6 {
  align-self: stretch;
  position: relative;
  font-size: var(--body-large-regular-size);
  font-weight: 500;
  font-family: var(--heading-h6-13);
  color: var(--color-cadetblue-100);
}
.currency-label {
  width: 187px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--light-grayscale-100);
}
.chevron-left-icon1 {
  height: 18px;
  width: 18px;
  position: relative;
  object-fit: contain;
}
.button568 {
  width: 39px;
  position: relative;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-weight: 600;
  display: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.icons1 {
  height: 18px;
  width: 18px;
  position: relative;
  display: none;
  min-height: 18px;
}
.button567 {
  align-self: stretch;
  box-shadow: var(--button-secondary);
  border-radius: var(--br-7xs);
  background-color: var(--background-background);
  border: 1px solid var(--line-field-line);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-6xs);
  gap: var(--gap-9xs);
}
.chevron-icons1 {
  width: 34px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi-5) 0px 0px;
  box-sizing: border-box;
}
.chevron-buttons {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
}
.frame-child {
  border: none;
  background-color: var(--light-green-l20);
  height: 136px;
  width: auto;
  outline: none;
  align-self: stretch;
  position: relative;
  border-radius: var(--br-5xs);
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #00ba34;
  overflow: hidden;
  flex-shrink: 0;
}
.empty-items {
  align-self: stretch;
  position: relative;
  line-height: 20px;
  font-weight: 500;
}
.frame-container {
  width: 188.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
}
.frame-item {
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-5xs);
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #00ba34;
  overflow: hidden;
}
.div686 {
  align-self: stretch;
  position: relative;
  line-height: 20px;
  font-weight: 500;
}
.frame-div {
  height: 88px;
  width: 188.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
}
.frame-inner {
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-5xs);
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #00ba34;
  overflow: hidden;
}
.div687 {
  align-self: stretch;
  position: relative;
  line-height: 20px;
  font-weight: 500;
}
.frame-parent1 {
  height: 107px;
  width: 188.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
}
.frame-textarea {
  border: none;
  background-color: var(--light-green-l20);
  height: 88px;
  width: auto;
  outline: none;
  align-self: stretch;
  position: relative;
  border-radius: var(--br-5xs);
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #00ba34;
  overflow: hidden;
  flex-shrink: 0;
}
.div688 {
  align-self: stretch;
  position: relative;
  line-height: 20px;
  font-weight: 500;
}
.frame-parent2 {
  width: 188.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
}
.frame-child1 {
  border: none;
  background-color: var(--light-green-l20);
  height: 88px;
  width: auto;
  outline: none;
  align-self: stretch;
  position: relative;
  border-radius: var(--br-5xs);
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), #00ba34;
  overflow: hidden;
  flex-shrink: 0;
}
.div689 {
  align-self: stretch;
  position: relative;
  line-height: 20px;
  font-weight: 500;
}
.frame-parent3 {
  width: 188.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
}
.frame-group {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  padding: var(--padding-73xl) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-xl);
  z-index: 1;
}
.frame-wrapper {
  width: 1502px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-21xl);
  box-sizing: border-box;
  max-width: 100%;
}
.b {
  width: 40px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.line-div {
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--line-container-line);
  box-sizing: border-box;
}
.line-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  box-sizing: border-box;
  min-width: 955px;
  max-width: 100%;
}
.b-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
}
.b1 {
  width: 40px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.frame-child2 {
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--line-container-line);
  box-sizing: border-box;
}
.line-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  box-sizing: border-box;
  min-width: 955px;
  max-width: 100%;
}
.b-group {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
}
.b2 {
  width: 40px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.frame-child3 {
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--line-container-line);
  box-sizing: border-box;
}
.line-frame {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  box-sizing: border-box;
  min-width: 955px;
  max-width: 100%;
}
.b-container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
}
.b3 {
  width: 40px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.frame-child4 {
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--line-container-line);
  box-sizing: border-box;
}
.line-wrapper1 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  box-sizing: border-box;
  min-width: 955px;
  max-width: 100%;
}
.b-parent1 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
}
.b4 {
  width: 40px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.frame-child5 {
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--line-container-line);
  box-sizing: border-box;
}
.line-wrapper2 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  box-sizing: border-box;
  min-width: 955px;
  max-width: 100%;
}
.b-parent2 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
}
.b5 {
  width: 40px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.frame-child6 {
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--line-container-line);
  box-sizing: border-box;
}
.line-wrapper3 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  box-sizing: border-box;
  min-width: 955px;
  max-width: 100%;
}
.b-parent3 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
}
.b6 {
  width: 40px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.frame-child7 {
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--line-container-line);
  box-sizing: border-box;
}
.line-wrapper4 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  box-sizing: border-box;
  min-width: 955px;
  max-width: 100%;
}
.b-parent4 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
}
.b7 {
  width: 40px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.frame-child8 {
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--line-container-line);
  box-sizing: border-box;
}
.line-wrapper5 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  box-sizing: border-box;
  min-width: 955px;
  max-width: 100%;
}
.b-parent5 {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
}
.m5 {
  width: 40px;
  position: relative;
  display: inline-block;
  flex-shrink: 0;
}
.frame-child9 {
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px solid var(--line-container-line);
  box-sizing: border-box;
}
.line-wrapper6 {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-6xs-5) 0px 0px;
  box-sizing: border-box;
  min-width: 955px;
  max-width: 100%;
}
.m-parent {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
}
.frame-parent4 {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  max-width: 100%;
  margin-top: -188px;
  text-align: right;
  font-size: var(--font-size-2xs);
}
.frame-parent {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  min-height: 258px;
  max-width: 100%;
}
.navigation-inner {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-5xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  text-align: center;
  font-size: var(--heading-h6-13-size);
  color: var(--light-grayscale-300);
  font-family: var(--heading-h6-13);
}
.frame-input {
  margin: 0;
  height: 18px;
  width: 16px;
}
.contract1 {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 20px;
  font-weight: 500;
  display: inline-block;
  min-width: 58px;
}
.contract-container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
}
.contract-container-wrapper {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 0px 0px var(--padding-5xs);
}
.navigation {
  align-self: stretch;
  border-radius: var(--br-xs);
  background-color: var(--background-background);
  border: 1px solid var(--light-grayscale-400);
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-3xl) var(--padding-4xl) var(--padding-3xl) var(--padding-mini);
  gap: var(--gap-5xl);
  max-width: 100%;
  text-align: left;
  font-size: var(--body-medium-medium-size);
  color: var(--text-text-black);
  font-family: var(--body-medium-medium);
}

@media screen and (max-width: 1325px) {
  .frame-group {
    flex-wrap: wrap;
    justify-content: center;
  }

  .b-parent {
    flex-wrap: wrap;
  }

  .b-group {
    flex-wrap: wrap;
  }

  .b-container {
    flex-wrap: wrap;
  }

  .b-parent1 {
    flex-wrap: wrap;
  }

  .b-parent2 {
    flex-wrap: wrap;
  }

  .b-parent3 {
    flex-wrap: wrap;
  }

  .b-parent4 {
    flex-wrap: wrap;
  }

  .b-parent5 {
    flex-wrap: wrap;
  }

  .m-parent {
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 1125px) {
  .line-wrapper {
    min-width: 100%;
  }

  .line-container {
    min-width: 100%;
  }

  .line-frame {
    min-width: 100%;
  }

  .line-wrapper1 {
    min-width: 100%;
  }

  .line-wrapper2 {
    min-width: 100%;
  }

  .line-wrapper3 {
    min-width: 100%;
  }

  .line-wrapper4 {
    min-width: 100%;
  }

  .line-wrapper5 {
    min-width: 100%;
  }

  .line-wrapper6 {
    min-width: 100%;
  }
}
@media screen and (max-width: 450px) {
  .currency-symbol {
    font-size: var(--body-large-regular-size);
    line-height: 22px;
  }

  .chevron-buttons {
    flex-wrap: wrap;
  }

  .navigation {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
}
</style>
