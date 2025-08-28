<script lang="ts">
    import LandingPageNavbar from './LandingPageNavbar.svelte';
    import '$lib/style.css';
    // import jagannath_temple from '$lib/assets/Jagannath_temple.jpg';
    import img3 from '$lib/assets/3.webp';
    import img4 from '$lib/assets/facade_landscape.webp';
    import img1 from '$lib/assets/room.webp';
    import img2 from '$lib/assets/room2.webp';
    import {redirectToWhatsapp} from '$lib/utils';
    import CarouselImages from './CarouselImages.svelte';

    import { createEventDispatcher } from 'svelte';

    interface FormData {
        phoneNumber: string;
    }
    interface DispatchEvents {
        submit: { data: FormData };  // Wrap the data in an object
    }

    const dispatch = createEventDispatcher<DispatchEvents>();

    let isFormVisible = $state(true);

    function toggleForm() {
        isFormVisible = !isFormVisible;
    }
    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();
        const formElement = e.target as HTMLFormElement;
        const formData = new FormData(formElement);
        
        const data: FormData = {
            phoneNumber: formData.get('phoneNumber') as string
        };

        redirectToWhatsapp(data.phoneNumber as string);

        dispatch('submit', {data});
        isFormVisible = false;
    };
    const carouselImages = [img4, img1, img2, img3];
    function handleBookNowClick() {
        redirectToWhatsapp();  // Call without parameters for now
    }
</script>
<section class="hero">
    	<LandingPageNavbar />
        <CarouselImages carouselImages={carouselImages} />
        <div class="hero-content">
            <h1>Hotel Guru Estate </h1>
            <div class="subtitle">
                <p>पूजा, महाप्रसाद सेवन, नि:शुल्क और सशुल्क प्रवास, सर्वोत्तम आतिथ्य सभी एक ही स्थान पर।<br/>
                    कृपया आएं और हमें आपकी उसी तरह सेवा करने दें जैसे हम भगवान जगन्नाथ, बलभद्र और सुभद्रा मां की करते हैं।  
                </p>
            </div>
            <button class="hero-btn" on:click={handleBookNowClick}>Book Your visit</button>
        </div>
        <div class="enquiry-container" class:hidden={!isFormVisible}>
            <button class="close-btn" on:click={toggleForm}>&times;</button>
            <form class="enquiry-form" on:submit={handleSubmit}>
                <div class="form-group">
                    <label for="number">कृपया अपना <b>मोबाइल</b> नंबर भेजें</label>
                    <label for="number"> <b>Mobile Number</b></label>
                    <input type="tel" id="number" name="phoneNumber"placeholder="+91" required />    
                </div>
                <div class="form-group">
                    <button type="submit" class="btn-primary">Submit</button>
                </div>
            </form>
        </div>
</section>


<style>
    /*-----------------------------------HERO SECTION-----------------------------------*/

.hero {
    position: relative;
    top: 0px;
    width: 100%;
    height: 80vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
}

.hero-container {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 3;
}

.hero-content {
    position: absolute;
    top: 20%;
    left: 10%;
    transform: translate(-10%, -10%);
    text-align: left;
    color: white;
    z-index: 1;
}

.hero-content h1 {
    font-size: 4.5rem;
    margin-bottom: 1rem;
    text-shadow: 3px 3px 20px var(--secondary-color);
}

.subtitle {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 3px var(--quaternary-color);
    /* background-color: rgba(252, 247, 192, 0.502); */
    background-color: var(--primary-color-blur);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    text-shadow: 3px 3px 20px var(--secondary-color);
    border-radius: 15px;
    /* padding: 10px; */
}

.subtitle p {
    font-size: 1.5rem;
    text-shadow: 4px 4px 20px var(--secondary-color);


}

.hero-content p {
    font-size: 1.5rem;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.btn-primary {
    background-color: var(--fifth-color);
    color: var(--white);
    padding: 10px 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
    /* animation: bounce 2s infinite ease-in-out; */
}

.btn-primary:hover {
    background-color: var(--tertiary-color);
    color: var(--text-dark);
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(96, 96, 96, 0.2);
}
    .enquiry-container {
        position: absolute;
        bottom: 20px;
        right: 50%;
        transform: translateX(50%);
        background-color: var(--secondary-color);
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        z-index: 2;
        width: 300px;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: #333;
    }

    .form-group input {
        width: 100%;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .hero-btn{
        background-color: var(--tertiary-color);
        color: var(--black);
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.2rem;
        animation: bounce 1s infinite ease-in-out;
    }
    .hero-btn:hover {
        background-color: var(--secondary-color);
        color: var(--white);
    }
    .hidden {
        display: none;
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #333;
        padding: 5px;
        line-height: 1;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 0.3s ease;
    }

    .close-btn:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }

    @media(width< 720px) {  
        .hero-content h1{
            font-size: 2rem;
        }
        .subtitle p{
            font-size: 0.9rem;
        }
        .hero-btn{
            font-size: 1rem;
        }
        .form-group {
            margin-bottom: 0rem;
        }
        .enquiry-container {
            left: 10%;
            max-width: 70%;
            transform: none;
        }
        .enquiry-form {
            flex-direction: column;
            gap: 1px;
        }
        .enquiry-form input {
            padding: 5px;
            font-size: 10px;
        }
        .enquiry-form button {
            padding: 5px;
            font-size: 14px;
        }
    }
   
    
</style>