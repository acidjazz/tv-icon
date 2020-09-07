import { mount } from '@vue/test-utils'
import IconTimes from '@/IconTimes'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconTimes)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
