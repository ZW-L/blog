<template>
  <div class="container" ref="container">
    <Navbar />
    <div class="main">
      <Sidebar />
      <component :is="content" class="main_content"></component>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@theme/layouts/components/Navbar'
import Sidebar from '@theme/layouts/components/Sidebar'
import Footer from '@theme/layouts/components/Footer'
import Home from '@theme/layouts/components/Home'
import Tags from '@theme/layouts/components/Tags'
import Archives from '@theme/layouts/components/Archives'
import Categories from '@theme/layouts/components/Categories'

import { upperFirst } from '@theme/utils/index.js'

export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
    Home,
    Tags,
    Archives,
    Categories
  },
  data () {
    return {
      nonPost: ['home', 'tags', 'archives', 'categories']
    }
  },
  computed: {
    /**
     * 除指定路径外，均渲染 <Content> 组件
     * @returns {string}
     */
    content () {
      const path = this.$route.path.replace(/\//g, '').replace(/\_/, '')
      return this.nonPost.indexOf(path) > -1 ? upperFirst(path) : 'Content'
    }
  }
}
</script>

<style lang="scss">
.main {
  display: flex;
  max-width: 1400px;
  margin: 0 auto;
  
  &_content {
    overflow: hidden;
    box-sizing: border-box;
    flex: 1;
    margin-left: 30px;
    padding: 30px;
    border-radius: 5px;
    background-color: #262d38;
  }
}
</style>
<style lang="scss" src="../styles/index.scss"></style>
