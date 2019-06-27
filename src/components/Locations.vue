<template>
    <section>
      <h3>Locations</h3>
        <p v-for="location in locations[0].entries" :key="location.id">
          {{ location.area}}
        </p>
    </section>
</template>

<script>
export default {
  name: 'Locations',
  computed: {
    locations() {
      return this.$store.state.locations.all
    }
  }
}
</script>
