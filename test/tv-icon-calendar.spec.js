import { mount } from '@vue/test-utils'
import IconCalendar from '@/IconCalendar'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconCalendar)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
