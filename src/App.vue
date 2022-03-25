<template>
    <div id="app">
        <keep-alive>
            <router-view />
        </keep-alive>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class App extends Vue{
    async created () {}
    async mounted () {}
}
</script>

<style lang="scss">
    #app {
        position: relative;
        min-height: 100vh;
    }
</style>