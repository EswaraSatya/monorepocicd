import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/rspack/module-federation';
import baseConfig from './module-federation.config';

export default function (pluginOptions: any = {}, context: any = {}) {
  // Ensure context is always defined
  context ??= { project: { root: process.cwd() }, options: {} };
  context.project ??= { root: process.cwd() };
  context.options ??= {};
  context.options.output ??= { publicPath: 'auto' };

  return composePlugins(
    withNx(),
    withReact(),
    withModuleFederation({ ...baseConfig }, { dts: false })
  )(pluginOptions, context);
}
