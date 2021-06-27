<template>
  <div class="d-flex">
    <random-avatar :size="40" class="mx-3 my-1" />
    <input style="form-control text-control" v-model="comment" placeholder="Add your own comment..." />
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

<style lang="scss" scoped>
.text-control {
  width: 100%;
}
</style>
