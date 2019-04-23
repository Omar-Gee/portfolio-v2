import React from "react"
import headerStyles from "./header.module.scss"

const Header = () => (
  <header className={headerStyles.container}>
    <ul className={headerStyles.list}>
      <li><a className={headerStyles.listItem} href="#experience">Experience</a></li>
      <li><a className={headerStyles.listItem} href="#skills">Skills</a></li>
      <li><a className={headerStyles.listItem} href="#contact">Contact</a></li>
    </ul>
    <ul className={headerStyles.list}>
      <li><a className={headerStyles.listItem} href="">Dark mode</a></li>
      <li><a className={headerStyles.listItem} href="">Light mode</a></li>
    </ul>
  </header>
)

export default Header
