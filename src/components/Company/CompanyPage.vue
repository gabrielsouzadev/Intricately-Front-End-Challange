<template>
    <div class="company-page">
        <CompagePageInfo />
        <div class="mt-25">
            <div class="row md align-start">
                <div class="col-6 md">
                    <CompanyPageActivities />
                </div>
                <div class="col-6 md">
                    <CompanyPageSimilarCompanies />
                    <CompanyPageSpendHistory />
                    <CompanyPageSpendHistory />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CompagePageInfo from './CompanyPageInfo.vue';
    import CompanyPageActivities from './CompanyPageActivities.vue';
    import CompanyPageSimilarCompanies from './CompanyPageSimilarCompanies.vue';
    import CompanyPageSpendHistory from './CompanyPageSpendHistory.vue';

    export default {
        components: {
            CompagePageInfo,
            CompanyPageActivities,
            CompanyPageSimilarCompanies,
            CompanyPageSpendHistory
        }
    }
</script>