<template>
    <footer :style="footerBackground">
       <div class="footer-credits">
           <a class="vk-footer__logo" v-bind:href="meta.slug">
               <vk-logo :color="color" />
           </a>
       </div>

       <img src="~/assets/img/footerdivider.png" class="footer-divider">

       <div class="footer-subscribe">
           <p class="subscribe-text">{{meta.cta}}</p>
           <a class="subscribe-link" :href="meta.footer_credits" target="_blank">{{meta.footercta}}</a>
       </div>

       <img src="~/assets/img/footerdivider.png" class="footer-divider">

       <div class="socials">
           <p class="socialtext">Volg ons</p>
           <div class="social-icons">
               <a v-bind:href="'https://twitter.com/volkskrant'"
               target="_blank">
                   <twitter-icon :color="color"/>
               </a>
               <a v-bind:href="'https://www.facebook.com/volkskrant'"
               target="_blank">
                   <facebook-icon :color="color"/>
               </a>
               <a v-bind:href="'https://www.instagram.com/de_volkskrant/'"
               target="_blank">
                   <instagram-icon :color="color"/>
               </a>
               <a v-bind:href="'https://soundcloud.com/volkskrant'"
               target="_blank">
                   <soundcloud-icon :color="color"/>
               </a>
               <a v-bind:href="'https://itunes.apple.com/nl/podcast/het-volkskrantgeluid/id1233650827?mt=2'"
               target="_blank">
                   <podcast-icon :color="color"/>
               </a>
           </div>
       </div>
    </footer>
</template>

<script>
    import { mapState } from 'vuex';
    import VkLogo from '~/components/svg/Vk-logo.vue';
    import TwitterIcon from '~/components/svg/Twitter-icon.vue';
    import FacebookIcon from '~/components/svg/Facebook-icon.vue';
    import InstagramIcon from '~/components/svg/Instagram-icon.vue';
    import SoundcloudIcon from '~/components/svg/Soundcloud-icon.vue';
    import PodcastIcon from '~/components/svg/Podcast-icon.vue';

    export default {
        name: 'VkFooter',

        props: {
            color: {
                type: String,
                default: '#ffffff'
            },
            background: {
                type: String,
                default: '#000000'
            }
        },

        components : {
            VkLogo,
            TwitterIcon,
            FacebookIcon,
            InstagramIcon,
            SoundcloudIcon,
            PodcastIcon
        },

        computed : {
            ...mapState(['meta']),
            footerBackground() {
                return {
                    background: this.background
                }
            }
        }
    }
</script>
