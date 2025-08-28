<script lang="ts">
	import Footer from "$lib/component/Footer.svelte";
    import LandingPageNavbar from "$lib/component/LandingPageNavbar.svelte";
    import Services from "$lib/component/Services.svelte";
    import { redirectToWhatsapp } from "$lib/utils";
    import DarsanTiming from "$lib/component/DarsanTiming.svelte";
    import '$lib/style.css';
</script>
<svelte:head>
    <title>Shree Jagannath Temple Darshan - Mahaprasad Sevan - Free accommodation</title>
    <meta name="description" content="Darshan at Shree Jagannath Temple Puri. Panda of Bihar Jharkhand UP - Hotel Guru Estate. Free/Paid room with Mahaprasad seva, best hospitality." />
    <meta name="keywords" content="Jagannath Temple, Puri Temple, Bihar Atithi Bhawan, Jharkhand Atithi Bhawan, Hotel Guru Estate Puri, Temple Accommodation, Mahaprasad, Darshan Seva" />
    
    <!-- Open Graph Meta Tags for social sharing -->
    <meta property="og:title" content="Shree Jagannath Temple Darshan | Bihar & Jharkhand Atithi Bhawan Puri" />
    <meta property="og:description" content="Experience divine darshan at Shree Jagannath Temple Puri. Stay at Bihar & Jharkhand Atithi Bhawan with Mahaprasad seva and excellent hospitality." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.badepandaharihar.guru" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://www.badepandaharihar.guru" />
</svelte:head>

<a class="whatsapp-floater" href="https://wa.me/917008096589" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="whatsapp-icon">
</a>
<LandingPageNavbar />
<div class="container">
    <Services/>
    <DarsanTiming/>
</div>
<Footer/>

<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 30px;
    padding: 20px;
}
</style>