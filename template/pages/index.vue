<template>

    <section class="container">
        <vk-header></vk-header>

        <div class="content">
            <h1 class="title">
                {{loadedMeta.title}}
            </h1>
            <h2 class="lead" v-html="loadedMeta.lead">
            </h2>
        </div>

        <vk-footer
                :credits="loadedMeta.credits"
                :cta="loadedMeta.cta"
                :shortname="loadedMeta.name"
                :pagetitle="loadedMeta.title"></vk-footer>
    </section>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {
        track
    } from 'vklib';

    import VkHeader from '~/components/Header.vue';
    import VkFooter from '~/components/Footer.vue';

    export default {
        name: 'HomeScreen',

        components: {
            VkHeader,
            VkFooter
        },

        data() {
            return {
                mounted: false,
            }
        },

        computed: {
            ...mapGetters([
                'loadedMeta',
                'loadedItems'
            ])
        },

        mounted() {
            this.mounted = true;
            track.trackOnce(`${this.$route.name}-once`);
        }

    }
</script>
