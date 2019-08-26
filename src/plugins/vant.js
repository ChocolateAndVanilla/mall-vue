import Vue from 'vue'
import {
  Grid, GridItem,
  Toast,
  Swipe, SwipeItem,
  Tabbar, TabbarItem,
  Button,
  NavBar
} from 'vant'

Vue
  .use(Grid).use(GridItem)
  .use(Swipe).use(SwipeItem)
  .use(Tabbar).use(TabbarItem)
  .use(NavBar)
  .use(Button)

Vue.prototype.$Toast = Toast
