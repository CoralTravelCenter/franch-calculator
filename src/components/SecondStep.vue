<script setup>
import Navigation from './Navigation.vue';
import {inject, onMounted} from "vue";

const params = inject('params');
const inputValue = inject('input_filled');
onMounted(() => {
	(params.value.wanted_price_per_month.length !== 0) ? inputValue.value = true : inputValue.value = false;
})
</script>

<template>
	<div class="franch-calc-container">
		<div class="franch-calc-container__part left">
			<div class="content">
				<h2>Давайте определим вашу финансовую цель</h2>
				<div class="input-container">
					<h3>Когда я буду зарабатывать в месяц</h3>
					<input class="custom-text"
								 v-model="params.wanted_price_per_month"
								 placeholder="Введите сумму"
								 @input="inputValue = true">
				</div>
			</div>
			<Navigation/>
		</div>
		<div class="franch-calc-container__part right">
		</div>
	</div>
</template>

<style scoped lang="scss">
.input-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 48px;

	h3 {
		margin: 0
	}
}

.franch-calc-container__part.right {
	background: url("https://b2ccdn.coral.ru/content/franch-calculator/hand.png"), #E1F3FC;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: contain;
}
</style>