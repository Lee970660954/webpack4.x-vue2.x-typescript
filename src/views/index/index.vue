<template>
    <section class="page-index">
        <Header />
        <div class="top"></div>
        <button class="button" @click="navToDetailPage">去详情页</button>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from "@/components/common/header.vue"
@Component({
    components: {
        Header
    }
})
export default class IndexPage extends Vue{
    async navToDetailPage () {
        this.$router.push({ name: "DetailPage", query: { id: "1" } })
    }
    async created () {
        console.log("I am created IndexPage")
    }
    async mounted () {}
    async destroyed () {}
}
</script>

<style lang="scss">
    .page-index {
        position: relative;
        min-height: 100vh;
        .top {
            width: 100%;
            height: 500px;
            background-image: url("https://img1.baidu.com/it/u=1407750889,3441968730&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=799");
            background-size: 100%;
        }
        .button {
            display: block;
            padding: 4px;
            background-color: blue;
            color: #fff;
            border: 0 solid;
            border-radius: 8px;
            margin: 8px auto 0;
        }
    }
</style>