import { computed, readonly, ref } from 'vue';
import { calculator } from '@/calculator.js';

const LAST_STEP = 6;

/**
 * @typedef {Object} CalculatorParams
 * @property {string} wanted_price_per_month
 * @property {'' | 'capital' | 'millionnik' | 'small'} city
 * @property {'' | 'TC' | 'BC' | 'SR'} rent_type
 * @property {string} rent_price
 * @property {string} personal
 * @property {string} tours_per_month
 */

/** @returns {CalculatorParams} */
function createInitialParams() {
    return {
        wanted_price_per_month: '',
        city: '',
        rent_type: '',
        rent_price: '',
        personal: '',
        tours_per_month: '',
    };
}

export function useCalculatorWizard({
    jumpToApplicationForm = () => {},
    orderCallback = () => {},
} = {}) {
    const currentStep = ref(1);
    /** @type {import('vue').Ref<CalculatorParams>} */
    const params = ref(createInitialParams());
    /** @type {import('vue').Ref<import('@/calculator.js').CalculationResult | null>} */
    const calculationResult = ref(null);
    const showResult = ref(false);
    const resultSucceeded = ref(null);

    const isCurrentStepValid = computed(() => {
        switch (currentStep.value) {
            case 2:
                return Number(params.value.wanted_price_per_month) > 0;
            case 3:
                return params.value.city.length > 0;
            case 4:
                return Boolean(params.value.rent_type) || Number(params.value.rent_price) > 0;
            case 5:
                return params.value.personal.length > 0 && Number(params.value.personal) > 0;
            case 6:
                return params.value.tours_per_month.length > 0 && Number(params.value.tours_per_month) > 0;
            default:
                return true;
        }
    });

    function nextStep() {
        if (isCurrentStepValid.value && currentStep.value < LAST_STEP) {
            currentStep.value++;
        }
    }

    function previousStep() {
        if (currentStep.value > 1) {
            currentStep.value--;
        }
    }

    function calculateResult() {
        if (currentStep.value !== LAST_STEP || !isCurrentStepValid.value) {
            return;
        }

        calculationResult.value = calculator(
            params.value.city,
            params.value.rent_type,
            params.value.personal,
            params.value.tours_per_month,
            params.value.wanted_price_per_month,
            Number(params.value.rent_price),
        );
        resultSucceeded.value = Number.isFinite(calculationResult.value.months_until_roi)
            && calculationResult.value.months_until_roi > 0;
        showResult.value = true;
    }

    /**
     * @param {keyof CalculatorParams} name
     * @param {string} value
     */
    function updateParam(name, value) {
        params.value[name] = value;
    }

    function reset() {
        currentStep.value = 1;
        params.value = createInitialParams();
        calculationResult.value = null;
        showResult.value = false;
        resultSucceeded.value = null;
    }

    return {
        calculationResult: readonly(calculationResult),
        calculateResult,
        currentStep: readonly(currentStep),
        isCurrentStepValid,
        jumpToApplicationForm,
        nextStep,
        orderCallback,
        params: readonly(params),
        previousStep,
        reset,
        resultSucceeded: readonly(resultSucceeded),
        showResult: readonly(showResult),
        totalSteps: LAST_STEP,
        updateParam,
    };
}
