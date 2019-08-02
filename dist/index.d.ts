import { ViewStyle, ShadowStyleIOS } from 'react-native';
export declare type ReactNativeShadow = ShadowStyleIOS | Pick<ViewStyle, 'elevation'> | {
    boxShadow: string;
};
/**
 * Shadowgiver function returns an object that can be used in a stylesheet as a shadow
 * @param elevation Elevation number that you would put on Android, will be translated to a shadow on iOS and web
 * @param color A color for the shadow, not supported on android
 */
declare function shadowgiver(elevation: number, color?: string): ReactNativeShadow;
export default shadowgiver;
