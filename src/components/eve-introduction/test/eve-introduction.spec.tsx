import { newSpecPage } from "@stencil/core/testing";
import { EveIntroduction } from "../eve-introduction";

describe("eve-introduction", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [EveIntroduction],
      html: "<eve-introduction></eve-introduction>",
    });
    expect(page.root).toEqualHtml(`
      <eve-introduction>
        <mock:shadow-root>
          <div>
            My name is
          </div>
        </mock:shadow-root>
      </eve-introduction>
    `);
  });

  it("renders with values", async () => {
    const page = await newSpecPage({
      components: [EveIntroduction],
      html: `<eve-introduction first="Stencil" last="'Don't call me a framework' JS"></eve-introduction>`,
    });
    expect(page.root).toEqualHtml(`
      <eve-introduction first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
          My name is Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </eve-introduction>
    `);
  });
});
