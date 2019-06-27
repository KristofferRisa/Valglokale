import { mount } from '@vue/test-utils'
import Locations from '@/components/Locations.vue'

describe('Locations', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Locations)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
