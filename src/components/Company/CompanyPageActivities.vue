<template>
    <div class="company-page-activities block">
        <div class="block-title">
            Activities
        </div>
        <div class="company-page-active" v-for="activie in activities" :key="activie.id">
            <div class="days">
                {{ activie.days }} days ago
            </div>
            <div class="logo">
                <img :src="activie.src" :alt="activie.name">
            </div>
            <div class="info">
                <div v-if="activie.replaced">
                    <a class="link">{{ activie.name }}</a> 
                    replaced 
                    <span>{{ activie.replaced }}</span> 
                    on 
                    <a class="link">{{ activie.properties }} property</a>
                </div>
                <div v-else>
                    {{ activie.name }} launched {{ activie.launched }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    mounted() {
        this.$store.dispatch('activities/getActivities')
    },

    computed: {
        ...mapGetters({
            activities: 'activities/activities'
        })
    },
}
</script>