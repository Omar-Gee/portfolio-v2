import React from "react"
import { storiesOf } from "@storybook/react"

import Contact from "./contact"

storiesOf('Contact', module)
  .add('example', () => <Contact />)