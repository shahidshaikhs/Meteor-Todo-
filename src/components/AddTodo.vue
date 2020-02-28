<template>
  <div class="container__addTodo">
    <input
      v-model="todo"
      type="text"
      placeholder="What needs to be done?"
      v-on:keyup.enter="addTodo()"
    />
    <svg
      @click="addTodo()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="40"
      height="40"
    >
      <path
        class="heroicon-ui"
        d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    addTodo() {
      this.$emit("addTodo", this.todo);
      this.todo = "";
    }
  }
};
</script>
