<template>
  <aside class="pt-4">
    <group-card v-for="group in newGroups" :key="group.id" :id="group.id" />
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
import GroupCard from "./GroupCard.vue";

export default {
  components: { GroupCard },
  computed: {
    ...mapGetters("groups", ["newGroups"]),
  },
};
</script>
