<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path :class="[primary, 'fill-current']" d="M448 0H64A64.06 64.06 0 0 0 0 64v288a64.06 64.06 0 0 0 64 64h96v84a12 12 0 0 0 19.1 9.7L304 416h144a64.06 64.06 0 0 0 64-64V64a64.06 64.06 0 0 0-64-64zm-80 216a16 16 0 0 1-16 16h-72v72a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-72h-72a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h72v-72a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v72h72a16 16 0 0 1 16 16z" />
    <path :class="[secondary, 'fill-current']" d="M144 200a16 16 0 0 1 16-16h72v-72a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16v72h72a16 16 0 0 1 16 16v16a16 16 0 0 1-16 16h-72v72a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-72h-72a16 16 0 0 1-16-16z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
