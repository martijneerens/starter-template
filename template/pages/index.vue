<template>
    <section class="container">
        <vk-nav />

        <main class="content">
            <h1 class="title" v-html="meta.title"></h1>
            <h2 class="lead" v-html="meta.lead"></h2>
        </main>

        <vk-footer
                :credits="meta.credits"
                :cta="meta.cta"
                :shortname="meta.name"
                :pagetitle="meta.title" />
    </section>
</template>

<script>
    import { mapState } from 'vuex';
    import { track } from 'vklib';

    import VkNav from '~/components/Vk-nav.vue';
    import VkFooter from '~/components/Footer.vue';

    export default {
        name: 'HomeScreen',

        components: {
            VkNav,
            VkFooter
        },

        data() {
            return {
                mounted: false,
            }
        },

        computed: {
            ...mapState([
                'meta', 'items'
            ])
        },

        mounted() {
            this.mounted = true;
            track.trackOnce(`${this.$route.name}-once`);
        }

    }
</script>
