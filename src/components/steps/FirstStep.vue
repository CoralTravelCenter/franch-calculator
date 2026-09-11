<script setup>
import CalculatorStep from '../CalculatorStep.vue';
import {TypographyHeading, TypographyText} from '@/components/ui/typography/index.js';
</script>

<template>
	<CalculatorStep>
		<TypographyHeading>Рассчитайте окупаемость вашего бизнеса</TypographyHeading>
		<TypographyText variant="lead">Узнайте, как быстро ваш бизнес начнет приносить прибыль*</TypographyText>
		<TypographyText>
			Калькулятор окупаемости – это инструмент, который поможет вам лучше рассчитать приблизительную прибыль и
			окупаемость ваших вложений. Он не заменяет полноценную финансовую модель.
		</TypographyText>
		<template #aside>
			<TypographyText>
				* Предложенный инструмент опирается на средние показатели затрат на открытие и поддержание бизнеса. При
				расчете используются усредненные данные по следующим позициям:
			</TypographyText>
			<ul class="m-0 flex list-disc flex-col gap-2 pl-8">
				<TypographyText as="li">Стоимость открытия</TypographyText>
				<TypographyText as="li">Ежемесячная плата</TypographyText>
				<TypographyText as="li">Фонд оплаты труда</TypographyText>
				<TypographyText as="li">Брендирование и маркетинг</TypographyText>
				<TypographyText as="li">Рояли и налоги, а также показатели по среднему чеку и средней Агентской Комиссии на продукты ТО.</TypographyText>
			</ul>
		</template>
	</CalculatorStep>
</template>
