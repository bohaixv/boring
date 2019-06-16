<template>
  <div class="app">
    <div>{{ message }}</div>
    <children/>
    <slot-test>{{content}}</slot-test>
  </div>
</template>

<script>
import SlotTest from "./SlotTest.vue";
import Children from "./children";

export default {
  name: "App",
  components: {
    SlotTest,
    Children
  },
  data() {
    return {
      message: "hello this is my first vue",
      content: "slot content"
    };
  },
  watch: {
    message(newVal) {
      console.log(newVal);
    }
  }
};
</script>


<style>
.app {
  width: 100px;
  height: 100px;
  background: #000;
}
</style>