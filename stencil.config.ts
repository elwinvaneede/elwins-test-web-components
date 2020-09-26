import { Config } from "@stencil/core";
import { angularOutputTarget } from "@stencil/angular-output-target";
import { reactOutputTarget } from "@stencil/react-output-target";
import { vueOutputTarget } from "@stencil/vue-output-target";

export const config: Config = {
  namespace: "elwins-test-web-components",
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: "elwins-test-web-components",
      directivesProxyFile:
        "../elwins-test-web-components-angular/src/directives/proxies.ts",
    }),
    reactOutputTarget({
      componentCorePackage: "elwins-test-web-components",
      proxiesFile: "../elwins-test-web-components-react/src/components.ts",
    }),
    vueOutputTarget({
      componentCorePackage: "elwins-test-web-components",
      proxiesFile: "../elwins-test-web-components-vue/src/components.ts",
      includeDefineCustomElements: true,
      includePolyfills: true, // Enable if needed
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
