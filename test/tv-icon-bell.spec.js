import { mount } from '@vue/test-utils'
import IconBell from '@/IconBell'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconBell)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
