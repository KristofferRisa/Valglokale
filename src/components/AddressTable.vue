<template>
    <div v-if="getAddresses.length" class="container-data">
        <h3>Addresser:</h3>
        <hr>
          <el-table
            :data="getAddresses"
            height="250"
            style="width: 100%">
            <el-table-column
            prop="county_name"
            label="Fylke"
            width="180">
            </el-table-column>
            <el-table-column
            prop="area"
            label="By"
            width="180">
            </el-table-column>
            <el-table-column
            
            label="Address">
            <template  slot-scope="scope">
                <a v-bind:href="'https://www.google.com/maps/search/?api=1&query='+scope.row.gps_coordinates" target="_blank">{{ scope.row.address_line }}</a>
            </template>
            </el-table-column>
            <el-table-column >
                <template slot-scope="scope">
                    <button @click="setLokale(scope.row.gps_coordinates, getAddresses)"> Vis lokale</button>
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

.container-data{
  /* display: flex; */
  width: 70%;
  margin: 0 auto;
}


</style>
