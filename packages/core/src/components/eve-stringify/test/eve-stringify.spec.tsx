import { newSpecPage } from '@stencil/core/testing';
import { EveStringify } from '../eve-stringify';

describe('eve-stringify', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EveStringify],
      html: `<eve-stringify></eve-stringify>`,
    });
    expect(page.root).toEqualHtml(`
      <eve-stringify>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </eve-stringify>
    `);
  });
});
