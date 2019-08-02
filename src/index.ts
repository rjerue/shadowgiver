import { Platform, ViewStyle, ShadowStyleIOS } from 'react-native';

export type ReactNativeShadow =
  | ShadowStyleIOS
  | Pick<ViewStyle, 'elevation'>
  | { boxShadow: string };

/**
 * Shadowgiver function returns an object that can be used in a stylesheet as a shadow
 * @param elevation Elevation number that you would put on Android, will be translated to a shadow on iOS and web
 * @param color A color for the shadow, not supported on android
 */
function shadowgiver(elevation: number, color?: string): ReactNativeShadow {
  const shadowOffset = { width: 0, height: 0.5 * elevation };
  const shadowOpacity = 0.3;
  const shadowRadius = 0.8 * elevation;
  const shadowColor = color || 'black';
  return Platform.select({
    ios: {
      shadowColor: 'black',
      shadowOpacity,
      shadowRadius,
      shadowOffset,
    },
    android: {
      elevation,
    },
    web: {
      boxShadow: `${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px ${shadowColor}`,
    },
  });
}

export default shadowgiver;
