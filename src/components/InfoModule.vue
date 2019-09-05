<template>
    <div class="info-module">
        <div class="info-title">
            <div class="info-title-left">
                <span><img class="tip" src="/image/home_tip.png" alt="" ></span>
                <span class="info-m_s_name">{{infocontent.m_s_name}}</span>
            </div>
            <div class="info-title-right" @click="changeRecommed">
                <span class="m_s_class">{{infocontent.m_s_class=='rec' ? '换一换' : '查看更多'}}</span>
                <span :class="infocontent.m_s_style == 1 ? 'icon-rotate' : 'icon-arrow_right'"></span>
            </div>
        </div>
        <div class="info-content">
            <ul class="info-content-wrapper" v-for="book in  books ? books : infocontent.content " :key="book.bid">
                <div class="info-desc" @click="changepage(book)">
                    <img class="book-cover" :src="book.book_cover" alt="书面" width="100%" height="100%" />
                    <div class="books-name">{{book.bookname}}</div>
                    <div class="author-name">{{book.author_name}}</div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "InfoModule",
    props: {
        infocontent: {
            type: Object
        },
        books: {
            type: Array,
        }
    },
    methods: {
        changepage(book) {
            this.$emit('changepage',book)
            // console.log(book)
        },
        changeRecommed() {
            this.$emit('changeRecommed')
            // console.log(this.books)
        }
    },
    mounted(){
        // console.log(this.books)
    }
}
</script>

<style lang="scss" scoped>
    .info-title {
        padding: 16px 12px;
        display: flex;
        vertical-align: middle;
        font-size: $md-size;

        .info-title-left {
            flex: 1;
            .tip {
                display: inline-block;
                height: 18px;
                vertical-align: top;
                margin-right: 10px;
            }
            .info-m_s_name {
                line-height: 20px;
            }
        }
        .info-title-right {
            line-height: 20px;
            height: 18px;
            
            .icon-rotate {
                height: 19px;
                display: inline-block;
                vertical-align: middle;
                margin-left: 10px;
            }
        }
    }
    .info-content {
        padding-bottom: 10px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: space-around;
        .info-content-wrapper {
            width: 20vw;
            font-size: $xs-size;
            margin: 8px 6px;
            
            .info-desc {
                width: 20vw;
                text-align: center;
                
                .book-cover {
                    width: 18vw;
                    border-radius: 5px;
                }
                .books-name {
                    width: 100%;
                    margin: 4px 0;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    text-align: left;
                    padding: 0 4px;
                    color: mblack(1);
                }
                .author-name {
                    width: 100%;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    text-align: left;
                    padding: 0 4px;
                    color: mblack(0.6);
                }
            }
        }
    }
</style>