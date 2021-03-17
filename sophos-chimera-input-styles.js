import { css } from 'lit-element';

export default css`
  #main-container{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 200px;
  }
  #input-label, #input-tag, #input-tag:required {
  -moz-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  -o-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  -webkit-transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  transition: all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5);
  }
  #input-container[input-style="rounded-mobile-input"] {
    position: relative;
    padding: 10px 0;
  }
  
  #input-container[input-style="rounded-mobile-input"] #input-label {
    transform-origin: left center;
    color: #ff4a56;
    font-weight: 100;
    letter-spacing: 0.01em;
    font-size: 17px;
    box-sizing: border-box;
    padding: 10px 15px;
    display: block;
    position: absolute;
    margin-top: -40px;
    z-index: 2;
    pointer-events: none;
  }
  #input-container[input-style="rounded-mobile-input"] #input-tag, 
  #input-container[input-style="rounded-mobile-input"] #input-tag:required {
    appearance: none;
    background-color: none;
    border: 1px solid #ff4a56;
    line-height: 0;
    font-size: 17px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 10px 15px;
    border-radius: 60px;
    color: #ff4a56;
    font-weight: 100;
    letter-spacing: 0.01em;
    position: relative;
    z-index: 1;
  }
  #input-container[input-style="rounded-mobile-input"] #input-tag:focus {
    outline: none;
    background: #ff4a56;
    color: white;
    margin-top: 30px;
  }
  #input-container[input-style="rounded-mobile-input"] #input-tag[status="valid"] {
    margin-top: 30px;
  }
  #input-container[input-style="rounded-mobile-input"] #input-tag:focus ~ label {
    -moz-transform: translate(0, -35px);
    -ms-transform: translate(0, -35px);
    -webkit-transform: translate(0, -35px);
    transform: translate(0, -35px);
  }
  #input-container[input-style="rounded-mobile-input"] #input-tag[status="valid"] ~ label {
    -moz-transform: translate(5px, -35px);
    -ms-transform: translate(5px, -35px);
    -webkit-transform: translate(5px, -35px);
    transform: translate(5px, -35px);
  }

/* Styles for simple bar input */
  #input-container[input-style="simple-bar-input"] { 
    position:relative; 
    margin-bottom:45px; 
  }

  #input-container[input-style="simple-bar-input"] #input-tag {
    font-size:18px;
    padding:10px 10px 10px 5px;
    display:block;
    width:300px;
    border:none;
    border-bottom:1px solid #757575;
  }
  #input-container[input-style="simple-bar-input"] #input-tag:focus { outline:none; }

  #input-container[input-style="simple-bar-input"] #input-label 				 {
    color:#999; 
    font-size:18px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
  }

  #input-container[input-style="simple-bar-input"] #input-tag:focus ~ #input-label, 
  #input-container[input-style="simple-bar-input"] #input-tag[status="valid"] ~ #input-label 		{
    top:-20px;
    font-size:14px;
    color:#5264AE;
  }

  #input-container[input-style="simple-bar-input"] #span-bar { 
    position:relative; 
    display:block; 
    width:300px;
  }

  #input-container[input-style="simple-bar-input"] #span-bar:before, #span-bar:after 	{
    content:'';
    height:2px; 
    width:0;
    bottom:1px; 
    position:absolute;
    background:#5264AE; 
    transition:0.2s ease all; 
    -moz-transition:0.2s ease all; 
    -webkit-transition:0.2s ease all;
  }
  #input-container[input-style="simple-bar-input"] #span-bar:before {
    left:50%;
  }
  #input-container[input-style="simple-bar-input"] #span-bar:after {
    right:50%; 
  }

  #input-container[input-style="simple-bar-input"] #input-tag:focus ~ #span-bar:before, #input-tag:focus ~ #span-bar:after {
    width:50%;
  }

  #input-container[input-style="simple-bar-input"] #span-highlight {
    position:absolute;
    height:60%; 
    width:100px; 
    top:25%; 
    left:0;
    pointer-events:none;
    opacity:0.5;
  }

  #input-container[input-style="simple-bar-input"] #input-tag:focus ~ #span-highlight {
    -webkit-animation:inputHighlighter 0.3s ease;
    -moz-animation:inputHighlighter 0.3s ease;
    animation:inputHighlighter 0.3s ease;
  }

  @-webkit-keyframes inputHighlighter {
    from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
  }
  @-moz-keyframes inputHighlighter {
    from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
  }
  @keyframes inputHighlighter {
    from { background:#5264AE; }
    to 	{ width:0; background:transparent; }
  }
`;