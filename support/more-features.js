function injectCalculator() {
    const insertionPoint = document.getElementById('Newbies');

    if (!insertionPoint?.parentElement) {
        console.warn('Calculator was not injected: #Newbies container was not found.');
        return;
    }

    const calculatorRoot = document.createElement('div');
    calculatorRoot.id = 'app';
    insertionPoint.parentElement.insertBefore(calculatorRoot, insertionPoint);

    const calculatorStyles = document.createElement('link');
    calculatorStyles.rel = 'stylesheet';
    calculatorStyles.href = '//b2ccdn.coral.ru/content/lib/franch-coral-ru/calc/calculator.css';
    document.head.append(calculatorStyles);

    const calculatorScript = document.createElement('script');
    calculatorScript.src = '//b2ccdn.coral.ru/content/lib/franch-coral-ru/calc/calculator.js';
    document.body.append(calculatorScript);
}

injectCalculator();
