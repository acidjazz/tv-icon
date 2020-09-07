import { mount } from '@vue/test-utils'
import IconPhone from '@/IconPhone'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconPhone)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
