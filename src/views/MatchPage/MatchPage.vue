<template>
    <div>
        <h1>Match Page</h1>
        <h2>Match ID: {{ id }}</h2>
    </div>
</template>

<script>
    export default {
        props: {
            id: String
        }
    }
</script>