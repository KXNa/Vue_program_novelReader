<template>
  <div class="book-shelf">
    <!-- <div class="header">
      <span class="visit-icon"></span>
      <div class="icons-item">
        <span class="icon icon-checkin"></span>
        <span class="icon icon-search"></span>
        <span class="icon icon-more-vertical"></span>
      </div>
    </div> -->
    <div class="readingbook-wrapper">
      <div class="reading-book-progress">
        <div class="progress-left" @click="reading">
          <img :src="recommend[0].book_cover" width="100%" height="100%" alt="阅读中书封面" />
        </div>
        <div class="progress-right">
          <div class="book-name">{{recommend[0].bookname}}</div>
          <div class="reading-desc">
            <span class="desc-left">
              <span>读至</span>
              <span class="read-progress">0%</span>
            </span>
            <span class="desc-right" @click="reading">
              <span>继续阅读</span>
              <span class="icon-circle-right"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="advert">
      <div class="advert-wrapper">
        <span class="icon-medium"></span>
        <span class="advert-desc">新用户全场好书免费读（剩余3天）</span>
        <span class="icon-arrow_right"></span>
      </div>
    </div>
    <div class="recommed-book">
      <ul class="recommed-book-wrapper" v-for="(books,index) in recommend" :key="index.bid">
        <div @click="reading(books)">
          <img class="book-cover" :src="books.book_cover" alt="书面" width="100%" height="100%" />
          <div class="books-name">{{books.bookname}}</div>
        </div>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "BookShelf",
  data() {
      return {
        recommend: []
      }
  },
  created() {
      this.getRecommendData()
  },
  // watch: {
  //   '$route.path'(newVal, oldVal) {
  //     if(newVal === '/bookshelf'){
  //       this.getRecommendNewData()
  //     }
      
  //   }
  // },
  methods: {
    reading(bookContent){
      this.$router.push({
        name: "read",
          params: {
            bookContent
        }
      })
    },
    beforeDestroy() {
      this.$bus.$off('addBook')
    },
    getRecommendData() {
      var currentData = localStorage.getItem('datas');
      currentData = currentData === undefined ? []: JSON.parse(currentData);
      this.recommend = currentData;
      console.log(this.recommend)
    },
    // getRecommendNewData(window) {
    //   if(window.obj){
    //     // this.recommend.unshift(window.obj)
    //     console.log(window.obj)
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
.book-shelf {
  background-color: $bg-color;
  .header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: 8px 16px;
    height: 50px;
    color: $m-white;

    .visit-icon {
      display: inline-block;
      height: 34px;
      width: 34px;
      @include bg-img("/placeholder_avatar", 34px);
    }
  }

  .icons-item {
    display: flex;
    float: right;
    height: 34px;

    .icon {
      display: inline-block;
      flex: 1;
      margin-right: 24px;
      font-size: 20px;
      line-height: 34px;
      color: $m-blue;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .readingbook-wrapper {
    background-image: url("/image/bookshelf_cloud_0.png"),
      url("/image/bookshelf_cloud_1.png"), url("/image/bookshelf_cloud_2.png"),
      url("/image/bookshelf_cloud_3.png"), url("/image/bookshelf_bg.png");
    background-repeat: no-repeat, no-repeat;
    background-position: 0, 0, 0, 0, 0;
    background-size: 100%, 100%, 100%, 100%, 100%;
    .reading-book-progress {
      display: flex;
      padding: 70px 24px 30px;
    }
  }

  .progress-left {
    flex: 0 0 100px;
  }

  .progress-right {
    flex: 1;
    padding: 30px;
    color: $m-white;

    .book-name {
      font-size: 20px;
    }
    .reading-desc {
      padding: 20px 0;
      font-size: $xs-size;
      font-weight: 100;
    }

    .desc-left {
      padding-right: 16px;
    }
    .read-progress {
      padding-left: 4px;
    }
    .icon-circle-right {
      padding-left: 4px;
      font-size: 10px;
      line-height: 12px;
    }
  }

  .advert {
    padding: 0 24px;
    width: 100%;

    .advert-wrapper {
      display: flex;
      width: 100%;
      padding: 14px 20px 10px;
      border-radius: 30px;
      background: $m-whitespace;
      font-size: $sm-size;
    }
    .icon-medium {
      flex: 0 0 30px;
      font-size: 18px;
      color: $m-blue;
    }
    .advert-desc {
      flex: 1;
      line-height: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .icon-arrow_right {
      line-height: 20px;
    }
  }

  .recommed-book {
    position: absolute;
    top: 280px;
    display: flex;
    flex-wrap: wrap;
    padding: 0 4px 70px;
    justify-content: space-around;
    align-content: space-around;
    background-color: $bg-color;

    .recommed-book-wrapper {
      width: 26vw;
      margin: 30px 3vw 0;
      text-align: center;

      .book-cover {
        width: 24vw;
        height: 32vw;
      }

      .books-name {
        margin-top: 10px;
        width: 25vw;
        padding-left: 1vw;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: $xs-size;
        text-align: left;
      }
    }
  }
}
</style>
