<template>
  <ul class="list" v-if="!pending">
    <li class="item" v-for="item in data" :key="item.id">
      <h3 class="item-title">{{item.name}}</h3>
      <p class="item-desc">{{item.description}}</p>
      <footer class="item-footer">
        <div class="item-date">
          <h4>Изменено</h4>
<!--          todo date filter-->
          <p class="item-date-value">{{item.editedAt}}</p>
        </div>
        <div class="item-lang">
          <h4>Язык</h4>
          <p class="item-lang-value">{{item.lang}}</p>
        </div>
      </footer>
    </li>
  </ul>
  <Loading v-else/>
</template>

<script setup lang="ts">
import {CheatSheetListItem} from "~/server/api/cheat-sheet/list";
import Loading from "~/components/Loading.vue";

defineProps<{
  pending: boolean;
  data: CheatSheetListItem[];
}>();
</script>

<style scoped>

</style>
