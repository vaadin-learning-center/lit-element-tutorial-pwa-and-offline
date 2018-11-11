import { LitElement, html } from '@polymer/lit-element';

class NotFoundView extends LitElement {
  render() {
    return html`
      <h1>Not found!</h1>
    `;
  }
}

customElements.define('not-found-view', NotFoundView);
