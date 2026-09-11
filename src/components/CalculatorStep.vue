<script setup>
import Navigation from '@/components/Navigation.vue';
import {cn} from '@/lib/utils';

defineProps({
	asideClass: {
		type: String,
		default: '',
	},
});
</script>

<template>
	<div class="franch-calc-container">
		<div class="franch-calc-container__part left">
			<div class="content">
				<slot/>
			</div>
			<Navigation/>
		</div>
		<div :class="cn('franch-calc-container__part right bg-panel', asideClass)">
			<slot name="aside"/>
		</div>
	</div>
</template>
