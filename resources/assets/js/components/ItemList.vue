<template>
    <section class="list" @mousemove="resizeCol" @mouseup="stopResizing">
        <div class="list__head">
            <div class="list__row list__row--head">
                <div class="list__col list__col--head"
                     v-for="(header, i) in headers"
                     :style="{
                     'flex-basis': i < headers.length -1 ? headers[i].width : '1rem',
                     'max-width': (100 - (headers.length * 5)) + '%'
                     }"
                >
                    <span class="list__value">{{header.name}}</span>
                    <div class="list__grip list__grip--head"
                         v-if="i < headers.length - 1"
                         @mousedown="gripCol(i, $event)">&nbsp;
                    </div>
                </div>
            </div>
        </div>
        <div class="list__body">
            <div class="list__row list__row--body" v-for="item in items">
                <div class="list__col list__col--head"
                     v-for="(header, i) in headers"
                     :style="{'flex-basis': i < headers.length -1 ? headers[i].width : '1rem',
                     'max-width': (100 - (headers.length * 5)) + '%'
                     }"
                >
                    <span class="list__value">{{item[header.name]}}</span>
                    <div class="list__grip list__grip--body"
                         v-if="i < headers.length - 1"
                    >&nbsp;
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        props: {
            items: {type: Array, required: true},
            headers: {type: Array, required: true}
        },
        data() {
            return {
                resizeElement: null,
            }
        },
        methods: {
            gripCol(index, event) {
                this.resizeElement = {};
                this.resizeElement.index = index;
                this.resizeElement.offset = event.target.parentElement.offsetWidth - event.pageX;
            },
            resizeCol(e) {
                const el = this.resizeElement;
                if (el) {
                    this.headers[el.index].width = el.offset + e.pageX + 'px';
                }
            },
            stopResizing() {
                this.resizeElement = null;
            }
        }
    }
</script>

<style lang="scss">
    @import "~#/abstracts/variables";

    .list {
        height: 100%;
        font-size: 1.6rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        &__head {
            border-bottom: 1px solid rgba($color-black, .4);
        }
        &__body {
            overflow: scroll;
        }
        &__row {
            line-height: 3rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: flex;
            flex-direction: row;
            &--head {
                text-transform: uppercase;
            }
            &--body {
            }
        }

        &__col {
            padding-left: 1rem;
            min-width: 5%;
            display: flex;
            position: relative;
            flex-shrink: 0;
            &:last-child {
                flex-grow: 1;
            }

        }

        &__value {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            &--head {
            }
            &--body {
            }

        }
        &__grip {
            width: 2px;
            background-color: rgba($color-black, .2);
            position: absolute;
            right: 0;

            &--head {
                cursor: col-resize;
            }
            &--body {
            }
        }
    }
</style>