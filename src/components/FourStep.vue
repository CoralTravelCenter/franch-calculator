<script setup>
import Navigation from './Navigation.vue';
import {ref, inject, onMounted} from "vue";

const isDisabled = ref(false);
const params = inject('params');
const inputValue = inject('input_filled');
onMounted(() => {
	(params.value.rent_type.length !== 0) ? inputValue.value = true : inputValue.value = false;
})
</script>

<template>
	<div class="franch-calc-container">
		<div class="franch-calc-container__part left">
			<div class="content">
				<h2>Стоимость аренды моего будущего турагентства</h2>
				<div class="input-container">
					<div id="v-model-radiobutton">
						<label>
							<input class="visually-hidden" type="radio" name="type" value="TC" v-model="params.rent_type"
										 @change='inputValue = true'
										 :disabled="isDisabled"/>
							<span class="custom-radio">Торговый центр</span>
						</label>
						<label>
							<input class="visually-hidden" type="radio" name="type" value="BC" v-model="params.rent_type"
										 @change='inputValue = true'
										 :disabled="isDisabled"/>
							<span class="custom-radio">Бизнес-центр</span>
						</label>
						<label>
							<input class="visually-hidden" type="radio" name="type" value="SR" v-model="params.rent_type"
										 @change='inputValue = true'
										 :disabled="isDisabled"/>
							<span class="custom-radio">Стрит-ретейл</span>
						</label>
					</div>
					<div class="checkbox">
						<label>
							<input type="checkbox" class="visually-hidden" v-model="isDisabled">
							<span class="custom-checkbox"></span>
							Я знаю стоимость аренды
						</label>
						<input
							class="custom-text"
							type="text"
							placeholder="Введите сумму"
							maxlength="6"
							v-model="params.rent_price"
							:disabled="!isDisabled">
					</div>
				</div>
			</div>
			<Navigation/>
		</div>
		<div class="franch-calc-container__part right">
			<p>
				Средняя стоимость аренды офиса в 15-20 м2 в вашем городе составит:
			</p>
			<p>
				<strong>
					ТЦ — Х рублей<br>
					БЦ — Y рублей<br>
					Стрит-ретейл — Z рублей
				</strong>
			</p>
		</div>
	</div>
</template>

<style scoped lang="scss">
.input-container {
	flex-wrap: wrap
}
</style>