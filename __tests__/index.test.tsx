import React from "react"
import { shallow } from "enzyme"
import Home from "../pages/index"

describe("Home", () => {
  test("h1タグが描画されること", () => {
    const wrapper = shallow(<Home />)
    expect(wrapper.find("h1").text()).toEqual("Hello Next.js!")
  })
})
