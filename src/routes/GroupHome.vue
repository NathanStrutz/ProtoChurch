<template>
  <h1>Home Page - {{ group.name }}</h1>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  props: {
    id: { type: Number },
  },
  computed: {
    ...mapGetters("groups", ["getGroup"]),
    group() {
      return this.getGroup(this.id);
    },
  },
};
</script>
