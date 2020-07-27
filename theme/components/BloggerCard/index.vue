<template>
  <div class="blogger-card">
    <div class="avatar-wrapper">
      <div class="avatar">
        <img class="avatar-img" src="../../static/imgs/avatar.jpg" alt="avatar">
      </div>
    </div>
    <div class="name">黎志文</div>
    <div class="address">
      <span>广东 深圳</span>
    </div>
    <div class="link">
      <router-link to="/_archives" tag="div" class="link-item link-archives">
        <p class="link-item_count">{{ post.length }}</p>
        <p class="link-item_name">归档</p>
      </router-link>
      <router-link to="/_categories" tag="div" class="link-item link-categories">
        <p class="link-item_count">12</p>
        <p class="link-item_name">分类</p>
      </router-link>
      <router-link to="/_tags" tag="div" class="link-item link-tags">
        <p class="link-item_count">{{ tags.length }}</p>
        <p class="link-item_name">标签</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { publishPost, getTags } from '@theme/utils/extract.js'

export default {
  computed: {
    avatar () {

    },
    post () {
      return publishPost(this.$site.pages)
    },
    tags () {
      return Object.keys(getTags(this.post))
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.blogger-card {

  .avatar-wrapper {
    box-sizing: border-box;
    height: 140px;
    padding: 20px 100px;

    .avatar {
      overflow: hidden;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-color: #ccc;

      &-img {
        width: 100%;
      }
    }
  }

  .name {
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    text-align: center;
  }

  .address {
    height: 30px;
    line-height: 30px;
    font-size: 12px;
    text-align: center;
  }

  .link {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 20px;

    &-item {
      width: 20%;
      transition: color .3s;

      &:hover {
        cursor: pointer;
        color: #eb3232;
      }

      &_count {}

      &_name {}
    }
  }
}
</style>
