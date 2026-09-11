<script setup>
import {computed} from 'vue';
import Navigation from '@/components/Navigation.vue';
import {useCalculatorContext} from '@/composables/calculatorContext.js';
import {
	RESULT_SCENARIO,
	ROI_PERIOD,
	resolveResultScenario,
	resolveRoiPeriod,
} from '@/config/calculatorResults.js';
import {formatCurrency, formatMonths, formatTours} from '@/utils/formatters.js';
import {Button} from '@/components/ui/button';
import {TypographyHeading, TypographyText} from '@/components/ui/typography';

const {calculationResult, orderCallback, params} = useCalculatorContext();

const resultScenario = computed(() => {
	return resolveResultScenario({
		anticipatedProfit: calculationResult.value.anticipated_profit,
		wantedProfit: calculationResult.value.wanted_profit,
	});
});

const roiPeriod = computed(() => {
	return resolveRoiPeriod(calculationResult.value.months_until_roi);
});
</script>

<template>
	<div class="franch-calc-container">
		<div class="franch-calc-container__part left">
			<div class="content">
				<div class="result-headline">
					<img
							class="max-w-full shrink-0 object-contain"
							src="https://b2ccdn.coral.ru/content/franch-calculator/money_grow.png"
							alt=""/>
					<TypographyHeading>Результат</TypographyHeading>
				</div>
				<div class="text">
					<TypographyText v-if="resultScenario !== RESULT_SCENARIO.UNKNOWN" variant="lead" class="mb-6">
						Ваши вложения окупятся через {{ calculationResult.months_until_roi }}
						{{ formatMonths(calculationResult.months_until_roi) }}
					</TypographyText>
					<TypographyText v-if="resultScenario === RESULT_SCENARIO.GOAL_EXCEEDED">
						А на ежемесячный доход не менее
						<strong class="text-primary">{{ formatCurrency(calculationResult.wanted_profit) }}</strong>
						вы выйдете через
						<strong class="text-primary">{{ calculationResult.months_until_roi + 1 }}</strong>
						{{ formatMonths(calculationResult.months_until_roi + 1) }}
					</TypographyText>
					<TypographyText v-else-if="resultScenario === RESULT_SCENARIO.GOAL_WITHIN_REACH">
						К сожалению, при продаже <strong class="text-primary">{{ params.tours_per_month }}</strong>
						{{ formatTours(params.tours_per_month) }} в месяц Вы не сможете зарабатывать
						<strong class="text-primary">{{ formatCurrency(calculationResult.wanted_profit) }}</strong>.
						<br>
						Но выйти на ожидаемый уровень Вы сможете, продавая лишь на
						<strong class="text-primary">{{
								calculationResult.profitable_tours_count - params.tours_per_month
							}}</strong>
						{{ formatTours(calculationResult.profitable_tours_count - params.tours_per_month) }}
						больше.
					</TypographyText>
					<TypographyText v-else-if="resultScenario === RESULT_SCENARIO.AMBITIOUS_GOAL">
						Будьте внимательны, Ваша финансовая цель достаточно амбициозна для одного турагентства. Для того
						чтобы достичь таких показателей, мы рекомендуем увеличить штат сотрудников или обратить внимание
						на развитие Сети турагентств. В нашей компании есть успешные примеры по расширению Сети.
					</TypographyText>
					<TypographyText v-else>
						Не удалось определить сценарий расчёта. Попробуйте изменить исходные параметры.
					</TypographyText>
				</div>
			</div>
			<Navigation/>
		</div>

		<div class="franch-calc-container__part right bg-panel">
			<TypographyText v-if="resultScenario === RESULT_SCENARIO.GOAL_EXCEEDED">
				{{ calculationResult.months_until_roi }}
				{{ formatMonths(calculationResult.months_until_roi) }} – это
				превосходный результат!
				<br>В среднем наши франчайзи выходят на чистую
				прибыль уже спустя 8 месяцев после открытия офиса.
			</TypographyText>
			<TypographyText v-else-if="roiPeriod === ROI_PERIOD.UP_TO_NINE_MONTHS">
				{{ calculationResult.months_until_roi }}
				{{ formatMonths(calculationResult.months_until_roi) }} – это
				превосходный результат! В среднем наши франчайзи выходят на чистую
				прибыль уже спустя 8 месяцев после открытия офиса.
			</TypographyText>
			<TypographyText v-else-if="roiPeriod === ROI_PERIOD.TEN_TO_EIGHTEEN_MONTHS">
				{{ calculationResult.months_until_roi }} {{ formatMonths(calculationResult.months_until_roi) }}
				- это хороший результат, но его можно улучшить.
				<br>Вероятно, Вам следует оптимизировать
				расходы на аренду или сократить количество сотрудников в офисе
				- в среднем один менеджер продает 40 туров в месяц.
			</TypographyText>
			<TypographyText v-else-if="roiPeriod === ROI_PERIOD.OVER_EIGHTEEN_MONTHS">
				{{ calculationResult.months_until_roi }} {{ formatMonths(calculationResult.months_until_roi) }} окупаемости
				- это достаточно долгий период для турагентства. Рекомендуем Вам
				оптимизировать расходы на аренду, пересмотреть финансовые ожидания или увеличить план по продажам туров
				- в среднем один менеджер продает 40 туров в месяц.
			</TypographyText>
			<TypographyText v-else>
				Измените исходные параметры и выполните расчёт повторно.
			</TypographyText>
			<Button class="coral-btn-consultation" @click="orderCallback">
				<TypographyText as="span">Получить консультацию</TypographyText>
			</Button>
		</div>
	</div>
</template>

<style scoped lang="scss">
.coral-btn-consultation {
	margin-top: auto;
}

</style>
