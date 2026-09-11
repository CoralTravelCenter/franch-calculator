<script setup>
import {computed, nextTick, provide, ref, watch} from 'vue';
import FirstStep from "./components/steps/FirstStep.vue";
import SecondStep from "./components/steps/SecondStep.vue";
import ThirdStep from "./components/steps/ThirdStep.vue";
import FourStep from "./components/steps/FourStep.vue";
import FiveStep from "./components/steps/FiveStep.vue";
import SixStep from "./components/steps/SixStep.vue";
import SuccessResult from "./components/SuccessResult.vue";
import FailedResult from "./components/FailedResult.vue";
import {calculatorContextKey} from './composables/calculatorContext.js';
import {useCalculatorWizard} from './composables/useCalculatorWizard.js';

const {integration} = defineProps({
	integration: {
		type: Object,
		required: true,
	},
});

const calculatorWizard = useCalculatorWizard(integration);
provide(calculatorContextKey, calculatorWizard);

const steps = [
	FirstStep,
	SecondStep,
	ThirdStep,
	FourStep,
	FiveStep,
	SixStep,
];

const activeStep = computed(() => steps[calculatorWizard.currentStep.value - 1]);

const resultComponent = computed(() => (
		calculatorWizard.resultSucceeded.value ? SuccessResult : FailedResult
));

const stepsStack = ref(null);

watch(calculatorWizard.currentStep, async () => {
	await nextTick();
	stepsStack.value
			?.querySelector('.steps-stack__item--active [autofocus]')
			?.focus({preventScroll: true});
});
</script>

<template>
	<section class="franch-calculator overflow-clip rounded-[20px]">
		<Component v-if="calculatorWizard.showResult.value" :is="resultComponent"/>
		<div v-else ref="stepsStack" class="steps-stack">
			<div class="steps-stack__item steps-stack__item--active">
				<Component :is="activeStep" :key="calculatorWizard.currentStep.value"/>
			</div>
		</div>
	</section>
</template>
