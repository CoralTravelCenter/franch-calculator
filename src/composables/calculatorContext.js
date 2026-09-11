import { inject } from 'vue';

export const calculatorContextKey = Symbol('calculator-context');

export function useCalculatorContext() {
    const context = inject(calculatorContextKey);

    if (!context) {
        throw new Error('Calculator context is not provided');
    }

    return context;
}
