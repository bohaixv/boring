<template>
  <div class="app">
    {{ message }} 
  </div>
</template>

<script>
export default {
  name:'App',
  data(){
    return {
      message:'hello this is my first vue'
    }
  }
}
</script>


<style>
  .app{
    width:100px;
    height:100px;
    background:#000;
  }
</style>