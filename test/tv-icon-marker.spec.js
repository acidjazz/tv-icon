import { mount } from '@vue/test-utils'
import IconMarker from '@/IconMarker'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconMarker)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
