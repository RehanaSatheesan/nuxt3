<template>
  <div>
    <div>Check developer console!</div>
  </div>
</template>
<script setup lang="ts">
const config = useRuntimeConfig();
const appConfig = useAppConfig();
console.log(appConfig.theme.primaryColor, "appConfig.theme");
// console.log("Runtime config:", config);
// console.log(config.apiSecret, "runtimeConfig.apiSecret");
// console.log(config.public.apiBase, "runtimeConfig.public.apiBase");
if (process.server) {
  console.log("API secret:", config.apiSecret);
}
</script>
