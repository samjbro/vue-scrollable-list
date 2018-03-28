<template>
    <div class="main">
        <sidebar/>
        <main-content/>
    </div>
</template>

<script>
    import Sidebar from '@/layouts/Sidebar';
    import MainContent from '@/layouts/MainContent';
    export default {
        components: {Sidebar, MainContent}
    }
</script>

<style lang="scss">
    .main {
        height: 100vh;
        display: flex;
    }
</style>