<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
    <path :class="[secondary, 'fill-current']" d="M0 432a48 48 0 0 0 48 48h480a48 48 0 0 0 48-48V256H0zm192-68a12 12 0 0 1 12-12h136a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H204a12 12 0 0 1-12-12zm-128 0a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12v40a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12zM528 32H48A48 48 0 0 0 0 80v48h576V80a48 48 0 0 0-48-48z" />
    <path :class="[primary, 'fill-current']" d="M576 256H0V128h576z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
