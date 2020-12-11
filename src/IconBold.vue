<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path :class="['fill-current', secondary]" d="M32 32h32v80H32a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16zm32 368v80H32a16 16 0 0 1-16-16v-48a16 16 0 0 1 16-16z" />
    <path :class="['fill-current', primary]" d="M332.53 237.78c12.86-15.8 24.9-44.81 26.93-65C366.85 96.48 306.81 32 232 32H64v448h183.62C322.94 480 384 419.11 384 344a135.36 135.36 0 0 0-51.47-106.22zM144 112h88a48 48 0 1 1 0 96h-88zm88 288h-88V288h88a56 56 0 1 1 0 112z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
