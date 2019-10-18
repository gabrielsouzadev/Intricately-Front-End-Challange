<template>
    <div class="header-menu">
        <ul class="header-menu-list">
            <div 
                class="header-menu-item" 
                v-for="item in menus"
                :key="item.id"
            >
                <a 
                    class="header-menu-link" 
                    :href="item.url"
                >
                    <span>{{ item.name }}</span>
                    <img class="header-menu-arrow img" src="src/images/arrow-down.png" alt="arrow-down">
                </a>
            </div>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            menus: {
                type: Array,
                required: true
            }
        },
    };
</script>