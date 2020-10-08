<template>
  <div class="twott" @click="favoriteTwott(twott.id)">
    <div class="user_name">@{{ userName }}</div>
    <div class="contents">
      {{ twott.content }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TwottsItem",
  props: {
    userName: {
      type: String,
      required: true,
    },
    twott: {
      type: Object,
      required: true,
    },
  },
  setup(props, ctx) {
    function favoriteTwott(id) {
      ctx.emit("favorite", id);
    }
    return {
      favoriteTwott,
    };
  },
};
</script>
<style lang="scss" scoped>
.twotts-wrapper {
  .twott {
    box-shadow: #184d47 2px 2px 5px 0;
    background-color: #f6f6f6;
    padding: 10px 20px;
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 0 0 5px;
    transition: all 0.2s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.1, 1.1);
    }
  }
  .user_name {
    font-weight: bold;
  }
}
</style>