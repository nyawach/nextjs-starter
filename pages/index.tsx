import React from "react"
import dynamic from "next/dynamic"
import styled from "@emotion/styled"

const Default = dynamic(() => import("~/layouts/Default"))
const Head = dynamic(() => import("next/head"))

function Home() {
  return (
    <Default>
      <Head>
        <title>Hello Next.js!</title>
      </Head>
      <Wrapper>
        <h1>Hello Next.js!</h1>
      </Wrapper>
    </Default>
  )
}

const Wrapper = styled.div`
  position: relative;
`

export default Home
