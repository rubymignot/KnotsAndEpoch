<template>
    <div class="header">
        <div class="alert rounded-none py-2 bg-gray-200 text-black font-bold" v-if="alert_sample">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>This is a sample/demo website, most links won't work. To visit my portfolio, go to <a
                    class="link link-hover" href="https://rubymignot.com">rubymignot.com</a></span>
            <div>
                <button class="btn btn-sm" @click="close_alert">Close</button>
            </div>
        </div>
    </div>
    <section class="flex flex-col justify-center items-center p-6">
        <div class="self-end text-xl p-4">
            <NuxtLink to="#" class="link link-hover">FR</NuxtLink> | <NuxtLink to="#" class="link link-hover">EN</NuxtLink>
        </div>
        <div class="text-3xl">KNOTS <span class="text-red-900">&</span> EPOCH</div>
        <Nav class="self-start"></Nav>
    </section>
    <section class="h-[36rem] relative">
        <div
            class="h-full bg-[url('https://res.cloudinary.com/dfoesshfi/image/upload/f_auto,q_auto/v1/KnotsAndEpoch/eprvkl9yteid9xsltwwv')] bg-top bg-cover">
            <div class="z-20 text-white flex flex-col gap-8 items-center justify-center relative h-full w-full px-8 md:w-2/3 xl:w-2/3 mx-auto text-center">
                <h1 class=" text-5xl lg:text-6xl xl:text-8xl drop-shadow-lg uppercase">Timeless Timber</h1>
                <h2 class=" text-3xl lg:text-4xl xl:text-5xl drop-shadow-lg">Where History Meets Craftmanship</h2>
                <p class="text-xl">Discover the fusion of history and artistry at Knots & Epochs.
Our handcrafted furniture, made from reclaimed wood, breathes new life into timeworn materials.</p>
<NuxtLink to="#" class="btn btn-lg bg-blue-950 w-full sm:w-1/3 rounded-full text-white border-none">Read More</NuxtLink>    
            </div>
        </div>
        <div class="absolute z-10 w-full h-full bg-black/50 bottom-0"></div>
    </section>
</template>
<script setup lang="ts">
const alert_sample = ref(true)
// turn off alert_sample to remove the alert
async function close_alert() {
    alert_sample.value = false
}
</script>