import React from "react"
import Head from "next/head"
import Header from "~/components/Header"
import Footer from "~/components/Footer"

const Default = ({ children }) => {
  return (
    <>
      <Head>
        <title>Hello Title</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  )
}
export default Default
