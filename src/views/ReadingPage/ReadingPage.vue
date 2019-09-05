<template>
    <div v-if="show">
        <transition name="menu">
            <MenuTab v-show="isMenuShow" :article="article" :bookname="bookContent.bookname" @changechapter="changeChapter" ref="menutab" />
        </transition>
        <transition name="navin">
            <ReadNav v-show="isNavShow" />
        </transition>
        <div >
            <div class="reading-page" 
            @click.stop="showNav" 
            ref="readingpage"
            @touchmove.stop="nextChapterAuto"
             >
                <p class="bookname" ref="bookname">{{bookContent.bookname}}</p>
                <h1 class="books-title">{{article[chapterNum].title}}</h1>
                <p class="books-content" ref="content">{{article[chapterNum].content}}</p>
            </div>
        </div>
        
        <transition name="fade">
            <SetTab v-show="isNavShow" @showMenuTab="showMenuTab" @fontSize="changeFontSize"/>
        </transition>
        
    </div>
</template>

<script>
import ReadNav from "@/components/Reading/ReadNav"
import SetTab from "@/components/Reading/SetTab"
import MenuTab from "@/components/Reading/MenuTab"
export default {
    name: "ReadingPage",
    data(){
        return {
            show: false,
            article: [],
            isNavShow: false,
            isMenuShow: false,
            chapterNum: 0,
            bookContent: {}
        }
    },
    components: {
        ReadNav,
        SetTab,
        MenuTab
    },
    beforeRouteEnter (to, from, next) {
        if(from.name == "detail" || from.name == "bookshelf"){
            next(ReadingPage =>{
                // 每次进入路由执行更新书籍信息数据
                ReadingPage.getBookContent()
                ReadingPage.isNavShow = false
            })
        } else {
            next()
        }
    },
    mounted(){
        this.getBookArticleData1()
    },
    methods: {
        async getBookArticleData1() {
            try {
                let res = await this.$http('/api/article')
                res = res.data
                this.article = res
                this.show = true
            }catch (e) {
            console.error(e);
            }
        },
        getBookContent() {
            this.bookContent = this.$route.params.bookContent
        },
        showNav(){
            this.isNavShow = !this.isNavShow
            this.isMenuShow = false
        },
        showMenuTab(){
            this.isMenuShow = true
            this.isNavShow = !this.isNavShow
        },
        changeChapter(index) {
            this.chapterNum = index
            this.isMenuShow = false
            this.$refs.bookname.scrollIntoView(true)//页面滚回最顶部
        },
        nextChapterAuto() {
            let contentHeight = this.$refs.readingpage.scrollHeight
            let contentScrollHeight = Math.floor(this.$refs.readingpage.scrollTop)
            let clientHeight = this.$refs.readingpage.clientHeight
            var num = this.chapterNum
            if(contentScrollHeight+ clientHeight == contentHeight) {
                if(this.chapterNum == 6) {
                    console.log("没有下一章了")
                    return
                }
                num += 1
                this.$refs.menutab.changechapter(num)
            } 
            // else if(contentScrollHeight == 0) {
            //     if(this.chapterNum == 0){
            //         console.log("已经在第一章")
            //         return
            //     }
            //     num --
            //     this.$refs.bookname.scrollIntoView({behavior: "smooth", block: "end"})
            //     this.$refs.menutab.changechapter(num)
            //     console.log(this.chapterNum)
            // }

        },
        changeFontSize(size){
            this.$refs.content.style.fontSize= `${size}px`;
        }
    }
}
</script>

<style lang="scss" scoped>
    .reading-page {
        width: 100vw;
        height: 98vh;
        padding: 0 24px 24px;
        overflow: scroll;
        
        .bookname {
            padding: 20px 0 10px;
            font-size: $sm-size;
            color: mblack(0.6); 
        }

        .books-title {
            padding: 32px 0;
            font-size: 28px;
        }
        .books-content {
            letter-spacing:2px;
            line-height: 26px;
            white-space: pre-wrap ;
            text-indent: 36px;
        }
    }
    .navin-enter,
    .navin-leave-to {
        transform: translateY(-52px);
    }
    .navin-enter-active,
    .navin-leave-active,
    .fade-enter-active,
    .fade-leave-active,
    .menu-enter-active,
    .menu-leave-active
    {
        transition: all .2s linear;
    }
    .navin-enter-to,
    .navin-leave,
    .fade-enter-to,
    .fade-leave  {
        transform: translateY(0)
    }
    .fade-enter,
    .fade-leave-to {
        transform: translateY(60px);
    }
    .menu-enter,
    .menu-leave-to {
        transform: translateX(-84vw);
    }
    
</style>