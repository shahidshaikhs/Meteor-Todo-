<template>
  <div class="container__progress">
    <div class="container__progress--done" :style="{width: doneWidth}"></div>
    <div class="container__progress--pending" :style="{width: pendingWidth}"></div>
  </div>
</template>

<script>
export default {
  name: "Progress",
  data() {
    return {};
  },
  methods: {},
  props: ["todoItems", "doneWidth", "pendingWidth"]
};
</script>
