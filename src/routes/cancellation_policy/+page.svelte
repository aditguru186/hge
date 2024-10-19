<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<Navbar/>

<div class="cardStyle">
    <div class="heading">
        Cancellation Policy
    </div>
    <br/>
    <ol style="list-style-type: decimal;">
        <li>Guests must cancel their booking 48 hours before their check-in time to get the full refund of their advance / full payment, owing to the amount paid by the guest.</li>
        <li>If a guest cancels within 48 hours from their check in time, then 50% of the advance payment will be refunded on the same payment method in which payment was made.</li>
        <li>Once the refund has been initiated, the amount will be reflected in the guest's bank account within 7-10 working days. If the amount hasn't been received within this period, the guest is requested to contact their respective bank officials,</li>
        <li>If a guest doesn't cancel within the above specified time and further doesn't turn up, there wouldn't be any refund provided for the particular booking.</li>
        <li>In case of advance payments, owing to Hotel Guru Estate best interest and views, it may or may not choose to refund the amount</li>
    </ol>
</div>


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