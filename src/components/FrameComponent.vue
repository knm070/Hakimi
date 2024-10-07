<template>
  <div class="frame-parent12">
    <div class="frame-wrapper1">
      <div class="frame-parent13">
        <div class="button-wrapper1">
          <div class="button21">
            <img
              class="chevron-left-icon2"
              loading="lazy"
              alt=""
              src="/chevron-left1.svg"
            />
            <div class="button22">Share</div>
            <img class="icons2" alt="" src="/icons.svg" />
          </div>
        </div>
        <div class="currency-symbol-parent">
          <div class="currency-symbol">2024</div>
          <div class="uzs57">7 549 598 556 UZS</div>
        </div>
        <div class="button-wrapper2">
          <div class="button23">
            <img
              class="chevron-left-icon3"
              loading="lazy"
              alt=""
              src="/chevron-left-11.svg"
            />
            <div class="button24">Share</div>
            <img class="icons3" alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
    </div>
    <div class="frame-parent14">
      <div class="frame-parent15">
        <div class="b-parent6">
          <div class="b8">2b</div>
          <div class="chart-separators-wrapper">
            <div class="chart-separators" />
          </div>
        </div>
        <div class="b-parent7">
          <div class="b9">1.8b</div>
          <div class="line-wrapper15">
            <div class="frame-child54" />
          </div>
        </div>
        <div class="b-parent8">
          <div class="b10">1.6b</div>
          <div class="line-wrapper16">
            <div class="frame-child55" />
          </div>
          <div class="frame-child56" />
        </div>
        <div class="b-parent9">
          <div class="b11">1.4b</div>
          <div class="line-wrapper17">
            <div class="frame-child57" />
          </div>
          <div class="frame-child58" />
        </div>
        <div class="b-parent10">
          <div class="b12">1.2b</div>
          <div class="line-wrapper18">
            <div class="frame-child59" />
          </div>
          <div class="frame-child60" />
          <div class="frame-child61" />
          <div class="chart-title-placeholder" />
        </div>
        <div class="b-parent11">
          <div class="b13">1.0b</div>
          <div class="line-wrapper19">
            <div class="frame-child62" />
          </div>
          <div class="frame-child63" />
        </div>
        <div class="m-parent7">
          <div class="m11">800.0m</div>
          <div class="line-wrapper20">
            <div class="frame-child64" />
          </div>
          <div class="frame-child65" />
          <div class="frame-child66" />
        </div>
        <div class="m-parent8">
          <div class="m12">600.0m</div>
          <div class="line-wrapper21">
            <div class="frame-child67" />
          </div>
          <div class="frame-child68" />
        </div>
        <div class="m-parent9">
          <div class="m13">400.0m</div>
          <div class="line-wrapper22">
            <div class="frame-child69" />
          </div>
          <div class="frame-child70" />
        </div>
        <div class="m-parent10">
          <div class="m14">200.0m</div>
          <div class="line-wrapper23">
            <div class="frame-child71" />
          </div>
          <div class="frame-child72" />
        </div>
        <div class="m-parent11">
          <div class="m15">0 m</div>
          <div class="line-wrapper24">
            <div class="frame-child73" />
          </div>
          <div class="frame-child74" />
        </div>
      </div>
      <div class="frame-wrapper2">
        <div class="jan-parent">
          <div class="jan">Jan</div>
          <div class="feb">Feb</div>
          <div class="mar">Mar</div>
          <div class="apr">Apr</div>
          <div class="may">May</div>
          <div class="june-parent">
            <div class="june">June</div>
            <input class="selected-month-indicator" type="checkbox" />
            <div class="contract3">Contract</div>
            <div class="july">July</div>
          </div>
          <div class="aug10">Aug</div>
          <div class="sep">Sep</div>
          <div class="oct">Oct</div>
          <div class="nov">Nov</div>
          <div class="dec">Dec</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent",
  });
