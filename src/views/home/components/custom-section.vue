<template>
  <section class="custom-section dib">
    <div v-if="showHeader"
         class="custom-section__header">
      <div class="custom-section__header__title">
        <slot name="title">{{title}}</slot>
      </div>
      <div class="custom-section__header__action"
           @click.stop="$emit('on-action')">
        <slot name="action">
          <el-link :icon="icon">
            {{actionText}}
            <custom-icon :type="actionIcon"
                         :size="iconSize"></custom-icon>
          </el-link>
        </slot>
      </div>
    </div>
    <section class="custom-section__body bg-weak"
             :class="[...[className].flat(Infinity)]">
      <slot></slot>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'custom-section',
    props: {
      title: {
        type: String,
        default: ''
      },
      icon: {
        String,
        default: ''
      },
      actionText: {
        String,
        default: ''
      },
      actionIcon: {
        String,
        default: ''
      },
      iconSize: {
        type: [String, Number],
        default: 16
      },
      className: {
        type: [String, Array],
        default: ''
      }
    },
    computed: {
      showHeader () {
        return this.title || this.icon || this.actionText || this.actionIcon || this.$slots.title || this.$slots.action
      }
    }
  }
</script>

<style scoped
       lang="scss">
  .custom-section {
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $color-deep;
    }
  }
</style>
