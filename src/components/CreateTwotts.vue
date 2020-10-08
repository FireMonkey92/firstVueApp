<template>
  <div id="card2">
    <div
      class="form-container"
      :class="{ '-excessed': newComputedCharCount > 180 }"
    >
      <form @submit.prevent="handleSubmitChild">
        <div class="control">
          <label for="twott">New Twott ({{ newComputedCharCount }}/180)</label>
          <textarea
            name="twott"
            id="twott"
            rows="5"
            v-model="state.twottContent"
          ></textarea>
        </div>
        <div class="control">
          <label for="type">Select Type</label>
          <select name="type" id="type" v-model="state.selectedType">
            <option
              v-for="(option, index) in state.typeOptions"
              :value="option.value"
              :key="index"
            >
              {{ option.name }}
            </option>
          </select>
        </div>
        <button
          :disabled="newComputedCharCount > 180 ? true : false"
          class="primary small"
        >
          Add New Twott
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "CreateTwotts",
  props: {
    handlesubmitparent: {
      type: Function,
      required: true,
    },
  },
  setup(props, ctx) {
    const state = reactive({
      selectedType: "draft",
      twottContent: "",
      typeOptions: [
        { name: "Draft", value: "draft" },
        { name: "Instance", value: "instatce" },
      ],
    });
    const newComputedCharCount = computed(() => {
      return state.twottContent.length;
    });

    function handleSubmitChild() {
      ctx.emit("handlesubmitparent", {
        selectedType: state.selectedType,
        twottContent: state.twottContent,
      });
      if (state.selectedType !== "draft") state.twottContent = "";
    }
    return { state, newComputedCharCount, handleSubmitChild };
  },
};
</script>
<style lang="scss" scoped>
#card2 {
  display: flex;
  flex-direction: row;
  background-color: #f6f6f6;
  padding: 10px 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  min-height: 200px;
  box-shadow: #184d47 2px 2px 5px 0;
  justify-content: center;
  .form-container {
    margin-top: 10px;
    .control {
      display: flex;
      flex-direction: column;
      padding: 0 0 10px;
    }
    #twott {
      width: 100%;
    }
    &.-excessed {
      label {
        color: red;
      }
      textarea {
        border: 1px solid red;
      }
      button {
        cursor: not-allowed;
        color: white;
        background-color: red;
      }
    }
    label {
      font-size: 10px;
    }
  }
  button {
    padding: 10px 15px;
    font-family: "Roboto Condensed", sans-serif;
    border-radius: 3px;
    outline: none;
    border: 0;
    font-size: 16px;
    margin: 5px 0;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:active,
    &:hover,
    &::selection {
      border: none;
      box-shadow: gray 2px 2px 5px 0;
    }
    &.primary {
      color: #f6f6f6;
      background-color: hotpink;
      &.small {
        padding: 5px 10px;
        font-size: 12px;
      }
      &:active,
      &:hover {
        background-color: palevioletred;
        // color: #3b3b3b;
      }
    }
    &.secondary {
      color: #f6f6f6;
      background-color: #96bb7c;
    }
  }
  .badge {
    color: white;
    border-radius: 5px;
    background-color: rebeccapurple;
    padding: 5px 10px;
    font-size: 10px;
    margin-right: auto;
  }
}
</style>

