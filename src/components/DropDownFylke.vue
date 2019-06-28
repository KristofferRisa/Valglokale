<template>
  <div>
    <h2>Velkg fylke</h2>
    <form>
      <input 
      id="area"
      list="areaList"
      name="area"
      v-model="area"
      @change="setSelectedArea(area)"
      placeholder="skriv inn fylke..."/>
      <datalist id="areaList" >
        <option v-bind:value="a" v-for="a in areas" :key="a"/>
      </datalist>
    </form>
    <button @click="setArea()">Velg</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'DropDownFylke',
  data() {
    return {
      area: ''
    }
  },
  computed: {
    areas() {
      return [...new Set(this.$store.state.locations.all[0].entries.map(f => f.area))]
    }
  },
  methods: {
    setArea() {
      this.$store.commit('locations/setSelectedArea', this.area)
    },
    ...mapMutations({
      setSelectedArea: 'locations/setSelectedArea'
    })
  }
}
</script>
