import { css } from 'lit';

export default css`
  :host {
    --rounded-mobile-input-color: gray;
    --simple-bar-input-color: green;
    --simple-bar-input-bar-color: aqua;
  }

  #main-container {
    display: var(--sophos-chimera-input-main-container-display, flex);
    flex-direction: var(--sophos-chimera-input-main-container-flex-direction, column);
    justify-content: var(--sophos-chimera-input-main-container-justify-content, space-evenly);
    align-items: var(--sophos-chimera-input-main-container-align-items, center);
    height: var(--sophos-chimera-input-main-container-height, 200px);
  }

  #input-container[input-style="basic"] {
    display: var(--sophos-chimera-input-main-container-input-style-basic-display, flex);
    flex-direction: var(--sophos-chimera-input-main-container-input-style-basic-flex-direction, column);
  }

  #input-container[input-style="basic"] #input-tag{
    border-radius: var(--sophos-chimera-input-input-container-input-style-basic-border-radius, 15px);
    padding: var(--sophos-chimera-input-input-container-input-style-basic-padding, 8px);
    border: var(--sophos-chimera-input-input-container-input-style-basic-border, none);
    box-shadow: var(--sophos-chimera-input-input-container-input-style-basic-box-shadows, 2px 2px 2px 2px #8F9B16);
  }

  #input-container[input-style="basic"] #input-tag:focus{
    background-color: var(--sophos-chimera-input-input-container-input-style-basic-input-tag-focus-background-color, #ECF3A4);
    outline: var(--sophos-chimera-input-input-container-input-style-basic-input-tag-focus-outline, none);
    border-radius: var(--sophos-chimera-input-input-container-input-style-basic-input-tag-focus-border-radius, 15px);
    padding: var(--sophos-chimera-input-input-container-input-style-basic-input-tag-focus-padding, 8px);
    border: var(--sophos-chimera-input-input-container-input-style-basic-input-tag-focus-border, none);
    box-shadow: var(--sophos-chimera-input-input-container-input-style-basic-input-tag-focus-box-shadow, 2px 2px 2px 2px #8F9B16);
  }

  #input-container[input-style="basic"] #input-label{
    border-radius: var(--sophos-chimera-input-input-container-input-style-basic-input-label-border-radius, 15px);
    padding: var(--sophos-chimera-input-input-container-input-style-basic-input-label-padding, 8px);
  }

  #input-label[input-style="rounded-mobile-input"] {
  -moz-transition: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-moz-transition, all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5));
  -o-transition: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-o-transition, all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5));
  -webkit-transition: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-webkit-transition, all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5));
  transition: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-transition, all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5));
  transform-origin: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-transform-origin, left center);
  color: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-color, var(--rounded-mobile-input-color));
  letter-spacing: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-letter-spacing, 0.01em);
  font-size: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-font-size, 1rem);
  box-sizing: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-box-sizing, border-box);
  padding: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-padding, 10px 15px);
  position: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-position, absolute);
  margin-top: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-margin-top, -40px);
  pointer-events: var(--sophos-chimera-input-input-label-input-style-rounded-mobile-input-pointer-events, none);
  }
  
  #input-container[input-style="rounded-mobile-input"] #input-tag {
  -moz-transition: var(--sophos-chimera-input-input-tag-input-style-rounded-mobile-input-moz-transition, all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5));
  -o-transition: var(--sophos-chimera-input-input-tag-input-style-rounded-mobile-input-o-transition, all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5));
  -webkit-transition: var(--sophos-chimera-input-input-tag-input-style-rounded-mobile-input-webkit-transition, all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5));
  transition: var(--sophos-chimera-input-input-tag-input-style-rounded-mobile-input-transition, all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5));
  background-color: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-background-color, none);
  border-color: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-border-color, var(--rounded-mobile-input-color));
  border-style: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-border-style, solid);
  border-width: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-border-width, 1px);
  font-size: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-font-size, 1rem);
  width: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-width, 100%);
  display: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-display, block);
  box-sizing: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-box-sizing, border-box);
  padding: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-padding, 10px 15px);
  border-radius: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-border-radius, 60px);
  color: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-color, var(--rounded-mobile-input-color));
  letter-spacing: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-letter-spacing, 0.01em);
  position: var(--sophos-chimera-input-tag-input-style-rounded-mobile-input-position, relative);
  }
  
  #input-container[input-style="rounded-mobile-input"] #input-tag:focus {
    outline: var(--sophos-chimera-input-input-container-input-style-rounded-mobile-input-input-tag-focus-outline, none);
    background: var(--sophos-chimera-input-input-container-input-style-rounded-mobile-input-input-tag-focus-background, var(--rounded-mobile-input-color));
    color: var(--sophos-chimera-input-input-container-input-style-rounded-mobile-input-input-tag-focus-color, white);
  }
  
  #input-container[input-style="rounded-mobile-input"] #input-tag:focus ~ label {
    -moz-transform: var(--sophos-chimera-input-input-container-input-style-rounded-mobile-input-input-tag-focus-moz-transform, translate(0, -35px));
    -ms-transform: var(--sophos-chimera-input-input-container-input-style-rounded-mobile-input-input-tag-focus-ms-transform, translate(0, -35px));
    -webkit-transform: var(--sophos-chimera-input-input-container-input-style-rounded-mobile-input-input-tag-focus-webkit-transform, translate(0, -35px));
    transform: var(--sophos-chimera-input-input-container-input-style-rounded-mobile-input-input-tag-focus-transform, translate(0, -35px));
  }
  #input-container[input-style="rounded-mobile-input"] #input-tag[status="valid"] ~ label {
    -moz-transform: var(--sophos-chimera-input-input-container-input-style-rounded-mobile-input-input-tag-status-valid-label-moz-transform, translate(5px, -35px));
    -ms-transform: var(--sophos-chimera-input-input-container-input-style-rounded-mobile-input-input-tag-status-valid-label-ms-transform, translate(5px, -35px));
    -webkit-transform: var(--sophos-chimera-input-input-container-input-style-rounded-mobile-input-input-tag-status-valid-label-webkit-transform, translate(5px, -35px));
    transform: var(--sophos-chimera-input-input-container-input-style-rounded-mobile-input-input-tag-status-valid-label-transform, translate(5px, -35px));
  }
  
  #input-container[input-style="simple-bar-input"] { 
    position: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-position, relative);
    margin-bottom: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-margin-bottom, 45px);
  }

  #input-container[input-style="simple-bar-input"] #input-tag {
    font-size: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-font-size, 18px);
    padding: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-padding, 10px 10px 5px 5px);
    display: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-display, block);
    width: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-width, 300px);
    border: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-border, none);
    color: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-color, var(--simple-bar-input-color));
    border-bottom-width: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-border-bottom-width, 1px);
    border-bottom-style: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-border-bottom-style, solid);
    border-bottom-color: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-border-bottom-color, var(--simple-bar-input-color));
  }
  
  #input-container[input-style="simple-bar-input"] #input-tag:focus { outline: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-focus-outline, none);}

  #input-container[input-style="simple-bar-input"] #input-label {
    color: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-label-color, var(--simple-bar-input-color));
    font-size: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-label-font-size, 18px);
    position: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-label-position, absolute);
    pointer-events: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-label-pointer-events, none);
    left: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-label-left, 5px);
    top: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-label-top, 10px);
    transition: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-label-transition, 0.2s ease all);
    -moz-transition: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-label-moz-transition, 0.2s ease all);
    -webkit-transition: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-label-webkit-transition, 0.2s ease all);
  }

  #input-container[input-style="simple-bar-input"] #input-tag:focus ~ #input-label {
    top: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-focus-input-label-top,-20px);
    font-size: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-focus-input-label-font-size,14px);
    color: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-focus-input-label-color, var(--simple-bar-input-color));
  }

  #input-container[input-style="simple-bar-input"] #input-tag[status="valid"] ~ #input-label {
    top: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-status-valid-input-label ,-20px);
    font-size: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-status-valid-input-label ,14px);
    color: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-status-valid-input-label, var(--simple-bar-input-color));
  }

  #input-container[input-style="simple-bar-input"] #span-bar { 
    position: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-position, relative);
    display: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-display, block);
  }

  #input-container[input-style="simple-bar-input"] #span-bar:before{
    content: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-before-content, '');
    height: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-before-height, 2px); 
    width: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-before-width, 0);
    bottom: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-before-bottom, 1px); 
    position: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-before-position, absolute);
    background: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-before-background, var(--simple-bar-input-bar-color)); 
    left: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-before-left, 50%);
    transition: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-before-transition, 0.2s ease all);
    -moz-transition: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-before-moz-transition, 0.2s ease all); 
    -webkit-transition: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-before-webkit-transition, 0.2s ease all);
  }

  #input-container[input-style="simple-bar-input"] #span-bar:after {
    content: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-after-content, '');
    height: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-after-height, 2px); 
    width: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-after-width, 0);
    bottom: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-after-bottom, 1px); 
    position: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-after-position, absolute);
    background-color: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-after-background-color, var(--simple-bar-input-bar-color)); 
    right: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-after-right, 50%);
    transition: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-after-transition, 0.2s ease all);
    -moz-transition: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-after-moz-transition, 0.2s ease all); 
    -webkit-transition: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-span-bar-after-webkit-transition, 0.2s ease all);
  }

  #input-container[input-style="simple-bar-input"] #input-tag:focus ~ #span-bar:before{
    width: var(--sophos-chimera-input-input-container-input-style-simple-bar-input--input-tag-focus-span-bar-before-wdith, 50%);
  }


  #input-container[input-style="simple-bar-input"] #input-tag:focus ~ #span-bar:after {
    width: var(--sophos-chimera-input-input-container-input-style-simple-bar-input--input-tag-focus-span-bar-after-wdith, 50%);
  }

  #input-container[input-style="simple-bar-input"] #span-highlight {
    position: var(--sophos-chimera-input-input-container-input-syle-simple-bar-input-span-highlight-position, absolute);
    height: var(--sophos-chimera-input-input-container-input-syle-simple-bar-input-span-highlight-height, 60%);
    width: var(--sophos-chimera-input-input-container-input-syle-simple-bar-input-span-highlight-width, 100px);
    top: var(--sophos-chimera-input-input-container-input-syle-simple-bar-input-span-highlight-top, 25%); 
    left: var(--sophos-chimera-input-input-container-input-syle-simple-bar-input-span-highlight-left, 0);
    pointer-events: var(--sophos-chimera-input-input-container-input-syle-simple-bar-input-span-highlight-pointer-events, none);
    opacity: var(--sophos-chimera-input-input-container-input-syle-simple-bar-input-span-highlight-opacity, 0.5);
  }

  #input-container[input-style="simple-bar-input"] #input-tag:focus ~ #span-highlight {
    -webkit-animation: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-focus-span-highlight-webkit-animation, inputHighlighter 0.3s ease);
    -moz-animation: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-focus-span-highlight-moz-animation, inputHighlighter 0.3s ease);
    animation: var(--sophos-chimera-input-input-container-input-style-simple-bar-input-input-tag-focus-span-highlight-animation, inputHighlighter 0.3s ease);
  }

  @-webkit-keyframes inputHighlighter {
    from { background: var(--simple-bar-input-color); }
    to 	{ width:0; background:transparent; }
  }
  @-moz-keyframes inputHighlighter {
    from { background: var(--simple-bar-input-color); }
    to 	{ width:0; background:transparent; }
  }
  @keyframes inputHighlighter {
    from { background: var(--simple-bar-input-color); }
    to 	{ width:0; background:transparent; }
  }

  #input-container[input-style="file-drag-drop-input"] #drop-zone {
  max-width: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, 200px);
  height: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, 200px);
  padding: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, 25px);
  display: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, flex);
  align-items: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, center);
  justify-content: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, center);
  text-align: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, center);
  font-size: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, 20px);
  cursor: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, pointer);
  color: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, #cccccc);
  border: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, 4px dashed #009578);
  border-radius: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-drop-zone-, 10px);
}

#input-container[input-style="file-drag-drop-input"] #input-tag {
  display: var(--sophos-chimera-input-input-container-input-style-file-drag-drop-input-input-tag-display, none);
}

#input-empty-message {
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0;
}
`;