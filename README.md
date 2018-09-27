# Styleguide development with LernaJS, React-Styleguidist & SASS

The following tools have been used to build this styleguide:
1. [LernaJS](https://lernajs.io/): For managing multiple packages in a single repository.
2. [React Styleguidist](https://react-styleguidist.js.org/): For documentation and development environment.
3. [SASS](https://sass-lang.com/): Styling for React UI Components
4. [Webpack](https://webpack.js.org/): For bundling packages as libraries

## Directory Structure
### /packages
This folder contains all the packages that constitute your styleguide.

#### /packages/pkg_name
Each package consists of the following directory structure.
```

pkg_name
  |-- src
    |-- index.js // Source File for the component
    |-- index.scss // SASS Source File
  |-- package.json // This will contain individual package information
  |-- README.md // Styleguidist documentation. [Link](https://react-styleguidist.js.org/docs/documenting.html#usage-examples-and-readme-files)
  |-- dist // This is generated by webpack build. The index.min.js here is the entry point for the package.

```

### /styleguide
This folder consists of the files required for configuring React-Styleguidist.

### /scss
Here you can place SASS modules required for theming and other commonly used styles.

### package.json
This is the primary file for managing dependencies for your project. Here we have our build & development scripts.

### lerna.json
Lerna Configuration Options

### webpack.lib.config.js
Each package is bundled using the webpack configuration in this file. If a "one file fits all" approach does not suit your use case, you can have webpack configs in each

### index.html & build/ (Optional)
These files can be added to the repo, if you wish to utilise Github for hosting your styleguide.

## Getting Started
1. Clone the repository
2. Run `yarn install` (Note: You can use npm too)
3. Next you will need to run `yarn install` inside each package.
4. Run `yarn run styleguide` in the root. This should start react-styleguidist in your local environment.

## Developing packages locally
Run the command `yarn run styleguide`. This will start react-styleguidist server for development on your local machine.

## Publishing the packages to NPM
Run the command `yarn run publish:npm`. The command executes the following steps sequentially,

1. `lerna bootstrap`: Install all package dependencies and link any cross-dependencies
2. `lerna exec --parallel yarn run build`: Build all react UI Components parallely. **Important:** Each package should have build command in their package.json. Check (button/package.json)[https://github.com/vivek3003/demo-react-styleguide/blob/master/packages/button/package.json#L10]. This step ensures that all the packages have their built files placed in dist folders.
3. `lerna publish --skip-git --registry=https://registry.npmjs.org/`: This will prompt you for version upgrades. It will then publish the packages to NPM based on (package name)[https://github.com/vivek3003/demo-react-styleguide/blob/master/packages/button/package.json#L2] and your credentials.

**Note:** Once this step is done. You can commit and publish to github. Of course, you can also use lerna compeletly to manage your git workflow too.

## Building Styleguide for Hosting(On Github or any other hosting option)
Run `yarn run styleguide:build`. This will create an index.html file and a build directory that contains the react-styleguidist JS bundle. You can commit this to your repository if you would like to host your styleguide on Github.

