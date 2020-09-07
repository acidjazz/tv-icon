import { mount } from '@vue/test-utils'
import IconSearch from '@/IconSearch'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconSearch)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
