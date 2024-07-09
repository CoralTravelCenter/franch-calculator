<script setup>
import {inject} from "vue";
import Navigation from './Navigation.vue';

const get_result = inject('calculation_result');
</script>

<template>
	<div class="franch-calc-container">
		<div class="franch-calc-container__part left">
			<div class="content">
				<div class="result-hedline">
					<img src="https://b2ccdn.coral.ru/content/franch-calculator/money_loose.png">
					<h2>Результат</h2>
				</div>
				<p>К сожалению, при указанных параметрах вы не можете окупить турагентство. Рекомендуем вам пересмотреть
					количество продаваемых туров или оптимизировать расходы. Сократив арендную плату или затраты на оплату труда,
					у вас есть шанс быстро компенсировать инвестиции и достичь желаемого уровня дохода.</p>
			</div>
			<Navigation/>
		</div>
		<div class="franch-calc-container__part right">
			<p>
				Рекомендуем вам оптимизировать расходы
				на аренду, пересмотреть финансовые ожидания или увеличить план по продажам туров – в среднем один менеджер
				продает 40 туров в месяц.
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