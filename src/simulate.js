// 引用完整版 Vue，方便讲解
import Vue from "vue/dist/vue.js";

Vue.config.productionTip = false;

new Vue({
    data: {
        user: {
            email: "2514509399@qq.com",
            nickname: "范范",
            phone: "15207191451"
        },
        displayName: ""
    },
    watch: {
        'user.email': {
            handler() {
                console.log('email变了')
                const { user: { email, nickname, phone } } = this
                this.displayName = nickname || email || phone
            },
            immediate: true

        },
        'user.nickname': {
            handler() {
                console.log('nickname变了')
                const { user: { email, nickname, phone } } = this
                this.displayName = nickname || email || phone
            },
            immediate: true
        },
        'user.phone': {
            handler() {
                console.log('phone变了')
                const { user: { email, nickname, phone } } = this
                this.displayName = nickname || email || phone
            },
            immediate: true
        },
    },
    // 不如用 computed 来计算 displayName
    template: `
    <div>
       {{displayName}}
       <button @click="user.nickname=undefined">remove nickname</button>
    </div>
  `,
    methods: {
        changed() {
            console.log(arguments);
            const user = this.user;
            this.displayName = user.nickname || user.email || user.phone;
        }
    }
}).$mount("#san");
