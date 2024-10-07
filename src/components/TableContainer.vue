<template>
  <div class="table-container13">
    <h3 class="on-sale" :style="onSaleStyle">{{onSale}}</h3>
    <div class="text-input18" />
    <div class="content">
      <div class="house">House</div>
      <div class="property-type-details">13</div>
    </div>
    <div class="content1">
      <div class="basement">Basement:</div>
      <div class="basement-details">0</div>
    </div>
    <div class="content2">
      <div class="shop">Shop:</div>
      <div class="shop-features">3</div>
    </div>
    <div class="content3">
      <div class="parking">Parking:</div>
      <div class="parking-features">0</div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "TableContainer",
    props: {
      onSale: { type: String },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      onSaleStyle() {
        return {
          minWidth: this.propMinWidth,
          width: this.propWidth,
        };
      },
    },
  });
</script>
<style scoped>
  .on-sale {
    margin: 0;
    position: relative;
    font-size: var(--font-size-3xl);
    line-height: 24px;
    font-weight: 500;
    font-family: inherit;
    color: var(--text-text-black);
    display: inline-block;
    min-width: 79px;
  }
  .text-input18 {
    align-self: stretch;
    height: 1px;
    position: relative;
    border-top: 1px dashed var(--grayscale-300);
    box-sizing: border-box;
  }
  .house {
    flex: 1;
    position: relative;
    letter-spacing: -0.01em;
    line-height: 20px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 35px;
    max-width: 100%;
  }
  .property-type-details {
    width: 17px;
    position: relative;
    letter-spacing: -0.01em;
    line-height: 20px;
    font-weight: 600;
    color: var(--text-text-black);
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .basement {
    flex: 1;
    position: relative;
    letter-spacing: -0.01em;
    line-height: 20px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 60px;
    max-width: 100%;
  }
  .basement-details {
    width: 11px;
    position: relative;
    letter-spacing: -0.01em;
    line-height: 20px;
    font-weight: 600;
    color: var(--text-text-black);
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .shop {
    flex: 1;
    position: relative;
    letter-spacing: -0.01em;
    line-height: 20px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 32px;
    max-width: 100%;
  }
  .shop-features {
    width: 11px;
    position: relative;
    letter-spacing: -0.01em;
    line-height: 20px;
    font-weight: 600;
    color: var(--text-text-black);
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content2 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .parking {
    flex: 1;
    position: relative;
    letter-spacing: -0.01em;
    line-height: 20px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 45px;
    max-width: 100%;
  }
  .parking-features {
    width: 11px;
    position: relative;
    letter-spacing: -0.01em;
    line-height: 20px;
    font-weight: 600;
    color: var(--text-text-black);
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content3 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .table-container13 {
    align-self: stretch;
    border-radius: var(--br-sm);
    background-color: var(--text-text-white);
    border: 1px solid var(--line-container-line);
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) var(--padding-base);
    gap: var(--gap-xs);
    max-width: 100%;
    flex-shrink: 0;
    text-align: left;
    font-size: var(--body-large-regular-size);
    color: var(--text-text-gray-2);
    font-family: var(--heading-h6-semibold);
  }

  @media screen and (max-width: 450px) {
    .on-sale {
      font-size: var(--heading-h6-semibold-size);
      line-height: 19px;
    }

    .property-type-details {
      width: 100%;
      height: 17px;
    }

    .content {
      flex-wrap: wrap;
    }

    .basement-details {
      width: 100%;
      height: 11px;
    }

    .content1 {
      flex-wrap: wrap;
    }

    .shop-features {
      width: 100%;
      height: 11px;
    }

    .content2 {
      flex-wrap: wrap;
    }

    .parking-features {
      width: 100%;
      height: 11px;
    }

    .content3 {
      flex-wrap: wrap;
    }
  }
</style>
