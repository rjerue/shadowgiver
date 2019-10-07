import { Platform, ViewStyle, ShadowStyleIOS } from 'react-native';
import { calculate, webShadow } from './utils';
export type ReactNativeShadow =
  | ShadowStyleIOS
  | Pick<ViewStyle, 'elevation'>
  | { boxShadow: string };

/**
 * Shadowgiver function returns an object that can be used in a stylesheet as a shadow
 * @param elevation Elevation number that you would put on Android, will be translated to a shadow on iOS and web
 * @param color A color for the shadow, not supported on android
 */
export function shadowgiver(
  elevation: number,
  color?: string
): ReactNativeShadow {
  const { shadowOffset, shadowOpacity, shadowRadius, shadowColor } = calculate(
    elevation,
    color
  );
  const output: ReactNativeShadow = Platform.select({
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
      boxShadow: webShadow({
        shadowOffset,
        shadowOpacity,
        shadowRadius,
        shadowColor,
      }),
    },
  });

  return output;
}
