<template>
    <div>COMAPNY DATA</div>
</template>

<script>

    export default {
        methods: {
            bodyClass(add) {
                const body = document.getElementsByTagName('body')[0];
                const name = 'company-data';

                (add) ? body.classList.add(name) : body.classList.remove(name);
            }
        },

        mounted() {
            this.bodyClass(true);
        },

        destroyed() {
            this.bodyClass(false)
        }
    }
</script>