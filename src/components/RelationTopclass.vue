<template>
    <div class="relationTopclass" :class="{'border-1px':isBorder}">
        <div class="left">
            <span class="img"><img src="/image/home_tip.png" height="100%" alt=""></span>
            <span class="topclass-title">{{title}}</span>
        </div>
        <div class="right">
            <span class="icon-edit" v-if="isIcon"></span>
            <span class="topclass-todo">{{todo}}</span>
        </div>
        

    </div>
</template>

<script>
export default {
    name: "RelationTopclass",
    props: ["isBorder","isIcon","title","todo"]
}
</script>

<style lang="scss" scoped>
    .relationTopclass {
        display: flex;
        width: 100%;
        height: 46px;
        padding: 16px 0;
        font-size: $sm-size;
        &.border-1px{
            @include border-bottom(mblack(0.1));
        }

        .left {
            flex: 1;

            .topclass-title {
                display: inline-block;
                vertical-align: top;
                margin-left: 16px;
            }
        }
        .right {
            color: $m-green;
            padding-right: 16px;

            .topclass-todo {
                margin-left: 10px;
            }
        }
    }
</style>