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
                <h2>Сколько сотрудников вы планируете нанять дополнительно?</h2>
                <div class="input-container">
                    <el-input class="people" v-model="params.personal" clearable
                              :parser="parseDigits" :formatter="formatDigits" autofocus
                              @keyup.enter="commit">
                        <template #append><span>чел.</span></template>
                    </el-input>
                </div>
            </div>
            <Navigation />
        </div>
        <div class="franch-calc-container__part right">
            <ul>
                <li>На начальном этапе открытия офиса мы рекомендуем вам лично участвовать во всех процессах, поэтому
                    предлагаем нанимать <strong>не более одного</strong> дополнительного сотрудника.
                </li>
                <li>Для эффективной работы <strong>офиса в ТЦ и БЦ</strong> площадью
                    до 25 м<sup>2</sup> мы рекомендуем нанять <strong>1-2 сотрудников</strong>.</li>
                <li>Для успешного функционирования <strong>среднего офиса стрит-ритейла</strong> площадью 30 м<sup>2</sup> мы рекомендуем нанимать
                    <strong>от 2х до 3х сотрудников</strong>.
                </li>
                <li>Для <strong>большого офиса</strong> площадью от 40 до 70 м<sup>2</sup> мы рекомендуем нанимать
                    <strong>от 3х до 4х сотрудников</strong>.</li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
.input-container {
    display: flex;
    align-items: center;
    gap: 48px;

    h3 {
        margin: 0;
    }
}
</style>
