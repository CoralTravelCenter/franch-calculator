<script setup>
import Navigation from "./Navigation.vue";
import { computed, ref, watch } from "vue";

import { rent } from "../calculator.js";
import { useCalculatorContext } from '../composables/calculatorContext.js';
import { formatCurrency, formatDigits, parseDigits } from '../utils/formatters.js';

const { isCurrentStepValid, nextStep, params } = useCalculatorContext();
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
        params.value.rent_type = '';
    }
});

watch(() => params.value.rent_type, (rentType) => {
    if (rentType) {
        useCustomRent.value = false;
        params.value.rent_price = '';
    }
});

function commit() {
    if (isCurrentStepValid.value) {
        nextStep();
    }
}

</script>

<template>
    <div class="franch-calc-container">
        <div class="franch-calc-container__part left">
            <div class="content">
                <h2>Стоимость аренды моего будущего турагентства</h2>
                <div class="input-container">
                    <div id="v-model-radiobutton">
                        <label>
                            <input
                                class="visually-hidden"
                                type="radio"
                                name="type"
                                value="TC"
                                v-model="params.rent_type"
                            />
                            <span class="custom-radio">Торговый центр</span>
                        </label>
                        <label>
                            <input
                                class="visually-hidden"
                                type="radio"
                                name="type"
                                value="BC"
                                v-model="params.rent_type"
                            />
                            <span class="custom-radio">Бизнес-центр</span>
                        </label>
                        <label>
                            <input
                                class="visually-hidden"
                                type="radio"
                                name="type"
                                value="SR"
                                v-model="params.rent_type"
                            />
                            <span class="custom-radio">Стрит-ретейл</span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                class="visually-hidden"
                                v-model="useCustomRent"
                            />
                            <span class="custom-checkbox"></span>
                            Я знаю стоимость аренды
                        </label>
                        <el-input class="money" v-model="params.rent_price" clearable
                                  :parser="parseDigits" :formatter="formatDigits" :disabled="!useCustomRent" @keyup.enter="commit">
                            <template #append><span>₽</span></template>
                        </el-input>

                    </div>
                </div>
            </div>
            <Navigation />
        </div>
        <div class="franch-calc-container__part right">
            <p>
                Средняя стоимость аренды офиса в 15-20 м2 в вашем городе
                составит:
            </p>
            <p>
                <strong>
                    ТЦ &mdash; {{ formatCurrency(rent_cost_TC) }}
                    <br />
                    БЦ &mdash; {{ formatCurrency(rent_cost_BC) }}
                    <br />
                    Стрит-ретейл &mdash; {{ formatCurrency(rent_cost_SR) }}
                </strong>
            </p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.input-container {
    flex-wrap: wrap;
}
</style>
