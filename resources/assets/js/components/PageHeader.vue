<template>
    <section class="page-header">
        <div class="page-header__title-box">
            <h1 class="page-header__title">
                <slot></slot>
            </h1>
        </div>
    </section>
</template>

<style lang="scss">
    @import "~#/abstracts/variables";
    .page-header {
        border-bottom: 1px solid $color-divider;
        &__title-box {
            line-height: $header-height;
            padding-left: 1rem;
        }
        &__title {
            font-size: 3rem;
            font-weight: normal;
        }
    }
</style>