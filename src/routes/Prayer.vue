<template>
  <h2>Prayer Wall</h2>

  <div class="container">
    <div class="row">
      <div class="col">
        <div class="card mb-5" v-for="prayer in prayers" :key="prayer.id">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5>
              {{ prayer.author }}
              <small>{{ relativeDateFormat(new Date(prayer.datePosted)) }}</small>
            </h5>
            <h6>Prayed for {{ prayer.prayerCount }} time{{ prayer.prayerCount === 1 ? "" : "s" }}</h6>
          </div>
          <div class="card-body">
            <p>{{ prayer.body }}</p>
          </div>
          <div class="card-footer d-flex justify-content-end">
            <button class="btn btn-info ms-2">Write a Prayer</button>
            <button class="btn btn-success ms-2" @click="prayed(prayer.id)" :disabled="prayer.userDidPray">
              I Prayed For This
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { relativeDateFormat } from "@/utils/date-format";

export default {
  data() {
    return {
      prayers: [
        {
          id: 1,
          author: "Anonymous",
          body: "Please pray for me because I'm going through a really hard time right now.",
          datePosted: "2021-07-21T12:34:56.789Z",
          prayerCount: 17,
          userDidPray: false,
        },
        {
          id: 2,
          author: "Nathan",
          body: "My gecko is really sick and i really want him to get better because he is my only friend. Do you know how hard it is to make a friend out of a gecko? It's very hard! One time we went to disneyworld and Frank was just hanging out in my pocket and loving every minute of it. His favorite ride was the pirates of the caribbean. Pleas pray for Frank. He just has to get better. I know it. I just know it.",
          datePosted: "2021-07-21T04:56:18.912Z",
          prayerCount: 0,
          userDidPray: false,
        },
      ],
    };
  },
  methods: {
    relativeDateFormat,
    prayed(id) {
      let prayer = this.prayers.filter((p) => p.id === id)[0];
      prayer.prayerCount++;
      prayer.userDidPray = true;
    },
  },
};
</script>

<style lang="scss">
h5 small {
  font-size: 0.8rem;
}
</style>
