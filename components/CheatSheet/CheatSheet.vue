<template>
  <section class="cheat-sheet">
    <div class="container">
      <Filter/>

      <CheatSheetList
        :data="cheatSheetList"
        :pending="pending"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import {onMounted, useFetch} from "#imports";
import CheatSheetList from "~/components/CheatSheet/CheatSheetList.vue";
import {CheatSheetListItemType} from "~/server/api/cheat-sheet/list";
import Filter from "~/components/CheatSheet/Filter.vue";

const {data: cheatSheetList, pending, refresh} = useFetch<CheatSheetListItemType[]>('api/cheat-sheet/list');

onMounted(() => refresh());
</script>

<style scoped>

</style>
