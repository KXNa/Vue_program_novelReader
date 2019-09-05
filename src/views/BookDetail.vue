<template>
<div class="book-detail" v-if="isDateGet">
        <div class="book-detail-nav">
            <div class="nav-left"><span class="icon-arrow_lift"  @click.stop="goBack"></span></div>
            <div class="nav-right">
                <span :class="[isStarLight ? 'icon-star-full' : 'icon-star-empty']" @click="changeStar"></span>
                <span class="icon-share"></span>
            </div>
        </div>
        <div class="bookdetail-desc">
            <div class="detail-wrapper">
                <div class="img"><img :src="bookContent.book_cover" width="100%" height="100%" alt="封面"></div>
                
                <div class="detail-desc">
                    <div class="bookname">{{bookContent.bookname}}</div>
                    <div class="author">{{bookContent.author_name}}</div>
                    <div class="booktype">
                        <span class="class_name">{{bookContent.class_name}}</span>
                        <span class="wordCount">{{bookDetailData.wordCount}}万字</span>
                        <span class="stat_name">{{bookContent.stat_name}}</span>
                    </div>
                </div>
            </div>
            <div class="similar">
                <span class="num">{{bookDetailData.similar}}</span>
                <span class="word">和您喜好相同的书友，正在看这本书</span>
            </div>
            <div class="introduction" :class="{'active':isActive}" @click="changeClass">{{bookContent.introduction}}</div>
            <div class="lastChapter border-1px">
                <div class="title-left">
                    <span class="icon-history"></span>
                    <span class="word">最新</span>
                    <span class="title">{{bookContent.topic}}</span>
                </div>
                <div class="icon-arrow_right"></div>
            </div>
            <div class="lastChapter border-1px">
                <div class="title-left">
                    <span class="icon-book-open"></span>
                    <span class="word">目录</span>
                    <span class="title">共{{bookContent.chapterNum}}章</span>
                </div>
                <div class="icon-arrow_right"></div>
            </div>
            <div class="lastChapter">
                <div class="title-left">
                    <span class="icon-talk"></span>
                    <span class="word">作者说</span>
                    <span class="title">{{bookDetailData.recIntro}}</span>
                </div>
                <div class="icon-arrow_right"></div>
            </div>
        </div>
        <WhiteSpace />
        <RelationTopclass  :isIcon="true" title="书友互动" todo="写评论" />
        <div class="detail-comment">
            <div class="detail-comment-wrapper border-1px">
                <div class="comment-content">
                    <div class="num">{{bookDetailData.score}}</div>
                    <div class="content-type">书籍评分</div>
                </div>
                <div class="comment-content">
                    <div class="num">{{bookDetailData.comment_count}}</div>
                    <div class="content-type">累计评论</div>
                </div>
                <div class="comment-content">
                    <div class="num">{{bookDetailData.weekClick}}</div>
                    <div class="content-type">人气值</div>
                </div>
            </div>
            
        </div>
        <RelationTopclass :isBorder="true" :isIcon="false" title="粉丝投票" todo="粉丝值榜" />
        <div class="tickets">
            <div class="tickets-item">
                <div class="ticket-icons icon-ticket"></div>
                <div class="ticket-desc">
                    <div class="ticket-num">{{bookDetailData.recommendTicketNum}}</div>
                    <div class="ticket-type">周推荐票</div>
                </div>
            </div>
            <div class="tickets-item">
                <div class="ticket-icons icon-ticket-reward"></div>
                <div class="ticket-desc">
                    <div class="ticket-num">{{bookDetailData.rewardNum}}</div>
                    <div class="ticket-type">打赏</div>
                </div>
            </div>
            <div class="tickets-item">
                <div class="ticket-icons icon-ticket"></div>
                <div class="ticket-desc">
                    <div class="ticket-num">{{bookDetailData.monthTicketNum}}</div>
                    <div class="ticket-type">本月月票</div>
                </div>
            </div>
        </div>
        <WhiteSpace />
        <footer>
            <div class="footer">
                <span class="footer-tab" @click="addBookToBookShelf(bookContent)" ref="addBookShelf">加书架</span>
                <span class="footer-tab stratread" @click="reading(bookContent)">开始阅读</span>
                <span class="footer-tab buy">购买</span>
            </div>
        </footer>
    </div>

    
</template>

<script>

