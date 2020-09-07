import { mount } from '@vue/test-utils'
import IconSignIn from '@/IconSignIn'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconSignIn)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
