<template>
  <div class="slot-test">
    <slot/>
    <span>{{ data }}</span>
  </div>
</template>

<script>
export default {
  name: "SlotTest",
  data() {
    debugger;
    return {
      data: "slot data test"
    };
  }
};
</script>


<style >
.slot-test {
  color: brown;
}
</style>