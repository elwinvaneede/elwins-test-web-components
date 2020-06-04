import { newE2EPage } from "@stencil/core/testing";

describe("eve-introduction", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<eve-introduction></eve-introduction>");
    const element = await page.find("eve-introduction");
    expect(element).toHaveClass("hydrated");
  });

  it("renders changes to the name data", async () => {
    const page = await newE2EPage();

    await page.setContent("<eve-introduction></eve-introduction>");
    const component = await page.find("eve-introduction");
    const element = await page.find("eve-introduction >>> div");
    expect(element.textContent).toEqual(`My name is `);

    component.setProperty("first", "James");
    await page.waitForChanges();
    expect(element.textContent).toEqual(`My name is James`);

    component.setProperty("last", "Quincy");
    await page.waitForChanges();
    expect(element.textContent).toEqual(`My name is James Quincy`);

    component.setProperty("middle", "Earl");
    await page.waitForChanges();
    expect(element.textContent).toEqual(`My name is James Earl Quincy`);
  });
});
