<template>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.84 28.87">
        <g id="Layer_2" data-name="Layer 2">
            <g id="Laag_1" data-name="Laag 1">
                <path :style="getColor" d="M29.46,0H.38A.38.38,0,0,0,0,.38V28.49a.38.38,0,0,0,.38.38H12.31a.38.38,0,0,0,.38-.38V17.4a.38.38,0,0,0-.38-.38H10.1V13.18h2.22a.38.38,0,0,0,.37-.38V12c0-.65,0-1.29,0-1.92a8.88,8.88,0,0,1,.15-1.56,4.24,4.24,0,0,1,3.3-3.54c.23-.06.47-.1.7-.14l.28,0h4.29V8.47H19a1.5,1.5,0,0,0-1.68,1.67v2.39a1.48,1.48,0,0,0,0,.21v.1a.37.37,0,0,0,.37.35h3.7L21.05,17H17.73a.38.38,0,0,0-.38.38V28.49a.38.38,0,0,0,.38.38H29.46a.38.38,0,0,0,.38-.38V.38A.38.38,0,0,0,29.46,0Z"/>
            </g>
        </g>
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
