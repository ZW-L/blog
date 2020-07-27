<template>
  <div class="tags">
    <section class="tags-list">
      <div class="tags-item"
        :class="['tags-item--' + tagsObj[tag], { 'active': activeIndex === index } ]"
        v-for="(tag, index) of tags" :key="index"
        @click="onClickTag(tag, index)"
      >{{ tag }}</div>
    </section>

    <section class="tags-cate">
      <post-item v-for="(item, index) of postOfTag"
        :key="index"
        :post="item"
      />
    </section>
  </div>
</template>

<script>
import PostItem from '@theme/components/PostItem'
import { publishPost, getTags, getPostOfTag } from '@theme/utils/extract.js'

export default {
  components: {
    PostItem,
  },
  data () {
    return {
      activeIndex: null,
      activeTag: null
    }
  },
  computed: {
    post () {
      return publishPost(this.$site.pages)
    },
    tagsObj () {
      return getTags(this.post)
    },
    tags () {
      return Object.keys(this.tagsObj)
    },
    postOfTag () {
      if (!this.activeIndex) {
        return this.post
          .sort((a, b) => new Date(b.frontmatter.createTime) - new Date(a.frontmatter.createTime))
      }

      return getPostOfTag(this.post, this.activeTag)
        .sort((a, b) => new Date(b.frontmatter.createTime) - new Date(a.frontmatter.createTime))
    }
  },
  mounted () {
    console.log(this.tags)
    console.log(this.tagsObj)
  },
  methods: {
    onClickTag (tag, index) {
      this.activeIndex = index
      this.activeTag = tag
      console.log(this.postOfTag)
    }
  }
}
</script>

<style lang="scss" scoped>
.tags-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 30px;

  .tags-item {
    box-sizing: border-box;
    padding: 5px 15px;
    margin: 0 3px;
    color: rgb(211, 63, 63);
    font-size: 40px;
    border-radius: 3px;
    transition: all .3s;

    &.active {
      background-color: #3e4b5e;
      box-shadow: 0px 0px 10px 1px #ccc;
    }

    &:hover {
      cursor: pointer;
      background-color: #3e4b5e;
      box-shadow: 0px 0px 10px 1px #ccc;
    }
    
    @for $i from 1 through 10 {
      &--#{$i} {
        font-size: 16px + 2 * $i;

        @if $i > 5 {
          color: rgb(211, 143, 143);
        }

        @if $i > 8 {
          color: rgb(205, 109, 109);
        }
      }
    }
  }
}

.tags-cate {
  min-height: 50px;
  margin-top: 30px;
}
</style>
