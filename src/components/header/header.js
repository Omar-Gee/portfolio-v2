import React from "react"
import headerStyles from "./header.module.scss"

const Header = () => (
  <header className={headerStyles.container}>
    <ul className={headerStyles.list}>
      <li><a className={headerStyles.listItem} href="">Experience</a></li>
      <li><a className={headerStyles.listItem} href="">Skills</a></li>
      <li><a className={headerStyles.listItem} href="">Contact</a></li>
    </ul>
    <ul className={headerStyles.list}>
      <li><a className={headerStyles.listItem} href="">Theme 1</a></li>
      <li><a className={headerStyles.listItem} href="">Theme 2</a></li>
    </ul>
  </header>
)

export default Header
