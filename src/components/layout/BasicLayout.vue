<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Protochurch</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="!user">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <!-- <li class="nav-item" v-if="!user">
            <router-link class="nav-link" to="/signup">Sign Up</router-link>
          </li> -->
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/inside">Home</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/groups">Groups</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/prayer">Prayer</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/notifications">Notifications</router-link>
          </li>
          <li class="nav-item" v-if="user">
            <router-link class="nav-link" to="/profile">Profile</router-link>
          </li>
        </ul>
        <form class="d-flex" v-if="!user">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <div class="container pt-3">
    <main class="row"><slot /></main>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style></style>
