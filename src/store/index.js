import Vue from 'vue'
import Vuex from 'vuex'
import locations from './locations.js'

Vue.use(Vuex)

const store = () => {
  return new Vuex.Store({
    state: {

    },
    modules: {
      locations
    }
  })
}

export default store
