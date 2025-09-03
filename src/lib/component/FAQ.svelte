<script lang="ts">
    import '$lib/style.css';
	import { redirectToWhatsapp } from '$lib/utils';

    const handleBookNowClick = (message?:string) => {
        redirectToWhatsapp(message);
    };
</script>

<div class="container">
    <h1>Frequently Asked Questions</h1>
    <div class="faq">
        <div class="faq-item">
            <h2>What is Jagannath Puri Mandir Timing?</h2>
            <p>The best time to visit the temple is during the early morning hours or during special festivals. Please refer to the table for darsan timings.</p>
        </div>
        <div class="faq-item">
            <h2>What is Shree Jagannath temple opening time?</h2>
            <p>Jagannath Puri Temple darshan timings starts at 6:00 am. Click on link to connect on whatsapp and let us guide you in your convenience. <span><button class="btn-primary" on:click={()=>handleBookNowClick("Inquiry for Jagannath Mandir Darsan")}>Book Now</button></span> </p>
        </div>
        <div class="faq-item">
            <h2>What is best time to visit Jagannath temple Puri for less crowd?</h2>
            <p>The best time to visit Jagannath Puri is during morning hours before 8:00 am or evening hours after 7:30 pm.</p>
            <p>Crowd varries based on the Pujas and rituals. Get in touch for more assistance in VIP darshan. </p>
        </div>
        <div class="faq-item">
            <h2>Is there any dress code for visiting the temple?</h2>
            <p>Yes, visitors are expected to dress modestly and respectfully.</p>
        </div>
        <div class="faq-item">
            <h2>accommodation near Jagannath temple Puri with family?</h2>
            <p>Yes, we provide both free and paid accommodation options. </p>
        </div>
        <div class="faq-item">
            <h2>Can I book a special puja or ritual?</h2>
            <p>Yes, you can book special pujas and rituals in advance.<span><button class="btn-primary" on:click={()=>handleBookNowClick("Book For Puja")}>Book for Puja</button></span></p>
        </div>
        <div class="faq-item">
            <h2>Is photography allowed inside the temple?</h2>
            <p>No, photography is not allowed inside the temple premises.</p>
        </div>
        <div class="faq-item">
            <h2>How can I contact for more information?</h2>
            <p>You can contact us through our WhatsApp number or email for more information.</p>
        </div>
        <div class="faq-item">
            <h2>What is the procedure for Mahaprasad Sevan?</h2>
            <p>Mahaprasad Sevan can be booked in advance, and it can be delivered to your location. <span><button class="btn-primary" on:click={()=>handleBookNowClick("Mahaprasad Sevan")}>Talk to us</button></span></p>
        </div>
        <div class="faq-item">
            <h2>Are there any special arrangements for senior citizens?</h2>
            <p>Yes, we have special arrangements to assist senior citizens during their visit.</p>
        </div>
        <div class="faq-item">
            <h2>Is there any facility for luggage storage?</h2>
            <p>Yes, we provide luggage storage facilities for visitors.</p>
        </div>
        <div class="faq-item">
            <h2>Can I book a guide for the temple visit?</h2>
            <p>Yes, you can book a guide for a more informative experience. <span><button class="btn-primary" on:click={()=>redirectToWhatsapp}>Book Now</button></span></p>
            
        </div>
    </div>

</div>

<style>
    .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    .faq {
        background-color: #f9f9f9;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .faq-item {
        margin-bottom: 15px;
    }

    .faq-item h2 {
        font-size: 18px;
        color: #333;
    }

    .faq-item p {
        font-size: 16px;
        color: #555;
    }
    .btn-primary {
        background-color: var(--quaternary-color);
        color: var(--black);
        font-weight: bold;
        font-size:1rem;
        padding: 1px 1px;
        border-radius: 5px;
        transition: all 0.3s ease;
    }

    .btn-primary:hover {
        background-color: #5fff6c;
        transition: all 0.3s ease;
        animation: shake 2s infinite ease-in-out;

    }
</style>