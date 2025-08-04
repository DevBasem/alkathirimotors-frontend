<template>
  <div class="containe subscribe">
    <div class="text">
      <div class="d-flex flex-column align-items-center gap-2">
        <h2 class="headFont">
          {{ $t(`Book Your`) }} <br />
          {{ $t("Maintenance Appointment") }} <br />
          {{ $t("now") }}
        </h2>
        <div style="z-index: 1" class="btn">
          <nuxt-link :to="localePath('/maintenance')">
            <span>{{ $t("book now") }}</span>
          </nuxt-link>
        </div>
      </div>
      <img class="sub1" src="~/assets/images/sub.png" alt="subscribe" />
    </div>
    <div class="car"></div>
  </div>
</template>
<script setup>
const localePath = useLocalePath();

</script>
<style lang=""></style>
