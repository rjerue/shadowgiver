# shadowgiver

shadowgiver is a utility for react native and react native web to make shadows consistent across platforms. It takes in the most primitive object, an Android elevation, and turns it into a box shadow, and iOS shadow, and an elevation. Will only return the minimal number of keys.

[NPM Package](https://www.npmjs.com/package/shadowgiver)

## Usage:

install

`yarn add shadowgiver`

or

`npm install shadowgiver`

```js
import shadowgiver from 'shadowgiver';

StyleSheet.create({
  ...shadowgiver(4),
});
```

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

Want to see under the hood? Heres the shadowgiver function:

```js
function shadowgiver(elevation, color) {
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
```

## Package Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

MIT License
