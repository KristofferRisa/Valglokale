import { mount } from '@vue/test-utils'
import AddressTable from '@/components/AddressTable.vue'

describe('AddressTable', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AddressTable)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
