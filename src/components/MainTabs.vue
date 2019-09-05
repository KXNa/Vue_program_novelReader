<template>
  <div class="main-tabs">
      <router-link to="/bookshelf" tag="div" exact class="tab-item icon-books"><div class="tab-name firstone">书架</div></router-link>
      <router-link to="/bs/excellent" tag="div" class="tab-item icon-Store"><span class="tab-name">书城</span></router-link>
  </div>
</template>

<script>
export default {
    name: "MainTabs",
    props:["recommend"]
}
</script>
<style lang="scss" scoped>
    .main-tabs {
        position: fixed;
        display: flex;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 54px;
        font-weight:700;
        font-size: 32px;
        background: $m-white;
        color:mblack(0.7);
        z-index: 100;

        .tab-item {
            flex: 1;
            line-height: 50px;
            text-align: center;

            &.link-active {
                color: $m-blue;
            }
        }

        .tab-name {
            display: inline-block;
            position: absolute;
            bottom: 22px;
            height: 10px;
            font-size: 10px;
            transform: translateX(-26px)
        }

        .firstone {
                transform: translateX(-30px)
            }
    }
</style>