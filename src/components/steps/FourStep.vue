<script setup>
import CalculatorStep from '../CalculatorStep.vue';
import {CircleXIcon} from '@lucide/vue';
import {computed, ref, watch} from "vue";

import {rent} from "@/calculator.js";
import {useCalculatorContext} from '@/composables/calculatorContext.js';
import {formatCurrency, formatDigits, parseDigits} from '@/utils/formatters.js';
import {Button} from '@/components/ui/button/index.js';
import {Checkbox} from '@/components/ui/checkbox/index.js';
import {InputGroup, InputGroupAddon, InputGroupInput} from '@/components/ui/input-group/index.js';
import {ToggleGroup, ToggleGroupItem} from '@/components/ui/toggle-group/index.js';
import {TypographyHeading, TypographyText} from '@/components/ui/typography/index.js';

const {isCurrentStepValid, nextStep, params, updateParam} = useCalculatorContext();
const useCustomRent = ref(Boolean(params.value.rent_price));

const rent_cost_TC = computed(() => {
	return rent.TC[params.value.city];
});
const rent_cost_BC = computed(() => {
	return rent.BC[params.value.city];
});
const rent_cost_SR = computed(() => {
	return rent.SR[params.value.city];
});

watch(useCustomRent, (isEnabled) => {
	if (isEnabled) {
		updateParam('rent_type', '');
	}
});

watch(() => params.value.rent_type, (rentType) => {
	if (rentType) {
		useCustomRent.value = false;
		updateParam('rent_price', '');
	}
});

function commit() {
	if (isCurrentStepValid.value) {
		nextStep();
	}
}

function clearRent(event) {
	updateParam('rent_price', '');
	event.currentTarget.closest('[data-slot="input-group"]')?.querySelector('input')?.focus();
}

</script>

<template>
	<CalculatorStep>
		<TypographyHeading>Стоимость аренды моего будущего турагентства</TypographyHeading>
		<div class="input-container">
			<ToggleGroup type="single" variant="outline" :spacing="2"
									 :model-value="params.rent_type"
									 @update:model-value="updateParam('rent_type', $event || '')">
				<ToggleGroupItem class="rounded-[30px] px-5" value="TC"><TypographyText as="span">Торговый центр</TypographyText></ToggleGroupItem>
				<ToggleGroupItem class="rounded-[30px] px-5" value="BC"><TypographyText as="span">Бизнес-центр</TypographyText></ToggleGroupItem>
				<ToggleGroupItem class="rounded-[30px] px-5" value="SR"><TypographyText as="span">Стрит-ретейл</TypographyText></ToggleGroupItem>
			</ToggleGroup>
			<div class="checkbox">
				<label for="custom-rent">
					<Checkbox id="custom-rent" v-model="useCustomRent"/>
					<TypographyText as="span">Я знаю стоимость аренды</TypographyText>
				</label>
				<InputGroup class="w-48">
					<InputGroupInput :model-value="params.rent_price"
													 @update:model-value="updateParam('rent_price', $event)"
													 :parser="parseDigits" :formatter="formatDigits" :disabled="!useCustomRent"
													 @keyup.enter="commit"/>
					<InputGroupAddon align="inline-end" class="h-full gap-1 p-0">
						<Button
								v-if="params.rent_price"
								type="button"
								variant="ghost"
								size="icon-xs"
								class="min-h-0 text-muted-foreground hover:bg-transparent hover:text-foreground"
								aria-label="Очистить поле"
								title="Очистить поле"
								@click="clearRent"
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
		</div>
		<template #aside>
			<TypographyText>
				Средняя стоимость аренды офиса в 15-20 м2 в вашем городе
				составит:
			</TypographyText>
			<ul class="m-0 flex list-none flex-col gap-2 p-0">
				<TypographyText as="li" class="font-semibold">ТЦ - {{ formatCurrency(rent_cost_TC) }}</TypographyText>
				<TypographyText as="li" class="font-semibold">БЦ - {{ formatCurrency(rent_cost_BC) }}</TypographyText>
				<TypographyText as="li" class="font-semibold">Стрит-ретейл - {{ formatCurrency(rent_cost_SR) }}</TypographyText>
			</ul>
		</template>
	</CalculatorStep>
</template>
