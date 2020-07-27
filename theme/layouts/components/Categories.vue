<template>
  <div class="categories">
    <section class="categories-main">
      <div class="categories-main_item"
        v-for="(item, index) of nav" :key="index"
        @click="onClickMain(item.items)"
        :style="{ 'background-color': colors[randomNum()] }"
      >{{ item.text }}
      </div>
    </section>

    <section class="categories-sub">
      <div class="categories-sub_item" v-for="(item, index) of activeCate" :key="index">
        {{ item.text }}
      </div>
    </section>

    <section class="categories-content"></section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeCate: []
    }
  },
  computed: {
    nav () {
      return this.$themeConfig.nav
    },
    colors () {
      const ret = []
      for (let i = 0; i < 360; i++) {
        ret.push(`hsl(${i}, 100%, 64%)`)
      }

      return ret
    }
  },
  mounted () {
    // console.log(this.nav)
  },
  methods: {
    onClickMain (cate) {
      this.activeCate = !!cate ? [].concat(cate) : []
    },
    randomNum () {
      return Math.floor(Math.random() * 360)
    }
  }
}
</script>

<style lang="scss" scoped>
.categories {
  &-main {
    display: flex;

    &_item {
      margin: 5px;
      padding: 8px 15px;
      border-radius: 8px;

      &:hover {
        cursor: pointer;
      }
    }
  }

  &-sub {
    display: flex;
    transition: all .3s;

    &_item {
      margin: 5px;
      padding: 8px 15px;
      border-radius: 8px;
      
      &:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
