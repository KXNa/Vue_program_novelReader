<template>
    <div>
        <div class="set-tab">
            <div class="icons icon-book-open" @click="showMenuTab"><div class="set">目录</div></div>
            <div class="icons icon-cog" >
                <div class="set" @click="isSetType=!isSetType">字体</div>
                <div class="set-type" v-show="isSetType" >
                    <span class="xs-size" @click="fontSizeDown" >A-</span>
                    <span class="xs-size" :class="size==12 ? 'aclick' : '' " @click="changeFontSize(12)">超小</span>
                    <span class="sm-size" :class="size==14 ? 'aclick' : '' " @click="changeFontSize(14)">小</span>
                    <span class="md-size" :class="size==16 ? 'aclick' : '' " @click="changeFontSize(16)">中</span>
                    <span class="lg-size" :class="size==18 ? 'aclick' : '' " @click="changeFontSize(18)">大</span>
                    <span class="lg-size" :class="size==20 ? 'aclick' : '' " @click="changeFontSize(20)">超大</span>
                    <span class="slg-size" @click="fontSizeUp">A+</span>
                </div>
            </div>
            <!-- <div class="icons icon-download"><div class="set">下载</div></div> -->
        </div>
    </div>
</template>

<script>
export default {
    name: "SetTab",
    data:()=>({
        size: 16,
        isSetType: false
    }),
    methods: {
        showMenuTab(){
            this.$emit('showMenuTab')
        },
        changeFontSize(size) {
            this.$emit('fontSize',size)
            this.size = size
            console.log(this.size)
        },
        fontSizeDown() {
            if(this.size > 12){
                this.size -= 2
                this.changeFontSize(this.size)
            }
            return
        },
        fontSizeUp() {
            if(this.size < 20){
                this.size += 2
                this.changeFontSize(this.size)
            }
            return
        }

    }
}
</script>

<style lang="scss" scoped>
    .set-tab {
        position: fixed;
        display: flex;
        padding: 8px;
        bottom: 0;
        left: 0;
        width: 100vw;
        background: $m-whitespace;
        height: 60px;
        text-align: center;
        font-size: 26px;
        color: mblack(0.8);

        .icons {
            flex: 1;
            .set {
                margin-top: 5px;
                font-size: $xs-size;
            }
        }
        .set-type {
                position: absolute;
                display: flex;
                bottom: 60px;
                left: 0;
                width: 100%;
                height: 50px;
                line-height: 50px;
                font-size: $md-size;
                border-bottom: 1px solid mblack(0.1);
                background: $m-whitespace;

                span{
                    flex: 1;
                }
                .aclick {
                    font-weight: 700;
                }
                .xs-size {
                    font-size: 12px;
                }
                .sm-size {
                    font-size: $sm-size;
                }
                .md-size {
                    font-size: $md-size;
                }
                .lg-size {
                    font-size: $lg-size;
                }
                .slg-size {
                    font-size: 20px;
                }
            }
    }
</style>