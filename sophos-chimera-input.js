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
    this.max = 0;
    this.maxLength = 0;
    this.min = 0;
    this.minLength = 0;
    this.placeholder = '';
    this.type = '';
    this.value = '';
    this.isRequired = false;
    this.isDisabled = false;
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
      max : {type : Number},
      maxLength : {type : Number},
      min : {type : Number},
      minLength : {type : Number},
      placeholder : {type : String},
      type : {type : String},
      value : { type : String},
      isRequired : { type : Boolean},
      isdisabled : { type : Boolean},
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
  };

  _inputHasChanged(e){
    this.dispatchEvent(new CustomEvent('sophos-input-changed', {detail : {
      innerInput : e.target
    }}));
  };

  _dispatchFocusEvent() {
    this.dispatchEvent(new CustomEvent('sophos-input-focus'));
  };

  _dispatchBlurEvent() {
    this.dispatchEvent(new CustomEvent('sophos-input-blur'));
  };

  _dropZoneClicked() {
    const inputTag = this.shadowRoot.querySelector('#input-tag');
    inputTag.click();
  };

  validateValue() {
    const validator = this.pattern !== '' ? new RegExp(this.pattern) : new RegExp('([^\s])');
    if(this.value !== '' && validator.test(this.value)){
      this._inputStatus = 'valid';
      this.dispatchEvent('valid-value');
    } else {
      this._inputStatus = '';
      this.dispatchEvent('invalid-value');
    };
  };

  createInputTag(){
    return html`
    <input 
          id="input-tag"
          status="${this._inputStatus}"
          max="${this.max}"
          maxlength="${this.maxLength}"
          min="${this.min}"
          minlength="${this.minLength}"
          placeholder="${this.placeholder}"
          value="${this.value}"
          .type="${this.type}"
          ?disabled="${this.isDisabled}"
          ?required="${this.isRequired}"
          @input="${this._getInputValue}"
          @change="${this._inputHasChanged}"
          @focus="${this._dispatchFocusEvent}"
          @blur="${this._dispatchBlurEvent}">
          `;
  }

  /*Input status property sets style rule for valid or invalid */
  render() {
    return html`
      <div id="main-container">
        <div 
        id="input-container"
        input-style="${this.styleOfInput}">
        ${this.styleOfInput === 'simple-bar-input' ? html`
          ${this.createInputTag()}
          <span id="span-highlight"></span>
          <span id="span-bar"></span>
          <label 
          id="input-label"
          input-style="${this.styleOfInput}">${this.label}</label>
        ` : html``}
        ${this.styleOfInput === 'rounded-mobile-input' ? html`
          ${this.createInputTag()}
          <label 
          id="input-label"
          input-style="${this.styleOfInput}">${this.label}</label>
        ` : html``}
        ${this.styleOfInput === '' || this.styleOfInput === 'basic' ? html`
        <label 
          id="input-label"
          input-style="basic">${this.label}
          </label>
          ${this.createInputTag()}
        ` : html``}
        ${this.styleOfInput === 'file-drag-drop-input' ? html`
        <div 
        id="drop-zone"
        @click="${this._dropZoneClicked}">
          <span id="drop-zone-label">${this.label}</span>
          ${this.createInputTag()}
        </div>
        ` : html``}
        </div>
      </div>
    `;
  };
};
customElements.define('sophos-chimera-input', SophosChimeraInput);