const { whenDev, whenProd } = require('@craco/craco');

module.exports = {
  babel: {
    loaderOptions: options => {
      const origBabelPresetCRAIndex = options.presets.findIndex((preset) => {
        return preset[0].includes('babel-preset-react-app');
      });

      const origBabelPresetCRA = options.presets[origBabelPresetCRAIndex];

      options.presets[origBabelPresetCRAIndex] = function overridenPresetCRA(api, opts, env) {
        const babelPresetCRAResult = require(
          origBabelPresetCRA[0]
        )(api, origBabelPresetCRA[1], env);

        babelPresetCRAResult.presets.forEach(preset => {
          // detect @babel/preset-react with {development: true, runtime: 'automatic'}
          const isReactPreset = (
            preset && preset[1] &&
            preset[1].runtime === 'automatic' &&
            preset[1].development === true
          );
          if (isReactPreset) {
            preset[1].importSource = '@welldone-software/why-did-you-render';
          }
        });

        return babelPresetCRAResult;
      };

      return options;
    },
  },
  webpack: {
    alias: {
      ...whenDev(() => ({
        'react-redux': 'react-redux/lib'
      }))
    },
    configure: {
      module: {
        rules: [
          {
            test: /react-spring/,
            sideEffects: true
          }
        ]
      }
    }
  }
};