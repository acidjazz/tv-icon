<template>
  <svg viewBox="0 0 448 512">
    <path :class="['fill-current', secondary]" d="M152 224H72v-72C72 68.2 140.2 0 224 0s152 68.2 152 152v72h-80v-72a72 72 0 0 0-144 0z" />
    <path :class="['fill-current', primary]" d="M448 272v192a48 48 0 0 1-48 48H48a48 48 0 0 1-48-48V272a48 48 0 0 1 48-48h352a48 48 0 0 1 48 48z" />
  </svg>
</template>

<script>
import icon from '@/mixins/icon'
export default { mixins: [ icon ] }
</script>
