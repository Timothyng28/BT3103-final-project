<template>
    <div class="bg-[#6C6A6A] rounded-lg p-4 grid items-center">
        <div class="grid grid-cols-[auto_1fr_auto_1fr_auto] w-full items-center gap-4">
            <div class="w-auto whitespace-nowrap text-left">{{items.match_event_details.minute}}'</div>
            <div class="flex-grow text-center">{{items.match_event_details.event_player}}</div>
            <div class="w-auto whitespace-nowrap text-center">{{items.match_event_details.team1_score}} - {{items.match_event_details.team2_score}}</div>
            <div class="flex-grow text-center">{{}}</div>
            <div class="w-auto whitespace-nowrap text-right">{{items.match_event_details.event_type}} {{ id }}</div>
        </div>
    </div>  
</template>

<script>
    export default {
        name: 'MatchEvent',
        props: {
            id: Number
        },
        data() {
            return {
                items: {
                    'match_event_details': { // connecting to backend
                        'event_time': '2025-03-03 18:11:15', // storing iso strings
                        'minute': 9, // this will be computed before storing in db, when time keeper clicks etc.
                        'event_type': 'Score',
                        'event_team': 'RC4',
                        'team1_score': 25,
                        'team2_score': 24,
                        'event_player': 'Player 1',
                    }
                }
            } 
        }
    }
</script>

