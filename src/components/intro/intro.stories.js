import React from "react"
import { storiesOf } from "@storybook/react"

import Intro from "./intro"

storiesOf('Intro', module)
  .add('example', () => <Intro />)