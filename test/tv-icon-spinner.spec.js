import { mount } from '@vue/test-utils'
import IconSpinner from '@/IconSpinner'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconSpinner)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
