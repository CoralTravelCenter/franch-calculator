<script setup>
import {ref, provide} from 'vue';
import FirstStep from './components/FirstStep.vue';
import SecondStep from './components/SecondStep.vue';
import ThirdStep from './components/ThirdStep.vue';
import FourStep from './components/FourStep.vue';
import FiveStep from './components/FiveStep.vue';
import SixStep from './components/SixStep.vue';
import successResult from './components/successResult.vue';
import failedResult from './components/failedResult.vue';

const steps_counter = ref(1);
const params = ref({
	wanted_price_per_month: '',
	city: '',
	rent_type: '',
	rent_price: '',
	personal: '',
	tours_per_month: '',
});
const input_filled = ref(false);
const calculation_result = ref(null);
const show_result = ref(false);
const ok_or_not = ref(null);

provide('params', params);
provide('steps_counter', steps_counter);
provide('input_filled', input_filled);
provide('calculation_result', calculation_result);
provide('show_result', show_result);
provide('ok_or_not', ok_or_not);

const steps_arr = [
	FirstStep,
	SecondStep,
	ThirdStep,
	FourStep,
	FiveStep,
	SixStep,
];

function successOrNot() {
	if (calculation_result.value.month_of_trading > 0) {
		ok_or_not.value = true;
		return successResult;
	} else {
		ok_or_not.value = false;
		return failedResult;
	}
}
</script>

<template>
	<section class="franch-calculator">
		<Component v-if="show_result" :is="successOrNot()"/>
		<Component v-else :is="steps_arr[steps_counter - 1]"/>
	</section>
</template>
