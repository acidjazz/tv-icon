import IconBang from './IconBang.vue'
import IconCheck from './IconCheck.vue'
import IconInfo from './IconInfo.vue'
import IconTimes from './IconTimes.vue'
import IconEnvelope from './IconEnvelope.vue'
import IconGithub from './IconGithub.vue'
import IconLaravel from './IconLaravel.vue'
import IconNuxt from './IconNuxt.vue'
import IconPhone from './IconPhone.vue'
import IconSignIn from './IconSignIn.vue'
import IconToast from './IconToast.vue'

const IconList = {
  IconBang: IconBang,
  IconCheck: IconCheck,
  IconInfo: IconInfo,
  IconTimes: IconTimes,
  IconEnvelope: IconEnvelope,
  IconGithub: IconGithub,
  IconLaravel: IconGithub,
  IconNuxt: IconNuxt,
  IconPhone: IconPhone,
  IconSignIn: IconSignIn,
  IconToast: IconToast,
}

export default {
  install (Vue, options = {}) {
    for (var key in IconList) {
      Vue.component(key, IconList[key])
    }
  }
}

export {
  IconBang,
  IconCheck,
  IconInfo,
  IconTimes,
  IconEnvelope,
  IconGithub,
  IconLaravel,
  IconNuxt,
  IconPhone,
  IconSignIn,
  IconToast,
  IconList,
}
