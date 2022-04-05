<template>
    <section class="comp-header">
        I am header.
    </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component({})
export default class Header extends Vue {
    async created () {}
    async mounted () {}
    async destroyed () {}
}
</script>

<style lang="scss" scoped>
    .comp-header {
        background-color: red;
    }
</style>