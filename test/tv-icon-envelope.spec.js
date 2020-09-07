import { mount } from '@vue/test-utils'
import IconEnvelope from '@/IconEnvelope'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconEnvelope)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