import WhiteSpace from "../components/WhiteSpace"
import RelationTopclass from "../components/RelationTopclass"
export default {
    name: "BookDetail",
    data(){
        return {
            isDateGet: false,
            bookDetailData: [],
            isActive: true,
            isStarLight: false,
            bookContent: []
        }
    },
    components: {
        WhiteSpace,
        RelationTopclass
    },
    beforeRouteEnter (to, from, next) {
        if(from.name == "read"){
            next()
        } else {
            next(BookDetail =>{
                // 每次进入路由执行更新书籍信息数据
                BookDetail.getBookContent()
            })
        }
    },
    mounted() {
        // 第一次进入获取基础数据
        this.getBookDetailData()
    },
    methods: {
        async getBookDetailData(){
             let res = await this.$http('/api/noveldetail')
             res= res.data
             this.bookDetailData = res
             if(this.bookDetailData){
                this.isDateGet = true
             }
        },
        getBookContent() {
            this.bookContent = this.$route.params.book//接受excellent页面传过来的书籍详情
        },
        changeClass() {
            this.isActive = !this.isActive
        },
        changeStar() {
            this.isStarLight = !this.isStarLight
        },
        goBack() {
            this.$router.go(-1);
        },
        reading(bookContent){
            //跳转到阅读页面并传递书籍信息
            this.$router.push({
                name: "read",
                params: {
                    bookContent
                }
            })
        },
        addBookToBookShelf(books) {
            this.$refs.addBookShelf.innerHTML = '已添加'
            this.$refs.addBookShelf.style.color = '#ccc'
            this.$refs.addBookShelf.disabled = "true"
            console.log('点了加入书架,传值功能等我熟悉了vuex再加上！！！一定加！！',books.bookname)
        }
    },
}
</script>

<style lang="scss" scoped>
    .book-detail {
        padding-bottom: 70px;
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
            background: $m-white;

            .nav-left {
                flex: 1;
            }

            .icon-share {
                margin-left: 26px;
            }

            .icon-star-full {
                color: $m-blue;
            }
        }
        .bookdetail-desc {
            padding: 70px 16px 0;

            .detail-wrapper {
                display: flex
            }
            .img {
                width: 100px;
                height: 130px;
                margin-right: 20px;
            }
        }
        .detail-desc {
            flex: 1;
            padding: 20px 0;
            .bookname {
                font-size: 20px;
                font-weight: 540;
            }
            .author {
                margin: 20px 0;
                font-size: $sm-size;
                color:$m-green;
            }
            .booktype {
                margin-bottom: 20px;
                font-size: $sm-size;
                color: mblack(0.5);
                span {
                    margin-right: 10px;
                    &:last-child {
                        margin: 0;
                    }
                }
            }
        }
        .similar {
            padding: 16px 10px;
            height: 60px;
            font-size: $sm-size;
            color: mblack(0.5);

            .num {
                font-size: $lg-size;
                font-weight: 700;
            }

            .word {
                vertical-align: top;
            }
        }
        .introduction {
            width: 100%;
            font-size: $md-size;
            line-height: 24px;

            &.active {
                overflow:hidden;
                text-overflow:ellipsis;
                display:-webkit-box;
                -webkit-line-clamp:4;
                -webkit-box-orient:vertical;
            }

        }

        .lastChapter {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 16px 0;
            font-style: $sm-size;
            line-height: 20px;

            &.border-1px{
                @include border-bottom(mblack(0.1));
            }
            
            .itle-left {
                flex: 1;
            }
            .word {
                display: inline-block;
                margin: 0 16px 0 10px;
            }
            .title {
                display: inline-block;
                width: 60vw;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                font-size: $xs-size;
                color: mblack(0.5);
                vertical-align: top;
            }
            .icon-arrow_right {
                line-height: 20px;
            }
        }

        .footer {
            position: fixed;
            display: flex;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 56px;
            background: $m-white;

            .footer-tab {
                flex: 1;
                text-align: center;
                line-height: 56px;

                &.stratread {
                    background: $m-blue;
                    color: $m-white;
                }
            }
        }
        .detail-comment {
            width: 100%;
            padding: 16px 16px 0;

            .detail-comment-wrapper {
                display: flex;
                padding-bottom: 10px;
                
                &.border-1px{
                    @include border-bottom(mblack(0.1));
                }
            }

            .comment-content {
                flex: 1;
                border-right: 1px solid mblack(0.1);
                text-align: center;

                &:last-child {
                    border: 0;
                }
            }
            .num {
                font-size: $lg-size;
                font-weight: 700;
            }
            .content-type {
                padding: 10px 0;
                font-size: $xs-size;
                color: mblack(0.5);
            }
        }
        .tickets {
            width: 100%;
            display: flex;
            padding: 16px;
            .tickets-item {
                display: flex;
                flex: 1;
                padding: 10px;
                margin-right: 8px;
                border-radius: 5px;
                background: $m-whitespace;

                &:last-child {
                    margin: 0;
                }
            }

            .ticket-icons {
                font-size: 8vw;
                margin-right: 5px;
                line-height: 34px;
                color: $m-green;
            }

            .ticket-desc {
                flex: 1;
            }

            .ticket-num {
                margin-bottom: 5px;
                font-size: $md-size;
                color: mblack(0.7);
            }

            .ticket-type {
                font-size: 10px;
                line-height: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                color: mblack(0.5);
            }
        }
    }
</style>