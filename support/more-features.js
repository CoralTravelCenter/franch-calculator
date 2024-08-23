console.log('Injecting calculator...');

const injectCalculatorBeforeEL = document.getElementById('Newbies');

const calcAppEl = document.createElement('div');
calcAppEl.setAttribute('id', 'app');

injectCalculatorBeforeEL.parentElement.insertBefore(calcAppEl, injectCalculatorBeforeEL);

const calcStylesEl = document.createElement('link');
calcStylesEl.rel = 'stylesheet';
// calcStylesEl.href = '//b2ccdn.coral.ru/content/lib/franch-coral-ru/calc/index-BcZcCWaM.css';
calcStylesEl.href = '//b2ccdn.coral.ru/content/lib/franch-coral-ru/calc/index-B6c-_6cg.css';
document.head.append(calcStylesEl);

const calcScriptEl = document.createElement('script');
// calcScriptEl.src = '//b2ccdn.coral.ru/content/lib/franch-coral-ru/calc/index-C1Rw-BOb.js';
calcScriptEl.src = '//b2ccdn.coral.ru/content/lib/franch-coral-ru/calc/index-TxA7Voq5.js';
document.body.append(calcScriptEl);

