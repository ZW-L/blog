<template>
  <ul class="blogger-directory sidebar-links" ref="directory">
    <li class="blogger-directory_item"
      :class="`blogger-directory_item-h${item.level}`"
      v-for="(item, index) of headers" :key="index"
    >
      <a class="item-anchor sidebar-link"
        :href="`#${item.slug}`"
      >{{ item.title }}</a>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    headers () {
      return this.$page.headers
    },
    path () {
      return this.$page.path
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@theme/styles/mixins.scss';

ul {
  list-style: none;
}

.blogger-directory {
  padding: 10px 20px;

  &_item {
    height: 30px;
    line-height: 30px;
    font-size: 16px;
    padding: 3px 5px;

    &:hover {
      cursor: pointer;
      background-color: #3e4b5e;
    }

    &-h2 {

    }

    &-h3 {
      margin-left: 1em;
      font-size: 14px;
    }

    .item-anchor {
      display: block;
      width: 100%;
      height: 100%;
      color: #fff;
    }
  }
}
</style>
