<template>
  <div class="sidebar2 ">
    <div class="logo1">
      <img class="image-icon1" loading="lazy" alt="" :src="image" />
      <router-link to="/mainpage" class="hakimi-towers1">Hakimi Towers</router-link>
    </div>
    <div class="divider"></div>
    <div class="sidebar3">
      <div class="home-links" :class="{ active: $route.path === '/mainpage' }">
        <img class="home-icon1" loading="lazy" alt="" :src="home" />
        <router-link to="/mainpage" class="main-page3" >{{ $t('main_page') }}</router-link>
      </div>
      <div class="home-links1" :class="{ active: $route.path === '/payments' }">
        <img class="account-balance-wallet-icon1" alt="" :src="accountBalanceWallet" />
        <router-link to="/payments" class="payment5">{{ $t('payment') }}</router-link>
      </div>
      <div class="home-links2" :class="{ active: $route.path === '/debt' }">
        <img class="credit-card-clock-icon1" loading="lazy" alt="" :src="creditCardClock" />
        <router-link to="/debt" class="debt1" :style="debtStyle">{{ $t('debt') }}</router-link>
      </div>
      <div class="home-links3" :class="{ active: $route.path === '/tjm' }">
        <img class="location-city-icon1" loading="lazy" alt="" :src="locationCity" />
        <router-link to="/tjm" class="tjm1">{{ $t('tjm') }}</router-link>
      </div>
      <div class="home-links4" :class="{ active: $route.path === '/contract' }">
        <img class="contract-edit-icon1" loading="lazy" alt="" :src="contractEdit" />
        <router-link to="/contract" class="contract1">{{ $t('contract') }}</router-link>
      </div>
      <div class="home-links4" :class="{ active: $route.path === '/sale' }">
        <img class="contract-edit-icon1" loading="lazy" alt="" :src="contractEdit" />
        <router-link to="/sale" class="contract1">{{ $t('sale') }}</router-link>
      </div>
      <div class="home-links4" :class="{ active: $route.path === '/changes' }">
        <img class="contract-edit-icon1" loading="lazy" alt="" :src="contractEdit" />
        <router-link to="/changes" class="contract1">{{ $t('Changes') }}</router-link>
      </div>
      <div class="home-links4" :class="{ active: $route.path === '/showroom' }">
        <img class="contract-edit-icon1" loading="lazy" alt="" :src="contractEdit" />
        <router-link to="/showroom" class="contract1">{{ $t('Showroom') }}</router-link>
      </div>
      <div class="home-links4" :class="{ active: $route.path === '/showroom' }">
        <img class="contract-edit-icon1" loading="lazy" alt="" :src="contractEdit" />
        <router-link to="/order" class="contract1">{{ $t('Order') }}</router-link>
      </div>
      <div class="home-links4" :class="{ active: $route.path === '/sms' }">
        <img class="contract-edit-icon1" loading="lazy" alt="" :src="contractEdit" />
        <router-link to="/sms" class="contract1">{{ $t('SMS') }}</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
  props: {
    image: { type: String },
    home: { type: String },
    accountBalanceWallet: { type: String },
    creditCardClock: { type: String },
    locationCity: { type: String },
    contractEdit: { type: String },
    homeLinksTextDecoration: { type: String },
  },
  computed: {
    debtStyle() {
      return {
        textDecoration: this.homeLinksTextDecoration,
      };
    },
  },
});
</script>
<style scoped>
.image-icon1 {
  height: 40px;
  width: 40px;
  position: relative;
  object-fit: cover;
  min-height: 40px;
}
.hakimi-towers1 {
  text-decoration: none;
  position: relative;
  line-height: 40px;
  font-weight: 600;
  color: inherit;
}
.logo1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-top: 1rem;
  /* padding: var(--padding-5xs) var(--padding-25xl) var(--padding-5xs) 0px; */
  gap: var(--gap-sm);
}
.divider {
  align-self: stretch;
  height: 1px;
  position: relative;
  border-top: 1px dashed var(--grayscale-300);
  box-sizing: border-box;
}
.home-icon1 {
  height: 20px;
  width: 20px;
  position: relative;
}
.main-page3 {
  text-decoration: none;
  position: relative;
  letter-spacing: -0.01em;
  line-height: 22px;
  font-weight: 500;
  color: inherit;
  display: inline-block;
  min-width: 78px;
}
.sidebar3 a{
  text-decoration: none;
  color:inherit;
}
.home-links {
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-119xl) var(--padding-3xs) var(--padding-3xs);
  gap: var(--gap-3xs);
}
.account-balance-wallet-icon1 {
  height: 20px;
  width: 20px;
  position: relative;
}
.payment5 {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 22px;
  font-weight: 500;
  display: inline-block;
  min-width: 66px;
}
.active{
  background-color: var(--text-text-white);
  border: 1px solid var(--line-container-line);
  color: var(--text-text-black);

}
.home-links1 {
  box-shadow: var(--shadow-xs);
  border-radius: var(--br-5xs);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-130xl) var(--padding-5xs) var(--padding-4xs);
  gap: var(--gap-3xs);
}
.credit-card-clock-icon1 {
  height: 20px;
  width: 20px;
  position: relative;
}
.debt1 {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 22px;
  font-weight: 500;
  display: inline-block;
  min-width: 36px;
}
.home-links2 {
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-161xl) var(--padding-3xs) var(--padding-3xs);
  gap: var(--gap-3xs);
}
.location-city-icon1 {
  height: 20px;
  width: 20px;
  position: relative;
}
.tjm1 {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 22px;
  font-weight: 500;
  display: inline-block;
  min-width: 32px;
}
.home-links3 {
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-165xl) var(--padding-3xs) var(--padding-3xs);
  gap: var(--gap-3xs);
}
.contract-edit-icon1 {
  height: 20px;
  width: 20px;
  position: relative;
}
.contract1 {
  position: relative;
  letter-spacing: -0.01em;
  line-height: 22px;
  font-weight: 500;
  display: inline-block;
  min-width: 66px;
}
.home-links4 {
  border-radius: var(--br-5xs);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-131xl) var(--padding-3xs) var(--padding-3xs);
  gap: var(--gap-3xs);
}
.sidebar3 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-12xs) 0px 0px;
  gap: var(--gap-7xs);
  font-size: var(--body-large-regular-size);
  color: var(--color-cadetblue-100);
  text-decoration: none;
  /* font-family: var(--heading-h6-semibold); */
}
.sidebar2 {
  background-color: var(--background-background-gray);
  width: 268px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-8xs) 0px var(--padding-7xs);
  box-sizing: border-box;
  gap: var(--gap-base);
  text-align: left;
  font-size: var(--font-size-5xl);
  color: var(--text-text-black);
  height:100%;
  /* font-family: var(--font-sf-compact-display); */
}

@media screen and (max-width: 800px) {
  .hakimi-towers1 {
    font-size: var(--font-size-lgi);
    line-height: 32px;
  }

  .logo1 {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }

  .home-links {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }

  .home-links1 {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }

  .home-links2 {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }

  .home-links3 {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }

  .home-links4 {
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
}
</style>
