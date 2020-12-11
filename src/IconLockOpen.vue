<template>
  <svg viewBox="0 0 576 512">
    <path :class="['fill-current', secondary]" d="M576 152v80a23.94 23.94 0 0 1-24 24h-32a23.94 23.94 0 0 1-24-24v-80a72.11 72.11 0 0 0-72.7-72c-39.6.4-71.3 33.3-71.3 72.9V224h-80v-70.5C272 69.5 339.5.3 423.5 0S576 68 576 152z" />
    <path :class="['fill-current', primary]" d="M448 272v192a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V272a48 48 0 0 1 48-48h352a48 48 0 0 1 48 48z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
