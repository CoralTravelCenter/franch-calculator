<script setup>
import Navigation from './Navigation.vue';
import {inject, onMounted} from "vue";

const params = inject('params');
const inputValue = inject('input_filled');
onMounted(() => {
	(params.value.city.length !== 0) ? inputValue.value = true : inputValue.value = false;
})

</script>

<template>
	<div class="franch-calc-container">
		<div class="franch-calc-container__part left">
			<div class="content">
				<h2>В каком городе планируете открывать турагентство?</h2>
				<div class="input-container">
					<div id="v-model-radiobutton">
						<label>
							<input class="visually-hidden" type="radio" name="city" value="capital" v-model="params.city"
										 @change='inputValue = true'/>
							<span class="custom-radio">Москва, Санкт-Петербург, Екатеринбург</span>
						</label>
						<label>
							<input class="visually-hidden" type="radio" name="city" value="millionnik" v-model="params.city"
										 @change='inputValue = true'/>
							<span class="custom-radio">Город-миллионник</span>
						</label>
						<label>
							<input class="visually-hidden" type="radio" name="city" value="small" v-model="params.city"
										 @change='inputValue = true'/>
							<span class="custom-radio">Малый город</span>
						</label>
					</div>
				</div>
			</div>
			<Navigation/>
		</div>
		<div class="franch-calc-container__part right">
		</div>
	</div>
</template>

<style scoped lang="scss">
.franch-calc-container__part.right {
	background: url("https://b2ccdn.coral.ru/content/franch-calculator/map.png"), #E1F3FC;
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: contain;
}
</style>