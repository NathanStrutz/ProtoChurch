<template>
  <h2>My Groups</h2>
  <div class="container container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-xl-4" v-for="group in myGroups" :key="group.id">
        <group-card :id="group.id" />
      </div>
      <div v-if="myGroups.length === 0">
        <h4>You don't have any groups</h4>
      </div>
    </div>
  </div>
  <h2 class="pt-5">Public Groups</h2>
  <div class="container container-fluid">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 col-xl-4" v-for="group in openGroups" :key="group.id">
        <group-card :id="group.id" />
      </div>
      <div v-if="openGroups.length === 0">
        <h4>There aren't any open groups available</h4>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import GroupCard from "@/components/groups/GroupCard.vue";

export default {
  components: { GroupCard },

  computed: {
    ...mapGetters("groups", ["myGroups", "openGroups"]),
  },
};
</script>
