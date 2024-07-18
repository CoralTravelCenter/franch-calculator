<script setup>
import Navigation from "./Navigation.vue";
import { ref, inject, onMounted, computed, watchEffect } from "vue";

import { rent } from "../calculator.js";

const isDisabled = ref(false);
const params = inject("params");
const inputValue = inject("input_filled");

const rent_cost_TC = computed(() => {
    return rent.TC[params.value.city];
});
const rent_cost_BC = computed(() => {
    return rent.BC[params.value.city];
});
const rent_cost_SR = computed(() => {
    return rent.SR[params.value.city];
});

function parseMoney(input) {
    return input.replace(/\D/g, '');
}

function formatMoney(input) {
    return input.replace(/\D/g, '').split('').reverse().join('').replace(/\d{3}(?=.)/g, "$& ").split('').reverse().join('');
}

watchEffect(() => {
    if (isDisabled.value) {
        params.value.rent_type = '';
    }
});

watchEffect(() => {
    if (params.value.rent_type) {
        isDisabled.value = false;
        params.value.rent_price = '';
    }
});

onMounted(() => inputValue.value = !!params.value.rent_type);

watchEffect(() => {
    inputValue.value = !!params.value.rent_type || Number(params.value.rent_price) > 0;
});

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
                                @change="inputValue = true"
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
                                @change="inputValue = true"
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
                                @change="inputValue = true"
                            />
                            <span class="custom-radio">Стрит-ретейл</span>
                        </label>
                    </div>
                    <div class="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                class="visually-hidden"
                                v-model="isDisabled"
                            />
                            <span class="custom-checkbox"></span>
                            Я знаю стоимость аренды
                        </label>
                        <el-input class="money" v-model="params.rent_price" clearable
                                  :parser="parseMoney" :formatter="formatMoney" :disabled="!isDisabled">
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
                    ТЦ — {{ rent_cost_TC }} рублей<br />
                    БЦ — {{ rent_cost_BC }} рублей<br />
                    Стрит-ретейл — {{ rent_cost_SR }} рублей
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
