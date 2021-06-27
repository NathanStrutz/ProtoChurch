<template>
  <h1 class="display-1">Grace Protochurch</h1>
  <h5 class="display-5">Set up your new account</h5>

  <form>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp" />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" aria-describedby="passHelp" />
      <div id="passHelp" class="form-text">Your password is encrypted and unbreakable.</div>
    </div>
    <div class="mb-3">
      <label for="name" class="form-label">Your Name</label>
      <input type="text" class="form-control" id="name" />
    </div>
    <button type="submit" class="btn btn-primary" @click="goIn">Sign Up</button>
  </form>
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

<style></style>
