<template>
    <section class="page-detail">
        <Header />
        I am detailPage
    </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "@/components/common/header.vue"
@Component({
    components: {
        Header
    },
    beforeRouteEnter (to: any, from: any, next) {
        console.log("DetailPage beforeRouteEnter", this);
        next();
    },
    beforeRouteUpdate (to: any, from: any, next) {
        console.log("DetailPage beforeRouteUpdate", this);
        next();
    },
    beforeRouteLeave (to: any, from: any, next) {
        console.log("DetailPage beforeRouteLeave", this);
        // return false;
        next();
    }
})
export default class DetailPage extends Vue {
    async created () {
        const { id } = this.$route?.query;
        console.log("I am created DetailPage", id);
        this.$router.push({ name: "DetailPage", query: { id: "2" } })
    }
    async mounted () {}
    async destroyed () {}
}
</script>
