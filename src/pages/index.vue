<template>
<section>
    <div class="container">
      <div class="title">
        Finn valglokale
      </div>
   </div>

   <DropDownSelection></DropDownSelection>

   <AddressTable></AddressTable>

</section>
</template>

<script>
import Locations from '~/components/Locations.vue'
import DropDownSelection from '~/components/DropDownSelection.vue'
import AddressTable from '~/components/AddressTable.vue'

export default {
  components: {
    Locations,
    DropDownSelection,
    AddressTable
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 120px;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  text-align: center;
}


.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

/*
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
} */

</style>
