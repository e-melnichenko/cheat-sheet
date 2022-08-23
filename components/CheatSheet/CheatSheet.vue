<template>
  <section class="cheat-sheet">
    <div class="container">
      <Filter/>

      <List
          :data="cheatSheetList"
          :pending="pending"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import {onMounted, useFetch} from "#imports";
import List from "~/components/CheatSheet/List.vue";
import {CheatSheetListItem} from "~/server/api/cheat-sheet/list";
import Filter from "~/components/CheatSheet/Filter.vue";

const {data: cheatSheetList, pending, refresh} = useFetch<CheatSheetListItem[]>('api/cheat-sheet/list');

onMounted(() => refresh());
</script>

<style scoped>

</style>
