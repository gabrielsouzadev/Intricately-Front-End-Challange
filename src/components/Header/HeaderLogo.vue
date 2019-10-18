<template>
    <div class="header-logo">
        <img 
            class="img" 
            :src="img_src" 
            :alt="img_title"
        >
    </div>
</template>

<script>
    export default {
        props: {
            img_src: {
                type: String,
                required: true
            },
            img_title: {
                type: String,
                required: true
            }
        }
    };
</script>
