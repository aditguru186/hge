<script lang="ts">
    import logo from "$lib/assets/logo_bg_removed.png";
    import '$lib/style.css';

    let links = [
        { name: 'Home', link: '/' },
        { name: 'Services', link: '/services' },
        { name: 'Gallery', link: '/gallery' },
        { name: 'Contact', link: '/contact' },

    ];
    let displayNavOnMobile = $state(false);
    const toggleNav = () => {
        const navbar = document.querySelector('.navbar-nav') as HTMLElement;
        const navItems = document.querySelectorAll('.nav-item') as NodeListOf<HTMLElement>;
        displayNavOnMobile = !displayNavOnMobile;
        if(navbar){
            navbar.style.display = displayNavOnMobile ? 'grid' : 'none';
            if (displayNavOnMobile) {
            navItems.forEach((item, index) => {
                item.style.animation = `slideIn 0.3s ease-in-out forwards ${index * 0.1}s`;
            });
        }
        }
    }
</script>

<a href="/" class="logo_a"><img class="logo" src={logo} alt="Harihar Guru Logo" /></a>
<nav>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onclick={toggleNav}>
        <span class="navbar-toggler-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </span>
    </button>
    <ul class="navbar-nav">
        {#each links as link}
        <li class="nav-item">
            <a class="nav-link" href={link.link}>{link.name}</a>
        </li>
        {/each}
    </ul>
</nav>

<style>
    @keyframes slideIn {
        0%{
            opacity: 0;
            transform: translateY(-10px);
        }
        100%{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .logo{
        width:100px;
        height:100px;
        margin-left: 10px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .logo_a{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
    }
    .logo_a:hover{
        transition: all 0.1s ease-in-out;
        transform: scale(1.2);
        filter: brightness(1.4);
        /* animation: bounce 3s infinite ease-in-out; */
    }

    nav{
        top:0px;
        margin-bottom: 20px;
        position: fixed;
        min-width: 100vw;
        z-index: 2;
    }
    .navbar-nav {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0,0, 0.5);
        backdrop-filter: blur(15px); 
        -webkit-backdrop-filter: blur(15px);
        padding: 1rem;
        /* margin-bottom: 10%; */
    }
    .navbar-nav .nav-item {
        list-style: none;
    }
     .navbar-nav .nav-item:hover {
        animation: shake 0.2s infinite ease-in-out;
        list-style: none;
    }
    .navbar-nav .nav-item .nav-link {
        text-decoration: none;
        color: var(--secondary-color);
        font-weight: bold;
        font-size: 1.2rem;
    }
    .navbar-nav .nav-item .nav-link:hover {
        text-decoration: none;
        color: var(--primary-color);
        border-radius: 1rem;
    }
    .navbar-toggler{
        display: none;
    }
    

    @media (width< 720px) {
        .navbar-toggler{
            display: block;
            right:10%;
            position: absolute;
            z-index: 3;
        }
       .navbar-nav {
            display: grid;
            flex-direction: column;
            transition: 1s;
            display: none;
            right: 10px;
            text-align: center;
            background-color: rgba(var(--primary-color-rgb), 0.5); 
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            z-index: 1;
            max-width: 90vw;
            transition: all 0.3s ease-in-out;
        }
        .navbar-nav li:last-child{
            position: relative;
            margin-left: auto;
            color:var(--fifth-color);
            border-radius: 1rem;
            text-align: center;
        }
        .nav-item{
            opacity: 1;
            transform: translateY(-10px);
        }

        .navbar-nav .nav-item:hover {
            list-style: none;
            background: var(--tertiary-color);
            border-radius: 1rem;
        }
        .navbar-toggler{
            position: absolute;
            right: 10px;
            top: 10px;
            z-index: 3;
            background: transparent;
        }
        .navbar-nav .nav-item .nav-link {
            color: var(--secondary-color);
        }
        .navbar-nav .nav-item .nav-link:hover {
            text-decoration: none;
            color: var(--secondary-color);
            border-radius: 1rem;
        }
        .logo{
            width:70px;
            height:70px;
        }

        
    }
</style>