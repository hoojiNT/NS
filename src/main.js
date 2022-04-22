import {createApp, provide, h} from 'vue'
import App from './App.vue'
import router from './router'
// import vuetify from './plugins/vuetify'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import {loadFonts} from './plugins/webfontloader'
import {createPinia} from 'pinia'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import {DefaultApolloClient} from '@vue/apollo-composable'

const pinia = createPinia()
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: 'http://localhost:1337/graphql',
})
// Cache implementation
const cache = new InMemoryCache()
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})
loadFonts()
createApp({...App,
  setup () {
    provide(DefaultApolloClient, apolloClient)
  }
})
  .use(pinia)
  .use(router)
  .use(Antd)
  // .use(vuetify)
  .mount('#app')
