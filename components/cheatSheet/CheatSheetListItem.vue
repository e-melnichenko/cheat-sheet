<template>
  <li class="cheat-sheet-list-item">
    <NuxtLink :to="`/list/${data.id}`" class="link">
      <h3 class="title">{{ data.name }}</h3>
      <p class="desc">{{ data.description }}</p>
      <footer class="footer">
        <p class="footer-item">
          Изменено: <span class="footer-value">{{ editDate }}</span>
        </p>
        <p class="footer-item">
          Язык: <span class="footer-value">{{ data.lang }}</span>
        </p>
      </footer>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import {CheatSheetListItemType} from "~/server/api/cheat-sheet/list";
import {computed} from "#imports";
import {formatDate} from "~/utils";

const props = defineProps<{
  data: CheatSheetListItemType;
}>();

const editDate = computed(() => formatDate(props.data.editedAt));
</script>

<style scoped lang="scss">
.cheat-sheet-list-item {}

.link {
  display: block;
  text-decoration: none;
  color: inherit;
  padding: 8px 12px;
  border-radius: 4px;
  border: 2px solid $color-border;
}

// todo 2 lines
.title {
  margin: 0;
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: 600;
}

// todo 2 lines
.desc {
  margin: 0;
  margin-bottom: 12px;
  font-size: 16px;
}

.footer {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.footer-item {
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
}

.footer-value {
  color: $color-text-grey;
}

</style>
