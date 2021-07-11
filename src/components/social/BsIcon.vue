<!--
REMINDER: Every icon that is used has to move from /node_modules/bootstrap-icons/icons to /public/bootstrap-icons
-->
<template>
  <img :src="path" :alt="alt" :width="size" :height="size" />
</template>

<script>
export default {
  props: {
    icon: { type: String, default: "bootstrap" },
    alt: { type: String, default: "icon" },
    size: { type: Number, default: 32 },
    color: { type: String, default: "black" },
  },
  computed: {
    path() {
      return "/bootstrap-icons/" + this.icon + ".svg";
    },
  },
};
</script>
