<template>
  <div class="footer" id="mainFooter" style="min-height: 50vh">

<div class="mainboxes position-relative row gap-5 justify-content-center align-items-center">
  <div class="box col-xl-2 col-lg-4 col-md-6 col-sm-12">
    <img src="~/assets/images/footer2.png" alt="الكثيري للسيارات" />
  </div>
  <div class="box col-xl-2 col-lg-4 col-md-6 col-sm-12">
    <h6 style="color: hsla(0,0%,50%,10.705);">{{ $t("Important Links") }}</h6>
    <div class="links">
      <nuxt-link :to="localePath('/')">
        <span>{{ $t("home") }}</span>
      </nuxt-link>
      <nuxt-link :to="localePath('/brands')">
        <span>{{ $t("cars") }}</span>
      </nuxt-link>

      <nuxt-link :to="localePath('/offers')">
        <span>{{ $t("offers") }}</span>
      </nuxt-link>
      <nuxt-link :to="localePath('/brands')">
        <span>{{ $t("purchase") }}</span>
      </nuxt-link>
      <nuxt-link :to="localePath('/faQ')">
        <span>{{ $t("faq") }}</span>
      </nuxt-link>
    </div>
  </div>
  <div class="box col-xl-2 col-lg-4 col-md-6 col-sm-12">
    <div class="links">
      <nuxt-link :to="localePath('/services')">
        <span>{{ $t("accessories") }}</span>
      </nuxt-link>
      <nuxt-link :to="localePath('/accounts')">
        <span>{{ $t("accounts") }}</span>
      </nuxt-link>
      <nuxt-link :to="localePath('/contact')">
        <span>{{ $t("contact us") }}</span>
      </nuxt-link>

      <nuxt-link :to="localePath('/news')">
        <span>{{ $t("news") }}</span>
      </nuxt-link>
      <nuxt-link :to="localePath('/careers')">
        <span>{{ $t("careers") }}</span>
      </nuxt-link>
      <span type="button" data-bs-toggle="modal" data-bs-target="#termsModal">{{ $t("Term And Conditions") }}</span>
      <span type="button" data-bs-toggle="modal" data-bs-target="#privacyModal">{{ $t("Privacy Policy") }}</span>
    </div>
  </div>
  <div class="box theicons col-xl-3 col-lg-4 col-md-6 col-sm-12">
    <div class="d-flex flex-column align-items-center gap-2 mb-2">
      <span class="text-light">{{ $t('phone') }}</span>
      <a v-if="store.generalData?.phone" :href="`tel:${store.generalData?.phone}`"> {{ store.generalData?.phone }} </a>
    </div>
    <div class="icons">
      <a target="_blank" class="iconHref" aria-label="iconHref" :href="store.generalData?.facebook_url">
        <i class="fa-brands fa-facebook-f"></i>
      </a>
      <a target="_blank" class="iconHref" aria-label="iconHref" :href="store.generalData?.snapchat">
        <i class="fa-brands fa-snapchat"></i>
      </a>
      <a target="_blank" class="iconHref" aria-label="iconHref" :href="store.generalData?.instagram_url">
        <i class="fa-brands fa-instagram"></i>
      </a>
      <a target="_blank" class="iconHref" aria-label="iconHref" :href="store.generalData?.twitter_url">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="27" width="27" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
      </a>
    </div>
    <div v-if="pending" class="spinner-border spinner-border-sm" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div class="book mb-4">
      <nuxt-link :to="localePath('/maintenance')" style="white-space: normal;">
        <span class="fw-bold" style="white-space: normal;">{{ $t("book For Maintenance") }}</span>
      </nuxt-link>
    </div>
  </div>
</div>
<div class="text">
  <span>&copy; {{ $t("AL KATHIRI MOTORS") }},
    {{ $t("All Rights Reserved") }}</span>
  <p>
    <span>{{ $t("Developed By") }}</span>
    <a target="_blank" href="https://webstdy.com/ar?utm_source=alkathiri-foorter&utm_medium=referral">
      <img src="~/assets/images/logo-footer.svg" alt="webstdy" />
    </a>
  </p>
</div>
<i @click="scrollUp()" class="fa-solid fa-arrow-up" id="arrow-up"></i>
</div>
</template>
<script setup>
import {useGeneralStore} from '~/stores/general'
let store = useGeneralStore();
const localePath = useLocalePath();
const scrollUp = () => {
  if (process.client) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
};

</script>
<style lang="">
    
</style>