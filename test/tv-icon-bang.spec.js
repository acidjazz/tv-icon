import { mount } from '@vue/test-utils'
import IconBang from '@/IconBang'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconBang)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
