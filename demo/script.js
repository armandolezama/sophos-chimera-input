
const basicInput = document.getElementById('basic-chimera-input');
const roundedInput = document.getElementById('rounded-chimera-input');
const simpleInput = document.getElementById('simple-chimera-input');
const fileDragAndDropInput = document.getElementById('file-drag-and-drop');

basicInput.styleOfInput = 'basic';
basicInput.label = 'Basic input demo';
basicInput.max = 10;
basicInput.maxLength = 10;
basicInput.min = 10;
basicInput.minlength = 10;
basicInput.placeholder = 'placeholder value';
roundedInput.styleOfInput = 'rounded-mobile-input';
roundedInput.label = 'Rounded input demo';
roundedInput.max = 10;
roundedInput.maxLength = 10;
roundedInput.min = 10;
roundedInput.minlength = 10;

simpleInput.styleOfInput = 'simple-bar-input';
simpleInput.label = 'Simple input demo';
simpleInput.max = 10;
simpleInput.maxLength = 10;
simpleInput.min = 10;
simpleInput.minlength = 10;

fileDragAndDropInput.styleOfInput = 'file-drag-drop-input';
fileDragAndDropInput.label = 'File drag drop demo';
fileDragAndDropInput.max = 10;
fileDragAndDropInput.maxLength = 10;
fileDragAndDropInput.min = 10;
fileDragAndDropInput.minlength = 10;
fileDragAndDropInput.placeholder = 'placeholder value';
fileDragAndDropInput.type = 'file';