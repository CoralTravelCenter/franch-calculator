<script setup>
import { computed, provide } from 'vue';
import FirstStep from "./components/FirstStep.vue";
import SecondStep from "./components/SecondStep.vue";
import ThirdStep from "./components/ThirdStep.vue";
import FourStep from "./components/FourStep.vue";
import FiveStep from "./components/FiveStep.vue";
import SixStep from "./components/SixStep.vue";
import SuccessResult from "./components/successResult.vue";
import FailedResult from "./components/failedResult.vue";
import { calculatorContextKey } from './composables/calculatorContext.js';
import { useCalculatorWizard } from './composables/useCalculatorWizard.js';

const calculatorWizard = useCalculatorWizard();
provide(calculatorContextKey, calculatorWizard);

const steps = [
    FirstStep,
    SecondStep,
    ThirdStep,
    FourStep,
    FiveStep,
    SixStep,
];

const resultComponent = computed(() => (
    calculatorWizard.resultSucceeded.value ? SuccessResult : FailedResult
));
</script>

<template>
    <section class="franch-calculator">
        <Component v-if="calculatorWizard.showResult.value" :is="resultComponent" />
        <Component v-else :is="steps[calculatorWizard.currentStep.value - 1]" />
    </section>
</template>

<style lang="less">
.franch-calculator {
    margin: 4em auto 0;
    filter: drop-shadow(0px 0px 2px rgba(0,0,0,.5));
}
.el-input.money {
    width: 12em;
    --el-font-size-base: 16px;
    --el-input-height: 2.4em;
}
.el-input.people {
    width: 10em;
    --el-font-size-base: 16px;
    --el-input-height: 2.4em;
}
</style>
