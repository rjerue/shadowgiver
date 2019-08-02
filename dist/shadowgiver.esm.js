import { Platform } from 'react-native';

/**
 * Shadowgiver function returns an object that can be used in a stylesheet as a shadow
 * @param elevation Elevation number that you would put on Android, will be translated to a shadow on iOS and web
 * @param color A color for the shadow, not supported on android
 */

function shadowgiver(elevation, color) {
  var shadowOffset = {
    width: 0,
    height: 0.5 * elevation
  };
  var shadowOpacity = 0.3;
  var shadowRadius = 0.8 * elevation;
  var shadowColor = color || 'black';
  return Platform.select({
    ios: {
      shadowColor: 'black',
      shadowOpacity: shadowOpacity,
      shadowRadius: shadowRadius,
      shadowOffset: shadowOffset
    },
    android: {
      elevation: elevation
    },
    web: {
      boxShadow: shadowOffset.width + "px " + shadowOffset.height + "px " + shadowRadius + "px " + shadowColor
    }
  });
}

export default shadowgiver;
//# sourceMappingURL=shadowgiver.esm.js.map
