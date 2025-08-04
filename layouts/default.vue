<template>
  <div>
    <LayoutNav></LayoutNav>

    <a id="fixedIconId" class="fixedIcon" target="_blank" :href="`https://wa.me/${store.generalData?.whatsapp}`">
      <img class="fixedIconImg" aria-label="whatsAppIcon" src="~/assets/images/Icon-awesome-whatsapp.svg" alt="whatsapp" />
    </a>
    <slot />
    <LayoutFooter></LayoutFooter>
    <TermsModal :general="store.generalData" :pending="store.pendingGeneral" />
    <privacyModal :general="store.generalData" :pending="store.pendingGeneral" />
    
  </div>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n();
import {useGeneralStore} from '~/stores/general'
let store = useGeneralStore();

const updateLang = () => {
  if (locale.value == "ar") {
    setLocale("ar");
    useHead({
      htmlAttrs: {
        lang: 'ar',
        dir: 'rtl',
      }
    });
  } else if (locale.value == "en") {
    useHead({
      htmlAttrs: {
        lang: 'en',
        dir: 'ltr',
      }
    });
    setLocale("en");
  }
  if (process.client) {
    const navItems = document.querySelectorAll(".nav-link");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        navbarCollapse.classList.remove("show");
        document.querySelector(".navbar-toggler").classList.add("collapsed");
      });
    });
  }
};
const cleanUpUnwantedScripts = () => {
  const unwantedScripts = document.querySelectorAll('script[data-clean="true"]');
  unwantedScripts.forEach(script => {
    script.parentNode.removeChild(script);
  });

}


onMounted(() => {
  updateLang();
});
</script>

<style lang="scss" scoped>
.navbar-toggler .icon-bar {
  display: block;
  width: 22px;
  height: 2px;
  margin-top: 5px;
  background-color: #000;
  margin-bottom: 4px;
}

.navbar-toggler.collapsed .icon-bar {
  background-color: #555;
}

.navbar-toggler.collapsed span.icon-bar:nth-child(2) {
  -webkit-transform: translateY(0) rotate(0);
  transform: translateY(0) rotate(0);
}

.navbar-toggler.collapsed span.icon-bar:nth-child(3) {
  opacity: 1;
}

.navbar-toggler.collapsed span.icon-bar:nth-child(4) {
  -webkit-transform: translateY(0) rotate(0);
  transform: translateY(0) rotate(0);
}

.navbar-toggler span.icon-bar {
  -webkit-transition: all 300ms;
  transition: all 300ms;
}

.navbar-toggler span.icon-bar:nth-child(2) {
  -webkit-transform: translateY(301%) rotate(40deg);
  transform: translateY(350%) rotate(40deg);
}

.navbar-toggler span.icon-bar:nth-child(3) {
  opacity: 0;
}

.navbar-toggler span.icon-bar:nth-child(4) {
  -webkit-transform: translateY(-301%) rotate(-45deg);
  transform: translateY(-330%) rotate(-45deg);
}
</style>
