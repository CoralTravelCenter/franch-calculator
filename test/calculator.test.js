import {expect, it} from 'vitest';

import {calculator} from '@/calculator.js';

it('calculates the result with configured rent', () => {
    expect(calculator('small', 'BC', 1, 20, 100000, 0)).toEqual({
        months_until_roi: 2,
        wanted_profit: 100000,
        anticipated_profit: 245800,
        profitable_tours_count: 13,
    });
});

it('calculates the result with custom rent', () => {
    expect(calculator('small', '', 1, 20, 100000, 50000)).toEqual({
        months_until_roi: 2,
        wanted_profit: 100000,
        anticipated_profit: 236400,
        profitable_tours_count: 13,
    });
});
