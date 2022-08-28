<template>
<component :is="componentType" v-bind="logoAttrs" class="logo-link">
  <img src="~/assets/img/logo.svg" alt="logo-img" class="logo-img">
</component>
</template>

<script setup lang="ts">
import {computed, resolveComponent, useRoute} from "#imports";

const NuxtLink = resolveComponent('NuxtLink');
const route = useRoute();
const isMainPage = computed(() => route.path === '/');
const componentType = computed(() => isMainPage.value ? 'span' : NuxtLink);
const logoAttrs = computed(() => isMainPage.value ? null : {to: '/'});
</script>

<style scoped lang="scss">
.logo-link {
  display: block;
}

.logo-img {
  height: 40px;
}
</style>
