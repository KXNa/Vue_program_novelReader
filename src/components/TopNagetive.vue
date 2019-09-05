<template>
    <div class="top-nagetive">
        <div class="nav-wrapper"  v-for="(content,index) in navcontent" :key="index">
            <a :href="content.url"><img class="nav-icons" :src="content.icon" alt="" ></a>
            <div class="title" >{{content.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopNagetive",
    props: ["navcontent"]
}
</script>

<style lang="scss" scoped>
    .top-nagetive {
        display: flex;
        padding: 10px 16px;

        .nav-wrapper {
            flex: 1;
            text-align: center;

            .nav-icons {
                width: 40px;
            }

            .title {
                font-size: $xs-size;
                color: mblack(0.5);
            }
        }
    }
</style>