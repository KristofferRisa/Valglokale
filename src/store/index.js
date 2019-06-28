import axios from 'axios'

export const state = () => ({
    loading: 'true',
    all: [],
    addresses: [],
    counties: [],
    cities: [], 
    county: '',
    area: '',
    lokale: '' //used to see details on the selected lokale
})
  
export const mutations = {
    setAll(state, data) {
      state.all = data;
      state.counties = [...new Set(data.map(f => f.county_name))]
    },
    setSelectedCounty(state, county) {
        state.county = county;
        state.addresses = state.all.filter(e => e.county_name === state.county)
        state.cities = [...new Set(state.all
            .filter(c => c.county_name === state.county)
            .map(f => f.area))]
    },
    setSelectedArea(state, area) {
        state.area = area;
        console.log('setSelectedArea:' + area);
        console.log(state.county);
        if(area === ''){
            state.addresses = state.all.filter(e => e.county_name === state.county)
        } else {
            state.addresses = state.all.filter(e => e.county_name === state.county && e.area === area)
        }
   },
   setLokale(state,lokale) {
     console.log('setLokale: ' + lokale);
     state.lokale = lokale;
   },
   setLoading(state, loading) {
       console.log('Setting loadint to: ' + loading);
       state.loading = loading;
   }
}

export const actions = {

  async getAllData({ commit }) {
    console.log('getAllData: fetching data from API endpoint.');
    
    const response = await axios.get(
    //   "https://hotell.difi.no/api/json/valg/valglokaler/2017?://hotell.difi.no/?dataset=valg/valglokaler/2017"
        "https://kristoffer.dev/data/valg2017.json"
    ).catch(error => {
      console.log(error);
    });
    
    commit('setLoading',false);
    commit('setAll', response.data);
  }

}

export const getters = {
    getLoading(state) {
        return state.loading
    },
    getCounties(state) {
        return state.counties
    },
    getAreas(state) {
        return state.cities
    },
    getArea(state) {
        return state.area
    },
    getCounty(state) {
        return state.county
    },
    getAddresses(state) {
        return state.addresses
    },
    getLokale(state) {
      return state.lokale
    }
}
  