<template>
    <ul class="sidebar">
        <router-link
            to="/company-data"
            v-slot="{ href, route, navigate, isExactActive }"
        >
            <li 
                class="sidebar-item"
                :class="[isExactActive && 'is-active']"
                :href="href" @click="navigate"
            >
                Company Data
            </li>
        </router-link>
        <li class="sidebar-item">
            Company Table
        </li>
        <router-link
            to="/"
            v-slot="{ href, route, navigate,isExactActive }"
        >
            <li 
                class="sidebar-item"
                :class="[isExactActive && 'is-active']"
                :href="href" @click="navigate"
            >
                Company Page
            </li>
        </router-link>
    </ul>
</template>

<script>
    export default {

    };
</script>