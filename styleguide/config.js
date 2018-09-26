module.exports = {
  sections: [
    {
      name: 'Demo Style Guide (WIP)',
      content: './README.md',
    },
    {
      name: 'Core UI Components',
      components: () => ([
        // Add Components here
        '../packages/button/src/index.js',
        '../packages/text/src/index.js',
      ]),
    },
    // {
    //   name: 'Composite Components',
    //   components: () => ([
    //     // '../packages/input-group/src/index.js',
    //   ]),
    // },
  ],
  template: './template.html',
  webpackConfig: require('./webpack.styleguide.js'),
};
