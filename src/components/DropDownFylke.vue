<template>
<form>
  <div class="container">
    <div class="row">
      <div class="form-group row pull-left">

        <label class="col-sm-5 col-form-label">Velg fylke:</label>
        <input id="county" list="countyList" name="countyinput" v-model="selectedCounty" class="form-control col-sm-6 col-offset-1" @change="setCounty" placeholder="skriv inn fylke..." />
        <datalist id="countyList">
          <option v-bind:value="c" v-for="c in getCounties" :key="c" />
        </datalist>
        
      </div>

      <div class="form-group row" v-if="getCounty">
        
        <label class="col-sm-5 col-form-label">Velg by:</label>
        <input class="form-control col-sm-7" id="area" list="areaList" name="area" v-model="selectedArea" @change="setArea" placeholder="skriv inn by..." />
        <datalist id="areaList">
          <option v-bind:value="a" v-for="a in getAreas" :key="a" />
        </datalist>

      </div>
    </div>
  </div>
  </form>
</template>

<script>
import { mapMutations,mapGetters,mapActions } from 'vuex'

export default {
  name: 'DropDownFylke',
  computed: mapGetters(['getCounties',
                        'getAreas'
                        ,'getArea'
                        ,'getCounty'
                        ,'getAddresses']
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
        console.log('setting county');
        console.log(this.selectedCounty);
        this.$store.commit('setSelectedCounty', this.selectedCounty);
    },
    setArea(e) {
      this.$store.commit('setSelectedArea', this.selectedArea);
    }
  }
}
</script>

<style scoped>

</style>
