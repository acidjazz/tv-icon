<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path :class="['fill-current', secondary]" d="M368 96v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V96z" />
    <path :class="['fill-current', primary]" d="M432 48v32a16 16 0 0 1-16 16H272v368a16 16 0 0 1-16 16h-32a16 16 0 0 1-16-16V352h-32a160 160 0 0 1 0-320h240a16 16 0 0 1 16 16z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
