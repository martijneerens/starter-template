<template>
    <header>
        <a class="header-logo" :href="`http://www.volkskrant.nl/?utm_source=kijkverder&utm_medium=special&utm_campaign=${loadedMeta.name}`">
                <img src="~/assets/img/logo-volkskrant.svg" class="logotop">
            </a>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: 'Header',

        computed: {
            ...mapGetters([
                'loadedMeta'
            ])
        }
    }
</script>
