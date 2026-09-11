<script setup>
import Navigation from '@/components/Navigation.vue';
import {useCalculatorContext} from '@/composables/calculatorContext.js';
import {Button} from '@/components/ui/button';
import {TypographyHeading, TypographyText} from '@/components/ui/typography';

const {orderCallback} = useCalculatorContext();
</script>

<template>
	<div class="franch-calc-container">
		<div class="franch-calc-container__part left">
			<div class="content">
				<div class="result-headline">
					<img
							class="max-w-full shrink-0 object-contain"
							src="https://b2ccdn.coral.ru/content/franch-calculator/money_loose.png"
							alt=""/>
					<TypographyHeading>Результат</TypographyHeading>
				</div>
				<TypographyText>
					К сожалению, при указанных параметрах вы не можете окупить
					турагентство. Рекомендуем вам пересмотреть количество продаваемых
					туров или оптимизировать расходы. Сократив арендную плату или затраты
					на оплату труда, у вас есть шанс быстро компенсировать инвестиции
					и достичь желаемого уровня дохода.
				</TypographyText>
			</div>
			<Navigation/>
		</div>
		<div class="franch-calc-container__part right bg-panel">
			<TypographyText>
				Рекомендуем вам оптимизировать расходы на аренду, пересмотреть
				финансовые ожидания или увеличить план по продажам туров - в среднем
				один менеджер продает 40 туров в месяц.
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
