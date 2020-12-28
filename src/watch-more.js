// 引用完整版 Vue，方便讲解
import Vue from "vue/dist/vue.js";

Vue.config.productionTip = false;

/** const vm =**/ new Vue({
    data: {
        n: 0,
        obj: {
            a: "a"
        }
    },
    template: `
    <div>
      <button @click="n += 1">n+1</button>
      <button @click="obj.a += 'hi'">obj.a + 'hi'</button>
      <button @click="obj = {a:'a'}">obj = 新对象</button>
    </div>
  `,
    created() {
        this.$watch(
            "n",
            function () {
                console.log("n变了");
            },
            { immediate: true }
        );
    },
    watch: {
        // n(){
        //   console.log('n变了')
        // },
        obj() {
            console.log("obj 变了");
        },
        "obj.a": function () {
            console.log("obj.a 变了");
        }
    }
}).$mount("#watch");

// vm.$watch(
//   "n",
//   function () {
//     console.log("n变了");
//   },
//   { immediate: true }
// );
