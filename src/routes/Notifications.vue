<template>
  <div>
    <div class="card my-4 mb-5 d-flex" v-for="note in notifications" :key="note.id">
      <div class="card-header d-flex justify-content-between">
        <div class="d-flex">
          <random-avatar :size="40" />
          <div class="d-flex flex-column mx-3 lh-sm">
            <strong>{{ note.eventFrom }}</strong>
            <small>{{ relativeDateFormat(new Date(note.eventDate)) }}</small>
          </div>
          <div class="lh-lg">
            {{ note.eventText }}
          </div>
        </div>

        <div class="controls align-self-end">
          <button class="btn px-3 post-options">&middot;&middot;&middot;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RandomAvatar from "@/components/social/RandomAvatar.vue";
import BsIcon from "@/components/social/BsIcon.vue";
import { relativeDateFormat } from "@/utils/date-format";

class Notification {
  constructor(id, eventFrom, eventDate, eventText) {
    this.id = id;
    this.eventFrom = eventFrom;
    this.eventDate = eventDate;
    this.eventText = eventText;
  }
}

export default {
  components: { RandomAvatar, BsIcon },
  data() {
    return {
      notifications: [
        new Notification(1, "Nathan Strutz", generateDate(1), "Joined your group 'The Orange Group'"),
        new Notification(2, "Darien Gabriel", generateDate(2), "Replied to your post"),
        new Notification(3, "Todd Luce", generateDate(4), "Replied to your post"),
        new Notification(4, "Todd Luce", generateDate(11), "Liked to your post"),
        new Notification(5, "Alanda Strutz", generateDate(18), "Liked your post"),
      ],
    };
  },
  methods: {
    relativeDateFormat,
  },
};

function generateDate(hoursBehind) {
  let d = new Date();
  d.setHours(d.getHours() - hoursBehind);
  return d.toISOString();
}
</script>
