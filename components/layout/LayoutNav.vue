<template>
     <nav class="navbar navbar-expand-lg active" style="padding: 20px 30px">
      <div class="container">
        <nuxt-link :to="localePath('/')">
          <img src="~/assets/images/logo.svg" alt="الكثيري للسيارات" class="navbar-brand" style="width: 220px;" />
        </nuxt-link>
        <button style="box-shadow: none" class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul id="navbar-tabs" class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <nuxt-link :to="localePath('/')" class="nav-link" aria-current="page">{{ $t("home") }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/brands')" class="nav-link">{{
                $t("cars")
              }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/offers')" class="nav-link">
                {{ $t("offers") }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/contact')" class="nav-link">
                {{ $t("contact us") }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/about')" class="nav-link">
                {{ $t("about us") }}</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/careers')" class="nav-link">
                {{ $t("careers") }}
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link :to="localePath('/services')" class="nav-link">
                {{ $t("accessories") }}</nuxt-link>
            </li>
            <li class="nav-item" id="nav-item" style="">
              <span class="">{{ $t("new") }}</span>
              <nuxt-link :to="localePath('/unavailable-car')" class="nav-link">
                {{ $t("unavailable car") }}
              </nuxt-link>
            </li>
          </ul>
          <div class="mainBook d-flex align-items-center text-center gap-5">
            <div class="icons d-flex align-items-center gap-3">
              <img v-if="locale == 'en'" @click="changeLang()" src="~/assets/images/ar.svg" alt="en" class="nav-link" />
              <img v-if="locale == 'ar'" @click="changeLang()" src="~/assets/images/en.svg" alt="ar" class="nav-link" />
         
              <i class="fa-solid fa-magnifying-glass search-icon" :class="{ active: activeSearch }"
                @click="activeSearch = !activeSearch"></i>
              <i class="fa-solid fa-xmark close-search" :class="{ active: activeSearch }"
                @click="activeSearch = !activeSearch"></i>
            </div>
            <div class="book nav-link" style="">
              <nuxt-link :to="localePath('/maintenance')">
                <button id="" class="custom-btn">
                {{ $t('book For Maintenance') }}
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <div class="searchBarByName" :class="{ active: activeSearch }">
        <input @keyup.enter="goToBrandPageByName(), (activeSearch = false)" type="text" v-model="searchWord"
          :placeholder="$t('Find your car...')" />
        <i @click="goToBrandPageByName(), (activeSearch = false)" class="fa-solid fa-magnifying-glass"></i>
      </div>
    </nav>
</template>
<script setup>
const { locales, locale, setLocale } = useI18n();

const router = useRouter();
const route = useRoute();
let activeSearch = ref(false);
let searchWord = ref("");
const localePath = useLocalePath();

const bus = eventBus;
const callPageMethod = (arg) => {
  eventBus.callPageMethod(arg);
};
const goToBrandPageByName = () => {
  if (searchWord.value) {
    const queryParams = {
      name: searchWord.value,
    };
    const url = currentLang.value + "/cars";
    router.push({ path: `/${url}`, query: queryParams });
    callPageMethod(searchWord.value);
    searchWord.value = "";
  }
};

const changeLang = async () => {
  locale.value = locale.value === "en" ? "ar" : "en";
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
  generalFunc();


  const query = useRoute().query;
  await navigateTo(
    localePath({ path: useRoute().path, query: query }, undefined, {
      preserveQuery: true,
    })
  );
};
</script>
<style lang="">
    
</style>