<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
    <path :class="[secondary, 'fill-current']" d="M288,0a32,32,0,0,0-32,32V160h64V32A32,32,0,0,0,288,0ZM96,0A32,32,0,0,0,64,32V160h64V32A32,32,0,0,0,96,0Z" />
    <path :class="[primary, 'fill-current']" d="M384,176v32a16,16,0,0,1-16,16H352v32A160.07,160.07,0,0,1,224,412.8V512H160V412.8A160.07,160.07,0,0,1,32,256V224H16A16,16,0,0,1,0,208V176a16,16,0,0,1,16-16H368A16,16,0,0,1,384,176Z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
