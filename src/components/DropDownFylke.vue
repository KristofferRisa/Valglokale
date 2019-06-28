<template>
  <div>
    <h2>Velkg fylke</h2>
    <form>
      <input 
      id="county"
      list="countyList"
      name="countyinput"
      @change="setCounty"
      placeholder="skriv inn fylke..."/>
      <datalist id="countyList" >
        <option v-bind:value="c" v-for="c in getCounties" :key="c"/>
      </datalist>
    
    <div v-if="getCounty">
      <h3>Velg by i {{ getCounty }}</h3>
      <input 
      id="area"
      list="areaList"
      name="area"
      @change="setArea"
      placeholder="skriv inn by..."/>
      <datalist id="areaList" >
        <option v-bind:value="a" v-for="a in getAreas" :key="a"/>
      </datalist>
    </div>
    </form>

    <div v-if="getArea">
      <h3>Viser steder i byen {{ getArea }} i {{ getCounty }} </h3>
    </div>

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
          <td>{{ address.county_name }}</td>
          <td>{{ address.area }}</td>
          <td>{{ address.address_line }}</td>
        </tr>
      </thead>
      </table>
    </div>

  </div>
</template>

<script>
import { mapMutations,mapGetters } from 'vuex'

export default {
  name: 'DropDownFylke',
  computed: mapGetters(['getCounties','getAreas','getArea','getCounty','getAddresses']
  ),
  methods: {
    setCounty(e){
      this.$store.commit('setSelectedCounty', e.target.value)
    },
    setArea(e) {
      this.$store.commit('setSelectedArea', e.target.value)
    }
  }
}
</script>
