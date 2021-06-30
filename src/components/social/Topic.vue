<template>
  <div class="card my-4 mb-5">
    <div class="card-body p-0">
      <div class="card-header d-flex justify-content-between">
        <div class="d-flex">
          <random-avatar :size="40" />
          <div class="d-flex flex-column mx-3">
            <strong>{{ topic.author.name }}</strong>
            <small>{{ relativeDateFormat(new Date(topic.datePosted)) }}</small>
          </div>
        </div>

        <div class="controls align-self-end">
          <button class="btn px-3 post-options">&middot;&middot;&middot;</button>
        </div>
      </div>
      <div class="card-text p-3">
        <p>
          {{ topic.content.text }}
        </p>
      </div>
      <div class="card-footer d-flex">
        <button class="btn btn-light btn-outline-light col-6"><bs-icon icon="heart" :size="20" /></button>
        <button class="btn btn-light btn-outline-light col-6">Comment</button>
      </div>
      <div class="post-discussion my-3">
        <!-- your tiny image -->
        <topic-comment v-for="comment in comments" :key="comment.id" :id="comment.id" />
        <your-comment />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BsIcon from "./BsIcon.vue";
import RandomAvatar from "./RandomAvatar.vue";
import TopicComment from "./TopicComment.vue";
import YourComment from "./YourComment.vue";

import { relativeDateFormat } from "@/utils/date-format";

export default {
  components: { RandomAvatar, BsIcon, TopicComment, YourComment },
  props: {
    id: Number,
  },
  computed: {
    ...mapGetters("feed", ["getById", "getCommentsByPostId"]),
    topic() {
      return this.getById(this.id);
    },
    comments() {
      return this.getCommentsByPostId(this.id);
    },
  },
  methods: { relativeDateFormat },
};
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;

  .controls {
    align-self: flex-end;
  }
}
.card-footer button {
  color: #333;
  &:hover {
    background-color: #ddd;
  }
}
.post-options:hover,
.post-options:active,
.post-options:focus {
  background-color: #e8e8e8;
}
</style>
