<template>
  <div class="container" ref="container">
    <Navbar />
    <div class="main">
      <Sidebar />
      <Categories class="main_content" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@theme/layouts/components/Navbar'
import Sidebar from '@theme/layouts/components/Sidebar'
import Footer from '@theme/layouts/components/Footer'
import Categories from '@theme/layouts/components/Categories'

export default {
  components: {
    Navbar,
    Sidebar,
    Footer,
    Categories
  },
  mounted () {
    console.log('categories mounted...')
  },
  destroyed () {
    console.log('categories destroyed...')
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
