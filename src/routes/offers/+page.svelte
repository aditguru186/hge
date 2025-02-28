<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { onMount } from 'svelte';
    import {wp_url_coupon24} from '../../backend/constants.js';
//   import { tweened } from 'svelte/motion';

  let colorIndex = 0;
  let colors = ['#d70700', '#e2b0af', '#fefefe'];

  onMount(() => {
    //@ts-ignore
    const intervalId = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
    }, 500);

    return () => clearInterval(intervalId);
  });
</script>

<Navbar/>
<div class="offer-container">
  <div 
  class="offer-bubble" 
  style="background-color: {colors[colorIndex]}" 
  on:click={() => window.open(wp_url_coupon24, '_blank')}
  tabIndex=0
    on:keydown={(e) => {
    if (e.key === 'Enter') {
        window.open(wp_url_coupon24, '_blank')
    }
    }}
  >
    <p class="offer-text">SPECIAL OFFER</p>
  </div>
</div>
<div class="footer-fixed">
    <Footer/>
</div>

<style>

.footer-fixed{
    bottom: 0;
    position: fixed;
    width:100%;

}
.offer-container {
  background-color: rgb(254, 243, 200);; /* Replace with the desired yellow background color */
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#fefefe;
}

.offer-bubble {
  background-color: #00D700; /* Replace with the desired green bubble color */
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.5s ease-in-out;
}

.offer-text {
  font-size: 36px;
  font-weight: bold;
  color: #fff; /* Replace with the desired text color */
  text-align: center;
}
</style>