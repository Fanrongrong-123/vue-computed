new Vue({
    data: {
        n: 0,
        history: [],
        inUndoMode: false
    },
    watch: {
        n(newValue, oldValue) {
            console.log(`在不在撤销模式，${this.inUndoMode ? "在" : "不在"}`)
            if (!this.inUndoMode) {
                return this.history.push({ from: oldValue, to: newValue })
            }
        }
    },
    methods: {
        add1() {
            return this.n += 1
        },
        add2() {
            return this.n += 2
        },
        minus1() {
            return this.n -= 1
        },
        minus2() {
            return this.n -= 2
        },
        undo() {
            const last = this.history.pop()
            const old = last.from
            this.inUndoMode = true
            this.n = old    //watch是异步的
            this.$nextTick(() => {  //和watch一样的异步操作
                return this.inUndoMode = false
            }, 0)
        }
    },
    template: `
        <div>
            {{n}}
            <div>
                <button @click='add1'>+1</button>
                <button @click='add2'>+2</button>
                <button @click='minus1'>-1</button>
                <button @click='minus2'>-2</button>
            </div>
            <hr>
            <div>
                <button @click='undo'>撤销</button>
            </div>
            <hr>
            {{history}}
        </div>
    `

}).$mount('#apple')