import { mount } from '@vue/test-utils'
import IconNuxt from '@/IconNuxt'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconNuxt)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
