const config = {
  name: 'app2',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;