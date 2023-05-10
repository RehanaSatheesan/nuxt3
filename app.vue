<template>
  <NuxtLayout :name="layout"> some page content app </NuxtLayout>
  {{ foo }}
  <NuxtPage />
</template>

<script setup>
const foo = useFoo();
</script>
