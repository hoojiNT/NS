import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
// import vuetify from './plugins/vuetify'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {loadFonts} from './plugins/webfontloader'
import {createPinia} from 'pinia'

const pinia = createPinia()
loadFonts()

createApp(App)
    .use(pinia)
    .use(router)
    .use(Antd)
    // .use(vuetify)
    .mount('#app')
