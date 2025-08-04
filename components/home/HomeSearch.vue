<template>
   <div
      class="searchBar d-flex align-items-center justify-content-center justify-content-xl-center"
      style=""
    >
      <div class="main">
     
        <div class="selectdiv">
            <select aria-label="State" v-model="mainObj.type">
              <option :value="null" disabled>
                {{ $t("select the vehicle type") }}
              </option>
              <option :value="'sedan'">{{ $t("sedan") }}</option>
              <option :value="'commercial'">{{ $t("commercial") }}</option>
              <option :value="'multi'">{{ $t("multi") }}</option>
            </select>
        </div>
     
        <Dropdown
          v-model="mainObj.id"
          :options="store.brandsWithModles"
          filter
          optionLabel="name"
          :placeholder="$t('choose brand')"
          class=""
        >
          <template #option="slotProps">
            <div class="flex align-items-center">
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Dropdown>
    

        <Dropdown
          v-model="mainObj.model"
          :options="mainObj.id ? brands_models[0].parent_models : ''"
          filter
          optionLabel="name"
          :placeholder="$t('choose brand')"
          class=""
        >
          <template #option="slotProps">
            <div v-if="slotProps.option" class="flex align-items-center">
              <div>{{ slotProps.option.name }}</div>
            </div>
            <span v-else></span>
          </template>
        </Dropdown>
        <button
          type="button"
          class="custom-btn"
          style="padding:10px 60px !important;"
          :disabled="mainObj.id == null"
          @click="goToBrandPageSearch()"
        >
          {{ $t("search") }}
        </button>
      </div>
    </div>
</template>
<script setup>
import {useGeneralStore} from '~/stores/general'
let store = useGeneralStore();
const router = useRouter();
const localePath = useLocalePath();

 let mainObj = ref({
      id: null,
      model: null,
      type: null,
    });
    const goToBrandPageSearch = () => {
      // const url = currentLang.value + "/cars";
      // router.push({ path: url, query: mainObj.value });
      const queryParams = {
        id: mainObj.value.id.id,
        model: mainObj.value.model.id,
        type: mainObj.value.type,
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

    const brands_models = computed(() => {
      return store.brandsWithModles.filter((ele) => {
        return ele.id == mainObj.value.id.id;
      });
    });
</script>
<style lang="">
    
</style>