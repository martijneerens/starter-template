<template>
	<footer>
		<div class="footer-credits">
			<a class="vk-footer__logo" href="https://www.vk.nl">
				<img src="~/assets/img/volkskrant-white.svg">
			</a>
		</div>
		
		<img class="footer-divider" src="~/assets/img/footerdivider.png">
		
		<div class="footer-subscribe" v-html="meta.footer_cta" v-if="meta && meta.footer_cta">
		</div>
		
		<div class="footer-subscribe" v-html="page.footer_cta" v-else-if="page && page.footer_cta">
		</div>
		
		<div class="footer-subscribe" v-else>
			<p class="subscribe-text">Ook kwaliteitsjournalistiek ondersteunen?</p>
			<a class="subscribe-link" href="https://www.krant.nl/" target="_blank">Overweeg een abonnement op de
				Volkskrant</a>
		</div>
		
		<img class="footer-divider" src="~/assets/img/footerdivider.png">
		
		<div class="socials">
			<p class="socialtext">Volg ons</p>
			<div class="social-icons">
				<a href="https://twitter.com/volkskrant"
				   target="_blank">
					<img src="~/assets/img/twitter.png">
				</a>
				<a href="https://www.facebook.com/volkskrant"
				   target="_blank">
					<img src="~/assets/img/facebook.png">
				</a>
				<a href="https://www.instagram.com/de_volkskrant/"
				   target="_blank">
					<img src="~/assets/img/instagram.png">
				</a>
				<a href="https://soundcloud.com/volkskrant"
				   target="_blank">
					<img src="~/assets/img/soundcloud.png">
				</a>
				<a href="https://vk.nl/podcasts"
				   target="_blank">
					<img src="~/assets/img/podcast.png">
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'VkFooter',

        computed: {
            strippedCredits() {
                let regex = /(<([^>]+)>)/ig;
                return this.credits.replace(regex, "");
            },
            ...mapState(['meta', 'page'])
        }
    }
</script>
