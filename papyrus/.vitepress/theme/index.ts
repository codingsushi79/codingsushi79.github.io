import DefaultTheme from 'vitepress/theme'
import DownloadPicker from './components/DownloadPicker.vue'
import Layout from './Layout.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('DownloadPicker', DownloadPicker)
  },
}
