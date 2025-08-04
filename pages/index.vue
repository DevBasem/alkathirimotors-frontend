<template>
  <div>
    <slider />

    <HomeSearch></HomeSearch>

    <HomeTypes></HomeTypes>

    <HomeAbout></HomeAbout>

    <HomeWhy></HomeWhy>

    <HomeBrands></HomeBrands>

    <HomeLatest></HomeLatest>

    <HomeNews></HomeNews>
    <HomeSubscribe></HomeSubscribe>
  </div>
</template>

<script setup>
import { useGeneralStore } from "~/stores/general";
import { useHomeStore } from "~/stores/home";
let store = useGeneralStore();
let storeHome = useHomeStore();
let value = ref('10');
onMounted(() => {
  store.fetchGeneral();
  storeHome.fetchBrands();
  storeHome.fetchCars();
  storeHome.fetchNews();
});
</script>

<style lang="scss">
.landing {
  z-index: -1 !important;
  height: fit-content !important;
  display: none;

  &.active {
    display: block;
  }
}
</style>
