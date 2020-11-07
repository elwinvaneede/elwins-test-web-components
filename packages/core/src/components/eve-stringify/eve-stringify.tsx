import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'eve-stringify',
  styleUrl: 'eve-stringify.css',
  shadow: true,
})
export class EveStringify {
  @Prop({reflect: false}) data: string | Array<Object> | Object;

  render() {
    return <div>{JSON.stringify(this.data)}</div>;
  }

}
