import React from "react"
import { shallow } from "enzyme"
import Header from "../Header"

describe("Header", () => {
  test("Root DOM が header であること", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.is('header')).toBe(true)
  })
})
