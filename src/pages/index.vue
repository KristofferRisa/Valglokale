<template>
<section>
    <div class="container">
      <div class="title">
        Finn valglokale
      </div>
   </div>

  <spinner v-if="getLoading"></spinner>
  
  <DropDownSelection v-else></DropDownSelection>

  <AddressTable></AddressTable>

</section>
</template>

<script>
import DropDownSelection from '~/components/DropDownSelection.vue';
import AddressTable from '~/components/AddressTable.vue';
import spinner from '~/components/spinner.vue';
import { mapGetters,mapActions } from 'vuex'

export default {
  components: {
    spinner,
    DropDownSelection,
    AddressTable
  },
  computed: mapGetters(['getLoading']),
  methods:{
    ...mapActions(['getAllData']),
  },
  created() {
    this.getAllData();
    console.log('Fetching data from api');
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
  font-size: 70px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
