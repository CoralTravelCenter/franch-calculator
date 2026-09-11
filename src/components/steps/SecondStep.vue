<script setup>
import CalculatorStep from '../CalculatorStep.vue';
import {CircleXIcon} from '@lucide/vue';
import {useCalculatorContext} from '@/composables/calculatorContext.js';
import {formatDigits, parseDigits} from '@/utils/formatters.js';
import {Button} from '@/components/ui/button/index.js';
import {InputGroup, InputGroupAddon, InputGroupInput} from '@/components/ui/input-group/index.js';
import {TypographyHeading, TypographyText} from '@/components/ui/typography/index.js';

const {isCurrentStepValid, nextStep, params, updateParam} = useCalculatorContext();

function commit() {
	if (isCurrentStepValid.value) {
		nextStep();
	}
}

function clearValue(event) {
	updateParam('wanted_price_per_month', '');
	event.currentTarget.closest('[data-slot="input-group"]')?.querySelector('input')?.focus();
}
</script>

<template>
	<CalculatorStep
			aside-class="bg-[url('https://b2ccdn.coral.ru/content/franch-calculator/hand.png')] bg-contain bg-no-repeat bg-position-[100%_50%]"
	>
		<TypographyHeading>Давайте определим вашу финансовую цель</TypographyHeading>
		<div class="input-container">
			<TypographyText as="label" for="wanted-income" variant="lead">Когда я буду зарабатывать в месяц
			</TypographyText>
			<InputGroup class="w-48">
				<InputGroupInput id="wanted-income" :model-value="params.wanted_price_per_month"
												 @update:model-value="updateParam('wanted_price_per_month', $event)"
												 :parser="parseDigits" :formatter="formatDigits" @keyup.enter="commit" autofocus/>
				<InputGroupAddon align="inline-end" class="h-full gap-1 p-0">
					<Button
							v-if="params.wanted_price_per_month"
							type="button"
							variant="ghost"
							size="icon-xs"
							class="min-h-0 text-muted-foreground hover:bg-transparent hover:text-foreground"
							aria-label="Очистить поле"
							title="Очистить поле"
							@click="clearValue"
					>
						<CircleXIcon data-icon="inline-start"/>
					</Button>
					<TypographyText as="span"
								class="flex h-full items-center rounded-r-[11px] border-l border-border bg-muted px-3 text-foreground">
                                ₽
							</TypographyText>
				</InputGroupAddon>
			</InputGroup>
		</div>
	</CalculatorStep>
</template>

<style scoped lang="scss">
.input-container {
	display: grid;
	grid-template-columns: max-content auto;
	align-items: center;
	gap: 24px;

	@media (max-width: 768px) {
		grid-template-columns: minmax(0, 1fr);
	}
}

</style>
