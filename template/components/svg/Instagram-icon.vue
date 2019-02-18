<template>
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 31.8" style="enable-background:new 0 0 32 31.8;" xml:space="preserve">
		<path :style="getColor" d="M24.7,31H7.3C3.8,31,1,28.2,1,24.7V7.3C1,3.8,3.8,1,7.3,1h17.3C28.2,1,31,3.8,31,7.3v17.3C31,28.2,28.2,31,24.7,31z M7.3,3 C4.9,3,3,4.9,3,7.3v17.3C3,27.1,4.9,29,7.3,29h17.3c2.4,0,4.3-1.9,4.3-4.3V7.3C29,4.9,27.1,3,24.7,3H7.3z"></path>
		<path :style="getColor" d="M16,23.5c-4.2,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5C23.5,20.2,20.2,23.5,16,23.5z M16,10.5 c-3.1,0-5.5,2.5-5.5,5.5c0,3.1,2.5,5.5,5.5,5.5c3.1,0,5.5-2.5,5.5-5.5C21.5,12.9,19.1,10.5,16,10.5L16,10.5z"></path>
		<path :style="getColor" d="M24.5,9.9c-1.4,0-2.6-1.1-2.6-2.5c0-1.4,1.1-2.6,2.5-2.6S27,5.9,27,7.3c0,0,0,0,0,0C27,8.8,25.9,9.9,24.5,9.9z M24.5,5.8 c-0.9,0-1.6,0.7-1.6,1.5s0.7,1.6,1.5,1.6c0.9,0,1.6-0.7,1.6-1.5C26,6.5,25.3,5.8,24.5,5.8z"></path>
	</svg>
</template>

<script>
	export default {
        name: 'InstagramIcon',
        props: ['color'],
        computed : {
            getColor() {
                return {
                    fill: this.color,
					stroke: this.color
                }
            }
        }
    }
</script>
