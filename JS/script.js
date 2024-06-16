document.addEventListener('DOMContentLoaded', function() {
    const calculator = document.getElementById('calculator');

    // Create calculator screen
    const screen = document.createElement('div');
    screen.classList.add('screen');
    screen.setAttribute('contenteditable', 'true');
    calculator.appendChild(screen);

    // Create buttons container
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');
    calculator.appendChild(buttonsContainer);

    // Button labels
    const buttonLabels = [
        '7', '8', '9', '+',
        '4', '5', '6', '-',
        '1', '2', '3', '*',
        '0', 'C', '=', '/'
    ];

    // Create buttons
    buttonLabels.forEach(label => {
        const button = document.createElement('button');
        button.innerText = label;
        buttonsContainer.appendChild(button);
    });

    // Handle button clicks
    buttonsContainer.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            const value = event.target.innerText;
            if (value === 'C') {
                screen.innerText = '';
            } else if (value === '=') {
                try {
                    screen.innerText = eval(screen.innerText);
                } catch {
                    screen.innerText = 'Error';
                }
            } else {
                screen.innerText += value;
            }
        }
    });

    // Handle keyboard events
    document.addEventListener('keydown', function(event) {
        if (!isFinite(event.key) && ['+', '-', '*', '/', 'Enter', 'Backspace'].indexOf(event.key) === -1) {
            alert('Only numbers are allowed');
            event.preventDefault();
        } else {
            if (event.key === 'Enter') {
                try {
                    screen.innerText = eval(screen.innerText);
                } catch {
                    screen.innerText = 'Error';
                }
            } else if (event.key === 'Backspace') {
                screen.innerText = screen.innerText.slice(0, -1);
            } else {
                screen.innerText += event.key;
            }
        }
    });
});