</script>
<style scoped>
  .chevron-left-icon2 {
    height: 18px;
    width: 18px;
    position: relative;
  }
  .button22 {
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
  .icons2 {
    height: 18px;
    width: 18px;
    position: relative;
    display: none;
    min-height: 18px;
  }
  .button21 {
    align-self: stretch;
    box-shadow: var(--button-secondary);
    border-radius: var(--br-7xs);
    background-color: var(--text-text-white);
    border: 1px solid var(--grayscale-100);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) var(--padding-6xs);
    gap: var(--gap-9xs);
  }
  .button-wrapper1 {
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
  .uzs57 {
    align-self: stretch;
    position: relative;
    font-size: var(--body-large-regular-size);
    font-weight: 500;
    font-family: var(--heading-h6-13);
    color: var(--color-cadetblue-100);
  }
  .currency-symbol-parent {
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
  .chevron-left-icon3 {
    height: 18px;
    width: 18px;
    position: relative;
    object-fit: contain;
  }
  .button24 {
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
  .icons3 {
    height: 18px;
    width: 18px;
    position: relative;
    display: none;
    min-height: 18px;
  }
  .button23 {
    align-self: stretch;
    box-shadow: var(--button-secondary);
    border-radius: var(--br-7xs);
    background-color: var(--text-text-white);
    border: 1px solid var(--grayscale-100);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) var(--padding-6xs);
    gap: var(--gap-9xs);
  }
  .button-wrapper2 {
    width: 34px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-smi-5) 0px 0px;
    box-sizing: border-box;
  }
  .frame-parent13 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .frame-wrapper1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-5xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .b8 {
    width: 40px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
  }
  .chart-separators {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--line-container-line);
    box-sizing: border-box;
  }
  .chart-separators-wrapper {
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
  .b-parent6 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .b9 {
    width: 40px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
  }
  .frame-child54 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--line-container-line);
    box-sizing: border-box;
  }
  .line-wrapper15 {
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
  .b-parent7 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .b10 {
    width: 40px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
  }
  .frame-child55 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--line-container-line);
    box-sizing: border-box;
  }
  .line-wrapper16 {
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
  .frame-child56 {
    height: 167px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    bottom: -145px;
    left: 655.2px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    z-index: 1;
  }
  .b-parent8 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .b11 {
    width: 40px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
  }
  .frame-child57 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--line-container-line);
    box-sizing: border-box;
  }
  .line-wrapper17 {
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
  .frame-child58 {
    height: 140px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    right: 399.5px;
    bottom: -126px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .b-parent9 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .b12 {
    width: 40px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
  }
  .frame-child59 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--line-container-line);
    box-sizing: border-box;
  }
  .line-wrapper18 {
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
  .frame-child60 {
    height: 136px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    bottom: -107px;
    left: 56px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .frame-child61 {
    height: 122px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    right: 519.4px;
    bottom: -107px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .chart-title-placeholder {
    height: 134px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    right: 279.7px;
    bottom: -107px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    z-index: 1;
  }
  .b-parent10 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .b13 {
    width: 40px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
  }
  .frame-child62 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--line-container-line);
    box-sizing: border-box;
  }
  .line-wrapper19 {
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
  .frame-child63 {
    height: 106px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    bottom: -88px;
    left: 535.3px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    z-index: 1;
  }
  .b-parent11 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .m11 {
    position: relative;
    display: inline-block;
    min-width: 40px;
  }
  .frame-child64 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--line-container-line);
    box-sizing: border-box;
  }
  .line-wrapper20 {
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
  .frame-child65 {
    height: 88px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    bottom: -69px;
    left: 415.5px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    z-index: 1;
  }
  .frame-child66 {
    height: 91px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    right: 159.9px;
    bottom: -69px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .m-parent7 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .m12 {
    position: relative;
    display: inline-block;
    min-width: 40px;
  }
  .frame-child67 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--line-container-line);
    box-sizing: border-box;
  }
  .line-wrapper21 {
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
  .frame-child68 {
    height: 77px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    bottom: -50px;
    left: 295.7px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    z-index: 1;
  }
  .m-parent8 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .m13 {
    position: relative;
    display: inline-block;
    min-width: 41px;
  }
  .frame-child69 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--line-container-line);
    box-sizing: border-box;
  }
  .line-wrapper22 {
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
  .frame-child70 {
    height: 58px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    bottom: -31px;
    left: 175.8px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    z-index: 1;
  }
  .m-parent9 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-6xs);
    max-width: 100%;
  }
  .m14 {
    position: relative;
    display: inline-block;
    min-width: 40px;
  }
  .frame-child71 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--line-container-line);
    box-sizing: border-box;
  }
  .line-wrapper23 {
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
  .frame-child72 {
    height: 40px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    top: -15px;
    right: 40px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    flex-shrink: 0;
    z-index: 1;
  }
  .m-parent10 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .m15 {
    width: 40px;
    position: relative;
    display: inline-block;
    flex-shrink: 0;
  }
  .frame-child73 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px solid var(--line-container-line);
    box-sizing: border-box;
  }
  .line-wrapper24 {
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
  .frame-child74 {
    height: 14px;
    width: 103.8px;
    position: absolute;
    margin: 0 !important;
    top: -8px;
    right: 639.2px;
    border-radius: var(--br-5xs);
    background: linear-gradient(
        rgba(255, 255, 255, 0.2),
        rgba(255, 255, 255, 0.2)
      ),
      #00ba34;
    overflow: hidden;
    z-index: 1;
  }
  .m-parent11 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .frame-parent15 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-7xs);
    max-width: 100%;
  }
  .jan {
    width: 103.8px;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    flex-shrink: 0;
  }
  .feb {
    width: 103.8px;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    flex-shrink: 0;
  }
  .mar {
    width: 103.8px;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    flex-shrink: 0;
  }
  .apr {
    width: 103.8px;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    flex-shrink: 0;
  }
  .may {
    width: 103.8px;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    flex-shrink: 0;
  }
  .june {
    position: absolute;
    top: 0px;
    left: 0px;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    width: 103.8px;
  }
  .selected-month-indicator {
    margin: 0;
    position: absolute;
    top: 46px;
    left: 71.8px;
    border-radius: var(--br-9xs);
    border: 1px solid var(--color-forestgreen-100);
    box-sizing: border-box;
    width: 16px;
    height: 16px;
  }
  .contract3 {
    position: absolute;
    top: 44px;
    left: 93.8px;
    font-size: var(--body-medium-medium-size);
    letter-spacing: -0.01em;
    line-height: 20px;
    font-weight: 500;
    font-family: var(--heading-h6-semibold);
    color: var(--text-text-black);
    text-align: left;
    display: inline-block;
    min-width: 58px;
  }
  .july {
    position: absolute;
    top: 0px;
    left: 119.8px;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    width: 103.8px;
  }
  .june-parent {
    height: 64px;
    flex: 1;
    position: relative;
    min-width: 146px;
  }
  .aug10 {
    width: 103.8px;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    flex-shrink: 0;
  }
  .sep {
    width: 103.8px;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    flex-shrink: 0;
  }
  .oct {
    width: 103.8px;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    flex-shrink: 0;
  }
  .nov {
    width: 103.8px;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    flex-shrink: 0;
  }
  .dec {
    width: 103.8px;
    position: relative;
    line-height: 20px;
    font-weight: 500;
    display: inline-block;
    flex-shrink: 0;
  }
  .jan-parent {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
    max-width: 100%;
  }
  .frame-wrapper2 {
    width: 1502px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-21xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: center;
    font-size: var(--heading-h6-13-size);
  }
  .frame-parent14 {
    width: 1518px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-10xs);
    max-width: 100%;
    text-align: right;
    font-size: var(--font-size-2xs);
    color: var(--light-grayscale-300);
    font-family: var(--heading-h6-13);
  }
  .frame-parent12 {
    align-self: stretch;
    border-radius: var(--br-xs);
    background-color: var(--text-text-white);
    border: 1px solid var(--light-grayscale-400);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xl) var(--padding-mini);
    gap: var(--gap-37xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--body-medium-medium-size);
    color: var(--text-text-black);
    font-family: var(--heading-h6-semibold);
  }

  @media screen and (max-width: 1325px) {
    .b-parent6 {
      flex-wrap: wrap;
    }

    .b-parent7 {
      flex-wrap: wrap;
    }

    .b-parent8 {
      flex-wrap: wrap;
    }

    .b-parent9 {
      flex-wrap: wrap;
    }

    .b-parent10 {
      flex-wrap: wrap;
    }

    .b-parent11 {
      flex-wrap: wrap;
    }

    .m-parent7 {
      flex-wrap: wrap;
    }

    .m-parent8 {
      flex-wrap: wrap;
    }

    .m-parent9 {
      flex-wrap: wrap;
    }

    .m-parent10 {
      flex-wrap: wrap;
    }

    .m-parent11 {
      flex-wrap: wrap;
    }

    .jan-parent {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 1125px) {
    .chart-separators-wrapper {
      min-width: 100%;
    }

    .line-wrapper15 {
      min-width: 100%;
    }

    .line-wrapper16 {
      min-width: 100%;
    }

    .line-wrapper17 {
      min-width: 100%;
    }

    .line-wrapper18 {
      min-width: 100%;
    }

    .line-wrapper19 {
      min-width: 100%;
    }

    .line-wrapper20 {
      min-width: 100%;
    }

    .line-wrapper21 {
      min-width: 100%;
    }

    .line-wrapper22 {
      min-width: 100%;
    }

    .line-wrapper23 {
      min-width: 100%;
    }

    .line-wrapper24 {
      min-width: 100%;
    }
  }
  @media screen and (max-width: 800px) {
    .currency-symbol {
      font-size: var(--body-large-regular-size);
      line-height: 22px;
    }

    .frame-parent13 {
      flex-wrap: wrap;
    }

    .frame-parent12 {
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .frame-parent12 {
      gap: var(--gap-9xl);
    }
  }
</style>
