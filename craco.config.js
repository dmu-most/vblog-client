const { CracoAliasPlugin } = require('react-app-alias');

const options = { source: 'tsconfig', baseUrl: 'src', tsConfigPath: './tsconfig.paths.json' };

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options,
    },
  ],
};
