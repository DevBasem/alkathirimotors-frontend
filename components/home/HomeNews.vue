<template>
   <div v-if="storeHome.newsArray.length > 0" class="news">
      <div class="head">
        <h3 class="fw-bolder headFont" :data-news="$t('BE AWARE OF OUR')">
          {{ $t("latest news") }}
        </h3>
      </div>
      <!-- :looped-slides="true"
      :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }" -->
      <swiper
        :spaceBetween="50"
        :dir="getSwiperDirection()"
        :centeredSlides="true"
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
            slidesPerView: 2.7,
            spaceBetween: 100,
          },
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        class="mySwiper latestNews"
      >
        <swiper-slide
          v-for="box in storeHome.newsArray"
          class="box"
          @click="goToNewsPage(box.title, box.id)"
          style="cursor: pointer"
        >
          <div class="image">
            <img
              class="lazyload"
              :data-src="box.cover_image"
              src="~/assets/images/placeholder.png"
              loading="lazy"
              :alt="box.title"
            />
          </div>
          <div class="text">
            <h3>{{ box.title }}</h3>

            <client-only>
              <p v-html="box.description.substring(0, 180)"></p>
            </client-only>

            <div class="detail" style="white-space: normal">
              <div class="tags">
                <div class="tag">
                  <i class="fa-solid fa-tag"></i>
                  <span>{{ box.tags }}</span>
                </div>
                <div class="tag">
                  <i class="fa-regular fa-clock"></i>
                  <span>{{ box.created_at }}</span>
                </div>
              </div>
              <div class="read d-flex align-items-center gap-1">
                <span class="fw-bold">{{ $t("read more") }}</span>
                <i class="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>
<script setup>
import { useHomeStore } from "~/stores/home";
let storeHome = useHomeStore();
const router = useRouter();
const {locale } = useI18n();
const localePath = useLocalePath();
const getSwiperDirection = () => {
  if (locale.value === "ar") {
    return "rtl"; // Set the direction to RTL
  } else {
    return "ltr"; // Set the direction to LTR
  }
};
const goToNewsPage = (name, id) => {
  const queryParams = {
    name: name,
    id: id,
  };

  const url = "/new";

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