<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-8">
        <discussion-area />
      </div>
      <div class="col">
        <group-sidebar />
      </div>
    </div>
  </div>
</template>

<script>
import DiscussionArea from "@/components/social/DiscussionArea.vue";
import GroupSidebar from "@/components/groups/GroupSidebar.vue";

export default {
  components: { DiscussionArea, GroupSidebar },
};
</script>

GroupSidebar
