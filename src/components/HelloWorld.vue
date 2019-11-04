<template>
  <div class="hello">
    <h1>这是home页的hello组件</h1>
    <p>
      <span></span>测试v-text
      <span v-text="textP" :class="{red:true}"></span>
    </p>
    <p>
      <span></span>测试v-html
      <span v-html="htmlP" :style="{fontSize:size+'px',background:bg}"></span>
    </p>
    <p>
      <span>v-bind</span>
      <span :title="hello">&nbsp;&nbsp;&nbsp;看我的title</span>
    </p>
    <p>
      <span>{{hello}}</span>
      <span>使用局部过滤器后{{hello | upper}}</span>
    </p>
    <p>
      <span>{{hello}}</span>
      <span>使用全局过滤器后{{hello | globalUpper}}</span>
    </p>
    <p>
      <span>v-pre</span>
      <span v-pre>{{这段内容不会解析}}</span>
    </p>
    <p>
      <span v-if="isShow">v-if</span>
      <span v-show="isShow">v-show</span>
    </p>
    <p>
      <span>a:{{a}}</span>
      <span @click="a++">改变a</span>
    </p>
    <p>
      <span>obj:{{obj}}</span>
      <span @click="obj.b.value=3">改变obj.b.value</span>
    </p>
    <p>
      <span>firstName:{{firstName}}</span>
      <span>lastName:{{lastName}}</span>
      <span>fullName:{{fullName}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      textP:
        "这是一个段落，这是一个段落，这是一个段落，这是一个段落，这是一个段落。",
      htmlP: '<span style="color:red">这是v-html的文本</span>',
      hello: "hello vue",
      size: 20,
      bg: "#acacac",
      isShow: true,
      a: 1,
      obj: {
        a: 1,
        b: {
          value: 2
        }
      },
      firstName: "mircle",
      lastName: "john"
    };
  },
  computed: {
    fullName() {
      return this.firstName + this.lastName;
    }
  },
  watch: {
    a: (newValue, oldValue) => {
      console.log("newValue：" + newValue, "oldValue：" + oldValue);
    },
    obj: {
      handler(newValue, oldValue) {
        console.log(newValue, oldValue);
      },
      deep: true //设置deep：true监听到对象内部的变化
    }
    // 监听对象的某个属性
    // "obj.b.value": (newValue, oldValue) => {
    //   console.log(newValue, oldValue);
    // }
  },
  filters: {
    upper(val) {
      return val.toUpperCase();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  .red {
    color: #f00;
  }
  p {
    margin: 0;
    padding: 0;
    border-top: 1px solid #acacac;
    span:not(:nth-child(1)) {
      margin-left: 50px;
      background: #acd;
    }
  }
}
</style>
