<script setup>
import Navigation from "./Navigation.vue";
import { useCalculatorContext } from '../composables/calculatorContext.js';
import { formatDigits, parseDigits } from '../utils/formatters.js';

const { isCurrentStepValid, nextStep, params } = useCalculatorContext();
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
                <h2>Давайте определим вашу финансовую цель</h2>
                <div class="input-container">
                    <h3>Когда я буду зарабатывать в месяц</h3>
                    <el-input class="money" v-model="params.wanted_price_per_month" clearable
                              :parser="parseDigits" :formatter="formatDigits" @keyup.enter="commit" autofocus>
                        <template #append><span>₽</span></template>
                    </el-input>
                </div>
            </div>
            <Navigation />
        </div>
        <div class="franch-calc-container__part right"></div>
    </div>
</template>

<style scoped lang="scss">
.input-container {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;

    h3 {
        margin: 0;
    }
}

.franch-calc-container__part.right {
    background: url("https://b2ccdn.coral.ru/content/franch-calculator/hand.png") #e1f3fc;
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: contain;
}
</style>
