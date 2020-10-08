<template>
  <div class="flex-column" style="flex: 1; flex-direction: column">
    <div id="card">
      @{{ state.user.userName }} - {{ fullName }} <strong>Followers : </strong>
      {{ state.followers }}
      <span v-if="state.user.isAdmin" class="badge">Admin</span>
    </div>
    <CreateTwotts @handlesubmitparent="handleSubmit" />
  </div>
  <div class="twotts-wrapper" style="flex: 3">
    <TwottsItem
      v-for="twotts in state.user.twotts"
      :key="twotts.id"
      :userName="state.user.userName"
      :twott="twotts"
      @favorite="toggleFavorite"
    />
  </div>
</template>

<script>
import { computed, reactive } from "vue";
import { useRoute } from "vue-router";
import { users } from "../assets/users";
import TwottsItem from "../components/TwottsItem";
import CreateTwotts from "../components/CreateTwotts";

export default {
  name: "UserProfile",
  components: { TwottsItem, CreateTwotts },
  setup() {
    const route = useRoute();
    const userId = computed(() => route.params.userId);
    const state = reactive({
      isLoading: false,
      followers: 0,
      selectedType: "draft",
      twottContent: "",
      typeOptions: [
        { name: "Draft", value: "draft" },
        { name: "Instance", value: "instatce" },
      ],
      user: users[userId.value - 1] || users[0],
    });
    const newComputedCharCount = computed(() => state.twottContent.length);
    function followUser() {
      state.followers++;
    }
    function toggleFavorite(id) {
      console.log("favourite", id);
    }
    function handleSubmit(values) {
      if (values.selectedType !== "draft" && values.twottContent !== "") {
        state.user.twotts.unshift({
          id: state.user.twotts.length + 1,
          content: values.twottContent,
        });
      }
    }
    return {
      state,
      newComputedCharCount,
      followUser,
      toggleFavorite,
      handleSubmit,
    };
  },
};
</script>
<style lang="scss" scoped>
#card {
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
  padding: 10px 20px;
  margin: 10px;
  background-image: url("../assets/logo.png");
  display: flex;
  flex-direction: column;
  min-height: 200px;
  box-shadow: #184d47 2px 2px 5px 0;
  justify-content: center;
  background-position: center;
  object-fit: contain;
  background-repeat: no-repeat;

  .badge {
    color: white;
    border-radius: 5px;
    background-color: rebeccapurple;
    padding: 5px 10px;
    font-size: 10px;
    margin-right: auto;
  }
}
.twotts-wrapper {
  font-size: 12px;
  display: flex;
  flex-basis: 100%;
  padding: 0 50px;
  flex-direction: column;
}
</style>
