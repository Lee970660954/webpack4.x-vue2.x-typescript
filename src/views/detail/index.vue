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
    }
})
export default class DetailPage extends Vue {
    async created () {}
    async mounted () {}
    async destroyed () {}
}
</script>
