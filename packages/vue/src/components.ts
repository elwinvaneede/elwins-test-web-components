/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import Vue, { PropOptions } from 'vue';
import { createCommonRender, createCommonMethod } from './vue-component-lib/utils';

import type { Components } from 'elwins-test-web-components';

import { applyPolyfills, defineCustomElements } from 'elwins-test-web-components/loader';

applyPolyfills().then(() => defineCustomElements());

const customElementTags: string[] = [
 'eve-button',
 'eve-introduction',
];
Vue.config.ignoredElements = [...Vue.config.ignoredElements, ...customElementTags];


export const EveButton = /*@__PURE__*/ Vue.extend({

  props: {
    fill: {} as PropOptions<Components.EveButton['fill']>,
    href: {} as PropOptions<Components.EveButton['href']>,
    target: {} as PropOptions<Components.EveButton['target']>,
    rel: {} as PropOptions<Components.EveButton['rel']>,
  },


  render: createCommonRender('eve-button', []),
});


export const EveIntroduction = /*@__PURE__*/ Vue.extend({

  props: {
    first: {} as PropOptions<Components.EveIntroduction['first']>,
    middle: {} as PropOptions<Components.EveIntroduction['middle']>,
    last: {} as PropOptions<Components.EveIntroduction['last']>,
  },


  render: createCommonRender('eve-introduction', []),
});

