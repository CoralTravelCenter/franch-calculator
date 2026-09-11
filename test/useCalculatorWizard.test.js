import {isReadonly} from 'vue';
import {expect, it} from 'vitest';

import {useCalculatorWizard} from '@/composables/useCalculatorWizard.js';

it('updates public state and restores it on reset', () => {
    const wizard = useCalculatorWizard();

    expect(isReadonly(wizard.params)).toBe(true);
    expect(isReadonly(wizard.currentStep)).toBe(true);
    expect(isReadonly(wizard.calculationResult)).toBe(true);

    wizard.updateParam('wanted_price_per_month', '100000');
    wizard.nextStep();
    wizard.reset();

    expect(wizard.params.value).toEqual({
        wanted_price_per_month: '',
        city: '',
        rent_type: '',
        rent_price: '',
        personal: '',
        tours_per_month: '',
    });
    expect(wizard.currentStep.value).toBe(1);
    expect(wizard.calculationResult.value).toBeNull();
    expect(wizard.showResult.value).toBe(false);
    expect(wizard.resultSucceeded.value).toBeNull();
});

it('does not advance while the current step is invalid', () => {
    const wizard = useCalculatorWizard();

    wizard.nextStep();
    wizard.nextStep();

    expect(wizard.currentStep.value).toBe(2);
});

it('calculates only on a valid final step', () => {
    const wizard = useCalculatorWizard();

    wizard.calculateResult();

    expect(wizard.calculationResult.value).toBeNull();
    expect(wizard.showResult.value).toBe(false);

    wizard.nextStep();
    wizard.updateParam('wanted_price_per_month', '100000');
    wizard.nextStep();
    wizard.updateParam('city', 'small');
    wizard.nextStep();
    wizard.updateParam('rent_type', 'BC');
    wizard.nextStep();
    wizard.updateParam('personal', '1');
    wizard.nextStep();
    wizard.updateParam('tours_per_month', '20');
    wizard.calculateResult();

    expect(wizard.showResult.value).toBe(true);
    expect(wizard.resultSucceeded.value).toBe(true);
});

it('treats a non-profitable calculation as failed', () => {
    const wizard = useCalculatorWizard();

    wizard.nextStep();
    wizard.updateParam('wanted_price_per_month', '100000');
    wizard.nextStep();
    wizard.updateParam('city', 'small');
    wizard.nextStep();
    wizard.updateParam('rent_type', 'BC');
    wizard.nextStep();
    wizard.updateParam('personal', '1');
    wizard.nextStep();
    wizard.updateParam('tours_per_month', '1');
    wizard.calculateResult();

    expect(wizard.showResult.value).toBe(true);
    expect(wizard.resultSucceeded.value).toBe(false);
});
