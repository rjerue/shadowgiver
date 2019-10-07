'use strict';

var reactNative = require('react-native');

function calculate(elevation, color) {
  var shadowOffset = {
    width: 0,
    height: 0.5 * elevation
  };
  var shadowOpacity = 0.3;
  var shadowRadius = 0.8 * elevation;
  var shadowColor = color || 'black';
  return {
    shadowOffset: shadowOffset,
    shadowColor: shadowColor,
    shadowOpacity: shadowOpacity,
    shadowRadius: shadowRadius
  };
}
function webShadow(_ref) {
  var shadowOffset = _ref.shadowOffset,
      shadowRadius = _ref.shadowRadius,
      shadowColor = _ref.shadowColor;
  return {
    boxShadow: shadowOffset.width + "px " + shadowOffset.height + "px " + shadowRadius + "px " + shadowColor
  };
}

/**
 * Shadowgiver function returns an object that can be used in a stylesheet as a shadow
 * @param elevation Elevation number that you would put on Android, will be translated to a shadow on iOS and web
 * @param color A color for the shadow, not supported on android
 */

function shadowgiver(elevation, color) {
  var _calculate = calculate(elevation, color),
      shadowOffset = _calculate.shadowOffset,
      shadowOpacity = _calculate.shadowOpacity,
      shadowRadius = _calculate.shadowRadius,
      shadowColor = _calculate.shadowColor;

  var output = reactNative.Platform.select({
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
      boxShadow: webShadow({
        shadowOffset: shadowOffset,
        shadowOpacity: shadowOpacity,
        shadowRadius: shadowRadius,
        shadowColor: shadowColor
      })
    }
  });
  return output;
}

exports.shadowgiver = shadowgiver;
//# sourceMappingURL=shadowgiver.cjs.development.js.map
