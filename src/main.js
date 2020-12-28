// 引用完整版 Vue，方便讲解

Vue.config.productionTip = false;
let id = 0;

const createName = (name, gender) => {
    id += 1;
    return {
        id: id,
        name: name,
        gender: gender
    };
};
new Vue({
    data() {
        return {
            users: [
                createName("小明", "男"),
                createName("小黄", "女"),
                createName("小白", "男"),
                createName("小丽", "女")
            ],
            gender: ""
        };
    },
    computed: {
        displayName() {
            console.log("计算了一次");
            const hash = {
                male: "男",
                female: "女"
            };
            const { gender, users } = this; //析构赋值 ===this.gender和this.users
            if (gender === "") {
                return users;
            } else if (gender === "male" || gender === "female") {
                return users.filter((u) => u.gender === hash[gender]);
            } else {
                throw new Error("gender 的值是意外的值");
            }
        }
    },
    methods: {
        setGender(string) {
            return (this.gender = string);
        }
    },
    template: `
    <div>
      <div>
      <button @click='setGender("")'>全部</button>
      <button @click='setGender("male")'>男</button>
      <button @click='setGender("female")'>女</button>
      </div>
      <ul>
        <li v-for="(u,index) in displayName" :key="index"> 
         {{u.id}}-{{u.name}}-{{u.gender}}
        </li>
      </ul>
    </div>
  `
}).$mount("#app"); //v-for="u in users":遍历users并将每一项取名为u
