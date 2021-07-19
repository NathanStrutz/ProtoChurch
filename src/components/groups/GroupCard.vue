<template>
  <div class="card">
    <div class="card-header">
      <h4>{{ group.name }}</h4>
    </div>
    <div class="card-body">{{ group.description }}</div>
    <div class="card-footer text-end" v-if="group.isJoined">
      <router-link :to="`/groups/${group.id}`">Enter Group</router-link>
    </div>
    <div class="card-footer text-end" v-else><a href="#" @click="join">Join this group</a></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    id: { type: String },
  },
  computed: {
    ...mapGetters("groups", ["getGroup"]),

    group() {
      return this.getGroup(this.id);
    },
  },
  methods: {
    ...mapActions("groups", ["joinGroup"]),

    join() {
      this.joinGroup(this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 350px;
  margin-bottom: 2em;

  .card-body {
    height: 150px;
    overflow: hidden;
  }
}
</style>
