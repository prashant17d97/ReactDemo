import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
const Email = (props: SvgProps) => (
    <Svg
    width={38}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M10.01 11.838a1 1 0 0 1 1-1H27a1 1 0 0 1 1 1v11.324a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2v-11a1 1 0 0 1 .01-.14v-.184ZM12 14.062v9.1h14v-9.1l-4.878 4.879a3 3 0 0 1-4.243 0L12 14.06Zm1.572-1.256h10.856l-4.72 4.72a1 1 0 0 1-1.415 0l-4.72-4.72Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Email;
