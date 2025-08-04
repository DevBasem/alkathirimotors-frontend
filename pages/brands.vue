<template>
  <div>
    <div class="brands-container pt-4" style="">
      <swiper
        :slidesPerView="3"
        :dir="getSwiperDirection()"
        :spaceBetween="10"
        :loop="true"
        :breakpoints="{
          '500': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }"
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        class="mySwiper container"
      >
        <swiper-slide class="" v-for="(box, index) in brandArray">
          <div
            class="box"
            :class="{ active: changeActive == box.id, disabled: isLoading }"
            @click="
            (store.state.changeActive = box.id),
              (changeActive = box.id),
                (store.state.carTypeActive = 1),
                (carTypeActive = 1),
                (store.state.carType = 'sedan'),
                (carType = 'sedan'),
                (spinner = true),
                (changeModelActive = null),
                carLatestFunc()
            "
          >
            <img :src="box.image" alt="" class="w-50" />
            <span>{{ box.name }} </span>
          </div>
        </swiper-slide>
      </swiper>

      <!-- <swiper v-if="brands_models_cars[0]" :slidesPerView="3" :dir="getSwiperDirection()" :spaceBetween="10" :loop="true" :breakpoints="{
        '500': {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        '768': {
          slidesPerView: 5,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 8,
          spaceBetween: 20,
        },
      }" :modules="modules" class="mySwiper container">
        <swiper-slide class="" v-for="box, index in brands_models_cars[0].models">
          <div class="box" :class="{ 'active': changeModelActive == box.id , 'disabled': isLoading }"  @click="changeModelActive = box.id , spinner = true ,  carLatestFunc()">
            <span>{{ box.name }}</span>
            
          </div>
        </swiper-slide>



      </swiper> -->

      <swiper
        :slidesPerView="3"
        :dir="getSwiperDirection()"
        :spaceBetween="10"
        :loop="true"
        :breakpoints="{
          '500': {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          '1024': {
            slidesPerView: 8,
            spaceBetween: 20,
          },
        }"
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        class="mySwiper container"
      >
        <swiper-slide class="">
          <div
            class="box text-center"
            :class="{ active: carTypeActive == 1 }"
            @click="(carType = 'sedan'), (store.state.carTypeActive = 1), (store.state.carType = 'sedan') , (carTypeActive = 1), carLatestFunc()"
          >
            <span> {{ $t("sedan") }} </span>
          </div>
        </swiper-slide>
        <swiper-slide class="">
          <div
            class="box text-center"
            :class="{ active: carTypeActive == 2 }"
            @click="
              (carType = 'commercial'), (store.state.carTypeActive = 2) , (store.state.carType = 'commercial') ,  (carTypeActive = 2), carLatestFunc()
            "
          >
            <span> {{ $t("commercial") }} </span>
          </div>
        </swiper-slide>
        <swiper-slide class="">
          <div
            class="box text-center"
            :class="{ active: carTypeActive == 3 }"
            @click="(carType = 'multi'), (store.state.carTypeActive = 3), (store.state.carType = 'multi') , (carTypeActive = 3), carLatestFunc()"
          >
            <span> {{ $t("multi") }} </span>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <loader v-if="pending"></loader>
    <div class="container cars-related-with-brands" style="min-height: 60vh">
      <div
        class="row justify-content-center justify-content-xl-start justify-content-lg-start"
      >
        <div
          v-if="spinner"
          class="d-flex align-items-center justify-content-center"
          style="min-height: 100vh"
        >
          <div role="status">
            <video
              autoplay
              loop
              muted
              playsinline
              src="~/assets/images/main-loader.webm"
              alt=""
              style="width: 150px; height: 150px"
            />
          </div>
        </div>
        <div
          v-if="latestArray"
          class="col-12 col-xl-3 col-lg-3 col-md-4 col-sm-6 my-4"
          v-for="car in latestArray"
          @click="goToCarPage(car.id, car.model_id, car.name, car.year)"
        >
          <div class="new-car-card">
            <div
              class="image w-100"
            >
              <img class="lazyload" :data-src="car.model_image"  src="~/assets/images/placeholder.png" loading="lazy"  alt="">
            </div>
            <span>{{ car.model_name }} {{ car.year }}</span>
          </div>
        </div>
        <div
          v-if="checkSpan"
          class="d-flex align-items-center justify-content-center"
          style="height: 100vh"
        >
          <span class="fw-bold fs-2" style="color: #1b395f">{{
            $t("There are no cars")
          }}</span>
        </div>
      </div>

      <div
        v-if="latestArray.length >= 1"
        class="d-flex align-items-center justify-content-center mt-5"
        style=""
      >
        <button
          @click="goToBrandPageById()"
          class="d-flex align-items-center gap-2 px-5 custom-btn"
        >
          {{ $t("explore more") }}
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";
// import { Autoplay, Pagination, Navigation } from "swiper";
// import { Swiper, SwiperSlide } from 'swiper/vue';
import "swiper/css";
import { useStore } from "~/stores";
import axios from "axios";
export default {
  // components: {
    //   Swiper,
  //   SwiperSlide,
  // },
  async setup() {
    let store = useStore;
    const localePath = useLocalePath();
    const { locale } = useI18n();
    let lang = ref(locale);
    let url = getUrl();
    let router = useRouter();
    let brandArray = ref([]);
    let latestArray = ref([]);
    let changeActive = ref(store.state.changeActive);
    let changeModelActive = ref(null);
    let spinner = ref(false);
    let checkSpan = ref(false);
    let checkMain = ref([changeActive.value]);

    let isLoading = ref(false);
    let carType = ref(store.state.carType ? store.state.carType : 'sedan');
    let carTypeActive = ref(store.state.carTypeActive ? store.state.carTypeActive : 1);

    // const changeActiveFunc = (id) => {
    //   checkMain.value[0] = id;
    //   spinner.value = true;
    // };
    let pending = ref(true);
    const brandsFunc = async () => {
      pending.value = true;
      let brands = await axios.get(`${url}/brands`, {
        headers: {
          "Content-Language": `${lang.value}`,
        },
      });

      if (brands.status == 200) {
        pending.value = false;
      }
      // brandArray.value = store.state.brandArray;
      brandArray.value = brands.data.data;
      if(store.state.changeActive){
        changeActive.value = store.state.changeActive;
      } else{
        changeActive.value = brands.data.data[0].id;
        // store.state.brandArray = brands.data.data;
        store.state.changeActive = changeActive.value;
      }

      // console.log(changeActive.value);

      carLatestFunc();
    };

    let model_brands = ref([]);
    // const brand_model = async () => {
    //   let models = await axios.get(`${url}/make-appointment-form-data`, {
    //     headers: {
    //       "Content-Language": `${lang.value}`,
    //     },
    //   });
    //   models.data.brands.filter((ele) => {
    //     return ele.id != 3;
    //   });
    //   model_brands.value = models.data.brands;
    // };

    // const brands_models_cars = computed(() => {
    //   return model_brands.value.filter((ele) => {
    //     return ele.id == changeActive.value;
    //   });
    // });
    brandsFunc();

    const carLatestFunc = async () => {
      checkSpan.value = false;
      spinner.value = true;
      isLoading.value = true;
      latestArray.value = [];
      let latest = await axios.get(`${url}/cars-basedOn-model`, {
        params: {
          brands: [changeActive.value],
          //models: [changeModelActive.value],
          type: carType.value,
        },
        headers: {
          "Content-Language": `${lang.value}`,
        },
      });

      if (latest.status == 200) {
        spinner.value = false;
        isLoading.value = false;
        // if (process.client) {
        //   let favGet = JSON.parse(sessionStorage.getItem('thefav')) ? JSON.parse(sessionStorage.getItem('thefav')) : [];
        //   console.log(favGet);
        //   for (let i = 0; i < latest.data.data.length; i++) {
        //     latest.data.data[i].is_in_favorite = favGet.find((element) => element.id == latest.data.data[i].id) != undefined;
        //   }
        // }

        latestArray.value = latest.data;
        if (latest.data.length < 1) {
          checkSpan.value = true;
        } else {
          checkSpan.value = false;
        }
      }
    };

    const goToBrandPageById = () => {
      let queryParams = {
        id: changeActive.value,
        type: carType.value ? carType.value : null,
        //model: changeModelActive.value ? changeModelActive.value : null
      };
      // if(changeModelActive.value){
      //   queryParams = {
      //     id: changeActive.value,
      //     model:changeModelActive.value
      //   }
      // }
      const url = lang.value + "/cars";
      router.push({ path: `/${url}`, query: queryParams });
    };
    const goToCarPage = (id, model_id, name, year) => {
      const queryParams = {
        id: id,
        model_id: model_id,
        name: name,
        year: year,
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

    let addedList = ref("added to wishlist");
    let success = ref("success");
    let removedList = ref("removed from wishlist");
    if (lang.value == "ar") {
      addedList.value = "تم الاضافة الي قائمة المفضلات";
      success.value = "نجاح";
      removedList.value = "تم الحذف من قائمة المفضلات";
    }
    let fav = ref([]);
    let favState = ref([]);

    useHead({
      title:
        lang.value == "ar"
          ? "السيارات / الكثيري للسيارات"
          : "alkathiri motors / cars",
    });
    const getSwiperDirection = () => {
      if (lang.value === "ar") {
        return "rtl"; // Set the direction to RTL
      } else {
        return "ltr"; // Set the direction to LTR
      }
    };
    onMounted(() => {
      // carLatestFunc();
      // brand_model();
    });

    // watch([() => store.errors, () => store.loading , ()=> store.active], ([newVal, val2 , act]) => {
    //   errors.value = newVal;
    //   loading.value = val2;
    //   active.value = act;
    // });

    return {
      // modules: [Autoplay, Pagination, Navigation],
      goToBrandPageById,
      pending,
      brandArray,
      latestArray,
      checkMain,
      getSwiperDirection,
      changeActive,
      carLatestFunc,
      // changeActiveFunc,
      spinner,
      goToCarPage,
      // addToFav,
      checkSpan,
      // brands_models_cars,
      changeModelActive,
      isLoading,
      carType,
      store,
      carTypeActive,
    };
  },
};
</script>
