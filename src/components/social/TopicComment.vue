<template>
  <div class="d-flex">
    <random-avatar :size="40" class="mx-3 my-1" />
    <div class="d-flex flex-column">
      <strong>{{ comment.author.name }}</strong>
      <p>{{ comment.text }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import RandomAvatar from "./RandomAvatar.vue";

export default {
  components: { RandomAvatar },
  props: {
    id: Number,
  },
  computed: {
    ...mapGetters("feed", ["getCommentById"]),

    comment() {
      return this.getCommentById(this.id);
    },
  },
};
</script>
