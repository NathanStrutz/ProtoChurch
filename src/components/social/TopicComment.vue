<template>
  <div class="d-flex">
    <random-avatar :size="40" class="mx-3 my-1" />
    <div class="d-flex flex-column">
      <strong>Todd Luce</strong>
      <p>Thanks for posting this. What a life changing story!</p>
    </div>
  </div>
</template>

<script>
import RandomAvatar from "./RandomAvatar.vue";

export default {
  components: { RandomAvatar },
};
</script>
