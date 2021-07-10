<template>
  <div>
    <button class="float-end btn btn-danger" @click="leave">Leave this group</button>
    <h1>Home Page - {{ group.name }}</h1>
  </div>
  <p>{{ group.description }}</p>
  <p>
    How We Meet: <strong>{{ group.meetingDetails }}</strong>
  </p>

  <h3>Group Discussion</h3>
  <p>
    Note that this group is currently <em>public</em>. Anything you say can be viewed by anyone in the group.
    <discussion-area />
  </p>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import DiscussionArea from "@/components/social/DiscussionArea.vue";

export default {
  components: { DiscussionArea },
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
    ...mapActions("groups", ["leaveGroup"]),

    leave() {
      this.leaveGroup(this.id);
      this.$router.push("/groups");
    },
  },
};
</script>
