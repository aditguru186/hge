<script lang="ts">
    import '$lib/style.css';

    import img1 from '$lib/assets/1.webp';
    import img2 from '$lib/assets/abhada1.webp';
    import pujaimg1 from '$lib/assets/puja1.webp';
    import travel from '$lib/assets/travel.webp';
    import room from '$lib/assets/room.webp';

    import { redirectToWhatsapp } from '$lib/utils';


    const service = [{
        id: 1,
        serviceName: 'Shree Jagannath mandir Visit',
        // serviceDescription: 'Experience the epitome of spirituality with our service to Jagannath Mandir. We offer a seamless and enriching experience, ensuring you witness the divine aura of this sacred place.',
        serviceDescription: `जगन्नाथ मंदिर में हमारी सेवा के साथ आध्यात्मिकता के प्रतीक का अनुभव करें। हम एक सहज और समृद्ध अनुभव प्रदान करते हैं, यह सुनिश्चित करते हुए कि आप इस पवित्र स्थान की दिव्य आभा के साक्षी बनें।\n\n
        Experience the epitome of spirituality with our service to Jagannath Mandir. We offer a seamless and enriching experience, ensuring you witness the divine aura of this sacred place.`,
        image: img1
    },
    {
        id: 2,
        serviceName: 'Mahaprasad Sevan',
        // serviceDescription: 'Enjoy the divine Mahaprasad, a sacred offering from the Jagannath Temple, delivered right to your doorstep. Experience the taste of spirituality with every bite.',
        serviceDescription: 'महाप्रसाद का आनंद लें, जो जगन्नाथ मंदिर से एक पवित्र भोग है, जो आपके दरवाजे पर सीधे पहुंचाया जाता है। हर कौर के साथ आध्यात्मिकता का स्वाद अनुभव करें।\nEnjoy the divine Mahaprasad, a sacred offering from the Jagannath Temple, delivered right to your doorstep. Experience the taste of spirituality with every bite.',
        image: img2
    },
    {
        id: 3,
        serviceName: 'Sraadh for ancestors',
        serviceDescription: 'जगन्नाथ मंदिर, पितृ लोक के कल्याण हेतु पिंडदान, तर्पण और श्राद्ध कर्म विशेष रूप से पितृ पक्ष में किए जाते हैं। हम यह सेवा प्रदान करते हैं, जिससे आपके पितरों को मोक्ष मिले।',
        image: pujaimg1
    },
    {
        id:4,
        serviceName: 'Most Affordable Accommodation',
        serviceDescription: 'हमारे पास सभी बजट के लिए मुफ्त और सशुल्क आवास की सुविधा है। हम आपके प्रवास को आरामदायक और सुविधाजनक बनाने के लिए हर संभव प्रयास करते हैं।\n Most Affordable Accommodation with Free and Paid options for all budgets. We strive to make your stay comfortable and convenient.',
        image: room
    },
    {
        id:5,
        serviceName: 'Travel Assistance',
        serviceDescription: 'हम आपकी यात्रा को आसान और आरामदायक बनाने के लिए समर्पित हैं। हमारी यात्रा सहायता सेवा के साथ, आप बिना किसी चिंता के अपने धार्मिक स्थल की यात्रा का आनंद ले सकते हैं। \n Get Sightseeing and Travel Assistance to make your journey easy and comfortable. With our travel assistance service, you can enjoy your pilgrimage without any worries.',
        image: travel
    }
    ];

    const handleBtn = ()=>{
        redirectToWhatsapp();
    }

</script>

<div class="services">
    <h2>Our Services</h2>
    <ul class="service-list">
        {#each service as {id, serviceName, serviceDescription, image} (id)}
            <li class="service-card">
                <img src={image} alt={serviceName} />
                <h3>{serviceName}</h3>
                <p>{serviceDescription}</p>
                <button class="service-btn" on:click={handleBtn}>Book Now</button>
            </li>
        {/each}
       <li class="service-card">
            <p> Get full live support in package at the cheapest rate for 3 nights & 4 days package. </p>
            <button class="service-btn" on:click={handleBtn}>Book Now</button>
       </li>
    </ul>
</div>

<style>

    .services {
        padding: 1rem;
        max-width: 1200px;
        margin: 0 auto;
    }

    h2 {
        text-align: center;
        margin-bottom: 2rem;
        color: var(--text-dark);
    }

    .service-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
        gap: 2rem;
        list-style: none;
        padding: 0;
    }

    li {
        background: white;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }

    li:hover {
        transform: translateY(-5px);
    }

    img {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 1rem;
    }

    h3 {
        color: var(--text-dark);
        margin-bottom: 0.5rem;
    }

    p {
        color: var(--text-light);
        font-size: 0.9rem;
        line-height: 1.6;
    }
    .service-btn{
        background-color: var(--secondary-color);
        color: var(--black);
        font-weight: bold;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1rem;
        margin-top: 1rem;
        transition: background-color 0.3s ease;
        bottom:0px;
        position:relative;

    }
    .service-btn:hover {
        background-color: var(--tertiary-color);
        color: var(--white);
        animation: shake 1s infinite ease-in-out;
    }
    .pandas-zilla{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        padding: 1rem;
        margin-top: 2rem;
    }
    .pandas-zilla h3{
        text-align: center;
        margin-bottom: 1rem;
        color: var(--text-dark);
    }
    .zillas{
        color: var(--text-light);
        font-size: 1.2rem;
        line-height: 1.6;
        text-align: center;
    }
    .pandas-zilla .service-card{
        background: white;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
    }
    .pandas-zilla .service-card:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        .service-list {
            grid-template-columns: 1fr;
        }
        .pandas-zilla{
            grid-template-columns: 1fr;
        }
    }
    @media (max-width: 480px) {
        .service-list {
            grid-template-columns: 1fr;
        }
        .pandas-zilla{
            grid-template-columns: 1fr;
        }
    }
</style>