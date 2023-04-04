import { mount } from '@vue/test-utils'
import StudiaAlert from "@/components/StudiaAlert.vue";

test('Mount component', () => {
  expect(StudiaAlert).toBeTruthy()
  const wrapper = mount(StudiaAlert, {slots: { 'default': 'text', 'title': 'heading'}})

  expect(wrapper.text()).toContain('text')
  expect(wrapper.text()).toContain('heading')
  expect(wrapper.html()).toMatchSnapshot()
})

