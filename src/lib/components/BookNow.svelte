<script lang="ts">
    import {Button} from '$lib/components/ui/button';
    import { Input } from "$lib/components/ui/input";
    import SvelteOtp from "@k4ung/svelte-otp";
	import { Modal, Content, Trigger}  from "sv-popup";
	import Alert from './ui/alert/alert.svelte';
    import CalendarRange from "./CalendarRange.svelte";
	import Calendar from './ui/calendar/calendar.svelte';
    

    let number: number;
    $:showOTP_Box = false;
    $:verrifiedSuccessfully = false;
    $:number_alert = false;
    let value: string;
    let OTP:number;

    let sendOTP = () => {
        if(number && number.toString().length == 10){
            console.log("Sending OTP to ", number);
            OTP = Math.floor(Math.random() * 10000);
            console.log("OTP : ", OTP);
            //fire OTP
            showOTP_Box = true;
            number_alert = false;
        }
        else{
            console.log("Please enter a 10-digit contact number");
            number_alert = true;
        }
        
    }

    let verifyOTP = () => {
        console.log("Verifying OTP : ", OTP, " with ", value);
        // @ts-ignore
        if(value == OTP){
           verrifiedSuccessfully = true;
        }
        else{
            console.log("Incorrect OTP",value);
        }
    }


</script>

<div class="hoverBookNow">
    <Input type="Number" placeholder="Enter Contact number for inquiry." bind:value={number}/>
    {#if (number_alert)}
        <p style="color: red">Please enter a 10-digit contact number</p>
    {/if}
    {#if (showOTP_Box)}
        <Modal basic big={true} button={true}>
        <Content>
            <p style="color: red">OTP has been sent to {number}</p>
        </Content>
        <!-- <Trigger>
        </Trigger> -->
        </Modal>
        <SvelteOtp
                numberOnly
                bind:value
                separator="-"
                placeholder="****"
                numOfInputs={4}
            />
        <Button type="submit" variant="secondary" on:click={verifyOTP}>Verify</Button>
        {#if verrifiedSuccessfully}
            <Alert>
                <p style="color: green">OTP verified successfully</p>
                <CalendarRange/>
            </Alert>
        {/if}
    {:else}
        <Button type="submit" variant="secondary" on:click={sendOTP}>Submit</Button>
    {/if}

</div>  

<style>
    .hoverBookNow{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        height: 50%;
        width: 90%;
        margin: auto;
        padding: 1%;
    }
</style>