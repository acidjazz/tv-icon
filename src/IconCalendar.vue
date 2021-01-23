<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path :class="[secondary, 'fill-current']" d="M0 192v272a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V192zm304-64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16zm-192 0h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16z" />
    <path :class="[primary, 'fill-current']" d="M448 112v80H0v-80a48 48 0 0 1 48-48h48v48a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V64h128v48a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V64h48a48 48 0 0 1 48 48z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
