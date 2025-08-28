<script lang="ts">
    import LandingPageNavbar from '$lib/component/LandingPageNavbar.svelte';
    import Footer from '$lib/component/Footer.svelte';
    import "$lib/style.css";

    let isFormSubmitted = $state(false);
    const handleSubmit = (event: Event) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const data = new FormData(form);

        const contact_info = {
            name: data.get('name'),
            phone: data.get('phone'),
            state: data.get('state'),
        };

       const messageTemplate = `
        *New Event Inquiry*
        ------------------
        *Name:* ${contact_info.name}
        *Phone:* ${contact_info.phone}
        *State:* ${contact_info.state}
        ------------------
        `;
        const encodedMessage = encodeURIComponent(messageTemplate);
        const wp_url = `https://wa.me/919861133360/?text=${encodedMessage}`;
        window.open(wp_url, '_blank');
        isFormSubmitted = true;
    }
</script>

<head>
    <title>Contact Us</title>
</head>
<LandingPageNavbar />

<div class="container">
    <h1 class="page-title">Contact Us</h1>
    {#if isFormSubmitted}
        <p class="form-submit">Form submitted successfully!</p>
    {/if}
    <div class="contact-form">
        <form on:submit={handleSubmit}>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required>
            </div>
             <div class="form-group">
                <label for="phone">Phone</label>
                <input type="number" id="phone" name="phone" required>
            </div>
            <div class="form-group">
                <label for="zilla">Zilla</label>
                <input type="text" id="zilla" name="zilla" required />
            </div>
            <div class="form-group">
                <label for="state">State</label>
                <input type="text" id="state" name="state" required />
            </div>
            <div class="form-group">
                <button type="submit" class="btn-primary">Submit</button>
            </div>        
        </form>
    </div>
</div>
<Footer/>

<style>
    .container {
        max-width: 600px;
        margin: 0 auto;
        margin-top: 60px;
        padding: 20px;
        background: linear-gradient(to top, var(--quaternary-color), var(--primary-color));
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .page-title {
        text-align: center;
        margin-bottom: 20px;
        color: var(--text-dark);
    }

    .contact-form {
        background-color: var(--secondary-color);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .form-group {
        margin-bottom: 20px;
    }

    label {
        display: block;
        margin-bottom: 5px;
        color: var(--text-dark);
    }

    input[type="text"],
    input[type="number"] {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button[type="submit"] {
        background-color: var(--quaternary-color);
        color: #000000;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    .form-submit{
        text-align: center;
        background-color: #00ff04;
        color: #fff;
        font-size: 1.5rem;
    }

</style>