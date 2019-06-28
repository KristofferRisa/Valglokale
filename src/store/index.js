export const state = () => ({
    all: [
        {
          entries: [
            {
              'area': 'Halden',
              'borough_name': '',
              'address_line': 'Øvre Bankegt 5',
              'polling_place_id': '1',
              'borough_id': '',
              'county_name': 'Østfold',
              'polling_place_name': 'Konservativen',
              'gps_coordinates': '59.12273755942663, 11.383713253967243',
              'municipality_id': '101',
              'county_id': '1',
              'municipality_name': 'Halden',
              'election_day_voting': '1',
              'info_text': 'Husk gyldig legitimasjon. Det er fint om du også har med dette valgkortet, men det er ikke legitimasjon.',
              'opening_hours': '2017-09-10 16:00:00,2017-09-10 20:00:00,2017-09-11 09:00:00,2017-09-11 20:00:00',
              'postal_code': '1771'
            }, {
              'area': 'Halden',
              'borough_name': '',
              'address_line': 'Storgt 8',
              'polling_place_id': '1',
              'borough_id': '',
              'county_name': 'Østfold',
              'polling_place_name': 'Halden Rådhus URNE',
              'gps_coordinates': '59.122507,11.386748',
              'municipality_id': '101',
              'county_id': '1',
              'municipality_name': 'Halden',
              'election_day_voting': '0',
              'info_text': 'Forhåndsstemmer kan avgis på Servicesenteret på Halden rådhus hverdager mellom klokka 09.00 og 14.30 i denne perioden.',
              'opening_hours': '',
              'postal_code': '1771'
            }
          ]
        }
    ],
    addresses: [],
    county: '',
    area: '',
    lokale: ''
  })
  
export const mutations = {
    setSelectedCounty(state, county) {
        state.county = county;
    },
    setSelectedArea(state, area) {
        state.area = area;
        console.log('setSelectedArea:' + area);
        console.log(state.county);
        state.addresses = state.all[0].entries.filter(e => e.county_name === state.county && e.area === area)
   },
   setLokale(state,lokale) {
     console.log('setLokale: ' + lokale);
     state.lokale = lokale;
   }
}

export const getters = {
    getCounties(state) {
        return [...new Set(state.all[0].entries.map(f => f.county_name))]
    },
    getAreas(state) {
      return [...new Set(state.all[0].entries.map(f => f.area))]
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
  