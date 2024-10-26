<script lang="ts">

    import logoIcon from "$lib/resources/logo_icon.png";
    // import Icon from '@iconify/svelte';


</script>
<div class="footer">
    <a href="/"><img class ="footer_img" src={logoIcon} alt="logoIcon"></a>
    <div class="container">
       +91-9861133360
        <br/>
        hotelguruestate@gmail.com
        <br/>
    </div>
     <div class="container">
        <a href="/terms_and_conditions">Terms and Conditions</a>
        <br/>
        <a href="/cancellation_policy">Cancellation Policy</a>
        <br/>
        <a href="/privacy_policy">Privacy Policy</a>
        <br/>
        <a href="/about_us">About Us</a>

    </div>
    
</div>

<style>
    .footer{
        display: flex;
        position: relative;
        bottom: 0;
        width: 100%;
        background-color: #333;
        color: #fff;
        text-align: center;
        padding: 10px;
        clear: both;
        border-top: 1px solid #444;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    .footer_img{
        height:120px;
        width:140px;
        position: absolute;
    }
    .container{
        display: block;
    }
</style>