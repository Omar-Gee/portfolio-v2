/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import Header from "../header/header"
import Footer from "../footer/footer"

const Layout = ({ children }) => (
  <>
    <Header />
      {children}
    <Footer />
  </>

)

export default Layout
