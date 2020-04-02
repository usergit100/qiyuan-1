<template>
  <div class="page-container">
    <header class="page-header">
      <div class="page-header__logo bg-dark text-white">
        LOGO
      </div>
      <div class="page-header__actions">
        <div class="page-header__actions__search-box">
          <el-input class="search-box__input"></el-input>
          <el-button class="search-box__btn">搜索</el-button>
        </div>
        <div class="page-header__actions__list">
          <template v-for="(action, index) in actionList">
            <el-link class="actions__list__item f16"
                     :key="index"
                     :icon="action.icon">{{action.text}}
            </el-link>
          </template>
        </div>
      </div>
    </header>
    <nav class="page-nav bg-deep text-white">
      <div class="page-nav__block">
        <el-link class="actions__list__item f16"
                 icon="el-icon-s-unfold">
          作品分类
        </el-link>
      </div>
      <div class="page-nav__list">
        <template v-for="(nav, index) in navList">
          <el-link class="page-nav__list__item f16"
                   :key="index"
                   @click.native.stop="turnTo(nav)">
            {{nav.text}}
          </el-link>
        </template>
      </div>
      <div class="page-nav__block">
        <el-link class="actions__list__item f16">
          作品分类
        </el-link>
      </div>
    </nav>
    <main class="page-body">
      <keep-alive v-if="useCache">
        <router-view :key="$route.path"></router-view>
      </keep-alive>
      <router-view v-else
                   :key="$route.path"></router-view>
    </main>
    <footer class="page-footer bg-dark text-white">
      底部信息
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'page-main',
    data () {
      return {
        actionList: [
          {
            text: '登录·注册',
            icon: 'el-icon-user'
          }, {
            text: '充值',
            icon: 'el-icon-coin'
          }, {
            text: '添加到书架',
            icon: 'el-icon-circle-plus-outline'
          }, {
            text: '看过',
            icon: 'el-icon-refresh'
          }, {
            text: '消息',
            icon: 'el-icon-tickets'
          }, {
            text: '写书',
            icon: 'el-icon-edit'
          }], // 操作列表
        navList: [
          {
            path: '/rank',
            name: 'rank',
            text: '排行榜'
          }, {
            path: '/finished',
            name: 'finished',
            text: '完本'
          }, {
            path: '/free',
            name: 'free',
            text: '免费'
          }, {
            path: '/author',
            name: 'author',
            text: '作者中心'
          }, {
            path: '/artist',
            name: 'artist',
            text: '美工专区'
          }, {
            path: '/reqArticle',
            name: 'reqArticle',
            text: '约稿'
          }] // 导航列表
      }
    },
    computed: {
      // 使用缓存
      useCache () {
        return this.$route.meta && !this.$route.meta.noCache
      }
    },
    methods: {
      /**
       * 导航跳转
       * @param nav
       */
      turnTo (nav) {
        this.$router.push(nav.name)
      }
    }
  }
</script>

<style scoped
       lang="scss">
  .page-container {
    position: relative;
    width: 1200px;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;

    .page-header {
      display: flex;
      height: 100px;

      &__logo {
        width: 250px;
        height: 100%;
      }

      &__actions {
        flex: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        &__search-box {
          display: flex;
          justify-content: flex-end;
          width: 400px;

          .search-box {
            &__input {
              width: 220px;

              &::v-deep > .el-input__inner {
                border-color: $color-dark;
                border-top-right-radius: 0 !important;
                border-bottom-right-radius: 0 !important;
              }
            }

            &__btn {
              border-left: 0 !important;
              color: $color-white !important;
              background: $color-dark !important;
              border-top-left-radius: 0 !important;
              border-bottom-left-radius: 0 !important;
            }
          }
        }

        &__list {
          .actions__list__item:nth-child(n + 2) {
            margin-left: 10px !important;
          }
        }
      }
    }

    .page-nav {
      display: flex;
      align-items: center;
      width: 100%;
      height: 45px;

      &::v-deep .el-link.el-link--default {
        color: $color-white;

        &:hover {
          color: $color-blue;
        }
      }

      &__block {
        width: 250px;
        text-align: center;
      }

      &__list {
        flex: auto;
        display: flex;
        justify-content: space-around;
      }
    }

    .page-footer {
      height: 500px;
    }
  }
</style>
