import { composePlugins, withNx, withReact } from '@nx/rspack';
import { withModuleFederation } from '@nx/rspack/module-federation';
import baseConfig from './module-federation.config';

export default function (pluginOptions: any = {}, context: any = {}) {
  // ✅ Ensure context.project.root is defined
  context.project ??= {};
  context.project.root = context.project.root || __dirname.replace(/\\/g, '/').split('/packages/')[1].split('/')[0];

  context.options ??= {};
  context.options.output ??= { publicPath: 'auto' };

  return composePlugins(
    withNx(),
    withReact(),
    withModuleFederation({ ...baseConfig }, { dts: false })
  )(pluginOptions, context);
}
