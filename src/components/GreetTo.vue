<script setup>
import { defineProps } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const props = defineProps(["name", "xd"])

</script>

<template>
  <p>Hello! {{ props.name }} !!</p>
  <p>Props! {{ props.xd }} !!</p>
  <p>Props! {{ props.xd }} !!</p>
</template>
