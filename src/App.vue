<template>
  <div class="header flex-row">
    <router-link to="/">
      <div class="title">Twotter</div>
    </router-link>
    <div class="userName" v-if="user">@{{ user.userName }}</div>
  </div>
  <div class="container">
    <router-view />
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const store = useStore();
    const user = computed(() => store.state.User.user);
    return {
      user,
    };
  },
};
</script>
<style lang="scss">
#app {
  font-size: 20px;
  .header {
    padding: 20px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70px;
    background-color: hotpink;
    color: #f6f6f6;
  }
  .container {
    padding: 20px 20px;
    align-items: center;
    display: flex;
  }
}
@media screen and (max-width: 768px) {
  #app {
    .container {
      flex-direction: column;
      padding: 5px 5px;
    }
    #card {
      margin: 0;
      .twotts-wrapper {
        padding: 5px 5px;
      }
    }
  }
}
</style>
