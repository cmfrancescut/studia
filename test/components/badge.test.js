import { mount } from '@vue/test-utils'
import StudiaBadge from "@/components/StudiaBadge.vue";

test('Mount component', () => {
  expect(StudiaBadge).toBeTruthy()
  const wrapper = mount(StudiaBadge, {slots: { 'default': 'text'}})

  expect(wrapper.text()).toContain('text')
  expect(wrapper.html()).toMatchSnapshot()
})

