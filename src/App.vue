<template>
    <div id="app">
        <Header />
            <main class="main">
                <div class="container">
                    <div class="col-auto">
                        <Sidebar />
                    </div>
                    <div class="col">
                        <router-view></router-view>
                    </div>
                </div>
            </main>
        <Footer />
    </div>
</template>

<script>
    import Header from './components/Header/Header.vue';
    import Sidebar from './components/Sidebar/Sidebar.vue';
    import Footer from './components/Footer/Footer.vue';
    
    export default {
        name: 'app',

        components: {
            Header,
            Sidebar,
            Footer
        }
    };
</script>
