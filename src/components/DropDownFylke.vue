<template>
<form>
  <div class="row">
 
      <div class="form-group row">
        
        <label  class="col-sm-4 col-form-label">Velg fylke:</label>
        
          <input 
          id="county"
          list="countyList"
          name="countyinput"
          v-model="selectedCounty"
          class="form-control col-sm-7 col-offset-1"
          @change="setCounty"
          placeholder="skriv inn fylke..."/>
          <datalist id="countyList" >
            <option v-bind:value="c" v-for="c in getCounties" :key="c"/>
          </datalist>
      </div>

        
    <div class="form-group row" v-if="getCounty">

          <label  class="col-sm-5 col-form-label">Velg by:</label>
          <input class="form-control col-sm-7"
          id="area"
          list="areaList"
          name="area"
          v-model="selectedArea"
          @change="setArea"
          placeholder="skriv inn by..."/>
          <datalist id="areaList" >
            <option v-bind:value="a" v-for="a in getAreas" :key="a" />
          </datalist>

    </div>
  </div>
  <div class="row">


    <!-- <el-table :data="getAddresses"  v-if="getAddresses.length">
          <el-table-column prop="county_name" label="Fylke" width="140">
          </el-table-column>
          <el-table-column prop="area" label="By" width="120">
          </el-table-column>
          <el-table-column  prop="address_line" label="Address">
          </el-table-column>
        </el-table> -->

    <div v-if="getAddresses.length">
      <h3>Addresser</h3>
      <table>
        <thead>
        <tr>
          <th>Fylke</th>
          <th>By</th>
          <th>Addresse</th>
        </tr>
        <tr v-for="address in getAddresses" :key="address.id">
          <td >{{ address.county_name }}</td>
          <td>{{ address.area }}</td>
          <td><a v-bind:href="'https://www.google.com/maps/search/?api=1&query='+address.gps_coordinates"
                target="_blank">{{ address.address_line }}</a></td>
            <td>
                <button @click="setLokale(address.gps_coordinates)" > Vis lokale</button>
            </td>
        </tr>
      </thead>
      </table>
    </div>

  </div>
      </form>
</template>

<script>
import { mapMutations,mapGetters,mapActions } from 'vuex'

export default {
  name: 'DropDownFylke',
  computed: mapGetters(['getCounties','getAreas','getArea','getCounty','getAddresses']
  ),
  data() {
      return {
          selectedCounty: '',
          selectedArea: '',
          lokale: ''
      }
  },
  created() {
      if(this.$store.state.county){
          this.selectedCounty = this.$store.state.county;
      }
      if(this.$store.state.area){
          this.selectedArea = this.$store.state.area;
      }
      this.getAllData();
      console.log('Fetching data from api');
  },
  methods: {
     ...mapActions(['getAllData']),
    setCounty(){
        console.log('setting county')
        console.log(this.selectedCounty)
        this.$store.commit('setSelectedCounty', this.selectedCounty)
    },
    setArea(e) {
      this.$store.commit('setSelectedArea', this.selectedArea)
    },
    setLokale(lokale) {
        console.log('setLokale: ' + lokale);
        this.$store.commit('setLokale', lokale);
        this.$router.push('/lokale');
    }
  }
}
</script>
