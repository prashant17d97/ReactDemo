
import * as React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Svg, { SvgProps, Path } from 'react-native-svg';

interface EyeOnViewProps extends SvgProps {
  size?: number;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

interface EyeOnProps {
  size?: number;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  style?: StyleProp<ViewStyle>; // Correct type for style prop
}

const EyeOnView = ({
  size = 24,
  fillColor = '#e8eaed',
  strokeColor = '#000',
  strokeWidth = 0,
  ...props
}: EyeOnViewProps) => (
  <Svg
    width={size}
    height={size}
    fill={fillColor}
    stroke={strokeColor}
    strokeWidth={strokeWidth}
    viewBox="0 -960 960 960"
    {...props}
  >
    <Path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
  </Svg>
);

const EyeOn = ({
  size = 24,
  fillColor = '#e8eaed',
  strokeColor = '#000',
  strokeWidth = 0,
  style, // Optional style prop
  ...props
}: EyeOnProps) => (
  <View style={style}>
    <EyeOnView
      size={size}
      fillColor={fillColor}
      strokeColor={strokeColor}
      strokeWidth={strokeWidth}
      {...props}
    />
  </View>
);

export default EyeOn;
