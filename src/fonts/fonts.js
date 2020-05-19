import { css } from "styled-components"

import workSansRegularWOFF from "./WorkSans/WorkSans-Regular.woff"
import workSansRegularWOFF2 from "./WorkSans/WorkSans-Regular.woff2"

import workSansBoldWOFF from "./WorkSans/WorkSans-Bold.woff"
import workSansBoldWOFF2 from "./WorkSans/WorkSans-Bold.woff2"

import PTMonoRegularWOFF from "./PTMono/PTMono-Regular.woff"
import PTMonoRegularWOFF2 from "./PTMono/PTMono-Regular.woff2"

const Fonts = css`
  @font-face {
    font-family: "Work Sans";
    src: url(${workSansRegularWOFF}) format("woff"),
      url(${workSansRegularWOFF2}) format("woff2"),
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Work Sans";
    src: url(${workSansBoldWOFF}) format("woff"),
      url(${workSansBoldWOFF2}) format("woff2"),
    font-weight: 700;
    font-style: normal;
  }
  @font-face {
    font-family: "PT Mono";
    src: url(${PTMonoRegularWOFF}) format("woff"),
      url(${PTMonoRegularWOFF2}) format("woff2"),
    font-weight: 700;
    font-style: normal;
  }
`
export default Fonts
