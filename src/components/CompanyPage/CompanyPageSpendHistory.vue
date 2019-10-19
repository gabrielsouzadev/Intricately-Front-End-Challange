<template>
    <div class="company-page-spendhistory block mb-25">
        <div class="block-title">
            Company Spend History
        </div>
        <div class="block-content">
            <div class="block-placeholder" v-if="placeholder"></div>
            <div v-else>
                <div class="company-page-item">
                    <img class="img" src="/src/images/companies/logo-copy-3.png" alt="Amazon">
                    <div>
                        <a class="link">Google Cloud Platform,</a>
                        <div class="text">Microsoft spend on product $500,000</div>
                    </div>
                </div>
                <div class="company-page-item">
                    <img class="img" src="/src/images/companies/logo-copy-2.png" alt="Amazon">
                    <div>
                        <a class="link">CenturyLink CDN,</a>
                        <div class="text">Microsoft spend on product $300,000</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: Boolean,
            required: false
        }
    },
}
</script>