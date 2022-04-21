<template>
  <a-layout>
    <!--    topbar-->
    <top-bar/>
    <!--    sidebar-->
    <side-bar/>
  </a-layout>
</template>
<script lang="js">
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons-vue';
import {defineComponent, ref} from 'vue';
import TopBar from "./components/layout/TopBar.vue";
import SideBar from "./components/layout/Sidebar.vue";

export default defineComponent({
  components: {
    SideBar,
    TopBar,
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    return {
      collapsed: ref(false),

    };
  },
});
</script>


<!--<script>-->



// export default {
//   name: 'App',
//   setup() {
//
//     return {}
//   },

//   data: () => ({
//     links: [
//       'Dashboard',
//       'Messages',
//       'Profile',
//       'Updates',
//     ],
//   }),
// }
<!--</script>-->
<style>
#components-layout-demo-top-side-2 .logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
}

.ant-row-rtl #components-layout-demo-top-side-2 .logo {
  float: right;
  margin: 16px 0 16px 24px;
}

.site-layout-background {
  background: #fff;
}
</style>