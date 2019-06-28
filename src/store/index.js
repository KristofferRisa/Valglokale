import axios from 'axios'

export const state = () => ({
    all: [],
    addresses: [],
    county: '',
    area: '',
    lokale: ''
  })
  
export const mutations = {
    setAll(state, data) {
      state.all = data;
    },
    setSelectedCounty(state, county) {
        state.county = county;
        // state.addresses = state.all[0].entries.filter(e => e.county_name === state.county)
    },
    setSelectedArea(state, area) {
        state.area = area;
        console.log('setSelectedArea:' + area);
        console.log(state.county);
        // state.addresses = state.all[0].entries.filter(e => e.county_name === state.county && e.area === area)
   },
   setLokale(state,lokale) {
     console.log('setLokale: ' + lokale);
     state.lokale = lokale;
   }
}

export const actions = {
  async getAllData({ commit }) {
    console.log('getAllData');
    const response = await axios.get(
      "https://hotell.difi.no/api/json/valg/valglokaler/2017?://hotell.difi.no/?dataset=valg/valglokaler/2017"
    ).catch(error => {
      console.log(error);
    });

    console.log('Fecthing data from API:' + response.data);
    
    commit('setAll', response.data);
  }
}

export const getters = {
    getCounties(state) {
        return []//...new Set(state.all[0].entries.map(f => f.county_name))]
    },
    getAreas(state) {
      return []//...new Set(state.all[0].entries.map(f => f.area))]
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
  