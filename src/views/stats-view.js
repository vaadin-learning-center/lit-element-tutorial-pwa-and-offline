import { LitElement, html } from '@polymer/lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../redux/store.js';
import { statsSelector } from '../redux/reducer.js';
import '@vaadin/vaadin-charts';

class StatsView extends connect(store)(LitElement) {
  static get properties() {
    return {
      chartConfig: { type: Object }
    };
  }

  stateChanged(state) {
    const stats = statsSelector(state);
    this.chartConfig = [
      { name: 'Completed', y: stats.completed },
      { name: 'Active', y: stats.active }
    ];

    this.hasTodos = state.todos.length > 0;
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }
        #chart {
          margin: 50px auto;
        }
      </style>

      ${this.getChart()}
    `;
  }

  getChart() {
    if (this.hasTodos) {
      return html`
        <vaadin-chart type="pie">
          <vaadin-chart-series .values="${this.chartConfig}">
          </vaadin-chart-series>
        </vaadin-chart>
      `;
    } else {
      return html`
        <p>Nothing to do! 🌴</p>
      `;
    }
  }
}

customElements.define('stats-view', StatsView);
