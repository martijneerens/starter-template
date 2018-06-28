<template>
    <aside class="vk-share">
        <p class="vk-share__title"
           v-if="title"
           v-html="title"></p>

        <menu class="vk-share__buttons">
            <a :href="facebookUrl"
               @click="click('facebook', $event)"
               target="_blank">
                <img src="~/assets/img/icon-facebook.svg" alt="Deel via Facebook">
            </a>

            <a :href="twitterUrl"
               @click="click('twitter', $event)"
               target="_blank">
                <img src="~/assets/img/icon-twitter.svg" alt="Deel via Twitter">
            </a>

            <a :href="mailtoUrl"
               @click="click('email', $event)"
               target="_blank">
                <img src="~/assets/img/icon-mail.svg" alt="Deel per e-mail"/>
            </a>
        </menu>
    </aside>
</template>
<script>

    const FACEBOOK_URL = 'https://www.facebook.com/sharer/sharer.php?u=';
    const TWITTER_URL = 'https://twitter.com/intent/tweet';

    export default {
        name: 'VkShare',

        computed: {
            facebookUrl() {
                return `${FACEBOOK_URL}${this.url}`;
            },

            encodedUrl() {
                return encodeURIComponent(this.url);
            },

            mailtoUrl() {
                const text = encodeURIComponent(this.mailText);
                const subject = encodeURIComponent(this.mailSubject);
                return `mailto:?subject=${subject}&body=${text}`;
            },

            twitterUrl() {
                let twitterUrl = `${TWITTER_URL}?via=volkskrant&url=${this.encodedUrl}`;

                if (this.text) {
                    twitterUrl += `&text=${encodeURIComponent(this.text)}`;
                }

                return twitterUrl;
            }
        },

        methods: {
            click(type) {
                this.$emit('share', type);
            }
        },

        props: {
            facebookIcon: {
                type: String,
                default: '~/assets/img/icon-facebook.svg'
            },

            mailIcon: {
                type: String,
                default: '~/assets/img/icon-mail.svg'
            },

            mailSubject: {
                type: String
            },

            mailText: {
                type: String
            },

            text: {
                type: String
            },

            title: {
                type: String
            },

            twitterIcon: {
                type: String,
                default: '~/assets/img/icon-twitter.svg'
            },

            url : {
                type : String,
                default() {
                    if (typeof window === 'undefined') {
                        return '';
                    }
                    else{
                        return window.location.href;
                    }
                }
            }
        }
    }

</script>