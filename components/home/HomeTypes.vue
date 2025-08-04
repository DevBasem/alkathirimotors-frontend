<template>
  <div class="container main-group my-5">
      <div class="row gap-3 justify-content-center">
        <div
          class="col-12 col-xl-3 col-lg-4 box d-flex align-items-center justify-content-center gap-2"
          @click="goToBrandPageByType('sedan')"
          style="cursor: pointer; width: 350px"
        >
          <img src="~/assets/images/sedan.png" loading="lazy" alt="sedan" />
          <span class="mt-3">{{ $t("sedan") }}</span>
        </div>
        <div
          class="col-12 col-xl-3 col-lg-4 box d-flex align-items-center justify-content-center gap-2"
          @click="goToBrandPageByType('multi')"
          style="cursor: pointer; width: 350px"
        >
          <img src="~/assets/images/suv.png" loading="lazy" alt="sedan" />
          <span class="mt-3">{{ $t("multi") }}</span>
        </div>
        <div
          class="col-12 col-xl-3 col-lg-4 box d-flex align-items-center justify-content-center gap-2"
          @click="goToBrandPageByType('commercial')"
          style="cursor: pointer; width: 350px"
        >
          <img
            src="~/assets/images/commercial.png"
            loading="lazy"
            alt="sedan"
          />
          <span class="mt-3">{{ $t("commercial") }}</span>
        </div>
      </div>
    </div>
</template>
<script setup>
 const localePath = useLocalePath();
const router = useRouter();
 const goToBrandPageByType = (type) => {
  const queryParams = {
    type: type,
  };
  const url = "/cars";

  const updatedRoute = {
    path: url,
    query: {
      ...queryParams,
    },
  };

  const fullLocalePath = localePath(updatedRoute);
  router.push(fullLocalePath);
};
</script>
<style lang="">
    
</style>