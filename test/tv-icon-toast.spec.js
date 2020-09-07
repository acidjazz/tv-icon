import { mount } from '@vue/test-utils'
import IconToast from '@/IconToast'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconToast)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
