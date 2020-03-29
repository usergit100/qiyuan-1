<template>
  <div class="dialog-footer">
    <ElButton v-bind="{...mergeProps('cancel')}"
              @click="onCancel">
      {{cancelText}}
    </ElButton>
    <ElButton v-bind="{...mergeProps()}"
              @click="onConfirm">
      {{confirmText}}
    </ElButton>
  </div>
</template>

<script>
  export default {
    name: 'dialog-footer',
    props: {
      visible: {
        Boolean,
        default: false
      },
      cancelText: {
        String,
        default: '取消'
      },
      confirmText: {
        String,
        default: '确定'
      },
      cancelProps: {
        Object,
        default: () => ({})
      },
      confirmProps: {
        Object,
        default: () => ({ type: 'primary' })
      }
    },
    methods: {
      mergeProps (btn = 'confirm') {
        return Object.assign({}, this[`${btn}Props`])
      },
      onCancel () {
        this.$emit('update:visible', false)
        this.$emit('on-cancel')
      },
      onConfirm () {
        this.$emit('on-confirm')
      }
    }
  }
</script>

<style scoped>

</style>
