<script lang="ts">
	import '$lib/style.css';
	import HeroSection from "$lib/component/HeroSection.svelte";
	import Services from "$lib/component/Services.svelte";
	import Footer from "$lib/component/Footer.svelte";
	import DarsanTiming from "$lib/component/DarsanTiming.svelte";
	import FAQ from "$lib/component/FAQ.svelte";
</script>

<svelte:head>
    <title>Hotel Guru Estate Shree Jagannath Temple Puri</title>
    <meta name="description" content="Hotel Guru Estate Darshan at Shree Jagannath Temple Puri. Panda of Bihar Jharkhand UP - Hotel Guru Estate. Free/Paid room with Mahaprasad seva, best hospitality." />
    <meta name="keywords" content="Hotel Guru Estate Jagannath Temple, Puri Temple, Bihar Atithi Bhawan, Jharkhand Atithi Bhawan, Hotel Guru Estate Puri, Temple Accommodation, Mahaprasad, Darshan" />
    
    <!-- Open Graph Meta Tags for social sharing -->
    <meta property="og:title" content="Hotel Guru Estate Shree Jagannath Temple Darshan | Bihar & Jharkhand Atithi Bhawan Puri" />
    <meta property="og:description" content="Hotel Guru Estate Experience divine darshan at Shree Jagannath Temple Puri. Stay at Bihar & Jharkhand Atithi Bhawan with Mahaprasad seva and excellent hospitality." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.hotelguruestate.com" />
</svelte:head>
<a class="whatsapp-floater" href="https://wa.me/919861133360" target="_blank" rel="noopener noreferrer">
    <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="whatsapp-icon">
</a>

	<HeroSection />
	<Services />
	<DarsanTiming/>
	<FAQ />
	<Footer />
