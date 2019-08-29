import Vue from 'vue'
import {
  ImagePreview,
  Lazyload,
  Tab, Tabs,
  Cell, CellGroup,
  Tag,
  Card,
  Grid, GridItem,
  Toast,
  Swipe, SwipeItem,
  Tabbar, TabbarItem,
  Button,
  NavBar
} from 'vant'

const options = {
  loading: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566992483697&di=1b9d59e5befe46096bcb18d247f71c9c&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F1f828e876d3b9aed1bcd3213f28db91c0e8f44589965-9droKD_fw658'
}

Vue
  .use(Lazyload, options)
  .use(Tab).use(Tabs)
  .use(Cell).use(CellGroup)
  .use(Tag)
  .use(Card)
  .use(Grid).use(GridItem)
  .use(Swipe).use(SwipeItem)
  .use(Tabbar).use(TabbarItem)
  .use(NavBar)
  .use(Button)

Vue.prototype.$Toast = Toast

Vue.prototype.$ImagePreview = ImagePreview
