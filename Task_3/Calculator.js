***************  TO GET ONLY THE OUTPUT FOR THE GIVEN INPUT  **************

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');

let inputString = "";


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                inputString = eval(inputString);
                input.value = inputString;
            } catch (error) {
                input.value = 'Error';
            }
        } 
        
        else if (buttonValue === 'AC') {
            inputString = "";
            input.value = inputString;
        } 
        
        else if (buttonValue === 'DEL') {
            inputString = inputString.slice(0, -1);
            input.value = inputString;
        } 
        
        else {
            inputString += buttonValue;
            input.value = inputString;
        }
    });
});



***************  TO GET ONLY THE OUTPUT ALONG WITH THE GIVEN INPUT  **************



let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');

let inputString = "";


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.innerHTML;

        if (buttonValue === '=') {
            try {
                const result = eval(inputString);
                inputString += " = " + result;
                input.value = inputString;
            } catch (error) {
                input.value = 'Error';
            }
        } else if (buttonValue === 'AC') {
            inputString = "";
            input.value = inputString;
        } else if (buttonValue === 'DEL') {
            inputString = inputString.slice(0, -1);
            input.value = inputString;
        } else {
            inputString += buttonValue;
            input.value = inputString;
        }
    });
});
