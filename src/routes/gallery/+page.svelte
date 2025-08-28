<script lang="ts">
    import '$lib/style.css';
    import LandingPageNavbar from '$lib/component/LandingPageNavbar.svelte';
    import Footer from '$lib/component/Footer.svelte';
    import img1 from '$lib/assets/1.webp';
    import img2 from '$lib/assets/2.webp';
    import img3 from '$lib/assets/3.webp';
    import img4 from '$lib/assets/abhada1.webp';
    import img5 from '$lib/assets/puja1.webp';
    import img6 from '$lib/assets/room.webp';
    import img7 from '$lib/assets/travel.webp';
    import img8 from '$lib/assets/abhada2.webp';
    import img9 from '$lib/assets/Jagannath_temple.jpg';
    import img10 from '$lib/assets/facade_landscape.webp';
    import img11 from '$lib/assets/room2.webp';
    import img12 from '$lib/assets/img12.webp';
    import img13 from '$lib/assets/img13.webp';
    import img14 from '$lib/assets/img14.webp';
    import img15 from '$lib/assets/img15.webp';
    import img16 from '$lib/assets/img16.webp';

    const images = [ img10, img11,  img12, img13, img14, img15, img16, img1, img2, img3, img4, img4, img5, img6, img7, img8, img9, ];
    
    let selectedImageIndex: number = $state(-1);

    function openModal(index: number) {
        selectedImageIndex = index;
    }
    
    function closeModal() {
        selectedImageIndex = -1;
    }

    function nextImage() {
        selectedImageIndex = (selectedImageIndex + 1) % images.length;
    }

    function previousImage() {
        selectedImageIndex = selectedImageIndex === 0 
            ? images.length - 1 
            : selectedImageIndex - 1;
    }

    function handleKeydown(e: KeyboardEvent) {
        if (selectedImageIndex === -1) return;
        
        switch(e.key) {
            case 'ArrowRight':
                nextImage();
                break;
            case 'ArrowLeft':
                previousImage();
                break;
            case 'Escape':
                closeModal();
                break;
        }
    }
</script>
<head>
    <title>Gallery</title>
</head>

<svelte:window on:keydown={handleKeydown}/>

<LandingPageNavbar />
<div class="header-main">
    <h1>Gallery</h1>
    <p>Explore our gallery showcasing the beauty and spirituality of Shree Jagannath Mandir.</p>
    <p>जगन्नाथ मंदिर की सुंदरता और आध्यात्मिकता को प्रदर्शित करने वाले हमारे गैलरी का अन्वेषण करें।</p>
</div>
<div class="gallery">
    {#each images as image, index}
        <img 
            src={image} 
            alt="Gallery" 
            on:click={() => openModal(index)}
            on:keydown={(e) => e.key === 'Enter' && openModal(index)}
            role="button"
            tabindex="0"
        />
    {/each}
    <a class="whatsapp-floater" href="https://wa.me/917008096589" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/color/48/000000/whatsapp.png" alt="whatsapp-icon">
    </a>
</div>

{#if selectedImageIndex !== -1}
    <div class="modal-overlay" on:click={closeModal}>
        <div class="modal-content" on:click|stopPropagation>
            <button class="close-button" on:click={closeModal}>×</button>
            <button class="nav-button prev" on:click={previousImage}>←</button>
            <img src={images[selectedImageIndex]} alt="Selected gallery image" />
            <button class="nav-button next" on:click={nextImage}>→</button>
            <div class="image-counter">{selectedImageIndex + 1} / {images.length}</div>
        </div>
    </div>
{/if}
<!-- </div> -->

<Footer/>


<style>

.header-main{
    text-align: center;
    /* margin: 2rem 0; */
    color: var(--text-dark);
    margin-top: 60px;
}
.gallery {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 1rem;
    z-index: 1;
}
h1 {
        text-align: center;
        margin-bottom: 2rem;
        color: var(--text-dark);
    }

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
}

img:hover {
    transform: scale(1.05);
}
.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    border-radius: 50%;
    transition: background-color 0.3s;
    z-index: 1001;
}

.nav-button:hover {
    background: rgba(0, 0, 0, 0.8);
}

.prev {
    left: 1rem;
}

.next {
    right: 1rem;
}

.image-counter {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background: rgba(0, 0, 0, 0.5);
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-size: 0.9rem;
}


.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    max-width: 95vw;
    max-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--text-dark);
    padding: 2rem;
}

.modal-content img {
    max-width: 100%;
    max-height: 90vh;
    width: auto;
    height: auto;
    object-fit: contain;
    border-radius: 0;
}
.close-button {
    position: absolute;
    top: -40px;
    right: -40px;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    padding:10px;
    z-index: 1001;
    background:none;
    border:none;
}
.close-button:hover {
    color: #ddd;
}

@media (max-width: 768px) {
    .nav-button {
        padding: 0.5rem;
        font-size: 1.2rem;
    }

    .prev {
        left: 0.5rem;
    }

    .next {
        right: 0.5rem;
    }
    .gallery {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .gallery {
        grid-template-columns: 1fr;
    }
}
</style>