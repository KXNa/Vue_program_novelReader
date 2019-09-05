<template>
  <div class="bookshop">
    <BookShelfTabs v-show="$route.path!='/bs/detail'" />
    <keep-alive>
      <router-view :excellent="excellent" :bookshelf="bookshelf" />
    </keep-alive>
      
  </div>
</template>

<script>
import BookShelfTabs from "../components/BookShelfTabs"
export default {
  name: "BookShop",
  props: ["excellent"],
  components: {BookShelfTabs},
  data: ()=>({
    bookshelf: []
  }),
  mounted() {
    this.getBookShelfData()
  },
  methods: {
    async getBookShelfData() {
      let res = await this.$http('/api/bookshelf')
      res = res.data
      this.bookshelf = res
    }
  }
}
</script>
<style lang="scss" scoped>

</style>