<template>
	<div class="top-navigation-wrapper">
		<nav class="top-navigation">
			<div class="header-left">
			</div>
			
			<a class="header-logo"
			   href="https://www.volkskrant.nl/">
				<vk-logo></vk-logo>
			</a>
			
			<div class="header-menu">
				<div class="share-toggle" @click="toggleMenu()">
					<menu-toggle />
				</div>
				
				<div class="share-inline">
					<a :href="`https://www.facebook.com/sharer/sharer.php?u=${slug}`" class="sharebox-link">
						<facebook-icon />
					</a>
					<a :href="`https://twitter.com/intent/tweet?via=volkskrant&url=${slug}`" class="sharebox-link">
						<twitter-icon />
					</a>
					<a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${slug}`" class="sharebox-link">
						<linkedin-icon />
					</a>
					<div class="sharebox-link" @click="writeToClipboard()">
						<link-icon />
					</div>
					<a :href="`mailto:?subject=${subject}&body=${slug}`" class="sharebox-link">
						<mail-icon />
					</a>
				</div>
			</div>
		</nav>
		<transition name="fademodal">
			<div class="nav-modal" v-if="modalActive">
				<div class="nav-modal-icons">
					<a :href="`https://www.facebook.com/sharer/sharer.php?u=${slug}`" class="sharebox-link">
						<facebook-modal-icon />
					</a>
					<a :href="`https://twitter.com/intent/tweet?via=volkskrant&url=${slug}`" class="sharebox-link">
						<twitter-modal-icon />
					</a>,
					<a :href="`mailto:?subject=${subject}&body=${slug}`" class="sharebox-link">
						<mail-modal-icon />
					</a>
					<a :href="`https://wa.me/?text=${slug}`">
						<whatsapp-modal-icon />
					</a>
				</div>
				<div class="nav-modal-link" @click="writeToClipboard()">
					<link-icon /> Kopiëer de link van het artikel
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
    import { mapState } from 'vuex';

    import VkLogo from '~/components/svg/Logo';
    import FacebookIcon from '~/components/svg/Facebook-icon-header.vue';
    import TwitterIcon from '~/components/svg/Twitter-icon.vue';
    import MailIcon from '~/components/svg/Mail-icon.vue';
    import LinkIcon from '~/components/svg/Link-icon.vue';
    import LinkedinIcon from '~/components/svg/LinkedIn-icon.vue';
    import MenuToggle from '~/components/svg/Menu-toggle.vue';

    import FacebookModalIcon from '~/components/svg/nav-modal/facebook.vue';
    import TwitterModalIcon from '~/components/svg/nav-modal/twitter.vue';
    import MailModalIcon from '~/components/svg/nav-modal/mail.vue';
    import WhatsappModalIcon from '~/components/svg/nav-modal/whatsapp.vue';
    
    import copyToClipboard from "~/utils/clipboard";

    export default {
        name: 'Header',

        components: {
            VkLogo,
            TwitterIcon,
            FacebookIcon,
            LinkIcon,
            LinkedinIcon,
            MailIcon,
            MenuToggle,
            FacebookModalIcon,
            TwitterModalIcon,
            MailModalIcon,
            WhatsappModalIcon
        },

        data() {
            return {
                modalActive: false
            }
        },

        computed: {
            ...mapState(['meta']),

            slug() {
                if(this.meta.year) {
                    return `https://www.volkskrant.nl/kijkverder/${this.meta.year}/${this.meta.slug}`
                } else {
                    return `https://www.volkskrant.nl/kijkverder/${this.meta.slug}`
                }
            },

            subject(){
                return encodeURIComponent('Bekijk dit verhaal bij de Volkskrant');
            },
        },

        methods : {
            toggleMenu() {
                this.modalActive = !this.modalActive
            },

            writeToClipboard() {
				copyToClipboard(this.slug)
            }
        }
    }
</script>
