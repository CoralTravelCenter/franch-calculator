import {expect, it} from 'vitest';

import {
    RESULT_SCENARIO,
    ROI_PERIOD,
    resolveResultScenario,
    resolveRoiPeriod,
} from '@/config/calculatorResults.js';

it('resolves profit scenarios at business boundaries', () => {
    expect(resolveResultScenario({anticipatedProfit: 200_000, wantedProfit: 100_000})).toBe(RESULT_SCENARIO.GOAL_EXCEEDED);
    expect(resolveResultScenario({anticipatedProfit: 0, wantedProfit: 100_000})).toBe(RESULT_SCENARIO.GOAL_WITHIN_REACH);
    expect(resolveResultScenario({anticipatedProfit: 0, wantedProfit: 100_001})).toBe(RESULT_SCENARIO.AMBITIOUS_GOAL);
});

it('resolves ROI periods at business boundaries', () => {
    expect(resolveRoiPeriod(9)).toBe(ROI_PERIOD.UP_TO_NINE_MONTHS);
    expect(resolveRoiPeriod(10)).toBe(ROI_PERIOD.TEN_TO_EIGHTEEN_MONTHS);
    expect(resolveRoiPeriod(18)).toBe(ROI_PERIOD.TEN_TO_EIGHTEEN_MONTHS);
    expect(resolveRoiPeriod(19)).toBe(ROI_PERIOD.OVER_EIGHTEEN_MONTHS);
});
