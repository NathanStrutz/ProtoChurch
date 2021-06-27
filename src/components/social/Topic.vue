<template>
  <div class="card my-4 mb-5">
    <div class="card-body p-0">
      <div class="card-header d-flex justify-content-between">
        <div class="d-flex">
          <random-avatar :size="40" />
          <div class="d-flex flex-column mx-3">
            <strong>Apostle Paul</strong>
            <small>2014 years ago</small>
          </div>
        </div>

        <div class="controls align-self-end">
          <button class="btn px-3 post-options">&middot;&middot;&middot;</button>
        </div>
      </div>
      <div class="card-text p-3">
        <p>
          Every good gospel presentation must tell us the bad news before it tells us the good news. This is what makes
          the good news so good. There is something terribly wrong with us and with the world. Thus far in Paul’s letter
          to the church in Rome, he has been explaining just what that problem is: the rebellious transgression of God’s
          righteousness revealed generally in creation, universally in our consciences (dead though they are), and
          especially and specifically in the Scriptures. Paul has revealed and reaffirmed that we are sinners, following
          our perverted instincts into more and more death. The only justifiable response to our sin against God’s
          righteousness is his right and just wrath. But that is the bad news; the gospel means “good news.” In Romans
          3:21–4:25, Paul articulates the heart of this great news of the gospel: God’s remarkable and gracious response
          to our sin, and also how this response does not diminish or contravene, but rather upholds his righteousness.
        </p>
      </div>
      <div class="card-footer d-flex">
        <button class="btn btn-light btn-outline-light col-6"><bs-icon icon="heart" :size="20" /></button>
        <button class="btn btn-light btn-outline-light col-6">Comment</button>
      </div>
      <div class="post-discussion my-3">
        <!-- your tiny image -->
        <topic-comment />
        <your-comment />
      </div>
    </div>
  </div>
</template>

<script>
import BsIcon from "./BsIcon.vue";
import RandomAvatar from "./RandomAvatar.vue";
import TopicComment from "./TopicComment.vue";
import YourComment from "./YourComment.vue";

export default {
  components: { RandomAvatar, BsIcon, TopicComment, YourComment },
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
