<!-- // assess match page for match with id = 1 using 'domain.com/match/1 -->

<template>
    <div class="relative w-screen flex flex-col items-center gap-6 px-10 pb-10 overflow-hidden h-screen bg-[#0C0C0D]">
        <div class="flex flex-col w-full justify-center items-center shrink-0">
            <div class="p-2">
                <h1>Match Page (placeholder Match ID: {{ id }})</h1>
            </div>
            <div class="bg-[#272727] flex flex-row justify-center items-center gap-4 w-full h-full flex-1 max-h-50 p-10">
                <div class="p-4">
                    <img :src="RC4Logo" alt="RC4 Logo" class="h-32" />
                </div>
                <div class="items-center justify-center p-4">
                    <p 
                        :class="[
                            'text-5xl', 
                            (items.match_details.match_status == 'Completed') 
                            && (items.match_details.team1_score <= items.match_details.team2_score) ? 'text-white' : 'text-red-500' 
                        ]"
                    >{{ items.match_details.team1_score }}</p>
                </div>
                <div class="justify-center items-center flex flex-col rounded-lg p-10 gap-4">
                    <div class="justify-center items-center flex flex-col">
                        <p> {{ items.match_details.match_datetime.toLocaleString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            }) }} </p>
                        <p> {{ items.match_details.match_datetime.toLocaleString("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true
                            }) }} </p>
                        <p> {{ items.match_details.match_location }} </p>
                    </div>
                    <p> {{ items.match_details.match_status }} </p>
                </div>
                <div class="items-center justify-center p-4">
                    <p 
                        :class="[
                            'text-5xl', 
                            (items.match_details.match_status == 'Completed') 
                            && (items.match_details.team2_score <= items.match_details.team1_score) ? 'text-white' : 'text-red-500' 
                        ]"
                    >{{ items.match_details.team2_score }}</p>
                </div>
                <div class="p-4">
                    <img :src="CAPTLogo" alt="CAPT Logo" class="h-32" />
                </div>
            </div>
        </div>
        <div class="flex flex-row justify-center gap-10 w-full flex-1 min-h-0">
            <div class = "bg-[#272727] flex flex-col w-3/4 py-4 px-10 rounded-lg items-center gap-6">
                <h2>Match Event</h2>
                <div class="flex flex-col w-full gap-4 overflow-y-auto flex-1 min-h-0">
                    <!-- TODO: make this based on query from backend-->
                    <!-- <div v-for="event in data.match_events" :key="event"> -->
                    <MatchEvent :id=1 />
                    <MatchEvent :id=2 />
                    <MatchEvent :id=3 />
                    <MatchEvent :id=4 />
                    <MatchEvent :id=5 />
                    <MatchEvent :id=6 />
                    <MatchEvent :id=7 />
                    <MatchEvent :id=8 />
                    <MatchEvent :id=9 />
                    <MatchEvent :id=10 />
                    <MatchEvent :id=11 />
                    <MatchEvent :id=12 />
                </div>
            </div>
            <div class = "bg-[#272727] flex flex-col w-1/4 p-10 gap-8 rounded-lg items-center">
                <p> Teams </p>
                 <!-- TODO: link to team page-->
                <div class="bg-[#6C6A6A] flex flex-col w-full items-center rounded-lg">
                    <div class="p-4 w-full">
                        <img :src="RC4Logo" alt="RC4 Logo" class="h-24 w-full min-w-16" />
                    </div>
                    <p class="text-2xl">{{ items.match_details.team1_name }}</p>
                </div>
                <div class="bg-[#6C6A6A] flex flex-col w-full items-center rounded-lg">
                    <div class="p-4 w-full">
                        <img :src="CAPTLogo" alt="CAPT Logo" class="h-24 w-full min-w-16" />
                    </div>
                    <p class="text-2xl">{{ items.match_details.team2_name }}</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import MatchEvent from './components/MatchEvent.vue';
    import RC4Logo from '@/assets/logos/RC4.svg';
    import CAPTLogo from '@/assets/logos/CAPT.svg';

    export default {
        components: {
            MatchEvent
        },
        props: {
            id: Number
        },
        data() {
            return {
                RC4Logo,
                CAPTLogo,
                items: {
                    "match_details": {
                        "team1_name": "RC4", // will be team1_id, then call db to get name and logo
                        "team2_name": "CAPT",
                        "team1_score": 25,
                        "team2_score": 24,
                        "match_status": 'Completed',
                        "match_datetime": new Date("2025-03-03T18:00:00+08:00"), 
                        "match_location": "RC4 MPSH",
                    },
                    "match_events": [1, 2, 3, 4, 5, 6]
                },
                loading: true,
                error: null,
            };
        }
    }
</script>

<style>
body {
  color: white;
}
</style>