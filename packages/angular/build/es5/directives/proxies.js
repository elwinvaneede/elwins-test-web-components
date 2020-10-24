/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';
var EveButton = /** @class */ (function () {
    function EveButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    EveButton.decorators = [
        { type: Component, args: [{
                    selector: 'eve-button',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['fill', 'href', 'rel', 'target']
                },] },
    ];
    /** @nocollapse */
    EveButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    EveButton = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['fill', 'href', 'rel', 'target']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], EveButton);
    return EveButton;
}());
export { EveButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    EveButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    EveButton.prototype.z;
}
var EveIntroduction = /** @class */ (function () {
    function EveIntroduction(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    EveIntroduction.decorators = [
        { type: Component, args: [{
                    selector: 'eve-introduction',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: '<ng-content></ng-content>',
                    inputs: ['first', 'last', 'middle']
                },] },
    ];
    /** @nocollapse */
    EveIntroduction.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    EveIntroduction = tslib_1.__decorate([
        ProxyCmp({
            inputs: ['first', 'last', 'middle']
        }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], EveIntroduction);
    return EveIntroduction;
}());
export { EveIntroduction };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    EveIntroduction.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    EveIntroduction.prototype.z;
}
