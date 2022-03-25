<template>
    <div class="page-index"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class IndexPage extends Vue{
    async created () {}
    async mounted () {}
}
</script>

<style lang="scss">
    .page-index {
        position: relative;
        min-height: 100vh;
    }
</style>