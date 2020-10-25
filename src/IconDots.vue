<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512">
    <path :class="[secondary, 'fill-current']" d="M96 184a72 72 0 1 0 72 72 72 72 0 0 0-72-72z" />
    <path :class="[primary, 'fill-current']" d="M96 152a72 72 0 1 0-72-72 72 72 0 0 0 72 72zm0 208a72 72 0 1 0 72 72 72 72 0 0 0-72-72z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
