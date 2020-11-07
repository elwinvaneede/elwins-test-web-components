/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'elwins-test-web-components';


export declare interface EveButton extends Components.EveButton {}
@ProxyCmp({
  inputs: ['fill', 'href', 'rel', 'target']
})
@Component({
  selector: 'eve-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['fill', 'href', 'rel', 'target']
})
export class EveButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EveIntroduction extends Components.EveIntroduction {}
@ProxyCmp({
  inputs: ['first', 'last', 'middle']
})
@Component({
  selector: 'eve-introduction',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['first', 'last', 'middle']
})
export class EveIntroduction {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface EveStringify extends Components.EveStringify {}
@ProxyCmp({
  inputs: ['data']
})
@Component({
  selector: 'eve-stringify',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['data']
})
export class EveStringify {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
