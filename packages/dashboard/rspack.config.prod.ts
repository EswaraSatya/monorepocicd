import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/rspack/module-federation';
import baseConfig from './module-federation.config';

const prodConfig = {
  ...baseConfig,
  remotes: [],
};

export default function (pluginOptions: any = {}, context: any = {}) {
  // Super defensive fix
  if (!context.options) {
    context.options = {};
  }
  if (!context.options.output) {
    context.options.output = {
      // this helps Rspack not crash during project graph creation
      publicPath: 'auto',
    };
  }

  return composePlugins(
    withNx(),
    withReact(),
    withModuleFederation(prodConfig, { dts: false })
  )(pluginOptions, context);
}
