<template>
	<svg xmlns="http://www.w3.org/2000/svg" width="17px" height="22px">
		<g fill="#000" >
			<path d="M15.5 6h-5a.5.5 0 1 0 0 1H15v14H1V7h4.5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5z"></path>
			<path d="M4.825 3.88L7.5 1.586V13.22a.5.5 0 1 0 1 0V1.587l2.675 2.292a.5.5 0 1 0 .65-.758l-3.5-3a.498.498 0 0 0-.65 0l-3.5 3a.5.5 0 1 0 .65.758z"></path>
		</g>
	</svg>
</template>

<script>
	export default {
        name: 'MenuToggle',
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
