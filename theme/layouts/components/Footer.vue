<template>
  <div class="ugly-footer">
    <div class="ugly-footer_main">
      <p class="ugly-footer_main-beian">
        <a href="http://beian.miit.gov.cn/" target="_blank">粤ICP备20060883号-1</a>
      </p>
      <p class="ugly-footer_main-copyright">Copyright ©2019 - precent lzw's Blog</p>
      <p class="ugly-footer_main-power">Power by Vuepress · Design by lzw</p>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.ugly-footer {
  /* height: 300px; */
  margin-top: 30px;
  background-color: #262d38;

  &_main {
    box-sizing: border-box;
    max-width: 1400px;
    margin: 0 auto;
    padding: 30px 0;

    &-beian {
      color: #fff;
      a:hover {
        color: rgb(131, 131, 237);
      }
    }
  }

}
</style>
