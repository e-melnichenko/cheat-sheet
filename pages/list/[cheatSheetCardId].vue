<template>
  <main class="site-content">
    <section class="cheat-sheet-card" v-if="!pending">
      <div class="container">
        <h1 class="title">{{ card.name }}</h1>
        <h2>actions</h2>
        <CodeEditor v-model="card.code" class="code"/>
        <div class="info">
          <p class="info-item">
            Изменено: <span class="info-value">{{ editDate }}</span>
          </p>
          <p class="info-item">
            Язык: <span class="info-value">{{ card.lang }}</span>
          </p>
        </div>
      </div>
    </section>
    <Loading v-else/>
  </main>
</template>

<script setup lang="ts">
import {computed, onMounted, ref, useFetch, useRoute} from "#imports";
import {CheatSheetItemType} from "~/server/api/cheat-sheet/[id]";
import {formatDate} from "~/utils";
import CodeEditor from "~/components/CodeEditor.vue";

const $route = useRoute();
const card = ref<CheatSheetItemType>();
const {data, pending} = await useFetch<CheatSheetItemType>(`/api/cheat-sheet/${$route.params.cheatSheetCardId}`);
card.value = data.value;
const editDate = computed(() => formatDate(card.value.editedAt));
</script>

<style scoped lang="scss">
.title {
  margin: 0;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 32px;
}

.code {
  margin-bottom: 12px;
}

.info {
  display: flex;
  width: 100%;
  justify-content: space-between;
}


.info-item {
  margin: 0;
  font-size: 12px;
  line-height: 16px;
  font-weight: 600;
}

.info-value {
  color: $color-text-grey;
}

.desc {
  margin: 0;
}
</style>
