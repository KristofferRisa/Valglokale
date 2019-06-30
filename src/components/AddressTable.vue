<template>
    <div v-if="getAddresses.length" class="container-data">
        <hr>
          <el-table
            :data="getAddresses"
            style="width: 100%">

            <el-table-column
            prop="area"
            label="By">
            </el-table-column>

             <el-table-column
            label="Address">
            <template  slot-scope="scope">
                <a v-bind:href="'https://www.google.com/maps/search/?api=1&query='+scope.row.gps_coordinates" 
                class="btn btn-default" target="_blank">{{ scope.row.address_line }}</a>
            </template>
            </el-table-column>
           
            <el-table-column label="Vis detaljer" >
                <template slot-scope="scope">
                    <button @click="setLokale(scope.row, getAddresses)" class="btn btn-primary">Detaljer</button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AddressTable',
    computed: mapGetters(['getAddresses']),
    methods: {
        setLokale(lokale) {
        console.log('setLokale: ' + lokale);
        this.$store.commit('setLokale', lokale);
        this.$router.push('/lokale');
        }
    }
}
</script>

<style>

@media only screen and (max-width: 800px) {
  .container-data{
    /* display: flex; */
    width: 90%;
    margin: 0 auto;
    }
}
 
@media screen and (min-width:800px) {
    .container-data{
    /* display: flex; */
    width: 70%;
    margin: 0 auto;
    }
}




</style>
