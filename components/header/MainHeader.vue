<template>
<header class="header">
  <div class="container">
    <div class="header-inner">
      <HeaderLogo/>
    </div>
  </div>
</header>
</template>

<script setup lang="ts">
import HeaderLogo from "./HeaderLogo";
</script>

<style scoped lang="scss">
.header {
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.08);
}

.header-inner {
  padding: 8px 0;
}
</style>
