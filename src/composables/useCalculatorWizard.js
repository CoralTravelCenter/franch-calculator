import { computed, ref } from 'vue';
import { calculator } from '../calculator.js';

const LAST_STEP = 6;

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

export function useCalculatorWizard() {
    const currentStep = ref(1);
    const params = ref(createInitialParams());
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
        if (currentStep.value < LAST_STEP) {
            currentStep.value++;
        }
    }

    function previousStep() {
        if (currentStep.value > 1) {
            currentStep.value--;
        }
    }

    function calculateResult() {
        calculationResult.value = calculator(
            params.value.city,
            params.value.rent_type,
            params.value.personal,
            params.value.tours_per_month,
            params.value.wanted_price_per_month,
            Number(params.value.rent_price),
        );
        resultSucceeded.value = calculationResult.value.months_until_roi > 0;
        showResult.value = true;
    }

    function reset() {
        currentStep.value = 1;
        params.value = createInitialParams();
        calculationResult.value = null;
        showResult.value = false;
        resultSucceeded.value = null;
    }

    function orderCallback() {
        document.querySelector('[aria-label="Обратный звонок"]')?.click();
    }

    function jumpToApplicationForm() {
        location.hash = '#Connection';
    }

    return {
        calculationResult,
        calculateResult,
        currentStep,
        isCurrentStepValid,
        jumpToApplicationForm,
        nextStep,
        orderCallback,
        params,
        previousStep,
        reset,
        resultSucceeded,
        showResult,
        totalSteps: LAST_STEP,
    };
}
