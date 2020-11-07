import { App, Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from 'elwins-test-web-components/loader';

export const ElwinsTestWebComponentsVue: Plugin = {
  async install(_app: App) {
    if (typeof (window as any) !== 'undefined') {
      await applyPolyfills();
      await defineCustomElements(window);
    }
  }
};
