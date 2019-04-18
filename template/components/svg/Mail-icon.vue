<template>
    <svg width="20" height="22" viewBox="0 0 20 14" class="mail-header-icon">
        <path fill="#000" fill-rule="nonzero"
              d="M9.819 9.775l-2.43-2.117-6.946 5.927c.253.233.594.379.97.379h16.812c.374 0 .714-.146.965-.379l-6.942-5.927-2.43 2.117zM19.194.378a1.416 1.416 0 0 0-.97-.378H1.413a1.41 1.41 0 0 0-.966.381l9.373 7.997 9.375-8zM0 1.226v11.601l6.779-5.735L0 1.226zm12.858 5.866l6.78 5.735V1.222l-6.78 5.87z"></path>
    </svg>
</template>

<script>
	export default {
        name: 'MailIcon'
    }
</script>

<style lang="scss">
    .mail-header-icon:hover {
        path {
             fill: #9b9b9b
        }
    }
</style>
