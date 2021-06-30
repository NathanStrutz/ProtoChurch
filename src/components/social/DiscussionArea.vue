<template>
  <div>
    <topic v-for="item in feed" :key="item.id" :id="item.id" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Topic from "./Topic.vue";

export default {
  components: { Topic },
  computed: {
    ...mapState("feed", ["feed"]),
  },
};
</script>
