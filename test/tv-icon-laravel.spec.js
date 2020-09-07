import { mount } from '@vue/test-utils'
import IconLaravel from '@/IconLaravel'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconLaravel)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
