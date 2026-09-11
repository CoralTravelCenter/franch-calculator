<script setup>
import CalculatorStep from '../CalculatorStep.vue';
import {useCalculatorContext} from '@/composables/calculatorContext.js';
import {ToggleGroup, ToggleGroupItem} from '@/components/ui/toggle-group/index.js';
import {TypographyHeading, TypographyText} from '@/components/ui/typography/index.js';

const {params, updateParam} = useCalculatorContext();
</script>

<template>
	<CalculatorStep
			aside-class="bg-[url('https://b2ccdn.coral.ru/content/franch-calculator/map.png')] bg-contain bg-center bg-no-repeat"
	>
		<TypographyHeading>В каком городе планируете открывать турагентство?</TypographyHeading>
		<div class="input-container">
			<ToggleGroup type="single" variant="outline" :spacing="2"
									 :model-value="params.city"
									 @update:model-value="updateParam('city', $event || '')">
				<ToggleGroupItem class="rounded-[30px] px-5" value="capital"><TypographyText as="span">Москва, Санкт-Петербург, Екатеринбург</TypographyText>
				</ToggleGroupItem>
				<ToggleGroupItem class="rounded-[30px] px-5" value="millionnik"><TypographyText as="span">Город-миллионник</TypographyText></ToggleGroupItem>
				<ToggleGroupItem class="rounded-[30px] px-5" value="small"><TypographyText as="span">Малый город</TypographyText></ToggleGroupItem>
			</ToggleGroup>
		</div>
	</CalculatorStep>
</template>
