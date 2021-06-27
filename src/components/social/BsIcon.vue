<template>
  <img :src="path" :alt="alt" :width="size" :height="size" />
</template>

<script>
export default {
  props: {
    icon: { type: String, default: "bootstrap" },
    alt: { type: String, default: "bootstrap" },
    size: { type: Number, default: 32 },
    color: { type: String, default: "black" },
  },
  computed: {
    path() {
      return "/node_modules/bootstrap-icons/icons/" + this.icon + ".svg";
    },
  },
};
</script>
