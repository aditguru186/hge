<script lang="ts">
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<Navbar/>
<div class="cardStyle">
    <h1 class="heading">About Hotel Guru Estate</h1>
    <br/>
    <p>
        Since time immemorial the servitors of Lord Jagannath known as PANDAS have had adopted tourism as their favourite profession to hospitalize tourists and pilgrims as their guests which is in Indian team “JAJEMAN” giving free accommodation, providing foods and feeding the “MAHAPRASAD” in other words “KAIVALYA” of Lord Jagannath free of cost and arranging with guide services for their holy visits and sight seeing of the Town inside and nearby places.
    </p>
        <br/>
        There are many Pandas at Puri but out of all Pandas,late HARIHAR GURU BADEPANDA, the icon of Guru Family has earned stainless reputation and is widely renowned as BADEPANDA among all because of his kindred and generous habits, that is to give charity even incurring loan himself. Especially for his mission of “Atithi Seva” he started the “GURU ESTATE” where pilgrims could enjoy all amenities in affordable prices. He was a great lover of music and wrestling. He has established a Sanskrit Tol for Sanskrit learning for poor boys with fund facility, keeping Odisha’s traditional cultures.
        <br/>
        At present, his grandsons, great grandsons are also engaged in this traditional profession known as Yatri Business apart from their modern learning. They maintain high profile erudite in respect of Hindu philosophy to explain the meaning, feeling of “Adhyatma” from Hindu epics and scriptures from the days of their grand father LATE HARIHAR GURU.
        <br/>
        The Guru family has been servitors or PANDAS of Bihar, Jharkhand, U.P., Uttaranchal, M.P., Chhattisgarh, West Bengal, Nepal, Rajasthan and Haryana for many years.
        <br/>
        <br/>
        “With things getting revamped, “HOTEL GURU ESTATE” is the unadulterated version of “BIHAR ATITHI BHAWAN”, where in adhering to the changing times, we have upgraded our facilities and services to meet the needs of the pilgrims, simultaneously providing all the existing facilities. Atithi Devo Bhava”
        <br/>
</div>
<div class="footer-fixed">
    <Footer/>
</div>


<style>
    .cardStyle{
        padding: 2%;
        justify-content: center;
        align-items: left;
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
    .footer-fixed{
        bottom: 0;
        position: fixed;
        width:100%;
    }
</style>