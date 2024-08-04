import * as React from "react"
import Svg, { SvgProps, Rect, Path } from "react-native-svg"
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <Rect width={50} height={50} fill="#2B2B2B" rx={25} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="m28.5 20-5.861 4.187a1 1 0 0 0 0 1.627L28.5 30"
    />
  </Svg>
)
export default SvgComponent
