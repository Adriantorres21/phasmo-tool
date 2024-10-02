import { createApp } from 'vue'
import router from "./router";
import './style.css'
import App from './App.vue'
import axios from 'axios';
import VueAxios from "vue-axios";
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.min.css'

const app = createApp(App);
const vuetify = createVuetify({
    components,
    directives,
    theme: {},
  });

app.use(router);
app.use(VueAxios, axios);
app.use(vuetify);

app.mount('#app');
