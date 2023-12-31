<template>
    <Navbar />
    <Sidebar />
    <router-view />
    <Footer />
</template>

<script>
import Navbar from '../components/layouts/navbar.vue'
import Sidebar from '../components/layouts/sidebar.vue'
import Footer from '../components/layouts/footer.vue'

export default {
    name: 'App',
    props: {
    },
    components: {
        Navbar,
        Sidebar,
        Footer
    },
    methods: {
        Next() {
            this.$router.go(+1)
        },
        Prev() {
            this.$router.go(-1)
        }
    }
}
</script>
