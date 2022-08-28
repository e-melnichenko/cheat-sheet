<template>
  <prism-editor
    class="code-editor"
    :highlight="highlighter"
    line-numbers
    v-if="showEditor"
  />
</template>

<script setup lang="ts">
// import Prism Editor
import {PrismEditor} from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import {highlight, languages} from "prismjs/components/prism-core.js";
import "prismjs/components/prism-clike.js";
import "prismjs/components/prism-javascript.js";
import "prismjs/themes/prism-tomorrow.css"; // import syntax highlighting styles
import {onMounted, ref} from "#imports";

const showEditor = ref(false);
onMounted(() => showEditor.value = true);
const highlighter = (code) =>  highlight(code, languages.js, 'js');  //returns html
</script>

<style scoped lang="scss">
.code-editor {
  background: #2d2d2d;
  color: #ccc;

  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}
.prism-editor__textarea:focus {
  outline: none;
}
</style>
