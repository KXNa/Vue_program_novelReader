<template>
    <div class="BookShelf-tabs">
        <div class="tabs-items">
            <router-link to="/bs/excellent" tag="div" exact class="items">精选</router-link>
            <router-link to="/bs/female" tag="div" class="items">女生</router-link>
            <!-- <router-link to="/bs/male" tag="div" class="items">男生</router-link>
            <router-link to="/bs/cartoon" tag="div" class="items">漫画</router-link> -->
        </div>
        <span class="icon-search"></span>
    </div>
</template>

<script>
export default {
    name: "BookShelfTabs"
}
</script>

<style lang="scss" scoped>
    .BookShelf-tabs {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 54px;
        font-size: $md-size;
        // background: $m-blue;
        color:mblack(0.7);
        color: $m-white;
        z-index: 100;

        .tabs-items {
            display: flex;
            padding: 0 50px;
        }

        .items {
            flex: 1;
            line-height: 52px;
            text-align: center;

                &::after {
                    position: absolute;
                    bottom: 0;
                    width: 20px;
                    height: 12px;
                    background: $m-blue;
                }

                &.link-active {
                    color: $m-blue;
                }
        }

        .icon-search {
            display: inline-block;
            position: absolute;
            top: 50%;
            right: 16px;
            transform: translateY(-50%);
        }
    }
</style>