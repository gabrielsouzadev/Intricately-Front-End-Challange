<template>
    <div class="company-data mb-25">
        <div class="company-data-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing eli, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </div>
        <CompanyDataForm />
    </div>
</template>

<script>
    import CompanyDataForm from './CompanyDataForm.vue';

    export default {
        methods: {
            bodyClass(add) {
                const body = document.getElementsByTagName('body')[0];
                const name = 'page-company-data';

                (add) ? body.classList.add(name) : body.classList.remove(name);
            }
        },

        mounted() {
            this.bodyClass(true);
        },

        destroyed() {
            this.bodyClass(false)
        },

        components: {
            CompanyDataForm
        }
    }
</script>