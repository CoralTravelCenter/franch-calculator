<script setup>
import CalculatorStep from '../CalculatorStep.vue';
import {useCalculatorContext} from '@/composables/calculatorContext.js';
import {formatDigits, parseDigits} from '@/utils/formatters.js';
import {InputGroup, InputGroupAddon, InputGroupInput} from '@/components/ui/input-group/index.js';
import {TypographyHeading, TypographyText} from '@/components/ui/typography/index.js';

const {isCurrentStepValid, nextStep, params, updateParam} = useCalculatorContext();

function commit() {
	if (isCurrentStepValid.value) {
		nextStep();
	}
}

</script>

<template>
	<CalculatorStep>
		<TypographyHeading>Сколько туров в месяц планируете продавать?</TypographyHeading>
		<div class="input-container">

			<InputGroup class="w-40">
				<InputGroupInput :model-value="params.tours_per_month"
												 @update:model-value="updateParam('tours_per_month', $event)"
												 :parser="parseDigits" :formatter="formatDigits" @keyup.enter="commit" autofocus/>
				<InputGroupAddon align="inline-end" class="h-full p-0">
					<TypographyText as="span"
																class="flex h-full items-center rounded-r-[11px] border-l border-border bg-muted px-3 text-foreground">
                                шт.
													</TypographyText>
				</InputGroupAddon>
			</InputGroup>

		</div>
		<template #aside>
			<ul class="flex list-none flex-col gap-2">
				<TypographyText as="li">
						<strong>Турагент-новичок</strong>, работающий под брендом Coral
						Travel, в среднем продает 11 туров в месяц.
				</TypographyText>
				<TypographyText as="li">
						<strong>Турагент с опытом от 2х лет</strong>, работающий под
						брендом Coral Travel, в среднем продает 20 туров в месяц.
				</TypographyText>
			</ul>
			<div
					class="live-hack">
				<TypographyText><strong>Лайфхак:</strong> Не бойтесь продавать туры с высоким
					чеком. Так вы быстрее заработаете и окупите свои вложения.
				</TypographyText>
			</div>
		</template>
	</CalculatorStep>
</template>

<style scoped lang="scss">
.live-hack {
	padding: 24px;
	position: relative;
	margin-top: auto;
	font-size: 16px;
	border-radius: 8px;
	background-color: var(--background);
	line-height: 1.5;

	&:after {
		content: "";
		background-image: url("https://b2ccdn.coral.ru/content/franch-calculator/icon.png");
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		position: absolute;
		top: -55px;
		left: -40px;
		width: 90px;
		height: 90px;
	}
}
</style>
