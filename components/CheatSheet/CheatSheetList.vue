<template>
  <ul class="cheat-sheet-list" v-if="!pending">
    <CheatSheetListItem v-for="item in data" :data="item" :key="item.id"/>
  </ul>
  <Loading v-else/>
</template>

<script setup lang="ts">
import {CheatSheetListItemType} from "~/server/api/cheat-sheet/list";
import Loading from "~/components/Loading.vue";
import CheatSheetListItem from "~/components/CheatSheet/CheatSheetListItem.vue";

defineProps<{
  pending: boolean;
  data: CheatSheetListItemType[] | undefined;
}>();
</script>

<style scoped lang="scss">
.cheat-sheet-list {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(1,1fr);
}
</style>
