<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h2>😨 Are you sure you want to reset?</h2>
          <p>Please note that if you reset, you will lose all your todo items and your entire progress as well.</p>
          <div class="modal-buttons">
            <button @click="dontReset">No, don't</button>
            <button @click="resetFinal">Yes, reset</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "Model",
  methods: {
    resetFinal() {
      this.$emit("resetFinal");
    },
    dontReset(){
      this.$emit("dontReset");
    }
  }
};
</script>
