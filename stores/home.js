
import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
    state: () => ({
      brandArray:[],
      latestArray:[],
      newsArray:[],
      spinner_brands:false,
      spinner_latest:false,
    }),
    getters: {
   
    },
    actions: {
      async fetchBrands() {
        this.spinner_brands = true;
        try {
          let result = await useApi().get('brands');
          if(result.status == 200){
            this.spinner_brands = false;
            this.brandArray = result.data.data;
          }
        } catch (error) {
          // this.error = error.message || 'An error occurred while fetching items.';
        } finally {
        }
      },
      async fetchNews() {
        try {
          let result = await useApi().get('news/highlighted');
          if(result.status == 200){
            this.newsArray = result.data.data;
          }
        } catch (error) {
          // this.error = error.message || 'An error occurred while fetching items.';
        } finally {
        }
      },
      async fetchCars() {
        this.spinner_latest = true;
        try {
          let result = await useApi().get('cars/latest');
          if(result.status == 200){
            this.spinner_latest = false;
            this.latestArray = result.data.data;
          }
        } catch (error) {
          // this.error = error.message || 'An error occurred while fetching items.';
        } finally {
        }
      },
    },
  })