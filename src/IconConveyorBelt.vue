<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path :class="[secondary, 'fill-current']" d="M128 240V16a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16v224a16 16 0 0 1-16 16H144a16 16 0 0 1-16-16z" />
    <path :class="[primary, 'fill-current']" d="M544 320H96a96 96 0 0 0 0 192h448a96 96 0 0 0 0-192zM128 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm192 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32zm192 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32zM384 128V0H256v128l64-32z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
