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
		<TypographyHeading>Сколько сотрудников вы планируете нанять дополнительно?</TypographyHeading>
		<div class="input-container">
			<InputGroup class="w-40">
				<InputGroupInput :model-value="params.personal"
												 @update:model-value="updateParam('personal', $event)"
												 :parser="parseDigits" :formatter="formatDigits" autofocus @keyup.enter="commit"/>
				<InputGroupAddon align="inline-end" class="h-full p-0">
					<TypographyText as="span"
																class="flex h-full items-center rounded-r-[11px] border-l border-border bg-muted px-3 text-foreground">
                                чел.
													</TypographyText>
				</InputGroupAddon>
			</InputGroup>
		</div>
		<template #aside>
			<ul class="m-0 flex list-none flex-col gap-2 pl-0">
				<TypographyText as="li">
						На начальном этапе открытия офиса мы рекомендуем вам лично участвовать во всех процессах, поэтому
						предлагаем нанимать <strong>не более одного</strong> дополнительного сотрудника.
				</TypographyText>
				<TypographyText as="li">
						Для эффективной работы <strong>офиса в ТЦ и БЦ</strong> площадью
						до 25м<sup class="text-[0.62em] leading-none">2</sup> мы рекомендуем нанять <strong>1-2 сотрудников</strong>.
				</TypographyText>
				<TypographyText as="li">
						Для успешного функционирования <strong>среднего офиса стрит-ритейла</strong> площадью 30м<sup
							class="text-[0.62em] leading-none">2</sup> мы рекомендуем нанимать
						<strong>от 2х до 3х сотрудников</strong>.
				</TypographyText>
				<TypographyText as="li">
						Для <strong>большого офиса</strong> площадью от 40 до 70м<sup class="text-[0.62em] leading-none">2</sup> мы
						рекомендуем нанимать
						<strong>от 3х до 4х сотрудников</strong>.
				</TypographyText>
			</ul>
		</template>
	</CalculatorStep>
</template>
