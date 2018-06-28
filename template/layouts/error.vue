<template>
    <div class="container">
        <vk-header></vk-header>
        <h1 v-if="error.statusCode === 404">Deze pagina kan niet worden gevonden</h1>
        <div v-else>
            <h1>Er is een probleem opgetreden:</h1>
            <h3 v-html="error.message"></h3>
        </div>
        <nuxt-link to="/">Ga terug naar de homepage</nuxt-link>
    </div>
</template>

<script>
    import VkHeader from '~/components/Header.vue';

    export default {
        props: ['error'],
        layout: 'defafult',
        components: {
            VkHeader
        },
    }
</script>