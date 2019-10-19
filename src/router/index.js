import Vue from 'vue'
import Router from 'vue-router'
import CompanyPage from '../components/Company/CompanyPage.vue';
import CompanyData from '../components/Company/CompanyData.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '*',
            name: 'company-page',
            component: CompanyPage
        },
        {
            path: '/company-data',
            name: 'company-data',
            component: CompanyData
        }
    ]
});