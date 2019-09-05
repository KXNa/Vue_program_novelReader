<template>
    <div>
        <div class="menu-tab" >
        <div class="bookname">{{bookname}}</div>
            <div class="bookchapter" :class="{active: chapterNum===book.index}" v-for=" book in article" :key="book.index" @click="changechapter(book.index)"  >
                <div class="bookchapter-num">{{book.title}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuTab",
    props: ["article","bookname"],
    data:()=>({
        chapterNum: 0
    }),
    methods: {
        changechapter(index){
            this.$emit('changechapter', index)
            this.chapterNum = index
        }
    }
}
</script>

<style lang="scss" scoped>
    
    .menu-tab {
        position: fixed;
        padding: 20px;
        top: 0;
        left: 0;
        width: 84vw;
        height: 100vh;
        opacity: 0.98;
        background: $m-whitespace;
        box-shadow: 3px 0 16vw #777;

        .bookname {
            padding: 20px 0;
            width: 100%;
            height: 80px;
            font-size: 24px;
            border-bottom: 1px solid mblack(0.1);
        }
        
        .bookchapter {
            padding: 5px 0;
            border-bottom: 1px solid mblack(0.1);

            &.active {
                color: burlywood;
            }
            
        }
        .bookchapter-num {
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: $md-size;
        }
    }
</style>