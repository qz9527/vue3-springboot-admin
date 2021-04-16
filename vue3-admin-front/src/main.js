import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import installElement from './plugins/element-plus.js'
import VueContextMenu from 'vue-contextmenu'


const app = createApp(App)
installElement(app)
app.use(VueContextMenu)
app.use(store).use(router).mount("#app");