import { createApp } from 'vue'
import App from './App.vue'
import NavbarVue from './components/NavbarVue.vue';
import FormContenerVue from './components/FormContenerVue.vue';
import CardItemVue from './components/CardItemVue.vue';

const app = createApp(App);

app.component("navbar-vue",NavbarVue);
app.component("formContener-vue",FormContenerVue);
app.component("cardIrem-vue",CardItemVue);

app.mount('#app')
