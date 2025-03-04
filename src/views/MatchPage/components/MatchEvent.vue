<template>
    <div class="bg-[#6C6A6A] w-full h-full rounded-lg p-4">
        <p>Match Event MatchEvent ID: {{ id }}</p>
    </div>
</template>

<script>
    export default {
        name: 'MatchEvent',
        props: {
            id: Number
        }
    }
</script>

