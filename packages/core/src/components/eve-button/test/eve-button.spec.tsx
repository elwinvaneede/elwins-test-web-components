import { newSpecPage } from "@stencil/core/testing";
import { EveButton } from "../eve-button";

describe("eve-button", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [EveButton],
      html: `<eve-button></eve-button>`,
    });
    expect(page.root).toEqualHtml(`
      <eve-button class="button-solid">
        <mock:shadow-root>
          <a class="button-native">
            <span class="button-inner">
              <slot name="start"></slot>
              <slot></slot>
              <slot name="end"></slot>
            </span>
          </a>
        </mock:shadow-root>
      </eve-button>
    `);
  });

  it("renders with values", async () => {
    const page = await newSpecPage({
      components: [EveButton],
      html: `<eve-button href="http://elwinvaneede.com" target="_blank">Website</eve-button>`,
    });
    expect(page.root).toEqualHtml(`
      <eve-button class="button-solid" href="http://elwinvaneede.com" target="_blank">
        <mock:shadow-root>
          <a class="button-native" href="http://elwinvaneede.com" target="_blank">
            <span class="button-inner">
              <slot name="start"></slot>
              <slot></slot>
              <slot name="end"></slot>
            </span>
          </a>
        </mock:shadow-root>
        Website
      </eve-button>
    `);
  });
});
