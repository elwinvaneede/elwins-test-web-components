import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Prop() name: string;

  render() {
    return (
      <div>
        My name is {this.name}
      </div>
    );
  }
}
