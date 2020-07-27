<template>
  <router-link :to='post.path' tag="div" class="post-item">
    <div class="post-item-left">
      <p class="post-item-left_date">{{ formatDate(post.frontmatter.createTime) }}</p>
      <p class="post-item-left_title">{{ post.title }}</p>
    </div>
    <div class="post-item-right">
      <div class="post-item-right_img"></div>
    </div>
  </router-link>
</template>

<script>
import { formatDate } from '@theme/utils/date.js'

export default {
  props: {
    post: Object
  },
  methods: {
    formatDate (date) {
      return formatDate(date)
    }
  }
}
</script>

<style lang="scss" scoped>
.post-item {
  position: relative;
  display: flex;
  height: 100px;
  padding: 20px;
  border-radius: 5px;
  background-color: #181c27;
  transition: background-color .4s;

  &:hover {
    cursor: pointer;
    background-color: #3e4b5e;
  }

  &:not(:last-child) {
    margin-bottom: 40px;
  }

  &:last-child {
    margin-bottom: 40px;
  }

  &-left {
    flex: 1;
  
    &_date {
      height: 30px;
      line-height: 30px;
      font-size: 16px;
    }
  
    &_title {
      height: 30px;
      line-height: 30px;
      font-size: 18px;
    }
  }
  
  &-right {
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    background-color: #aaa;
  }
}
</style>
