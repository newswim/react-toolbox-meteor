# Meteor react-toolbox-example

Meteor version of [react-toolbox-example](https://github.com/react-toolbox/react-toolbox-example)

### Getting Started
1. Clone this repository
1. Run `npm install && meteor`
1. Visit `localhost:3000` in your browser

### How it works (using 1.3-rc.7):
1. `meteor create your-app --release 1.3-rc.7`
1. `cd your-app`
1. `npm install --save react-toolbox`
1. `meteor add nathantreid:css-modules@1.0.0-beta.9`
1. Remove the `server` director
1. Remove all files from the `client` directory
1. Download the [react-toolbox-example](https://github.com/react-toolbox/react-toolbox-example)
1. Copy all of the files from react-toolbox-example/app into the /client folder
1. Wrap the `ReactDom.render()` call in index.jsx inside `Meteor.startup()`:
``` js
Meteor.startup(function () {
    ReactDOM.render((
    // rest of ReactDOM.render call...
});
```

1. Copy the head & body tags, minus the <link rel="stylesheet" href="react-toolbox.css"> and <script src="react-toolbox.js"></script> (Meteor will handle those) from react-toolbox-example/www/index.html to an index.html in the /client folder
1. Add the following to packages.json:
``` json
    "cssModules": {
        "extensions": [
          "scss"
        ],
        "globalVariables": [
          "node_modules/react-toolbox/lib/_colors.scss",
          { "theme-building": true },
          "client/toolbox-theme.scss"
        ],
        "outputJsFilePath": {
          "node_modules/react-toolbox/.*": "{dirname}/{basename}.js"
        },
        "explicitIncludes": [
          "node_modules/react-toolbox"
        ]
      }
```
1. Run meteor

The `extensions` property determines which file types are handled by the plugin (default: `[ "mss" ]`).

The `globalVariables` property is roughly the equivalent of the toolbox-loader configured by `toolbox: { theme: }` property from the react-toolbox-example's webpack.config.js.

The `outputJsFilePath` property configures the output filename used by the import statement (default: `{ "default": "{dirname}/{basename}.{extname}" }`, eg. "client/styles.scss"). React-Toolbox omits the extension from the scss imports, and the scss extension isn't a default extension when importing from node_modules, so it requires the output format to be `{ "default": "{dirname}/{basename}" }`, eg. "client/styles". If you want to use the standard format for files in your project, but still use React-Toolbox, you can limit the format specifically to the react-toolbox directory using a regular expression:
Meteor allows you to leave off the extensions when importing files that are handled by a build plugin, so `import style from './style';` and import style from './style.scss';` are equivalent.
However, this does not work with the node_modules directory, which supports leaving off the extension on .js and .json files, so we have to explicitly change the output format for React-Toolbox:
``` json
    "outputJsFilePath": {
      "node_modules/react-toolbox/.*": "{dirname}/{basename}.js"
    },
```    

The `explicitIncludes` property tells the css modules plugin to process all handled file extensions (in this case, scss) in the supplied directories. This is required because Meteor 1.3 does not process files in the node_modules folder.

### Mantra Fork by @newswim

This is a modification of an excellent project by @nathantreid. Original project here: https://github.com/nathantreid/meteor-react-toolbox-example
##### Updates
- React and React-DOM to v15
- Added Mantra packages
- Added `babel-compiler` meteor package (should be removed when class transform issue is resolved)
- Gutted a <Layout /> component for demonstration
