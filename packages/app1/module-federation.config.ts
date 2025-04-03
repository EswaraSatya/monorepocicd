const config = {
  name: 'app1',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  remotes: [], // ✅ Important
};

export default config;