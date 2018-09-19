<template>
    <div class="vk-nav-top-wrapper">
        <nav class="vk-nav-top">
            <a class="vk-nav-top__logo"
               :href="`http://www.volkskrant.nl/?utm_source=kijkverder&utm_medium=special&utm_campaign=${meta.slug}`"
            target="_blank">
                <vk-logo :color="color" />
            </a>
        </nav>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import VkLogo from '~/components/svg/Vk-logo.vue';

    export default {
        name: 'vk-nav',
        components : {
            VkLogo
        },
        props: {
            color: {
                type: String,
                default: '#000000'
            }
        },
        computed : mapState([
            'meta'
        ])
    }
</script>
