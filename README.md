computed 和 watch 的区别
1. computed是计算属性，watch监听属性
2. computed调用时不用加括号，可以当属性一样用，根据依赖自动缓存，如果依赖不变，computed的值不会重新计算
3. watch用来监听数据变化，有两个选项，immediate和deep，immediate表示是否在第一次渲染执行这个函数，默认是false不执行，deep监听对象是否看里面属性的变化，默认是false（属性值变了，对象不认为变了）
