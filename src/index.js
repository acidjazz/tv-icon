import IconBang from './IconBang.vue'
import IconCheck from './IconCheck.vue'
import IconInfo from './IconInfo.vue'
import IconTimes from './IconTimes.vue'
const components = [
  IconBang,
  IconCheck,
  IconInfo,
  IconTimes,
]

export default {
  install (Vue, options = {}) {
    components.forEach(component => {
      Vue.component(component.name, component)
    })
  }
}
export {
  IconBang,
  IconCheck,
  IconInfo,
  IconTimes,
}
