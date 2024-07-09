<script setup>
import {inject} from "vue";
import Navigation from './Navigation.vue';
import {declination} from "../calculator.js";

const get_result = inject('calculation_result');
</script>

<template>
	<div class="franch-calc-container">
		<div class="franch-calc-container__part left">
			<div class="content">
				<div class="result-hedline">
					<img src="https://b2ccdn.coral.ru/content/franch-calculator/money_grow.png">
					<h2>Результат</h2>
				</div>
				<div class="text">
					<h3 style="margin: 0 0 24px 0">Ваши вложения окупятся через {{ get_result.month_of_trading }}
						{{ declination('месяц', get_result.month_of_trading) }}</h3>
					<p>А на ежемесячный доход не менее {{ get_result.wanted_price_per_month }} рублей
						вы выйдете через {{ get_result.month_of_trading + 1 }} {{
							declination('месяц', get_result.month_of_trading)
						}}</p>
				</div>
			</div>
			<Navigation/>
		</div>
		<div class="franch-calc-container__part right">
			<p>
				{{ get_result.month_of_trading }} {{ declination('месяц', get_result.month_of_trading) }} – это превосходный
				результат! В среднем наши франчайзи выходят на
				чистую прибыль уже спустя
				{{ get_result.month_of_trading }} {{ declination('месяц', get_result.month_of_trading) }}
				после открытия офиса.
			</p>
			<button class="coral-btn coral-btn-consultation">Получить консультацию</button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.coral-btn-consultation {
	margin-top: auto;
}
</style>