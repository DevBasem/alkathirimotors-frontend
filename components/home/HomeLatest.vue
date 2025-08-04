<template>
     <div class="container latest">
      <div class="head">
        <h3 class="fw-bolder headFont" :data-latest="$t('JUST PUBLISHED')">
          {{ $t("latest vehicles") }}
        </h3>
        <div class="see d-flex align-items-center gap-1">
          <nuxt-link :to="localePath('/cars')">
            <span style="color: #1b395f">{{ $t("see all") }} </span>
          </nuxt-link>
          <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <swiper
        :spaceBetween="10"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :breakpoints="{
          '640': {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        class="mySwiper"
      >
        <swiper-slide
          v-for="car in storeHome.latestArray"
          @click="goToCarPage(car.id, car.model_id, car.name)"
          style="cursor: pointer; min-height: 330px; position: relative"
          class=""
        >
          <div class="new-car-card">
            <div class="image w-100">
              <img
                class="lazyload"
                :data-src="car.main_image"
                src="~/assets/images/placeholder.png"
                :alt="car?.name"
                loading="lazy"
              />
              <!-- <img :src="car.main_image" class="w-100" alt=""> -->
            </div>
            <span>{{ car.name }}</span>
          </div>
        </swiper-slide>
      </swiper>
      <div v-if="storeHome.spinner_latest" class="text-center">
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
</template>
<script setup>
import { useHomeStore } from "~/stores/home";
let storeHome = useHomeStore();
const router = useRouter();
const localePath = useLocalePath();
const goToCarPage = (carid, modelcarid, carname) => {
  const queryParams = {
    id: carid,
    model_id: modelcarid,
    name: carname,
  };
  const url = "/car";

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