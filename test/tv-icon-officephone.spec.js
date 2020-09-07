import { mount } from '@vue/test-utils'
import IconOfficePhone from '@/IconOfficePhone'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconOfficePhone)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
