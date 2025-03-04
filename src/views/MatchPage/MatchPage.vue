<template>
    <div class="relative w-screen flex flex-col items-center justify-center gap-6 px-10">
        <div class="flex flex-col w-full h-full justify-center items-center">
            <div class="p-2">
                <h1>Match Page</h1>
            </div>
            <div class="bg-[#272727] w-full h-full p-10 justify-center items-center flex flex-col rounded-lg">
                <h2>Match ID: {{ id }}</h2>
                <p> Match Details Section </p>
            </div>
        </div>
        <div class="flex flex-row w-full h-full justify-center items-center gap-10">
            <!-- TODO: make this div take up the remaining height of view port-->
            <div class = "bg-[#272727] flex flex-col w-3/4 p-10 rounded-lg justify-center items-center gap-6">
                <h2>Match Event</h2>
                <div class="flex flex-col w-full h-full justify-center items-center gap-4">
                    <!-- TODO: make this a scrollable div-->
                    <MatchEvent :id=1 />
                    <MatchEvent :id=2 />
                    <MatchEvent :id=3 />
                    <MatchEvent :id=4 />
                    <MatchEvent :id=5 />
                    <MatchEvent :id=6 />
                </div>
            </div>
            <div class = "bg-[#272727] flex flex-col w-1/4 p-10 rounded-lg justify-center items-center">
                <p> Team Section</p>
            </div>
        </div>
        
    </div>
</template>

<script>
    import MatchEvent from './components/MatchEvent.vue';

    export default {
        components: {
            MatchEvent
        },
        props: {
            id: Number
        },
        data() {
            return {
                items: {
                    "team1_name": "RC4", // will be team1_id, then call db to get name and logo
                    "team2_name": "CAPT",
                    "team1_score": 25,
                    "team2_score": 24,
                    "match_status": "not started",
                    "match_datetime": new Date("2025-03-03T18:00:00+08:00"), 
                    "match_location": "RC4 MPSH",
                },
                loading: true,
                error: null,
            };
        }
    }
</script>