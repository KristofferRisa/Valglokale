<template>
    <div v-if="getAddresses.length">
        <h3>Addresser</h3>
        <table id="addressTable">
            <thead>
                <tr>
                    <th>Fylke</th>
                    <th>By</th>
                    <th>Addresse</th>
                </tr>
                <tr v-for="address in getAddresses" :key="address.id">
                    <td>{{ address.county_name }}</td>
                    <td>{{ address.area }}</td>
                    <td><a v-bind:href="'https://www.google.com/maps/search/?api=1&query='+address.gps_coordinates" target="_blank">{{ address.address_line }}</a></td>
                    <td>
                        <button @click="setLokale(address.gps_coordinates)"> Vis lokale</button>
                    </td>
                </tr>
            </thead>
        </table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AddressTable',
    computed: mapGetters(['getAddresses']
  )
}
</script>

<style>



</style>
