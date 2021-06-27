<template>
  <basic-layout>
    <router-view />
  </basic-layout>
</template>

<script setup>
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<script>
import BasicLayout from "@/components/layout/BasicLayout.vue";

export default {
  components: { BasicLayout },
};
</script>
