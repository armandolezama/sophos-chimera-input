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

  #input-container {
    position: relative;
    padding: 10px 0;
  }
  
  #input-label {
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
  #input-tag, #input-tag:required {
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
  #input-tag:focus {
    outline: none;
    background: #ff4a56;
    color: white;
    margin-top: 30px;
  }
  #input-tag[status="valid"] {
    margin-top: 30px;
  }
  #input-tag:focus ~ label {
    -moz-transform: translate(0, -35px);
    -ms-transform: translate(0, -35px);
    -webkit-transform: translate(0, -35px);
    transform: translate(0, -35px);
  }
  #input-tag[status="valid"] ~ label {
    -moz-transform: translate(5px, -35px);
    -ms-transform: translate(5px, -35px);
    -webkit-transform: translate(5px, -35px);
    transform: translate(5px, -35px);
  }
`;