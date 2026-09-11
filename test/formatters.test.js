import {expect, it} from 'vitest';

import {
    formatCurrency,
    formatMonths,
    formatPrice,
    formatTours,
} from '@/utils/formatters.js';

it('uses the expected Russian word forms', () => {
    expect([1, 2, 5, 11, 21].map(formatMonths)).toEqual(['месяц', 'месяца', 'месяцев', 'месяцев', 'месяц']);
    expect([1, 2, 5, 14, 22].map(formatTours)).toEqual(['тур', 'тура', 'туров', 'туров', 'тура']);
});

it('formats monetary values for display', () => {
    expect(formatPrice(1234567.6, 'от', '₽')).toBe('от\u00a01\u00a0234\u00a0568\u00a0₽');
    expect(formatCurrency(1234567.4)).toBe('1\u00a0234\u00a0567\u00a0₽');
});
