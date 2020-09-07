import { mount } from '@vue/test-utils'
import IconGithub from '@/IconGithub'

describe('tv-icon', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(IconGithub)
        expect(wrapper.vm).toBeTruthy()
    })
}
)
