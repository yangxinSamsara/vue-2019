//    import Vue from 'vue'
//    Vue.directive('dColor', {
//        // bind只调用一次 指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
//        bind: function (el, binding, vnode) {

//        },
//        // inserted这个钩子函数调用的时候，当前元素已经插入页面中了，也就是说可以获取到父级节点了
//        inserted: function (el, binding, vnode) {
//            console.log(el, binding, vnode)
//            el.style.color = "red"
//        }
//    })
//    Vue.directive('color', {
//        inserted: function (el, binding, vnode) {
//            el.style.color = 'red'
//        }
//    })

// 另一种引入方式
export default (Vue) => {
    Vue.directive('color', {
        inserted: function (el, binding, vnode) {
            el.style.color = binding.value
        }
    })
}