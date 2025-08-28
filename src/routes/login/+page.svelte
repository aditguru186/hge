<script lang="ts">
    import Footer from "$lib/component/Footer.svelte";
    import LandingPageNavbar from "$lib/component/LandingPageNavbar.svelte";
    import { redirectToWhatsapp } from "$lib/utils";
    import '$lib/style.css';


</script>

<div class="container">
    <LandingPageNavbar />
    <div class="content">
        <h1>Login Page</h1>
        <p>Please log in to access your account.</p>
        <!-- Add your login form or components here -->

        <form method="POST" action="/login">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required>

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required>

            <button type="submit">Login</button>
        </form>
    </div>
    <Footer />
</div>