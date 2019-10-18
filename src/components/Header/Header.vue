<template>
    <header class="header">
        <div class="container">
            <div class="row">
                <div class="col-auto">
                    <HeaderLogo :img_src="img" :img_title="title" />
                </div>
                <div class="col-auto">
                    <HeaderSearch />
                </div>
                <div class="col">
                    <HeaderMenu :menus="menus"/>
                </div>
                <div class="col-auto">
                    <HeaderUser />
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    import HeaderLogo from './HeaderLogo.vue';
    import HeaderMenu from './HeaderMenu.vue';
    import HeaderUser from './HeaderUser.vue';
    import HeaderSearch from './HeaderSearch.vue';

    export default {
        data: () => ({
            title: 'Intricately',
            img: '../src/images/logo-pink.png',
            menus: [
                {
                    "id": 1,
                    "name": "Prospect",
                    "url": ""
                },
                {
                    "id": 2,
                    "name": "Alert",
                    "url": ""
                },
                {
                    "id": 3,
                    "name": "Learn",
                    "url": ""
                }
            ]
        }),

        components: {
            HeaderLogo,
            HeaderMenu,
            HeaderUser,
            HeaderSearch
        }
    }
</script>