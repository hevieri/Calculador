  
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let current = '';
    let resetNext = false;

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
          current = '';
          display.textContent = '0';
          return;
        }

        if (value === '%') {
          try {
            current = (eval(current) / 100).toString();
            display.textContent = current;
            resetNext = true;
          } catch {
            display.textContent = 'Error';
            current = '';
          }
          return;
        }

        if (value === '=') {
          try {
            current = eval(current).toString();
            display.textContent = current;
            resetNext = true;
          } catch {
            display.textContent = 'Error';
            current = '';
          }
          return;
        }

        if (resetNext) {
          current = '';
          resetNext = false;
        }

        current += value;
        display.textContent = current;
      });
    });
 