<template>
    <section class="sidebar">
        <div class="sidebar__header">
            <div class="sidebar__title">SMS</div>
        </div>
        <div class="sidebar__content">
            <div class="sidebar__nav">
                <router-link class="sidebar__link" to="/">Home</router-link>
                <router-link class="sidebar__link" to="/products">Products</router-link>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    @import "~#/abstracts/variables";
    .sidebar {
        background-color: $color-primary;
        flex: 0 0 $sidebar-width;
        &__header {
            line-height: $header-height;
            padding-left: 1rem;
            border-bottom: 1px solid $color-divider;
        }
        &__title {
            color: $color-white;
            font-size: 2.5rem;
        }
        &__content {
            padding-top: 1rem;
        }
        &__nav {
        }
        &__link {
            display: block;
            text-decoration: none;
            color: $color-white;
            font-size: 1.5rem;
            border-left: 4px solid transparent;
            line-height: 3rem;
            padding-left: 1rem;

            &:hover {
                border-left-color: $color-secondary;
                background-color: $color-primary-light;
            }
        }
    }
</style>