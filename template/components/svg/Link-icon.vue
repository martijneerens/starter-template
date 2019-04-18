<template>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.3 74.1" class="link-header-icon" @click="writeToClipboard()">
        <path d="M44.1,55.1L30.3,68.9c-6.9,6.9-18.2,7-25.1,0.1l0,0c0,0,0,0,0-0.1c0,0,0,0,0,0l0,0l0,0c-6.9-7-6.8-18.2,0.1-25.1l15.2-15.2
        	c6.9-6.9,18.2-7,25.1-0.1l0,0c0,0,0,0,0,0s0,0,0,0l0,0c0.8,0.8,1.6,1.8,2.2,2.7l-4.1,4.1c-1.2,1.2-3,1.4-4.3,0.6
        	c-0.2-0.2-0.4-0.4-0.6-0.7c-3.2-3.2-8.4-3.1-11.6,0.1L12,50.5c-3.2,3.2-3.2,8.4,0,11.6c3.2,3.2,8.4,3.1,11.6,0l8.6-8.6
        	C35.9,55.1,40.1,55.6,44.1,55.1z M68.9,5.1L68.9,5.1c-7-6.9-18.2-6.8-25.1,0.1L30,19c4-0.5,8.2,0,11.9,1.7l8.6-8.6
        	c3.2-3.2,8.4-3.2,11.6,0c3.2,3.2,3.1,8.4,0,11.6L46.9,38.7c-3.2,3.2-8.4,3.2-11.6,0.1c-0.2-0.2-0.4-0.4-0.6-0.7
        	c-1.4-0.8-3.2-0.6-4.3,0.6l-4.1,4.1c0.6,1,1.4,1.9,2.2,2.7l0,0c0,0,0,0,0,0c0,0,0,0,0,0l0,0c7,6.9,18.2,6.8,25.1-0.1l15.2-15.2
        	C75.8,23.4,75.8,12.2,68.9,5.1L68.9,5.1L68.9,5.1C69,5.2,69,5.2,68.9,5.1C68.9,5.1,68.9,5.1,68.9,5.1z"/>
    </svg>
</template>

<script>
    import { mapState } from 'vuex';

	export default {
        name: 'LinkIcon',

        computed : {
            ...mapState(['item']),
            slug() {
                if(this.item.year) {
                    return `https://www.volkskrant.nl/kijkverder/v/${this.item.year}/${this.item.slug}`
                } else {
                    return `https://www.volkskrant.nl/kijkverder/v/${this.item.slug}`
                }
            }
        },

        methods : {
            writeToClipboard() {
                navigator.permissions.query({name: "clipboard-write"}).then(result => {
                    if (result.state == "granted" || result.state == "prompt") {
                        let url = this.slug;

                        navigator.clipboard.writeText(url)
                        .then( () => {
                            alert('Link naar plakbord gekopieerd!')
                        }, () => {
                            console.log('Er ging iets fout bij het kopiëren van de link')
                        })
                    }
                })
            }
        }        
    }
</script>

<style lang="scss">
    .link-header-icon:hover {
        path {
             fill: #9b9b9b
        }
    }
</style>
