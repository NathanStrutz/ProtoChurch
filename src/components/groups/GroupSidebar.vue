<template>
  <aside class="pt-4">
    <div class="card mb-4" v-for="group in groups" :key="group.name">
      <div class="card-header">{{ group.name }}</div>
      <div class="card-body">
        <div class="card-text">
          {{ group.description }}
        </div>
        <div class="card-text">
          <router-link :to="'/groups/' + group.slug">Learn more</router-link>
        </div>
      </div>
      <div class="card-footer">{{ group.location }}</div>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      groups: [
        {
          slug: "new_to_church",
          name: "New To Church",
          description: "The perfect starting place for your new faith journey.",
          location: "Zoom, Weekday evenings",
        },
        {
          slug: "romans_bible_study",
          name: "Romans Bible Study",
          description:
            'A deep-dive into a deeply profound book. "For all have sinned and fall short of the glory of God, and are justified by his grace as a gift, through the redemption that is in Christ Jesus, whom God put forward as a propitiation by his blood, to be received by faith."',
          location: "In-person, Wednesday nights",
        },
      ],
    };
  },
};
</script>

<style></style>
