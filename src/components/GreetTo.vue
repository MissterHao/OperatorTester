<script setup>
import { defineProps } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const props = defineProps(["name"])

</script>

<template>
  <p>Hello! {{ props.name }} !!</p>
</template>
