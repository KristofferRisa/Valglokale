<template>
  
    <div class="container">
        
<form>
<div class="row">

  <div class="col">
    <label>Velg fylke:</label>
    <input id="county" list="countyList" name="countyinput" autocomplete="off" v-model="selectedCounty" class="form-control" @change="setCounty" placeholder="skriv inn fylke..." />
    <datalist id="countyList">
      <option v-bind:value="c" v-for="c in getCounties" :key="c" />
    </datalist>
  </div>
  <div class="col" v-if="getCounty">


    <label>Velg kommune:</label>
    <input class="form-control" id="area" list="areaList" name="area" autocomplete="off" v-model="selectedArea" @change="setArea" placeholder="skriv inn sted..." />

    <datalist id="areaList">
      <option v-bind:value="a" v-for="a in getAreas" :key="a" />
    </datalist>

  </div>
</div>

</form>
</div>
</template>

<script>
import { mapMutations,mapGetters } from 'vuex'

export default {
  name: 'DropDownSelection',
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
  },
  methods: {
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

@media only screen and (min-width: 600px) {
  label,input {
  margin-left:15px; 
}
}
</style>
