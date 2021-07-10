<template>
  <h2>My Groups</h2>
  <div class="container container-fluid">
    <div class="row justify-content-center">
      <div class="col" v-for="groupId in myGroups" :key="groupId">
        <group-card :id="groupId" />
      </div>
    </div>
  </div>
  <h2 class="pt-5">Public Groups</h2>
  <div class="container container-fluid">
    <div class="row">
      <div class="col">
        <group-card v-for="groupId in openGroups" :key="groupId" :id="groupId" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import GroupCard from "../components/groups/GroupCard.vue";

export default {
  components: { GroupCard },

  computed: {
    ...mapState("groups", ["myGroups", "openGroups"]),
  },
};
</script>
