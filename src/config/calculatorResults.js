export const RESULT_SCENARIO = Object.freeze({
    GOAL_EXCEEDED: 'goal-exceeded',
    GOAL_WITHIN_REACH: 'goal-within-reach',
    AMBITIOUS_GOAL: 'ambitious-goal',
    UNKNOWN: 'unknown',
});

export const ROI_PERIOD = Object.freeze({
    UP_TO_NINE_MONTHS: 'up-to-9-months',
    TEN_TO_EIGHTEEN_MONTHS: '10-to-18-months',
    OVER_EIGHTEEN_MONTHS: 'over-18-months',
    UNKNOWN: 'unknown',
});

export const CALCULATOR_RESULT_CONFIG = Object.freeze({
    maxReachableProfitDifference: 100_000,
    roiMonths: Object.freeze({
        excellent: 9,
        good: 18,
    }),
});

const resultScenarioRules = Object.freeze([
    {
        result: RESULT_SCENARIO.GOAL_EXCEEDED,
        matches: ({anticipatedProfit, wantedProfit}) => anticipatedProfit > wantedProfit,
    },
    {
        result: RESULT_SCENARIO.GOAL_WITHIN_REACH,
        matches: ({anticipatedProfit, wantedProfit}) => (
            wantedProfit - anticipatedProfit <= CALCULATOR_RESULT_CONFIG.maxReachableProfitDifference
        ),
    },
    {
        result: RESULT_SCENARIO.AMBITIOUS_GOAL,
        matches: ({anticipatedProfit, wantedProfit}) => (
            wantedProfit - anticipatedProfit > CALCULATOR_RESULT_CONFIG.maxReachableProfitDifference
        ),
    },
]);

const roiPeriodRules = Object.freeze([
    {
        result: ROI_PERIOD.UP_TO_NINE_MONTHS,
        matches: (months) => months <= CALCULATOR_RESULT_CONFIG.roiMonths.excellent,
    },
    {
        result: ROI_PERIOD.TEN_TO_EIGHTEEN_MONTHS,
        matches: (months) => months <= CALCULATOR_RESULT_CONFIG.roiMonths.good,
    },
    {
        result: ROI_PERIOD.OVER_EIGHTEEN_MONTHS,
        matches: (months) => months > CALCULATOR_RESULT_CONFIG.roiMonths.good,
    },
]);

function resolveByRules(rules, value, fallback) {
    return rules.find(({matches}) => matches(value))?.result ?? fallback;
}

export function resolveResultScenario(result) {
    return resolveByRules(resultScenarioRules, result, RESULT_SCENARIO.UNKNOWN);
}

export function resolveRoiPeriod(monthsUntilRoi) {
    return resolveByRules(roiPeriodRules, monthsUntilRoi, ROI_PERIOD.UNKNOWN);
}
