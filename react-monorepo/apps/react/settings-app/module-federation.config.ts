import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'settings-app',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
