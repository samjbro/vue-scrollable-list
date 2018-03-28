<template>
    <section class="products">
        <page-header>Products</page-header>
        <div class="products__content">
            <item-list :items="products" :headers="headers"/>
        </div>
    </section>
</template>

<script>
    import {ProductStore} from '@/stores'
    import PageHeader from '@/components/PageHeader';
    import ItemList from '@/components/ItemList';
    export default {
        components: {PageHeader, ItemList},
        data() {
            return {
                state: ProductStore.state,
                headers: [
                    {name: 'id', width: '10%'},
                    {name: 'title', width: '10%'},
                    {name: 'overview', width: '10%'}
                    ]
            }
        },
        computed: {
            products() {
                return this.state.products;
            }
        },
        mounted() {
            ProductStore.init();
        }
    }
</script>

<style lang="scss">
    @import "~#/abstracts/variables";
    .products {
        width: 100%;
        height: 100%;
        overflow: hidden;
        &__content {
            /*width: 100%;*/
            height: calc(100% - #{$header-height});
        }
    }
</style>