<template>
<header class="header">
  <div class="container">
    <img src="~/assets/img/logo.svg" alt="logo" class="logo">
    <span class="test">test</span>
  </div>
</header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
.test {
  color: $test-color;
  font-family: $main-font;
  font-weight: 400;
}
</style>
