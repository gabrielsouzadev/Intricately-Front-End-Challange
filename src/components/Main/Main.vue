<template>
    <main class="main">
        <div class="container md">
            <div class="row md align-start">
                <div class="col-auto md">
                    <Sidebar />
                </div>
                <div class="col md">
                    <router-view />
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import Sidebar from '../Sidebar/Sidebar.vue';

    export default {
        components: {
            Sidebar
        }
    }
</script>