import './js/main';
import './scss/style.scss';

window.Vue = require('vue');

Vue.component('example-component', require("./components/example.vue").default);

let app = new Vue({
	el: '#app'
})