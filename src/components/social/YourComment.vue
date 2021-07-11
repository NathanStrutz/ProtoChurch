<template>
  <div class="d-flex">
    <random-avatar :size="40" class="mx-3 my-1" />
    <div class="flex-grow-1">
      <input class="form-control form-control-md mt-1" type="text" v-model="comment" placeholder="Write a comment..." />
    </div>
    <button class="btn" title="Post your comment" :disabled="comment">
      <bs-icon icon="caret-right" :size="30" />
    </button>
  </div>
</template>

<script>
import BsIcon from "./BsIcon.vue";
import RandomAvatar from "./RandomAvatar.vue";

export default {
  components: { RandomAvatar, BsIcon },
  data() {
    return {
      comment: "",
    };
  },
};
</script>
