<template>
  <div class="ugly-navbar">
    <div class="main">
      <router-link to="/" class="main-logo">黎志文的个人博客</router-link>
      <!-- 导航条 -->
      <ul class="main-nav">
        <li class="main-nav_item"
          v-for="(item, index) of nav" :key="index" 
          @mouseenter="onMouseEnter($event, index)"
          @mouseleave="onMouseLeave"
        >
          <strong class="main-nav_item-title">{{ item.text }}</strong>
          <!-- 子分类 -->
          <ul class="sub-nav" v-show="index === activeIndex" :style="subNavStyle">
            <li class="sub-nav_item"
              v-for="(sn, si) of item.items" :key="si"
            >{{ sn.text }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nav: [], // themeConfig.nav 
      activeIndex: -1, // 鼠标 hover 时激活的分类索引
      target : null
    }
  },
  computed: {
    showSubNav () {
      return this.activeIndex > -1
    },
    subNav () {
      return this.showSubNav
        ? this.nav[this.activeIndex].items
        : []
    },
    subNavStyle () {
      if (!this.target) return {}
      const rect = this.target.getBoundingClientRect()
      return {
        left: rect.left + 'px'
      }
    }
  },
  mounted () {
    this.nav = this.$themeConfig.nav
  },
  methods: {
    onMouseEnter (e, index) {
      this.target = e.target
      this.activeIndex = index
    },
    onMouseLeave () {
      this.activeIndex = -1
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
  
}
ul, li {
  margin: 0;
  padding: 0;
}

.ugly-navbar {
  height: 60px;
  margin-bottom: 30px;
  line-height: 60px;
  font-size: 18px;
  background-color: #262d38;

  .main {
    display: flex;
    max-width: 1400px;
    margin: 0 auto;
    /* background-color: #ccc; */

    &-logo {
      color: #fff;
      transition: color .3s;

      &:hover {
        cursor: pointer;
        color: #eb3232;
      }
    }

    &-nav {
      flex: 1;
      display: flex;
      margin-left: 30px;
      font-size: 16px;

      &_item {
        padding: 0 10px;
        line-height: 60px;
        transition: background-color .3s;

        &:hover {
          cursor: pointer;
          background-color: #3e4b5e;

          .main-nav_item-title {
            color: #eb3232;
          }
        }

        &-title {
          transition: color .3s;
        }

        /* 子分类 */
        .sub-nav {
          z-index: 99;
          position: absolute;
          display: flex;
          flex-direction: column;
          background-color: #2d354a;

          &_item {
            height: 35px;
            padding: 3px 15px;
            line-height: 35px;
            font-size: 16px;
            transition: all .2s;

            &:hover {
              color: #eb3232;
              background-color: #3e4b5e;
            }
          }
        }
      }
    }
  }

}
</style>