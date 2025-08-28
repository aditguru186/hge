<script lang="ts">
import logo from '$lib/assets/logo_bg_removed.png';
import { redirectToWhatsapp } from '$lib/utils';

    const handleBtn = (e:any) => {
        e.preventDefault();
        const phoneNumber = e.target.innerText.replace(/-/g, '');
        if(phoneNumber){
            window.open(`tel:${phoneNumber}`, '_blank');
        }
        redirectToWhatsapp();
    }

</script>


<footer class="footer">
    <div class="foot-container">
        <p>&copy; {new Date().getFullYear()}Bihar Atithi Bhawan/ Jharakhand Atithi Bhawan. All rights reserved.</p>
    </div>
    <div class="Address">
        <img src={logo} class="logo_a" alt="Bihar Atithi Bhawan" />
        <p>Address:-Hotel Hotel Guru Estate/ Bihar Atithi Bhawan,<br/> Beside Town Police Thana, Grand Road, Puri- 752001, Odisha </p>
        <p>Address:-Jharkhand Atithi Bhawan,<br/> Indian Bank Lane, Grand Road, Puri- 752001, Odisha </p>
    </div>
    <div class="foot-container">
        <h2>Contact Us</h2>
        <ul>
            <li><button class="numberBtn" on:click={handleBtn}>+91-7008096589</button></li>
            <li><button class="numberBtn" on:click={handleBtn}>+91-9437163666</button></li>
            <li><button class="numberBtn" on:click={handleBtn}>+91-9437286260</button></li>
            <li><button class="numberBtn" on:click={handleBtn}>+91-9861042223</button></li>
            <li><button class="numberBtn" on:click={handleBtn}>+91-9437281260</button></li>
            <li><button class="numberBtn" on:click={handleBtn}>+91-9861022260</button></li>
            <li>aditguru186@gmail.com</li>
        </ul>
    </div>
    <p class="Authenticity">Designed and Developed in 2025 by <a href="https://www.dollicious.in/">Byte Sphere Innovations</a></p>


</footer>
<!-- <div class="Authenticity">
    <p>Designed and Developed in 2025 by <a href="https://www.dollicious.in/">Byte Sphere Innovations</a></p>
</div> -->

<style>
    .footer {
        margin-top: 5%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        position: relative;
        bottom: 0;
        width: 100%;
        background-color: var(--text-dark);
        color: #fff;
        text-align: center;
        padding: 10px 0;
    }

    .foot-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    

    p {
        margin: 0;
        font-size: 14px;
    }
    .Address{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .Address p{
        margin: 0;
        font-size: 14px;
    }
    .logo_a:hover{
        transition: all 0.1s ease-in-out;
        transform: scale(1.2);
        filter: brightness(1.4);
        /* animation: bounce 3s infinite ease-in-out; */
    }

    .logo_a{
        width: 100px;
        height: 100px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin: 5px 0;
    }
    li:hover{
        transform: scale(1.1);
        cursor: pointer;
        color: var(--tertiary-color);
    }
    .numberBtn{
        background-color: transparent;
        font-size: 1.2rem;
        border: none;
        color: #fff;
        cursor: pointer;
    }
    .numberBtn:hover{
        color: var(--tertiary-color);
    }
    .Authenticity{
        /* position: relative; */
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: var(--text-dark);
        color: #fff;
        text-align: center;
        padding: 10px 0;
    }
    
    .Authenticity a{
        color: #fff;
    }
    .Authenticity a:hover{
        color: var(--tertiary-color);
    }
    @media (max-width: 720px) {
        .footer {
            grid-template-columns: 1fr;
            max-width: 100vw;
        }
        .Authenticity{
            max-width: 90vw;
        }
    }
   
</style>