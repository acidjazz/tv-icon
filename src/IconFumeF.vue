<template>
  <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path :class="[primary, 'fill-current']" d="M 4.097 15.925 L 4.097 23.817 C 1.916 23.817 0.145 22.05 0.145 19.871 L 0.145 15.925 L 4.097 15.925 Z M 15.956 8.032 C 15.956 10.211 14.187 11.978 12.003 11.978 L 0.145 11.978 L 0.145 8.032 L 15.956 8.032 Z M 23.862 0.14 C 23.862 2.318 22.093 4.086 19.909 4.086 L 0.145 4.086 C 0.145 1.905 1.916 0.14 4.097 0.14 L 23.862 0.14 Z"/>
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
