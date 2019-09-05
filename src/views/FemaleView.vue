<template>
    <div class="female-view" v-if="isDateGet">
        <SlidersBanner :sliders="female[0].content"/>
        <InfoModule :infocontent="female[4]" @changepage="toDetail" :books="books" @changeRecommed="selectBooks(8)"/>
        <WhiteSpace />

    </div>
  
</template>

<script>
import SlidersBanner from "../components/SlidersBanner";
import InfoModule from "../components/InfoModule";
import WhiteSpace from "../components/WhiteSpace"
export default {
  name: "FemaleView",
  props:["bookshelf"],
  data: () => ({
    female: [],
    isDateGet: false,
    indexArr: [],
    books: []
  }),
  components: {
    SlidersBanner,
    InfoModule,
    WhiteSpace
    },
  mounted() {
    this.getFemaleData();
  },
  methods: {
    async getFemaleData() {
      let res = await this.$http("/api/female");
      res = res.data;
      this.female = res;
      this.isDateGet = true; 
      this.inputBooks()
    },
    toDetail(book) {
      this.$router.push({
        name: "detail",
        params: {
          book
        }
      })
    },
    changeIndexArr(num) {
      var arr = [];
      function getRandom(num) {
        var random = Math.random() *51;
        random = Math.floor(random);
        if (arr.length < num) {
          for (var i = 0;i <= arr.length;i++ ) {
            if (random == arr[i]) {
               break;
            } else {
              if (i == arr.length) {
                arr.push(random);
                break;
              }
            }
          }
          getRandom(num);
        }
      }
      getRandom(num);
      this.indexArr = arr
    },
    selectBooks(num){
      this.changeIndexArr(num)
      var book = []
      for(var i=0; i<this.indexArr.length; i++){
        let j = this.indexArr[i]
        book.push(this.bookshelf[j])
      }
      this.books = book
    },
    inputBooks() {
      this.books = this.female[4].content
    }
  }
};
</script>

<style lang="scss" scoped>
</style>