import { LitElement, html } from 'lit-element';
import styles from './sophos-chimera-input-styles';

export class SophosChimeraInput extends LitElement {
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
    this.styleOfInput = '';
    this.value = '';
    this.isRequired = false;
    this.label = '';
    this.pattern = '';
    this._inputStatus = '';
  };

  /**
    * Declared properties and their corresponding attributes
    */
  static get properties() {
    return {
      styleOfInput : { type : String},
      value : { type : String},
      isRequired : { type : Boolean},
      label : { type : String},
      pattern : {type : String},
      _inputStatus : { type : String}
    };
  };

  static get styles() {
    return styles;
  };

  _getInputValue(e) {
    this.value = e.target.value;
    this.validateValue();
    this.dispatchEvent(new CustomEvent('sophos-input-changed', {detail : { value : this.value}}))
  }

  validateValue() {
    const validator = this.pattern !== '' ? new RegExp(this.pattern) : new RegExp('([^\s])');
    if(this.value !== '' && validator.test(this.value)){
      this._inputStatus = 'valid';
    } else {
      this._inputStatus = '';
    };
  };

  /*Input status property sets style rule for valid or invalid */
  render() {
    return html`
      <div id="main-container">
        <div 
        id="input-container"
        input-style="${this.styleOfInput}">
        ${this.styleOfInput === 'simple-bar-input' ? html`
          <input 
          id="input-tag"
          status="${this._inputStatus}"
          value="${this.value}"
          ?required="${this.isRequired}"
          @input="${this._getInputValue}">
          <span id="span-highlight"></span>
          <span id="span-bar"></span>
          <label 
          id="input-label"
          input-style="${this.styleOfInput}">${this.label}</label>
        ` : html``}
        ${this.styleOfInput === 'rounded-mobile-input' ? html`
          <input 
          id="input-tag"
          status=${this._inputStatus}
          ?required="${this.isRequired}"
          @input="${this._getInputValue}"
          value="${this.value}">
          <label 
          id="input-label"
          input-style="${this.styleOfInput}">${this.label}</label>
        ` : html``}
        ${this.styleOfInput === '' || this.styleOfInput === 'basic' ? html`
        <label 
          id="input-label"
          input-style="${this.styleOfInput}">${this.label}
          </label>
        <input 
          id="input-tag"
          status=${this._inputStatus}
          ?required="${this.isRequired}"
          @input="${this._getInputValue}"
          value="${this.value}">
        ` : html``}
        </div>
      </div>
    `;
  };
};
customElements.define('sophos-chimera-input', SophosChimeraInput);