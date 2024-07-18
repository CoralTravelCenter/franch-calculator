<script setup>
import Navigation from "./Navigation.vue";
import { inject, onMounted, watchEffect } from "vue";

const params = inject("params");
const inputValue = inject("input_filled");

function parsePeople(input) {
    return input.replace(/\D/g, '');
}

function formatPeople(input) {
    return input.replace(/\D/g, '').split('').reverse().join('').replace(/\d{3}(?=.)/g, "$& ").split('').reverse().join('');
}

onMounted(() => {
    inputValue.value = Number(params.value.personal) > 0;
});

watchEffect(() => {
    inputValue.value = !!params.value.personal.length && Number(params.value.personal) > 0;
});

const advance = inject('advance');
function commit() {
    inputValue.value && advance();
}


</script>

<template>
    <div class="franch-calc-container">
        <div class="franch-calc-container__part left">
            <div class="content">
                <h2>Сколько сотрудников вы планируете нанять?</h2>
                <div class="input-container">

                    <el-input class="people" v-model="params.personal" clearable
                              :parser="parsePeople" :formatter="formatPeople" @keyup.enter="commit">
                        <template #append><span>чел.</span></template>
                    </el-input>
                </div>
            </div>
            <Navigation />
        </div>
        <div class="franch-calc-container__part right">
            <p>
                На начальном этапе открытия офиса мы рекомендуем нанимать не
                более 1 сотрудника. Для эффективной работы
                <strong>офиса в ТЦ и БЦ</strong> площадью до 25 м2 мы
                рекомендуем нанять 1-2 сотрудника. Для успешного
                функционирования
                <strong>среднего офиса стрит-ритейла</strong> площадь 30 м2 мы
                рекомендуем нанимать от 2х до 3х сотрудников. Для
                <strong>большого офиса</strong> площадью от 40 до 70 м2 мы
                рекомендуем нанимать от 3х до 4х сотрудников.
            </p>
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
