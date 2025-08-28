<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    let props = $props<{ carouselImages: string[] }>();
    const carouselImages = props.carouselImages;
    let currentImageIndex = $state(0);
    let carouselInterval: number;
    onMount(async () => {
        carouselInterval = setInterval(cycleImages, 2000);
    });
    onDestroy(() => {
        clearInterval(carouselInterval);
    });

    function cycleImages() {
        currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    }

</script>
 <div class="carousel">
    {#each carouselImages as src, index (src)}
    <img 
        src={src}
        alt={`Carousel image ${index + 1}`}
        class:active={index === currentImageIndex}
        class="carousel-image"
    />
    {/each}
</div>

<style>
.carousel {
  position: relative;
  width: 100%;
  height: 100%;
}
.carousel-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-image.active {
  opacity: 1;
}


</style>