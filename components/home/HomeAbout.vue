<template>
   <div class="about">
      <div class="container">
        <div class="row gap-5 align-items-center justify-content-center">
          <div class="col-12 col-xl-4 col-lg-4">
            <div class="image first">
              <img
                src="~/assets/images/about.png"
                class="img-fluid"
                loading="lazy"
                alt="about-section"
              />
            </div>
          </div>
          <div class="col-12 col-xl-6 col-lg-6">
            <div class="text">
              <span class="span headFont">{{ $t("AL KATHIRI MOTORS") }}</span>
              <h2 class="fw-bolder headFont" :data-about="$t('about us')">
                {{ $t("how we are") }}
              </h2>
              <ClientOnly style="background-color: transparent">
                <p
                  class="mt-4"
                  v-html="store.generalData?.why_alkathiri_cars"
                ></p>
              </ClientOnly>
              <div
                class="btn d-flex justify-content-center justify-content-xl-end justify-content-lg-end"
              >
                <nuxt-link :to="localePath('/about')">
                  <button
                    class="custom-btn"
                    style="box-shadow: none; padding: 10px 40px !important"
                  >
                    <span>{{ $t("read more") }}</span>
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
import {useGeneralStore} from '~/stores/general'
let store = useGeneralStore();
const localePath = useLocalePath();
</script>
<style lang="">
    
</style>