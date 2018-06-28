<template>
    <footer class="vk-footer">
        <section class="vk-footer__section">
            <a v-bind:href="vkhomelink"
               class="vk-footer__vklogo">
                <img src="~/assets/img/volkskrant-white.svg"
                     alt="Logo van de Volkskrant" />
            </a>

            <p class="vk-footer__credits"
               v-html="credits"></p>
        </section>

        <hr class="vk-footer__hr" />

        <section class="vk-footer__section vk-footer__cta"
                 v-html="cta">
        </section>

        <hr class="vk-footer__hr" />

        <section class="vk-footer__section">
            <vk-share
                    title="Deel dit"
                    :mail-subject="pagetitle"
                    :mail-text="url"
                    :text="pagetitle"></vk-share>
        </section>
    </footer>
</template>

<script>
    import { $ } from 'vklib';
    import VkShare from '~/components/Share.vue';

    const shortname = $("body").getAttribute('data-track-app');
    const pagetitle = $("title").textContent;
    let pageurl = '';
    if(window){
        pageurl = window.location.href;
    }

    export default {
        name: 'VkFooter',

        components : {
            VkShare
        },
        computed : {
            vkhomelink() {
                return `https://www.volkskrant.nl/?utm_source=kijkverder&utm_medium=special&utm_campaign=${this.shortname}`;
            }
        },

        props : {
            credits: {
                type: String,
                required: true
            },

            cta: {
                type: String,
                required: true
            },

            facebookIcon: {
                type: String,
                default: '~/assets/img/icon-facebook.svg'
            },

            mailIcon: {
                type: String,
                default: '~/assets/img/icon-mail.svg'
            },

            pagetitle: {
                type: String,
                default: pagetitle
            },

            shortname: {
                type: String,
                default: shortname
            },

            twitterIcon: {
                type: String,
                default: '~/assets/img/icon-twitter.svg'
            },

            url: {
                type: String,
                default: pageurl
            }
        }
    }
</script>