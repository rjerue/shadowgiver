export declare function calculate(elevation: number, color?: string): {
    shadowOffset: {
        width: number;
        height: number;
    };
    shadowColor: string;
    shadowOpacity: number;
    shadowRadius: number;
};
/**
 * Shadowgiver function returns an object that can be used in a stylesheet as a shadow. This version ONLY returns web box shadow
 * @param elevation Elevation number that you would put on Android, will be translated to a shadow on iOS and web
 * @param color A color for the shadow, not supported on android
 */
export declare function shadowgiver(elevation: number, color?: string): {
    boxShadow: string;
};
export declare function webShadow({ shadowOffset, shadowRadius, shadowColor, }: ReturnType<typeof calculate>): {
    boxShadow: string;
};
