<template>
  <v-navigation-drawer
    v-model="showDrawer"
    temporary
    location="right"
    width="600"
  >
    <v-toolbar density="compact">
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="$emit('close')" icon>
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <slot></slot>
  </v-navigation-drawer>
</template>
<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  show: boolean;
  title?: string;
}>();
const showDrawer = computed(() => props.show);
</script>
