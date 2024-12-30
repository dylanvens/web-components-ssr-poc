import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './button.styles';
import { ifDefined } from 'lit/directives/if-defined.js';

@customElement('dbk-button')
export class DBKButton extends LitElement {
  static override styles = styles

  @property({ reflect: true }) variant?: 'primary' | 'secondary' | 'buy' = 'primary';
  
  @property({ reflect: true, type: Boolean }) disabled?: boolean = false;
  
  @property({ reflect: true, type: Boolean }) rounded?: boolean = false;
  
  @property({ reflect: true, type: Boolean }) fullWidth?: boolean = false;
  
  @property({ reflect: true, type: Boolean }) loading?: boolean = false;
  
  @property({ reflect: true, type: Boolean }) inversed?: boolean = false;

  override render() {
    return html`
        <button class="button" ?disabled=${this.disabled}>
            <slot class="label"></slot>
        </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dbk-button': DBKButton;
  }
}