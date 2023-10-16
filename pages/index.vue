<template>
  <main class="d-flex flex-column w-100 justify-center">
    <h1 class="article__heading">Hello</h1>
    <v-row>
        <v-col>
            <span>test</span>
        </v-col>
    </v-row>
    <v-row>
        <v-btn rounded>
        click!
        </v-btn>
    </v-row>
  </main>
</template>
<script setup>
//import { articles } from "@/utils/articles.json";
</script>
<style lang="scss" scoped>
  .article {
    &__heading {
      font-weight: 700;
    }
  }
</style>
