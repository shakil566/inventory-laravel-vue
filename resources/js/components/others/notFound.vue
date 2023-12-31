<template>
    <!-- Main content -->
    <section class="content">
        <div class="error-div">
            <div class="error-page">
                <h2 class="headline text-warning"> 404</h2>

                <div class="error-content">
                    <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>

                    <p>
                        We could not find the page you were looking for.
                        Meanwhile, you may <router-link to="/">return to dashboard</router-link>
                    </p>

                </div>
            </div>
            <!-- /.error-content -->
        </div>
        <!-- /.error-page -->
    </section>
    <!-- /.content -->
</template>

<style scoped>
.error-page>.error-content {
    margin-top: 150px !important;
}
</style>
