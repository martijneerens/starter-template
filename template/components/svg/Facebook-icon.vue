<template>
    <svg width="9" height="22" viewBox="0 0 9 19">
        <path :style="getColor" fill-rule="nonzero"
              d="M1.943 3.672v2.61H.031v3.193h1.912v9.486h3.93V9.475h2.635s.247-1.53.367-3.204H5.887V4.088c0-.326.428-.765.852-.765h2.14V0H5.97C1.846 0 1.943 3.195 1.943 3.672z"></path>
    </svg>
</template>

<script>
	export default {
        name: 'FacebookIcon',
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
