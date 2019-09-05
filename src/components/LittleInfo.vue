<template>
  <div class="lastChapter border-1px">
    <div class="title-left">
      <span class="icon-book-open"></span>
      <span class="word">{{type1}}</span>
      <span class="title">{{title}}</span>
    </div>
    <div class="icon-arrow_right"></div>
  </div>
</template>

<script>
export default {
  name: "LittleInfo",
  props: ["type1", "title"]

};
</script>

<style lang="scss" scoped>
.lastChapter {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0;
  font-style: $sm-size;
  line-height: 20px;

  &.border-1px {
    @include border-bottom(mblack(0.1));
  }

  .title-left {
    flex: 1;
    .word {
      margin: 0 16px 0 10px;
    }
    .title {
      font-size: $xs-size;
      color: mblack(0.6);
    }
  }

  .icon-arrow_right {
    line-height: 20px;
  }
}
</style>