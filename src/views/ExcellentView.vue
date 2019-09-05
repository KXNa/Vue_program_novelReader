<template>
  <div class="excellent-view">
    <SlidersBanner :sliders="excellent[0].content" />
    <TopNagetive :navcontent="excellent[1].content" />
    <InfoModule :infocontent="excellent[2]" @changepage="toDetail" @changeRecommed="selectBooks1(8)" :books="books1" />
    <WhiteSpace />
    <InfoModule :infocontent="excellent[3]" @changepage="toDetail"  />
    <WhiteSpace />
    <InfoModule :infocontent="excellent[4]" @changepage="toDetail" @changeRecommed="selectBooks2(8)" :books="books2"/>
    <WhiteSpace />
  </div>
</template>

<script>
import SlidersBanner from "../components/SlidersBanner";
import TopNagetive from "../components/TopNagetive";
import InfoModule from "../components/InfoModule";
import WhiteSpace from "../components/WhiteSpace";
export default {
  name: "ExcellentView",
  components: {
    SlidersBanner,
    TopNagetive,
    InfoModule,
    WhiteSpace
  },
  props: ["excellent","bookshelf"],
  data: () => ({
    num: 2,
    isBookDetail: false,
    indexArr: [],
    books1: [],
    books2: []
  }),
  mounted() {
    this.inputBooks()
  },
  methods: {
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
    selectBooks1(num){
      this.changeIndexArr(num)
      var book1 = []
      for(var i=0; i<this.indexArr.length; i++){
        let j = this.indexArr[i]
        book1.push(this.bookshelf[j])
      }
      this.books1 = book1
    },
    selectBooks2(num){
      this.changeIndexArr(num)
      var book2 = []
      for(var i=0; i<this.indexArr.length; i++){
        let j = this.indexArr[i]+1
        book2.push(this.bookshelf[j])
      }
      this.books2 = book2
    },
    inputBooks() {
      this.books1 = this.excellent[2].content
      this.books2 = this.excellent[4].content
    }
  }
};
</script>

<style lang="scss" scoped>
.excellent-view {
  padding-bottom: 54px;
  width: 100%;
}
</style>