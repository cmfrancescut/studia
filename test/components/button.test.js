import { mount } from '@vue/test-utils'
import StudiaButton from "@/components/StudiaButton.vue";

test('Mount component', () => {
    expect(StudiaButton).toBeTruthy()
    const wrapper = mount(StudiaButton, {slots: { 'default': 'text'}})

    expect(wrapper.text()).toContain('text')
    expect(wrapper.html()).toMatchSnapshot()
})