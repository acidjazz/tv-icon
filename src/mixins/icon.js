export default {
  props: {
    primary: {
      type: String,
      required: false,
      default: 'text-gray-400 dark:text-gray-600',
    },
    secondary: {
      type: String,
      required: false,
      default: 'text-gray-300 dark:text-gray-500',
    },
    third: {
      type: String,
      required: false,
      default: 'text-indigo-100 dark:text-indigo-600',
    },
  },
}
