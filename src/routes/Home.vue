<template>
  <div class="container container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="display-1">Grace Protochurch</h1>
        <p class="display-6">Connect with Christians, grow closer to God, and experience online community.</p>
      </div>
      <div class="col">
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" class="form-control" id="password" aria-describedby="passHelp" />
          </div>
          <button type="submit" class="btn btn-primary" @click="goIn">Log In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["logIn"]),

    goIn() {
      this.logIn({ id: 1, name: "Nathan" });
      this.$router.push("/inside");
    },
  },
};
</script>
