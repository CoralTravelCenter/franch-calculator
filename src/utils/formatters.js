export function parseDigits(value) {
    return value.replace(/\D/g, '');
}

export function formatDigits(value) {
    return parseDigits(value)
        .split('')
        .reverse()
        .join('')
        .replace(/\d{3}(?=.)/g, '$& ')
        .split('')
        .reverse()
        .join('');
}

function pluralForm(value, root, suffixes) {
    const number = Math.floor(Number(value));
    return root + (number >= 11 && number <= 14 ? suffixes[0] : suffixes[number % 10]);
}

export function formatMonths(value) {
    return pluralForm(value, 'месяц', ['ев', '', 'а', 'а', 'а', 'ев', 'ев', 'ев', 'ев', 'ев']);
}

export function formatTours(value) {
    return pluralForm(value, 'тур', ['ов', '', 'а', 'а', 'а', 'ов', 'ов', 'ов', 'ов', 'ов']);
}

export function formatPrice(value, prefix = '', suffix = '') {
    const formattedValue = String(Math.round(Number(value)))
        .split('')
        .reverse()
        .join('')
        .replace(/\d{3}(?=\d)/g, '$& ')
        .split('')
        .reverse()
        .join('');

    return `${prefix ? `${prefix} ` : ''}${formattedValue}${suffix ? ` ${suffix}` : ''}`;
}

export function formatCurrency(value, code = 'RUB') {
    return {
        RUB: formatPrice(value, '', '₽'),
        EUR: formatPrice(value, '€'),
        USD: formatPrice(value, '$'),
    }[code];
}
