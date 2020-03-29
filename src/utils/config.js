import Vue from 'vue'
import Api from '@/api'
import CustomIcon from '@/components/custom-icon/custom-icon'
import DialogFooter from '@/components/dialog-footer/dialog-footer'
import {
  Pagination,
  Dialog,
  Input,
  InputNumber,
  Button,
  ButtonGroup,
  Form,
  FormItem,
  Tabs,
  TabPane,
  Tag,
  Alert,
  Icon,
  Row,
  Col,
  Badge,
  Card,
  Rate,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Link,
  Divider,
  Image,
  Backtop,
  PageHeader,
  Loading,
  MessageBox,
  Message,
  Notification
} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/styles/index.scss'

Vue.component('custom-icon', CustomIcon)
Vue.component('dialog-footer', DialogFooter)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

Vue.use(Api)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Alert)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Badge)
Vue.use(Card)
Vue.use(Rate)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Link)
Vue.use(Divider)
Vue.use(Image)
Vue.use(Backtop)
Vue.use(PageHeader)
Vue.use(Loading.directive)
