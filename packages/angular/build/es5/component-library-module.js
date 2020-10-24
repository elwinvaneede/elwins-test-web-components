/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from "@angular/core";
import { defineCustomElements } from "elwins-test-web-components/loader";
import { EveButton } from "./directives/proxies";
import { EveIntroduction } from "./directives/proxies";
defineCustomElements(window);
/** @type {?} */
var DECLARATIONS = [
    // proxies
    EveButton,
    EveIntroduction,
];
var ElwinsTestWebComponentsModule = /** @class */ (function () {
    function ElwinsTestWebComponentsModule() {
    }
    ElwinsTestWebComponentsModule.decorators = [
        { type: NgModule, args: [{
                    declarations: DECLARATIONS,
                    exports: DECLARATIONS,
                    imports: [],
                    providers: [],
                },] },
    ];
    return ElwinsTestWebComponentsModule;
}());
export { ElwinsTestWebComponentsModule };
