<template>
  <i :style="{fontSize: getSize, color}"
     :class="[type]"></i>
</template>

<script>
  export default {
    name: 'custom-icon',
    props: {
      type: {
        String,
        default: ''
      },
      color: {
        String,
        default: ''
      },
      size: {
        type: [String, Number],
        default: 16
      }
    },
    computed: {
      getSize () {
        return this.size + 'px'
      }
    }
  }
</script>

<style scoped>

</style>
