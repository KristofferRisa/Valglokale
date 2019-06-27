<template>
  <div>
    <h2>Velkg fylke</h2>
    <form>
      <input list="fylker" id="fylke" name="fylke" placeholder="skriv inn fylke..." />
      <datalist id="fylker" >
        <option v-bind:value="fylke" v-for="fylke in fylker" :key="fylke" />
      </datalist>
    </form>
  </div>
</template>

<script>
export default {
  name: 'DropDownFylke',
  computed: {
    fylker() {
      return [...new Set(this.$store.state.locations.all[0].entries.map(f => f.area))]
    }
  }
}
</script>
