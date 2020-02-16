import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'elwins-test-web-components',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: 'elwins-test-web-components',
      proxiesFile: '../elwins-test-web-components-react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
