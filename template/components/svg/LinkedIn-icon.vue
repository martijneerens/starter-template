<template>
    <svg width="20" height="18" viewBox="0 0 20 19" class="linkedin-header-icon">
        <path fill="#000" fill-rule="nonzero"
              d="M19.835 11.646v7.334h-4.25v-6.842c0-1.72-.616-2.892-2.155-2.892-1.174 0-1.873.79-2.181 1.555-.112.273-.141.654-.141 1.037v7.142H6.855s.057-11.589 0-12.79h4.253v1.813l-.028.042h.028v-.042c.565-.87 1.573-2.113 3.832-2.113 2.798 0 4.895 1.828 4.895 5.756zM2.406.026C.952.026 0 .98 0 2.235c0 1.228.924 2.21 2.35 2.21h.028c1.484 0 2.406-.982 2.406-2.21C4.756.98 3.862.025 2.406.025zM.253 18.98h4.25V6.19H.254v12.79z"></path>
    </svg>
</template>

<script>
	export default {
        name: 'LinkedInIcon'
    }
</script>

<style lang="scss">
    .linkedin-header-icon:hover {
        path {
             fill: #007bb5
        }
    }
</style>
