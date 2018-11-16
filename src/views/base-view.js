import { LitElement } from '@polymer/lit-element';
export class BaseView extends LitElement {
  createRenderRoot() {
    return this;
  }
}
