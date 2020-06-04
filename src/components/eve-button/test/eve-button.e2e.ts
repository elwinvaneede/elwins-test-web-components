import { newE2EPage } from '@stencil/core/testing';

describe('eve-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<eve-button></eve-button>');

    const element = await page.find('eve-button');
    expect(element).toHaveClass('hydrated');
  });
});
