<template>
    <div id="app">
        <Header />
            <Main />
        <Footer />
    </div>
</template>

<script>
    import Header from './components/Header/Header.vue';
    import Main from './components/Main/Main.vue';
    import Footer from './components/Footer/Footer.vue';
    
    export default {
        name: 'app',

        components: {
            Header,
            Main,
            Footer
        }
    };
</script>
