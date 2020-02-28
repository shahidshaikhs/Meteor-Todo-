<template>
  <div>
    <Modal
      v-if="showModal"
      @close="showModal = false"
      @resetFinal="resetFinal"
      @dontReset="showModal = false"
    />
    <div class="container">
      <Navbar />
      <Progress :todoItems="todoItems" :doneWidth="doneWidth" :pendingWidth="pendingWidth" />
      <AddTodo @addTodo="addTodoItem" />
      <OnGoing
        :todoItems="todoItems"
        @done="doneTodo"
        @later="laterTodo"
        @deleteTodo="deleteTodoItem"
      />
      <DoItLater :todoItems="todoItems" @done="doneTodo" @deleteTodo="deleteTodoItem" />
      <Completed :todoItems="todoItems" @deleteTodo="deleteTodoItem" />
      <Footer @reset="reset" />
    </div>
  </div>
</template>
<script>
import Navbar from "./Navbar";
import Progress from "./Progress";
import AddTodo from "./AddTodo";
import OnGoing from "./OnGoing";
import DoItLater from "./DoItLater";
import Completed from "./Completed";
import Footer from "./Footer";
import Modal from "./Model";

import { uuid } from "vue-uuid";

export default {
  name: "Home",
  data() {
    return {
      todoItems: [],
      doneWidth: "0%",
      pendingWidth: "0%",
      pendingItems: "",
      doneItems: "",
      STORAGE_KEY: "meteor-todo-key",
      data: "",
      showModal: false
    };
  },
  components: {
    Navbar,
    Progress,
    AddTodo,
    OnGoing,
    DoItLater,
    Completed,
    Footer,
    Modal
  },
  created() {
    this.todoItems = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || "[]");
    this.calculatePending();
    this.calculateDone();
  },
  methods: {
    addTodoItem(value) {
      this.todoItems.push({
        id: uuid.v4(),
        title: value,
        status: "pending"
      });
      this.calculatePending();
      this.calculateDone();
      this.keepListShort();
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todoItems));
    },
    doneTodo(todoID) {
      this.todoItems.forEach(item => {
        if (item.id === todoID) {
          item.status = "done";
        }
      });
      this.calculatePending();
      this.calculateDone();

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todoItems));
    },
    laterTodo(todoID) {
      this.todoItems.forEach(item => {
        if (item.id === todoID) {
          item.status = "later";
        }
      });
      this.calculatePending();
      this.calculateDone();

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todoItems));
    },
    deleteTodoItem(todoID) {
      this.todoItems = this.todoItems.filter(item => {
        return item.id !== todoID;
      });
      this.calculatePending();
      this.calculateDone();

      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todoItems));
    },

    calculatePending() {
      if (this.todoItems.length > 0) {
        this.pendingItems = this.todoItems.filter(items => {
          return items.status === "pending";
        });
        this.pendingWidth =
          (this.pendingItems.length / this.todoItems.length) * 100 + "%";
      } else {
        this.doneWidth = "0%";
      }
    },
    calculateDone() {
      if (this.todoItems.length > 0) {
        this.doneItems = this.todoItems.filter(items => {
          return items.status === "done";
        });
        this.doneWidth =
          (this.doneItems.length / this.todoItems.length) * 100 + "%";
      } else {
        this.doneWidth = "0%";
      }
    },
    reset() {
      this.showModal = true;
    },
    resetFinal() {
      this.showModal = false;
      this.todoItems = [];
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.todoItems));
    },
    keepListShort() {
      for (var key in window.localStorage) {
        // eslint-disable-next-line no-prototype-builtins
        if (window.localStorage.hasOwnProperty(key)) {
          this.data += window.localStorage[key];
          if (
            ((window.localStorage[key].length * 16) / (8 * 1024)).toFixed(2) >=
            5
          ) {
            alert(
              "You have exceeded the localStorage, please delete a few completed items or reset to use the app again"
            );
          }
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
