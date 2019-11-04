import Vue from 'vue'
Vue.filter("globalUpper",(val)=>{
    return val.toUpperCase().concat('...')
})