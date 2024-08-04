import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */
interface LockProps {
    size?: number;
    color?: string;
  }
  
  const Lock: React.FC<LockProps> = ({ size = 24, color = 'black' }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M15 9.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3v-3a6 6 0 1 1 12 0v3Zm-6-7a4 4 0 0 1 4 4v3H5v-3a4 4 0 0 1 4-4Zm6 9H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Lock;
