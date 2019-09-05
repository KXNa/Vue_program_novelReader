<template>
    <div class="read-nav">
        <div class="book-detail-nav">
            <div class="nav-left"><span class="icon-arrow_lift"  @click.stop="goBack"></span></div>
            <div class="nav-right">
                <span :class="[isStarLight ? 'icon-star-full' : 'icon-star-empty']" @click="changeStar"></span>
                <div class="icon-more-vertical" @click.stop="showMoreBox">
                    <div class="more-cove" v-show="showMore"  @click.stop="closeMoreBox" >
                        <div class="more">
                            <span class="icons icon-books" @click.stop="toBookShelf"><span class="more-desc">去书架</span></span>
                            <span class="icons icon-book-open" @click.stop="toBookDetail"><span class="more-desc">书籍详情</span></span>
                            <span class="icons icon-share"><span class="more-desc">分享此书</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ReadNav",
    data:()=>({
        isStarLight : false,
        showMore: false,
    }),
    methods: {
        goBack(){
            this.$router.back();
        },
        changeStar() {
            this.isStarLight = !this.isStarLight
        },
        showMoreBox(){
            this.showMore = true;
        },
        closeMoreBox() {
            this.showMore = false;
        },
        toBookShelf() {
            this.$router.push('/bookshelf')
            this.closeMoreBox()
        },
        toBookDetail(){
            this.$router.push('/bs/detail')
            this.closeMoreBox()
        }
    }
}
</script>

<style lang="scss" scoped>
.book-detail-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    padding: 16px 12px;
    font-size: 20px;
    line-height: 20px;
    z-index: 10;
    background: $m-whitespace;

    .nav-left {
        flex: 1;
    }
    .nav-right {
        display: flex;

        .icon-star-full {
            color: $m-blue;
        }
        .icon-more-vertical {
            margin-left: 20px;
            position: relative;
        }
    }
    .more-cove {
        position: absolute;
        top: -16px;
        right: -12px;
        width: 100vw;
        height: 100vh;
        background: transparent;
    }
    .more {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 40px;
        right: 6px;
        width: 150px;
        padding: 0 16px;
        box-sizing: border-box;
        border: 1px solid mblack(0.1);
        border-radius: 2px;
        background: $m-white;
        color: mblack(0.8);

        .icons {
            padding: 10px 0;
            vertical-align: top;
        }
        .more-desc {
            margin-left: 16px;
            vertical-align: top;
            font-size: $md-size;
        }
    }

    
        }
</style>