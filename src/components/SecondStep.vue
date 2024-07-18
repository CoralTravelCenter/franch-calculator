<script setup>
import Navigation from "./Navigation.vue";
import { inject, onMounted, watch } from "vue";

const params = inject("params");
const inputValue = inject("input_filled");

function parseMoney(input) {
    return input.replace(/\D/g, '');
}

function formatMoney(input) {
    return input.replace(/\D/g, '').split('').reverse().join('').replace(/\d{3}(?=.)/g, "$& ").split('').reverse().join('');
}

watch(() => params.value.wanted_price_per_month, (newValue, oldValue) => {
    inputValue.value = Number(newValue) > 0;
});

onMounted(() => {
    params.value.wanted_price_per_month.length !== 0
        ? (inputValue.value = true)
        : (inputValue.value = false);
});

</script>

<template>
    <div class="franch-calc-container">
        <div class="franch-calc-container__part left">
            <div class="content">
                <h2>Давайте определим вашу финансовую цель</h2>
                <div class="input-container">
                    <h3>Когда я буду зарабатывать в месяц</h3>
                    <el-input class="money" v-model="params.wanted_price_per_month" clearable
                              :parser="parseMoney" :formatter="formatMoney">
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
    background: url("https://b2ccdn.coral.ru/content/franch-calculator/hand.png"),
        #e1f3fc;
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-size: contain;
}
</style>
