import { mount } from '@vue/test-utils'
import DropDownSelection from '@/components/DropDownSelection.vue'

describe('DropDownSelection', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(DropDownSelection)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
