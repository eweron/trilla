<template>
  <div>
    <v-theme-provider theme="light">
      <v-container class="mb-12 lg-12 xl-12">
        <v-row no-gutters style="height: 150px">
          <v-col v-for="n in 3" :key="n">
            <v-card class="mx-auto" width="90%" prepend-icon="mdi-home">
              <template v-slot:title> This is a title </template>

              <v-card-text> This is content </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-theme-provider>
  </div>
  <teleport to="#view-title">
    <div>Dashboard</div>
  </teleport>
</template>
<script setup lang="ts"></script>
