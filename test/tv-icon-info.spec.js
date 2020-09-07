import { mount } from '@vue/test-utils'
import IconInfo from '@/IconInfo'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconInfo)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
