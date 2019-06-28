import { mount } from '@vue/test-utils'
import spinner from '@/components/spinner.vue'

describe('spinner', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(spinner)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
