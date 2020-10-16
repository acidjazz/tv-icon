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
import IconBell from './IconBell.vue'
import IconCalendar from './IconCalendar.vue'
import IconMarker from './IconMarker.vue'
import IconOfficePhone from './IconOfficePhone.vue'
import IconSearch from './IconSearch.vue'
import IconSpinner from './IconSpinner.vue'
import IconAws from './IconAws.vue'
import IconBellOn from './IconBellOn.vue'
import IconBitBucket from './IconBitBucket.vue'
import IconBook from './IconBook.vue'
import IconBookOpen from './IconBookOpen.vue'
import IconBooks from './IconBooks.vue'
import IconChevronLeft from './IconChevronLeft.vue'
import IconChevronRight from './IconChevronRight.vue'
import IconFume from './IconFume.vue'
import IconGitLab from './IconGitLab.vue'
import IconInvoiceDollar from './IconInvoiceDollar.vue'
import IconQuestion from './IconQuestion.vue'
import IconAwsColor from './IconAwsColor.vue'
import IconGoogleCloud from './IconGoogleCloud.vue'
import IconImage from './IconImage.vue'
import IconImages from './IconImages.vue'
import IconUpload from './IconUpload.vue'
import IconUsers from './IconUsers.vue'
import IconUsersPlus from './IconUsersPlus.vue'
import IconWindow from './IconWindow.vue'
import IconWindowsColor from './IconWindowsColor.vue'
import IconCog from './IconCog'
import IconSignOut from './IconSignOut'

const IconList = {
  IconBang: IconBang,
  IconCheck: IconCheck,
  IconInfo: IconInfo,
  IconTimes: IconTimes,
  IconEnvelope: IconEnvelope,
  IconGithub: IconGithub,
  IconLaravel: IconLaravel,
  IconNuxt: IconNuxt,
  IconPhone: IconPhone,
  IconSignIn: IconSignIn,
  IconToast: IconToast,
  IconBell: IconBell,
  IconCalendar: IconCalendar,
  IconMarker: IconMarker,
  IconOfficePhone: IconOfficePhone,
  IconSearch: IconSearch,
  IconSpinner: IconSpinner,
  IconAws: IconAws,
  IconBellOn: IconBellOn,
  IconBitBucket: IconBitBucket,
  IconBook: IconBook,
  IconBookOpen: IconBookOpen,
  IconBooks: IconBooks,
  IconChevronLeft: IconChevronLeft,
  IconChevronRight: IconChevronRight,
  IconFume: IconFume,
  IconGitLab: IconGitLab,
  IconInvoiceDollar: IconInvoiceDollar,
  IconQuestion: IconQuestion,
  IconAwsColor: IconAwsColor,
  IconGoogleCloud: IconGoogleCloud,
  IconImage: IconImage,
  IconImages: IconImages,
  IconUpload: IconUpload,
  IconUsers: IconUsers,
  IconUsersPlus: IconUsersPlus,
  IconWindow: IconWindow,
  IconWindowsColor: IconWindowsColor,
  IconCog: IconCog,
  IconSignOut: IconSignOut,
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
  IconBell,
  IconCalendar,
  IconMarker,
  IconOfficePhone,
  IconSearch,
  IconSpinner,
  IconAws,
  IconBellOn,
  IconBitBucket,
  IconBook,
  IconBookOpen,
  IconBooks,
  IconChevronLeft,
  IconChevronRight,
  IconFume,
  IconGitLab,
  IconInvoiceDollar,
  IconQuestion,
  IconAwsColor,
  IconGoogleCloud,
  IconImage,
  IconImages,
  IconUpload,
  IconUsers,
  IconUsersPlus,
  IconWindow,
  IconWindowsColor,
  IconCog,
  IconSignOut,
}
