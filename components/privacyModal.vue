<template>
    <div>
                <div class="modal fade " id="privacyModal" tabindex="-1" aria-labelledby="privacyModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content modal-height">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{{ $t('Privacy Policy') }}</h1>
      </div>
      <div v-if="!store.pendingGeneral" class="modal-body">
      <p v-html="store.generalData?.privacy_policy">
        
      </p>
      <div v-if="store.pendingGeneral" class="d-flex align-items-center justify-content-center" style="min-height: 100%;">
      <div  class="spinner-border  " role="status">
       </div>
      
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{{ $t('close') }}</button>
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

<style lang="scss">

.modal-height{
  height: 500px !important;
}

@media(max-width:800px){
  .modal-height{
    height: 400px !important;
  }
}

</style>