import DefaultTheme from 'vitepress/theme'
import DownloadPicker from './components/DownloadPicker.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('DownloadPicker', DownloadPicker)
  },
}
