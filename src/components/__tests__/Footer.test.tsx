import React from "react"
import { shallow } from "enzyme"
import Footer from "../Footer"

describe("Footer", () => {
  test("Root DOM が footer であること", () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.is('footer')).toBe(true)
  })
})
