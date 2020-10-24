import { NgModule } from "@angular/core";
import { defineCustomElements } from "elwins-test-web-components/loader";

import { EveButton } from "./directives/proxies";
import { EveIntroduction } from "./directives/proxies";

defineCustomElements(window);

const DECLARATIONS = [
  // proxies
  EveButton,
  EveIntroduction,
];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [],
  providers: [],
})
export class ElwinsTestWebComponentsModule {}
