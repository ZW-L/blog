<template>
  <div class="archive">
    <h1 class="title">共 92 篇，继续努力！</h1>
    <div class="archive-content">
      <div class="archive-content_line"></div>
      <div class="archive-content_main">
        <div class="list-of-year" v-for="year of allYear" :key="year">
          <h1 class="list-of-year_tag">
            <span class="wrapper">{{ year }}</span>
          </h1>
          <div class="list-of-year_item"
            v-for="(item, index) of formatedPost[year]" :key="index"
          >
            <p class="list-of-year_item-dot"></p>
            <post-item :post="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { initPage } from '@theme/utils/config.js'
import { formatDate } from '@theme/utils/date.js'
import { publishPost } from '@theme/utils/extract.js'
import PostItem from '@theme/components/PostItem'

export default {
  components: {
    PostItem,
  },
  computed: {
    post () {
      return publishPost(this.$site.pages)
    },
    /**
     * 1.根据日期倒序排序文档
     * 2.返回以年份为键、以文档数组为值的对象
     * @returns {object}
     */
    formatedPost () {
      let ac = this.post
        .sort((a, b) => new Date(b.frontmatter.createTime) - new Date(a.frontmatter.createTime))
      let ret = {}
      for (const iter of ac) {
        const year = new Date(iter.frontmatter.createTime).getFullYear().toString()
        if (!ret.hasOwnProperty(year)) {
          ret[year] = []
        }
        ret[year].push(iter)
      }

      return ret
    },
    /**
     * 所有年份的倒序
     * @returns {array}
     */
    allYear () {
      return Object.keys(this.formatedPost).sort((a, b) => b - a)
    }
  },
  mounted () {
    // console.log(this.formatedPost)
    // console.log(this.post)
  },
  methods: {
    formatDate (date) {
      return formatDate(date)
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.archive {
  padding: 30px;

  &-title {}

  &-content {
    position: relative;
    display: flex;
    min-height: 1000px;
    margin-top: 30px;

    &_line {
      box-sizing: border-box;
      margin: 0 39px;
      width: 2px;
      background-color: #fff;
    }

    &_main {
      flex: 1;
      margin: 0 30px;
      
      .list-of-year {

        &_tag {
          position: relative;
          height: 50px;
          margin-bottom: 40px;
          font-size: 20px;

          .wrapper {
            position: absolute;
            padding: 3px 10px;
            top: 0;
            left: -104px;
            border-radius: 3px;
            background-color: #3273dc;
          }
        }

        &_item {
          position: relative;

          &-dot {
            position: absolute;
            width: 15px;
            height: 15px;
            top: 0;
            left: -78px;
            border-radius: 50%;
            background-color: #fff;
          }

        }
      }
    }
  } 
}
</style>
