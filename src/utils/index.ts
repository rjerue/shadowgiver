export function calculate(elevation: number, color?: string) {
  const shadowOffset = { width: 0, height: 0.5 * elevation };
  const shadowOpacity = 0.3;
  const shadowRadius = 0.8 * elevation;
  const shadowColor = color || 'black';
  return { shadowOffset, shadowColor, shadowOpacity, shadowRadius };
}

/**
 * Shadowgiver function returns an object that can be used in a stylesheet as a shadow. This version ONLY returns web box shadow
 * @param elevation Elevation number that you would put on Android, will be translated to a shadow on iOS and web
 * @param color A color for the shadow, not supported on android
 */
export function shadowgiver(elevation: number, color?: string) {
  const shadow = calculate(elevation, color);
  return webShadow(shadow);
}

export function webShadow({
  shadowOffset,
  shadowRadius,
  shadowColor,
}: ReturnType<typeof calculate>): { boxShadow: string } {
  return {
    boxShadow: `${shadowOffset.width}px ${shadowOffset.height}px ${shadowRadius}px ${shadowColor}`,
  };
}
