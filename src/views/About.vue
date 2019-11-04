<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>
      <span>局部自定义指令</span>
      <input type="text" v-autofocus />
    </p>
    <p>
      <span v-color="'red'">全局自定义指令</span>
    </p>
  </div>
</template>
<script>
export default {
  name: "about",
  data() {
    return {};
  },
  directives: {
    autofocus: {
      inserted: function(el) {
        el.focus();
      }
    }
  }
};
</script>