<template>
  <div class="container container-fluid">
    <div class="row">
      <div class="col">
        <h1 class="display-1">Grace Protochurch</h1>
        <p class="display-6">Connect with Christians, grow closer to God, and experience online community.</p>
      </div>
      <div class="col">
        <div class="p-2">
          <button class="btn-auth btn-facebook" @click="goIn">Sign in with <b>Facebook</b></button>
        </div>
        <div class="p-2">
          <button class="btn-auth btn-twitter" @click="goIn">Sign in with <b>Twitter</b></button>
        </div>
        <div class="p-2">
          <button class="btn-auth btn-google" @click="goIn">Sign in with <b>Google</b></button>
        </div>
        <div class="p-2">
          <button class="btn-auth btn-github" @click="goIn">Sign in with <b>GitHub</b></button>
        </div>
        <div class="p-2">
          <button class="btn-auth btn-yahoo" @click="goIn">Sign in with <b>Yahoo!</b></button>
        </div>
        <div class="p-2">
          <button class="btn-auth btn-windows" @click="goIn">Sign in with <b>Windows Live ID</b></button>
        </div>
        <div class="p-2">
          <button class="btn-auth btn-openid" @click="goIn">Sign in with <b>OpenID</b></button>
        </div>

        <!-- <form>
          <div class="p-2">
            <button class="btn btn-danger" @click="goIn">
              <img src="/node_modules/bootstrap-icons/icons/cloud-download.svg" /> sign in with google
            </button>
          </div>
          <div class="p-2">
            <button class="btn btn-danger" @click="goIn">
              <img src="/node_modules/bootstrap-icons/icons/cloud-download.svg" /> sign in with apple
            </button>
          </div>
          <div class="p-2">
            <button class="btn btn-danger" @click="goIn">
              <img src="/node_modules/bootstrap-icons/icons/cloud-download.svg" /> sign in with facebook
            </button>
          </div>
          <div class="p-2">
            <button class="btn btn-danger" @click="goIn">
              <img src="/node_modules/bootstrap-icons/icons/cloud-download.svg" /> sign in with microsoft
            </button>
          </div>
        </form> -->
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
