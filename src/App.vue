<template>
  <div id="app">
    <MainTabs v-show="$route.path!='/bs/detail' && $route.path!='/read'" />
    <keep-alive>
      <RouterView :recommend="recommend" :excellent="excellent" />
    </keep-alive>
  </div>
</template>

<script>
import MainTabs from "./components/MainTabs"
export default {
  name: "App",
  data() {
    return {
      recommend: [],
      excellent: []
    };
  },
  mounted() {
    this.getRecommendData();
    this.getExcellentData();
  },
  methods: {
    async getRecommendData() {
      try {
        let bookData = localStorage.getItem('datas');
        if(!bookData) {
            let res = await this.$http("/api/recommend");
              res = res.data;
            localStorage.setItem('datas', JSON.stringify(res))
        }
      } catch (e) {
        console.error(e);
      }
       this.$router.push('/bookshelf')
    },
    async getExcellentData() {
      let res = await this.$http('/api/excellent')
      res = res.data
      this.excellent = res
    }
  },
  components: {
    MainTabs,
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
