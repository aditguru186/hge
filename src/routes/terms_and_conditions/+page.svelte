<script lang="ts">
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar/>
<div class="cardStyle">
    <h1 class="heading">Terms and Conditions</h1>
    <br/>
    <ol style="list-style-type: decimal;">
        <li>The management does not take responsibility for the loss of valuables left in the room.</li>
        <li>Check In is 8:00AM and check out time is 7:00 AM and any extension of stay must be reconfirmed with the Duty Manager.</li>
        <li>Photo ID proof issued by government compulsory for all occupants including sharer.</li>
        <li>All disputes subject to Puri jurisdiction</li>
        <li>Smoking and consumption of alcohol in hotel premises is prohibited.</li>
        <li>Damage to the hotel properties and vandalism may lead to some serious actions against the convicted person.</li>
        <li>Only registered guests with valid identification will be issued additional key cards or be allowed access into the hotel room by Hotel management, in case keycards are misplaced or lost.</li>
        <li>Visitors not allowed post 10 PM in guest rooms.</li>
        <li>The hotel reserves the right charge per night cancellation fee should you cancel any nights from your originally intended length of stay.</li>
        <li>The management reserves to itself the right to add, alter or amend any of the above terms, conditions and rules.</li>
        <li>The undersigned agrees that all information displayed is accurate.</li>
        <li>Users must be at least 18 years old to use our services. By using our website, you confirm that you meet this requirement.</li>
        <li>Users can book rooms through our website. Payment details, including fares and additional charges, will be clearly communicated during the booking process.</li>
        <li>Users agree to use our services responsibly and comply with all applicable laws and regulations</li>
        <li>Any misuse of the platform, including fraudulent activities, will result in immediate termination of services.</li>
        <li>All content and materials on the Hotel Guru Estate website are the property of Hotel Guru Estate and are protected by intellectual property laws.</li>
        <li>Hotel Guru Estate is not liable for any damages, losses, or injuries arising from the use of our services, including but not limited to accidents, injuries, or delays.</li>
        <li>Hotel Guru Estate reserves the right to modify these terms and conditions at any time. Users are responsible for reviewing the terms regularly.</li>
        <li>I have read the Terms and Conditions governing my stay in the hotel and agree to abide by them</li>
    </ol>
<br/>
    <h1 class="heading">Payments and Refunds</h1>
    <ol style="list-style-type: decimal;">
        <li>Payments are processed securely, and users are responsible for providing accurate payment information.</li>
        <li>Users can cancel bookings according to the specified cancellation policy. Refunds, if applicable, will be processed accordingly.</li>
        <li>It is to be duly noted that the amount to refunded upon cancellation by the user is subject to Hotel Guru Estate's best interest and the user can't question the amount or percentage.</li>

    </ol>

<br/>
    <h1 class="heading">Cancellation " Policy</h1>
    <ol style="list-style-type: decimal;">
        <li>Guests must cancel their booking 48 hours before their check-in time to get the full refund of their advance / full payment, owing to the amount paid by the guest.</li>
        <li>If a guest cancels within 48 hours from their check in time, then 50% of the advance payment will be refunded on the same payment method in which payment was made.</li>
        <li>Once the refund has been initiated, the amount will be reflected in the guest's bank account within 7-10 working days. If the amount hasn't been received within this period, the guest is requested to contact their respective bank officials,</li>
        <li>If a guest doesn't cancel within the above specified time and further doesn't turn up, there wouldn't be any refund provided for the particular booking.</li>
        <li>In case of advance payments, owing to Hotel Guru Estate best interest and views, it may or may not choose to refund the amount</li>
    </ol>
</div>
<Footer/>

<style>
     .cardStyle{
        padding: 2%;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        height: 50%;
        width: 50%;
        background-color: hsl(48, 96%, 89%);
        margin: auto;
    }
    .heading{
        font-size: large;
        font-weight: bold;
    }
</style>