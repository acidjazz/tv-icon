<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
    <path :class="['fill-current', secondary]" d="M208 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm96-384H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
    <path :class="['fill-current', primary]" d="M158.75 96h82.5l-80 320h-82.5z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
