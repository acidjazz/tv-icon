<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
    <path :class="['fill-current', secondary]" d="M640 240.13v31.74A16 16 0 0 1 624.13 288H15.87A16 16 0 0 1 0 271.87v-31.74A16 16 0 0 1 15.87 224h608.26A16 16 0 0 1 640 240.13z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
