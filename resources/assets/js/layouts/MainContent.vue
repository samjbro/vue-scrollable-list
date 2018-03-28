<template>
    <section class="main-content">
        <router-view/>
    </section>
</template>

<style lang="scss">
    @import "~#/abstracts/variables";
    .main-content {
        flex-grow: 1;
        max-width: calc(100% - #{$sidebar-width});
    }
</style>
