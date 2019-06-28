<template>

<div class="content">

    <section>
        <h3>Valglokale: {{ getArea}}</h3>
        <hr>
        <article id="addresse">
            <p>Fylke: {{ getLokale.county_name }}</p>
            <p>Sted/kommune: {{ getLokale.area }}</p>
            <p>Post nr {{ getLokale.postal_code }}</p>
            <p>Addresse: <a v-bind:href="'https://www.google.com/maps/search/?api=1&query='+getLokale.gps_coordinates" target="_blank">{{ getLokale.address_line }}</a> </p>
            <p></p>
            <hr>
        </article>
        <article>
            <h4>Data:</h4>
            <pre>
            <code>
{{ getLokale}}  
            </code>
            </pre>
        </article>
        <hr>
        <nuxt-link to="/">tilbake</nuxt-link>
    </section>

</div>
</template>

<script>
import { mapMutations,mapGetters } from 'vuex'

export default {
    name: 'lokale',
    computed: mapGetters(['getLokale','getArea','getCounty']),
    created() {
        if(this.getLokale === ''){
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>

.content {
    width: 70%;
    margin: auto;
}
.content > section {
    margin-top:40px;
}

</style>
