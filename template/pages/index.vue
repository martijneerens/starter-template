<template>
    <section class="container">
        <vk-nav />

        <main class="content">
            <h1 class="title" v-html="meta.title"></h1>
            <p class="lead" v-html="meta.lead"></p>
        </main>

        <vk-footer />
    </section>
</template>

<script>
    import { mapState } from 'vuex';

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
        }

    }
</script>
