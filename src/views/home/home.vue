<template>
  <div class="home">
    <div class="banner">
      <div class="banner__block bg-dark text-white">
        分类栏
      </div>
      <div class="banner__carousel bg-weak">
        <carousel height="500px">
          <template v-for="(item, index) in carouselImages">
            <carousel-item :key="index">
              <h1 class="fw900 f20 text-white">{{item}}</h1>
            </carousel-item>
          </template>
        </carousel>
      </div>
      <div class="banner__block bg-dark text-white">
        公告栏
      </div>
    </div>
    <div class="new">
      <template v-for="(item, index) in newList">
        <custom-section height="800px"
                        action-text="更多"
                        action-icon="el-icon-d-arrow-right"
                        :key="index"
                        :class="[item.class]"
                        :title="item.title">
        </custom-section>
      </template>
    </div>
    <div class="hot">
      <template v-for="(item, index) in hotList">
        <custom-section class="hot__item"
                        height="600px"
                        action-text="更多"
                        action-icon="el-icon-d-arrow-right"
                        :key="index"
                        :title="item.title"></custom-section>
      </template>
    </div>
    <div class="recommend">
      <template v-for="(item, index) in recommendList">
        <custom-section class="recommend__item"
                        height="750px"
                        action-text="更多"
                        action-icon="el-icon-d-arrow-right"
                        :key="index"
                        :title="item.title"></custom-section>
      </template>
    </div>
  </div>
</template>

<script>
  import { Carousel, CarouselItem } from 'element-ui'
  import CustomSection from './components/custom-section'

  export default {
    name: 'home',
    components: {
      CustomSection,
      Carousel,
      CarouselItem
    },
    data () {
      return {
        carouselImages: ['123', '23', '231', '234'], // 轮播图
        newList: [
          {
            title: '最新免费更新',
            class: 'new__default'
          }, {
            title: '最新VIP更新',
            class: 'new__vip'
          }], // 最新列表
        hotList: [
          {
            title: '24小时热销榜',
            key: 'day'
          }, {
            title: '周点击榜',
            key: 'weekHit'
          }, {
            title: '周推荐榜',
            key: 'week'
          }, {
            title: '打赏榜',
            key: 'hit'
          }, {
            title: '新书榜',
            key: 'newBook'
          }], // 热榜列表
        recommendList: [{ title: '新书推荐' }, { title: '经典完本' }] // 推荐列表
      }
    }
  }
</script>

<style scoped
       lang="scss">
  .home {
    .banner {
      display: flex;
      height: 500px;

      &__block, &__carousel {
        height: 100%;
      }

      &__block {
        width: 250px;
      }

      &__carousel {
        flex: auto;
      }
    }

    .new, .hot, .recommend {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }

    .new {
      &__default {
        width: 300px;
      }

      &__vip {
        width: 870px;
      }
    }

    .hot {
      &__item {
        width: 220px;
      }
    }

    .recommend {
      &__item {
        width: 500px;
      }
    }
  }
</style>
