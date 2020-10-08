<template>
  <div class="home">Home page</div>
  <div class="navigation">
    <div class="item" v-for="user in users" :key="user.id">
      <router-link :to="{ name: 'UserProfile', params: { userId: user.id } }"
        >@{{ user.userName }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { users } from "../assets/users";
export default {
  name: "Home",
  setup() {
    return {
      users,
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  color: hotpink;
  display: flex;
  .item {
    margin-left: 15px;
  }
}
</style>
