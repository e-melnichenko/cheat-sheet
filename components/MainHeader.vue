<template>
<header class="header">
  <div class="container">
    <div class="header-inner">
      <img src="~/assets/img/logo.svg" alt="logo" class="logo">
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
.header {
  box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.08);
}

.header-inner {
  padding: 8px 0;
}

.logo {
  height: 40px;
}
</style>
