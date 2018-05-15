<template>
    <div>
        <h2>我是itemcontainer</h2>
        <header>
            <span v-if="fatherComponent == 'home'">我是home</span>
            <span v-if="fatherComponent == 'item'">我是item</span>
        </header>
    </div>
</template>

<script>
    export default {
        props:['fatherComponent']
    }
</script>

<style scoped>

</style>