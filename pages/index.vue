<template>
  <div>
    <Lazyslider />

    <LazyHomeSearch></LazyHomeSearch>

    <LazyHomeTypes></LazyHomeTypes>

    <LazyHomeAbout></LazyHomeAbout>

    <LazyHomeWhy></LazyHomeWhy>

    <LazyHomeBrands></LazyHomeBrands>

    <LazyHomeLatest></LazyHomeLatest>

    <LazyHomeNews></LazyHomeNews>
    <LazyHomeSubscribe></LazyHomeSubscribe>
  </div>
</template>

<script setup>
import { useGeneralStore } from "~/stores/general";
import { useHomeStore } from "~/stores/home";
let store = useGeneralStore();
let storeHome = useHomeStore();
let value = ref("10");
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
