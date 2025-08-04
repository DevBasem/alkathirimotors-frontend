<template>
    <div style="min-height: 100vh;">
         <div class="container thelatestcar" style="margin-top: 150px;">
           <div class="thebox">
            <img class="bigpic " :src="theproduct.cover_image" :alt="theproduct.title">
            <div class="title  w-100">
             <h5>{{ theproduct.title }}</h5>
             <div class="icons d-flex flex-column flex-xl-row flex-lg-row">
              <div class="icon">
               <img src="@/assets/images/tag.svg" alt="">
               <span>{{ theproduct.tags }}</span>
              </div>
              <div class="icon">
               <img src="@/assets/images/time.svg" alt="">
               <span>{{ theproduct.created_at }}</span>
              </div>
             </div>
            </div>
               

               <ClientOnly>
                 <div v-html="theproduct.description"></div>
               </ClientOnly>        
              
           </div>
           
        </div>
        <loader v-if="pending"></loader>

    </div>
</template>

<script setup>


let url = getUrl();
import axios from 'axios';
const {locale } = useI18n();
let lang = ref(locale);
let pending = ref(false);
const router = useRouter();
const MainRoute = useRoute();
let id = MainRoute.query.id;
let theproduct = ref([]); 
const productNews = async () => {
  pending.value = true;
const  product  = await axios(`${url}/news/${id}`,{
      headers: {
    'Content-Language':`${lang.value}`
  }
});

  if (product.status == 200){
    pending.value = false;
}
  theproduct.value = product.data.data; 

  useHead({
  title: lang.value == 'ar' ? `${theproduct.value.title}/ الكثيري للسيارات` : `alkathiri motors / ${theproduct.value.title}`
});
}
productNews();

</script>

<style lang="scss">


</style>