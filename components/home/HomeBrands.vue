<template>
  <div class="brands">
      <div class="container">
        <div class="head">
          <h3
            class="fw-bolder headFont"
            :data-brands="$t('AUTHORIZED DISTRIBUTOR')"
          >
            {{ $t("car brands") }}
          </h3>
        </div>
        <div class="container">
          <div
            class="boxes row d-flex justify-content-center gap-3 align-items-center"
          >
            <div
              v-for="box in storeHome.brandArray"
              @click="goToBrandPageByIdAndName(box.id, box.name)"
              class="box col-5 col-xl-1 col-lg-2"
              style="cursor: pointer"
            >
              <img
                class="lazyload"
                :data-src="box.image"
                src="~/assets/images/placeholder.png"
                loading="lazy"
                :alt="box.name"
              />
              <span>{{ box.name }}</span>
            </div>
          </div>
        </div>
        <div v-if="storeHome.spinner_brands" class="text-center">
          <video
            autoplay
            loop
            muted
            playsinline
            src="~/assets/images/main-loader.webm"
            alt=""
            style="width: 100px; height: 100px"
          />
        </div>
      </div>
    </div>
</template>
<script setup>
import { useHomeStore } from "~/stores/home";
let storeHome = useHomeStore();
const router = useRouter();
const localePath = useLocalePath();
const goToBrandPageByIdAndName = (id, name) => {
  const queryParams = {
    id: id,
    name: name,
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