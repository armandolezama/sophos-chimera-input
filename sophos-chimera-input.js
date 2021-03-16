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
    this.isRequired = true;
    this.label = 'Put your name here';
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
      styleOfInput : { type : String},
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
      <div id="input-container">
        <input 
        id="input-tag"
        status=${this._inputStatus}
        ?required="${this.isRequired}"
        @input="${this._getInputValue}"
        value="${this.value}">
        <label id="input-label">${this.label}</label>
      </div>
    </div>
    `;
  };
};
customElements.define('sophos-chimera-input', SophosChimeraInput);