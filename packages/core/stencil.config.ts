import { Config } from "@stencil/core";
import { angularOutputTarget } from "@stencil/angular-output-target";
import { reactOutputTarget } from "@stencil/react-output-target";
import { vueOutputTarget } from "@stencil/vue-output-target";

export const config: Config = {
  namespace: "elwins-test-web-components",
  taskQueue: 'async',
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: "elwins-test-web-components",
      directivesProxyFile:
        "../angular/src/directives/proxies.ts",
    }),
    reactOutputTarget({
      componentCorePackage: "elwins-test-web-components",
      proxiesFile: "../react/src/components.ts",
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
    vueOutputTarget({
      componentCorePackage: "elwins-test-web-components",
      proxiesFile: "../vue/src/proxies.ts",
      includeDefineCustomElements: false,
      includePolyfills: false,
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "docs-readme",
    },
    {
      type: "www",
      serviceWorker: null, // disable service workers
    },
  ],
};
