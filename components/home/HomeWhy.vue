<template>
   <div class="why-choose">
      <div class="head">
        <h3 class="fw-bolder my-5 headFont" :data-why="$t('AL KATHIRI MOTORS')">
          {{ $t("why choose us") }}
        </h3>
      </div>
      <div class="main mb-5 position-relative">
        <div class="boxes row d-flex justify-content-center gap-5">
          <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12">
            <img
              src="~/assets/images/box1.svg"
              loading="lazy"
              alt="why-choose"
            />
            <div class="text">
              <ClientOnly>
                <p v-html="store.generalData?.why_alkathiri_cars_card_1"></p>
              </ClientOnly>
            </div>
            <div v-if="store.generalSpinner" class="text-center">
              <!-- <div class="spinner-border" role="status"></div> -->
              <video
                autoplay
                loop
                muted
                playsinline
                src="~/assets/images/main-loader.webm"
                alt=""
                style="width: 70px; height: 70px"
              />
            </div>
          </div>
          <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12">
            <img
              src="~/assets/images/box2.svg"
              loading="lazy"
              alt="why-choose"
            />
            <div class="text">
              <ClientOnly>
                <p v-html="store.generalData?.why_alkathiri_cars_card_2"></p>
              </ClientOnly>
            </div>
            <div v-if="store.generalSpinner" class="text-center">
              <!-- <div class="spinner-border" role="status"></div> -->
              <video
                autoplay
                loop
                muted
                playsinline
                src="~/assets/images/main-loader.webm"
                alt=""
                style="width: 70px; height: 70px"
              />
            </div>
          </div>
          <div class="box col-xl-3 col-lg-3 col-md-5 col-sm-12">
            <img
              src="~/assets/images/box3.svg"
              loading="lazy"
              alt="why-choose"
            />
            <div class="text">
              <ClientOnly>
                <p v-html="store.generalData?.why_alkathiri_cars_card_3"></p>
              </ClientOnly>
            </div>
            <div v-if="store.generalSpinner" class="text-center">
              <!-- <div class="spinner-border" role="status"></div> -->
              <video
                autoplay
                loop
                muted
                playsinline
                src="~/assets/images/main-loader.webm"
                alt=""
                style="width: 70px; height: 70px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
import {useGeneralStore} from '~/stores/general'
let store = useGeneralStore();
</script>
<style lang="">
    
</style>