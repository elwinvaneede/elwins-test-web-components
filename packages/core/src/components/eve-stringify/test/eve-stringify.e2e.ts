import { newE2EPage } from '@stencil/core/testing';

describe('eve-stringify', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<eve-stringify></eve-stringify>');

    const element = await page.find('eve-stringify');
    expect(element).toHaveClass('hydrated');
  });
});
