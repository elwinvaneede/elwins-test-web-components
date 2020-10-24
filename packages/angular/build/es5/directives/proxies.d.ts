import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import { Components } from 'elwins-test-web-components';
export declare interface EveButton extends Components.EveButton {
}
export declare class EveButton {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
export declare interface EveIntroduction extends Components.EveIntroduction {
}
export declare class EveIntroduction {
    protected z: NgZone;
    protected el: HTMLElement;
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
}
