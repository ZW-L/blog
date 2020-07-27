<template>
  <div class="ugly-sidebar">
    <blogger-card class="ugly-sidebar_item ugly-sidebar_blogger" />
    <blogger-directory class="ugly-sidebar_item ugly-sidebar_directory" />

    <div class="ugly-sidebar_item ugly-sidebar_categories"></div>
    <div class="ugly-sidebar_item ugly-sidebar_archives"></div>
    <div class="ugly-sidebar_item ugly-sidebar_tags"></div>
  </div>
</template>

<script>
import BloggerCard from '@theme/components/BloggerCard'
import BloggerDirectory from '@theme/components/BloggerDirectory'

export default {
  components: {
    BloggerCard,
    BloggerDirectory
  }
}
</script>

<style lang="scss" scoped>
.ugly-sidebar {
  width: 300px;

  &_item {
    min-height: 100px;
    margin-bottom: 20px;
    border-radius: 5px ;
    background-color: #262d38;

    &:last-child {
      margin-bottom: 0;
    }
  }
  
  &_directory {
    position: sticky;
    top: 10px;
    max-height: 300px;
    overflow: auto;
  }
}
</style>
