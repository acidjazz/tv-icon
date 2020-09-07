import { mount } from '@vue/test-utils'
import IconCheck from '@/IconCheck'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconCheck)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
