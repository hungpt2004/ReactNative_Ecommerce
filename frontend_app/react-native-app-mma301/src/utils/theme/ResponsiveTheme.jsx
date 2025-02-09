import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Kích thước thiết kế trong Figma (cập nhật theo thiết kế của bạn)
const FIGMA_WIDTH = 375;
const FIGMA_HEIGHT = 812;

//WIDTH
export const responsiveWidth = (size) => (size / FIGMA_WIDTH) * SCREEN_WIDTH;

//HEIGHT
export const responsiveHeight = (size) => (size / FIGMA_HEIGHT) * SCREEN_HEIGHT;

//FONT SIZE
export const responsiveFontSize = (size) => {
  const scale = SCREEN_WIDTH / FIGMA_WIDTH;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

//PADDING - MARGIN FOLLOW WIDTH
export const responsiveSpacingWidth = (size) => responsiveWidth(size);

//PADDING - MARGIN FOLLOW HEIGHT
export const responsiveSpacingHeight = (size) => responsiveHeight(size);
