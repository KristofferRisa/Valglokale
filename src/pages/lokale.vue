<template>
<div>
<nuxt-link to="/">Tilbake</nuxt-link>
    <section>
        <h3>Valglokale: {{ getArea}}</h3>
        <hr>
        <div>
            <p>Addresse: {{ getLokale }}</p>
        </div>
    </section>
</div>
</template>

<script>
import { mapMutations,mapGetters } from 'vuex'

export default {
    name: 'lokale',
    computed: mapGetters(['getLokale','getArea','getCounty'])
}
</script>

<style>

</style>
